import { validatePassword } from "../src/validatePassword";

it.each([
  "Password1",
  "Abcdefg1",
  "TestPass123"
])("should test valid password %s", (password: string) => {
  const isValid = validatePassword(password);
  expect(isValid).toBe(true);
});

it.each([
  null,
  undefined,
  "short",
  "noupper1",
  "NOLOWER1",
  "NoDigit"
])("should test invalid password %s", (password: any) => {
  const isValid = validatePassword(password);
  expect(isValid).toBe(false);
});