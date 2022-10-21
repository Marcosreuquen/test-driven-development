// The password is at least 8 characters long (?=.{8,}).
// The password has at least one uppercase letter (?=.*[A-Z]).
// The password has at least one lowercase letter (?=.*[a-z]).
// The password has at least one number (?=.*[0-9]).
// The password has at least one special character ([^A-Za-z0-9]).

const validatePassword = (str = "") => {
  const numbers = new RegExp("[0-9]{3,}");
  const lower = new RegExp("[a-z]{3,}");
  const upper = new RegExp("[A-Z]{3,}");
  const specialCh = new RegExp("[!@#$%^&*)(+=._-]{3,}");

  const validateNumbers = numbers.test(str);
  const validateLowers = lower.test(str);
  const validateUppers = upper.test(str);
  const validateSpecials = specialCh.test(str);
  const validateLength = str.length >= 8;

  return (
    validateNumbers &&
    validateLowers &&
    validateUppers &&
    validateSpecials &&
    validateLength
  );
};

module.exports = validatePassword;
