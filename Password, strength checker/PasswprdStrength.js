document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('password-strength-text');
    const showPasswordCheckbox = document.getElementById('show-password');
    const checkPasswordButton = document.getElementById('check-password');
    passwordField.addEventListener('keyup', function() {
        const password = passwordField.value;
        const strength = checkPasswordStrength(password);
        updateStrengthBar(strength);
    });
    showPasswordCheckbox.addEventListener('change', function() {
        if (showPasswordCheckbox.checked) {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });
    checkPasswordButton.addEventListener('click', function() {
        const password = passwordField.value;
        const strength = checkPasswordStrength(password);
        updateStrengthBar(strength);
    });
    function checkPasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) {
            strength += 1;
        }
        if (/[a-z]/.test(password)) {
            strength += 1;
        }
        if (/[A-Z]/.test(password)) {
            strength += 1;
        }
        if (/[0-9]/.test(password)) {
            strength += 1;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            strength += 1;
        }
        return strength;
    }
    function updateStrengthBar(strength) {
        strengthBar.classList.remove('weak', 'medium', 'strong');
        strengthText.textContent = '';
        if (strength === 1) {
            strengthBar.classList.add('weak');
            strengthText.textContent = 'Weak';
        } else if (strength === 2 || strength === 3) {
            strengthBar.classList.add('medium');
            strengthText.textContent = 'Medium';
        } else if (strength === 4 || strength === 5) {
            strengthBar.classList.add('strong');
            strengthText.textContent = 'Strong';
        }
    }
});
