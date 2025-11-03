export function validatePassword(password: string) {
  if (!password) return false;
  return !!(password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/));
} 