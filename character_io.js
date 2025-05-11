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

// Helper function to safely set value on an element
function safeSetElementValue(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.value = value || '';
    } else {
        console.warn(`Element with id '${id}' not found`);
    }
}

// Function to save character data to a JSON file
function saveCharacter() {
    try {
        console.log("Saving character...");
        
        // Validate required fields
        const name = document.getElementById('character-name')?.value.trim();
        const race = document.getElementById('race-select')?.value;
        
        if (!name) {
            alert("Please enter a character name before saving.");
            return;
        }
        
        if (!race) {
            alert("Please select a race before saving.");
            return;
        }
        
        // Initialize selected feats if not already defined
        if (typeof window.selectedFeats === 'undefined') {
            console.log("Initializing selectedFeats to empty array");
            window.selectedFeats = [];
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
            resistances: document.getElementById('resistances').value,

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
            raiment: getSelectValue('raiment-select'),            // Background & Feats
            background: document.getElementById('background').value,
            backgroundFeat: document.getElementById('background-feat').value,
            feats: window.selectedFeats || [], // Save the selected feats
            
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
    if (!file) {
        console.log("No file selected");
        return;
    }
    
    console.log(`Loading file: ${file.name}, size: ${file.size} bytes`);
    
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
            const content = e.target.result;
            if (!content) {
                throw new Error("File is empty");
            }
            
            console.log("File loaded successfully, parsing JSON...");
            
            let characterData;
            try {
                characterData = JSON.parse(content);
            } catch (parseError) {
                console.error("JSON parse error:", parseError);
                alert(`Error parsing JSON: ${parseError.message}. Make sure it's a valid character file.`);
                return;
            }
            
            // Check if character data exists and has expected structure
            if (!characterData) {
                throw new Error("No character data found in file");
            }
            
            console.log(`Loading character: ${characterData.name || 'Unnamed'}`);
            console.log(`Character version: ${characterData.version || 'unknown'}`);
            
            // Populate character info
            document.getElementById('character-name').value = characterData.name || '';
              // Make sure race select exists before setting value
            const raceSelect = document.getElementById('race-select');
            if (raceSelect) {
                raceSelect.value = characterData.race || '';
                // Only call update functions if they exist
                if (functionExists('updateSubraceOptions')) {
                    updateSubraceOptions();
                } else {
                    console.warn("updateSubraceOptions function not found");
                }
            } else {
                console.error("Race select element not found");
            }
            
            // Set subrace and display race traits if elements exist
            const subraceSelect = document.getElementById('subrace-select');
            if (subraceSelect) {
                subraceSelect.value = characterData.subrace || '';
            }
            
            if (functionExists('displayRaceTraits')) {
                displayRaceTraits();
            } else {
                console.warn("displayRaceTraits function not found");
            }
            
            // Populate appearance - safely handle missing elements
            safeSetElementValue('character-image-url', characterData.characterImageUrl);
            safeSetElementValue('hair-color', characterData.hairColor);
            safeSetElementValue('eye-color', characterData.eyeColor);
            safeSetElementValue('skin-color', characterData.skinColor);
            safeSetElementValue('notable-features', characterData.notableFeatures);
            safeSetElementValue('resistances', characterData.resistances || 'None');

            // Populate ability scores - safely handle missing elements
            safeSetElementValue('strength', characterData.strength || '10');
            safeSetElementValue('dexterity', characterData.dexterity || '10');
            safeSetElementValue('constitution', characterData.constitution || '10');
            safeSetElementValue('intelligence', characterData.intelligence || '10');
            safeSetElementValue('wisdom', characterData.wisdom || '10');
            safeSetElementValue('charisma', characterData.charisma || '10');
              // Update ability score modifiers display
            if (functionExists('updateAbilityScoreModifiers')) {
                updateAbilityScoreModifiers();
            } else {
                console.warn("updateAbilityScoreModifiers function not found");
            }
            
            // Populate armor selections - safely handle missing elements
            safeSetElementValue('helmet-select', characterData.helmet || '');
            safeSetElementValue('pauldrons-select', characterData.pauldrons || '');
            safeSetElementValue('chest-select', characterData.chest || '');
            safeSetElementValue('arms-select', characterData.arms || '');
            safeSetElementValue('boots-select', characterData.boots || '');
            safeSetElementValue('raiment-select', characterData.raiment || '');
              // Update armor info displays
            try {
                // Only call updateArmorInfo if it exists
                if (functionExists('updateArmorInfo')) {
                    if (characterData.helmet) updateArmorInfo('helmet');
                    if (characterData.pauldrons) updateArmorInfo('pauldrons');
                    if (characterData.chest) updateArmorInfo('chest');
                    if (characterData.arms) updateArmorInfo('arms');
                    if (characterData.boots) updateArmorInfo('boots');
                    if (characterData.raiment) updateArmorInfo('raiment');
                } else {
                    console.warn("updateArmorInfo function not found");
                }
                
                // Update cell charges display
                if (functionExists('updateCellChargesDisplay')) {
                    // First make sure the bonusCellCharges is calculated properly
                    if (functionExists('calculateCellCharges')) {
                        calculateCellCharges();
                    } else {
                        console.warn("calculateCellCharges function not found");
                    }
                    updateCellChargesDisplay();
                } else {
                    console.warn("updateCellChargesDisplay function not found");
                }
            } catch (e) {
                console.error("Error updating armor displays:", e);
            }
            
            // Populate background & feats - safely handle missing elements
            safeSetElementValue('background', characterData.background || '');
            safeSetElementValue('background-feat', characterData.backgroundFeat || '');
            
            // Handle feats data
            if (typeof window.selectedFeats !== 'undefined') {
                // Restore saved feats
                if (characterData.feats && Array.isArray(characterData.feats)) {
                    console.log(`Loading ${characterData.feats.length} feats from character data`);
                    window.selectedFeats = characterData.feats;
                    
                    // Log feat names for debugging
                    characterData.feats.forEach((feat, index) => {
                        console.log(`Feat ${index+1}: ${feat.name || 'Unknown'}`);
                    });
                } else {
                    console.log("No feats found in character data");
                    window.selectedFeats = [];
                }
                  // Update selected feats UI if applicable
                if (functionExists('updateSelectedFeatsUI')) {
                    updateSelectedFeatsUI();
                } else {
                    console.warn("updateSelectedFeatsUI function not found");
                }
            } else {
                console.warn("selectedFeats variable not found in global scope");
            }
            
            // Populate weapons - safely handle missing elements
            safeSetElementValue('primary-weapon-select', characterData.primaryWeapon || '');
            const primaryLargeSize = document.getElementById('primary-large-size');
            if (primaryLargeSize) {
                primaryLargeSize.checked = characterData.primaryWeaponLargeSize || false;
            }
            
            safeSetElementValue('secondary-weapon-select', characterData.secondaryWeapon || '');
            const secondaryLargeSize = document.getElementById('secondary-large-size');
            if (secondaryLargeSize) {
                secondaryLargeSize.checked = characterData.secondaryWeaponLargeSize || false;
            }
              // Update weapon info if function exists
            if (functionExists('updateWeaponInfo')) {
                try {
                    updateWeaponInfo('primary');
                    updateWeaponInfo('secondary');
                } catch (e) {
                    console.error("Error updating weapon info:", e);
                }
            } else {
                console.warn("updateWeaponInfo function not found");
            }
            
            // Verify character data completeness
            checkCharacterCompleteness(characterData);
            
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
              // Ask to finalize if the function exists
            if (characterData.name && typeof finalizeLoadout === 'function') {
                if (confirm(`Do you want to finalize the loadout for "${characterData.name || 'Unnamed'}" now?`)) {
                    try {
                        finalizeLoadout();
                    } catch (e) {
                        console.error("Error finalizing loadout:", e);
                        showNotification("Error finalizing loadout. See console for details.", 5000);
                    }
                }
            } else if (typeof finalizeLoadout !== 'function') {
                console.warn("finalizeLoadout function not found");
            }
        } catch (error) {
            console.error('Error loading character:', error);
            alert('There was an error loading the character file. Please make sure it is a valid JSON file.');
        }
    };
      reader.onerror = function(e) {
        console.error("FileReader error:", e);
        alert('Error reading the file. Please try again or use a different file.');
    };
    
    try {
        reader.readAsText(file);
        console.log("Started reading file as text");
    } catch (fileError) {
        console.error("Error reading file:", fileError);
        alert(`Error reading file: ${fileError.message}`);
    }
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

// Simple helper to check if a function exists
function functionExists(funcName) {
    return typeof window[funcName] === 'function';
}

// Single DOMContentLoaded event handler for all character_io.js setup
document.addEventListener('DOMContentLoaded', function() {
    console.log("Setting up character_io.js functionality");
    
    // Set up load character input
    const loadCharacterInput = document.getElementById('load-character-input');
    if (loadCharacterInput) {
        loadCharacterInput.addEventListener('change', loadCharacter);
        console.log("Load character event listener attached");
    } else {
        console.error("Could not find load-character-input element");
    }
    
    // Set up ability score change listeners
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
