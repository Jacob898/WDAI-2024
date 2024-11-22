document.getElementById('generatePassword').addEventListener('click', function () {
   const passwordMinLength = parseInt(document.getElementById('passwordMinLength').value,10);
   const passwordMaxLength = parseInt(document.getElementById('passwordMaxLength').value,10);
   const includeUppercase = document.getElementById('includeUppercase').checked;
   const includeSpecial = document.getElementById('includeSpecial').checked;

    if (isNaN(passwordMinLength) || isNaN(passwordMaxLength) || passwordMinLength > passwordMaxLength || passwordMinLength < 1) {
        alert("Podano nieprawidłowe wartości");
        return;
    }

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numbers = '0123456789';

    let passwordCharPool = lowercase + numbers;
    if (includeUppercase) {
        passwordCharPool += uppercase;
    }

    if (includeSpecial) {
        passwordCharPool += special;
    }

    const passwordLength= Math.floor(Math.random() * (passwordMaxLength - passwordMinLength+1)) + passwordMinLength;

    let password='';
    for (let i = 0; i < passwordLength; i++) {
        const randomId = Math.floor(Math.random() * passwordCharPool.length);
        password += passwordCharPool[randomId];
    }
    alert(`Hasło: ${password}` );

});