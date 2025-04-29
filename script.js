//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');
    
    // Focus the first input on page load
    inputs[0].focus();
    
    // Handle input and auto-focus next field
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            // Auto-advance to next field when a digit is entered
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            // Handle backspace to move to previous field
            if (e.key === 'Backspace') {
                if (input.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            }
            
            // Allow only numeric input
            if (e.key.length === 1 && !e.key.match(/[0-9]/)) {
                e.preventDefault();
            }
        });
    });
});