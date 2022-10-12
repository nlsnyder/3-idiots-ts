const EMAIL_REGEX = new RegExp('^[A-Za-z0-9+_.-]+@.+$');

export const VALIDATE_REQUIRED = (val: string) => {
  if (val.length <= 0) {
    return false;
  }
  return true;
};

export const VALIDATE_EMAIL = (val: string) => {
  if (val.length <= 0) {
    return false;
  } else {
    return EMAIL_REGEX.test(val);
  }
};