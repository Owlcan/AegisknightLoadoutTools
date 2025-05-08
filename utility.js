// Helper function to safely set value on an element
function safeSetElementValue(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.value = value || '';
    } else {
        console.warn(`Element with id '${id}' not found`);
    }
}

// Helper function to safely invoke a function if it exists
function safeInvoke(functionName, ...args) {
    if (typeof window[functionName] === 'function') {
        try {
            return window[functionName](...args);
        } catch (error) {
            console.error(`Error executing ${functionName}:`, error);
            return null;
        }
    } else {
        console.warn(`Function '${functionName}' not found`);
        return null;
    }
}

// Initialize global variables safely if they don't exist
function ensureGlobalVariable(variableName, defaultValue) {
    if (typeof window[variableName] === 'undefined') {
        console.log(`Initializing global variable '${variableName}'`);
        window[variableName] = defaultValue;
    }
    return window[variableName];
}
