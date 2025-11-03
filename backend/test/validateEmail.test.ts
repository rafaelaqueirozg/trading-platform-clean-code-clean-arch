import { validateEmail } from "../src/validateEmail";

it.each([
  "test@example.com",
  "user@domain.org",
  "email@test.co.uk"
])("should test valid email %s", (email: string) => {
  const isValid = validateEmail(email);
  expect(isValid).toBe(true);
});

it.each([
  null,
  undefined,
  "invalid",
  "test@",
  "@example.com",
  "test@example"
])("should test invalid email %s", (email: any) => {
  const isValid = validateEmail(email);
  expect(isValid).toBe(false);
});