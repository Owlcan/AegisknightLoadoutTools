// Add this line inside the initFeatsUI function in script.js
// The issue is that the feats-select dropdown doesn't have an event listener for its change event
// We need to add one to properly call the previewFeat function when a feat is selected

// Add this to the initFeatsUI function
const featsSelect = document.getElementById('feats-select');
if (featsSelect) {
    featsSelect.addEventListener('change', previewFeat);
}
