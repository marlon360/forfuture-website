/**
 * Save state to localStorage
 */
window.setState = function () {
	localStorage.setItem('for-future', JSON.stringify(window.state));
};

/**
 * Get saved state from localStorage (if it exists)
 * @return {Object} The data, or an empty object
 */
window.getState = function () {
	var saved = localStorage.getItem('for-future');
	if (saved) {
		return JSON.parse(saved);
	}
	return {};
};

// Get the initial state on page load
window.state = window.getState();