// Functions for saving and loading character data

// Function to show notification
function showNotification(message, duration = 3000) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        document.body.removeChild(existingNotification);
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Helper function to get select value with a fallback
function getSelectValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : "";
}

// Function to save character data to a JSON file
function saveCharacter() {
    try {
        // Validate required fields
        const name = document.getElementById('character-name').value.trim();
        const race = document.getElementById('race-select').value;
        
        if (!name) {
            alert("Please enter a character name before saving.");
            return;
        }
        
        if (!race) {
            alert("Please select a race before saving.");
            return;
        }
        
        // Gather all character data
        const characterData = {
            // Version for future compatibility
            version: "1.0",
            
            // Character info
            name: document.getElementById('character-name').value,
            race: document.getElementById('race-select').value,
            subrace: document.getElementById('subrace-select').value,
            
            // Appearance
            characterImageUrl: document.getElementById('character-image-url').value,
            hairColor: document.getElementById('hair-color').value,
            eyeColor: document.getElementById('eye-color').value,
            skinColor: document.getElementById('skin-color').value,
            notableFeatures: document.getElementById('notable-features').value,
            
            // Ability scores
            strength: document.getElementById('strength').value,
            dexterity: document.getElementById('dexterity').value,
            constitution: document.getElementById('constitution').value,
            intelligence: document.getElementById('intelligence').value,
            wisdom: document.getElementById('wisdom').value,
            charisma: document.getElementById('charisma').value,
            
            // Armor selections
            helmet: getSelectValue('helmet-select'),
            pauldrons: getSelectValue('pauldrons-select'),
            chest: getSelectValue('chest-select'),
            arms: getSelectValue('arms-select'),
            boots: getSelectValue('boots-select'),
            raiment: getSelectValue('raiment-select'),
            
            // Background & Feats
            background: document.getElementById('background').value,
            backgroundFeat: document.getElementById('background-feat').value,
            
            // Weapons
            primaryWeapon: getSelectValue('primary-weapon-select'),
            primaryWeaponLargeSize: document.getElementById('primary-large-size').checked,
            secondaryWeapon: getSelectValue('secondary-weapon-select'),
            secondaryWeaponLargeSize: document.getElementById('secondary-large-size').checked,
            
            // Save current date/time
            savedOn: new Date().toISOString()
        };
        
        // Convert the data to a JSON string
        const jsonString = JSON.stringify(characterData, null, 2);
        
        // Create a blob with the JSON data
        const blob = new Blob([jsonString], { type: 'application/json' });
        
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);
        
        // Create a temporary download link
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        
        // Set the filename using the character name, or a default if no name is provided
        const characterName = characterData.name.trim() || 'aegisknight';
        downloadLink.download = `${characterName.replace(/\s+/g, '_')}_character.json`;
        
        // Add the link to the document and click it
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        // Clean up
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        
        // Show notification
        showNotification(`Character "${characterData.name || 'Unnamed'}" saved successfully!`);
    } catch (error) {
        console.error("Error saving character:", error);
        alert(`Error saving character: ${error.message}`);
    }
}

