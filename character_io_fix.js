// Simple script to ensure character IO functionality works properly

document.addEventListener('DOMContentLoaded', function() {
    console.log("Character IO fix loaded");
    
    // Ensure save character buttons work
    const saveButtons = document.querySelectorAll('.save-character-button, [onclick="saveCharacter()"]');
    saveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Save button clicked");
            saveCharacter();
        });
    });
    
    // Ensure load character input works
    const loadInput = document.getElementById('load-character-input');
    if (loadInput) {
        loadInput.addEventListener('change', function(e) {
            console.log("File selected for loading");
            loadCharacter(e);
        });
    } else {
        console.error("Could not find load-character-input element");
    }
});

// This will reassign any old references to new functions
function ensureProperFunctionReferences() {
    if (typeof window.originalSaveCharacter === 'undefined' && typeof saveCharacter === 'function') {
        window.originalSaveCharacter = saveCharacter;
    }
    
    if (typeof window.originalLoadCharacter === 'undefined' && typeof loadCharacter === 'function') {
        window.originalLoadCharacter = loadCharacter;
    }
}
