const dataNumbers = "0123456789";
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataSymbols = "~!@#$%^&*()-_=+[]{};:,.<>/?|";
const result = document.getElementById("result");

const generatePassword = () => {
  const lengthValue = document.getElementById("length").value;
  let data = [];
  let password = "";

  if (numbers.checked) data.push(...dataNumbers);
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des options");
    return;
  } else {
    for (let i = 0; i < lengthValue; i++) {
      password += data[Math.floor(Math.random() * data.length)];
    }
  }

  result.textContent = password;
};

btnSubmit.addEventListener("click", generatePassword);