// Function to load character data from a JSON file
function loadCharacter(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check if user has unsaved changes
    const characterName = document.getElementById('character-name').value.trim();
    if (characterName) {
        if (!confirm(`You are about to load a character which will replace your current character "${characterName}". Any unsaved changes will be lost. Continue?`)) {
            // Reset the file input so the same file can be loaded again later
            event.target.value = '';
            return;
        }
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const characterData = JSON.parse(e.target.result);
            
            // Populate character info
            document.getElementById('character-name').value = characterData.name || '';            document.getElementById('race-select').value = characterData.race || '';
            updateSubraceOptions();
            document.getElementById('subrace-select').value = characterData.subrace || '';
            displayRaceTraits();
            
            // Populate appearance
            document.getElementById('character-image-url').value = characterData.characterImageUrl || '';
            document.getElementById('hair-color').value = characterData.hairColor || '';
            document.getElementById('eye-color').value = characterData.eyeColor || '';
            document.getElementById('skin-color').value = characterData.skinColor || '';
            document.getElementById('notable-features').value = characterData.notableFeatures || '';
            
            // Populate ability scores
            document.getElementById('strength').value = characterData.strength || '10';
            document.getElementById('dexterity').value = characterData.dexterity || '10';
            document.getElementById('constitution').value = characterData.constitution || '10';
            document.getElementById('intelligence').value = characterData.intelligence || '10';
            document.getElementById('wisdom').value = characterData.wisdom || '10';
            document.getElementById('charisma').value = characterData.charisma || '10';
            
            // Update ability score modifiers display
            updateAbilityScoreModifiers();
              // Populate armor selections
            document.getElementById('helmet-select').value = characterData.helmet || '';
            document.getElementById('pauldrons-select').value = characterData.pauldrons || '';
            document.getElementById('chest-select').value = characterData.chest || '';
            document.getElementById('arms-select').value = characterData.arms || '';
            document.getElementById('boots-select').value = characterData.boots || '';
            document.getElementById('raiment-select').value = characterData.raiment || '';            // Update armor info displays
            try {
                if (characterData.helmet) updateArmorInfo('helmet');
                if (characterData.pauldrons) updateArmorInfo('pauldrons');
                if (characterData.chest) updateArmorInfo('chest');
                if (characterData.arms) updateArmorInfo('arms');
                if (characterData.boots) updateArmorInfo('boots');
                if (characterData.raiment) updateArmorInfo('raiment');
                  // Update cell charges display
                if (typeof updateCellChargesDisplay === 'function') {
                    // First make sure the bonusCellCharges is calculated properly
                    if (typeof calculateCellCharges === 'function') {
                        calculateCellCharges();
                    }
                    updateCellChargesDisplay();
                }
                
                // Update selected feats UI if applicable
                if (typeof updateSelectedFeatsUI === 'function') {
                    updateSelectedFeatsUI();
                }
            } catch (e) {
                console.error("Error updating displays:", e);
            }
            
            // Populate background & feats
            document.getElementById('background').value = characterData.background || '';
            document.getElementById('background-feat').value = characterData.backgroundFeat || '';
            
            // Populate weapons
            document.getElementById('primary-weapon-select').value = characterData.primaryWeapon || '';
            document.getElementById('primary-large-size').checked = characterData.primaryWeaponLargeSize || false;
            document.getElementById('secondary-weapon-select').value = characterData.secondaryWeapon || '';
            document.getElementById('secondary-large-size').checked = characterData.secondaryWeaponLargeSize || false;
            updateWeaponInfo('primary');
            updateWeaponInfo('secondary');
              // Show notification
            showNotification(`Character "${characterData.name || 'Unnamed'}" loaded successfully!`);
            
            // Show saved date if available
            if (characterData.savedOn) {
                try {
                    const savedDate = new Date(characterData.savedOn);
                    const formattedDate = savedDate.toLocaleString();
                    console.log(`Character was saved on: ${formattedDate}`);
                    // Show a second notification with the save date
                    setTimeout(() => {
                        showNotification(`Character was saved on: ${formattedDate}`, 4000);
                    }, 1000);
                } catch (e) {
                    console.error("Error parsing save date:", e);
                }
            }
            
            // Ask to finalize
            if (confirm(`Do you want to finalize the loadout for "${characterData.name || 'Unnamed'}" now?`)) {
                finalizeLoadout();
            }
            
        } catch (error) {
            console.error('Error loading character:', error);
            alert('There was an error loading the character file. Please make sure it is a valid JSON file.');
        }
    };
    
    reader.onerror = function() {
        alert('Error reading the file.');
    };    reader.readAsText(file);
}

// Helper function to calculate ability modifiers
function getAbilityModifier(score) {
    if (!score || isNaN(parseInt(score))) return 0;
    return Math.floor((parseInt(score) - 10) / 2);
}

// Helper function to ensure cell charges are updated correctly
function forceCellChargesUpdate() {
    if (typeof armorData === 'undefined') {
        console.error("armorData is not defined, cannot update cell charges");
        return;
    }
    
    const raimentSelect = document.getElementById('raiment-select');
    if (!raimentSelect) {
        console.error("Raiment select element not found");
        return;
    }
    
    const selectedRaiment = raimentSelect.value;
    if (!selectedRaiment) {
        console.log("No raiment selected");
        return;
    }
    
    const raimentData = armorData[selectedRaiment];
    if (!raimentData) {
        console.error(`Raiment ${selectedRaiment} not found in armor data`);
        return;
    }
    
    const bonusCellCharges = raimentData.bonusCellCharges || 0;
    console.log(`Raiment ${selectedRaiment} provides ${bonusCellCharges} bonus cell charges`);
    
    // Calculate the cell charges and update the display
    if (typeof calculateCellCharges === 'function' && typeof updateCellChargesDisplay === 'function') {
        const chargesInfo = calculateCellCharges();
        console.log("Cell charges calculated:", chargesInfo);
        
        // Manually update the display as a fallback
        const cellChargesDisplay = document.getElementById('cell-charges-display');
        const batteryLevel = document.getElementById('battery-level');
        
        if (cellChargesDisplay) {
            cellChargesDisplay.textContent = `${chargesInfo.total} (${chargesInfo.base}+${chargesInfo.bonus})`;
            console.log("Cell charges display updated manually:", cellChargesDisplay.textContent);
        }
        
        if (batteryLevel) {
            // Calculate percentage for the battery visual (cap at 100%)
            const maxCapacity = 20; // Visual reference point
            const batteryPercentage = Math.min((chargesInfo.total / maxCapacity) * 100, 100);
            batteryLevel.style.width = `${batteryPercentage}%`;
            console.log("Battery level updated:", batteryPercentage + "%");
        }
        
        // Now call the main update function
        updateCellChargesDisplay();
    } else {
        console.error("Required functions not available");
    }
}

// Function to check if loaded character has all expected data
function checkCharacterCompleteness(characterData) {
    const missingFields = [];
    
    // Check essential fields
    if (!characterData.name || characterData.name.trim() === '') missingFields.push('Character Name');
    if (!characterData.race) missingFields.push('Race');
    
    // Check equipment
    let equipmentCount = 0;
    if (characterData.helmet) equipmentCount++;
    if (characterData.pauldrons) equipmentCount++;
    if (characterData.chest) equipmentCount++;
    if (characterData.arms) equipmentCount++;
    if (characterData.boots) equipmentCount++;
    
    if (equipmentCount === 0) missingFields.push('Armor Equipment');
    
    // Check weapons
    if (!characterData.primaryWeapon && !characterData.secondaryWeapon) 
        missingFields.push('Weapons');
    
    // Show warning if there are missing fields
    if (missingFields.length > 0) {
        const warningMessage = `Warning: Some character data may be incomplete. Missing: ${missingFields.join(', ')}`;
        console.warn(warningMessage);
        showNotification(warningMessage, 5000);
    }
}

// Add event listener to load character input
document.addEventListener('DOMContentLoaded', function() {
    const loadCharacterInput = document.getElementById('load-character-input');
    if (loadCharacterInput) {
        loadCharacterInput.addEventListener('change', loadCharacter);
    }
});

// Function to update all ability score modifiers display
function updateAbilityScoreModifiers() {
    const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    
    abilities.forEach(ability => {
        const scoreElement = document.getElementById(ability);
        const modifierElement = document.getElementById(`${ability}-modifier`);
        
        if (scoreElement && modifierElement) {
            try {
                const score = parseInt(scoreElement.value) || 10;
                const modifier = getAbilityModifier(score);
                const modifierSign = modifier >= 0 ? '+' : '';
                
                modifierElement.textContent = `${modifierSign}${modifier}`;
            } catch (e) {
                console.error(`Error updating ${ability} modifier:`, e);
            }
        }
    });
}

// Add event listener for the load character input and ability score changes
document.addEventListener('DOMContentLoaded', function() {
    const loadCharacterInput = document.getElementById('load-character-input');
    if (loadCharacterInput) {
        loadCharacterInput.addEventListener('change', loadCharacter);
    }
    
    // Add ability score change listeners
    const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    
    abilities.forEach(ability => {
        const scoreElement = document.getElementById(ability);
        if (scoreElement) {
            scoreElement.addEventListener('change', function() {
                const modifierElement = document.getElementById(`${ability}-modifier`);
                if (modifierElement) {
                    const score = parseInt(this.value) || 10;
                    const modifier = getAbilityModifier(score);
                    const modifierSign = modifier >= 0 ? '+' : '';
                    
                    modifierElement.textContent = `${modifierSign}${modifier}`;
                }
            });
        }
    });
});
