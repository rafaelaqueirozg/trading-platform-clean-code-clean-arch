import { validateName } from "../src/validateName";

it.each([
  "John Doe",
  "Jane Smith",
  "Alice Johnson"
])("should test valid name %s", (name: string) => {
  const isValid = validateName(name);
  expect(isValid).toBe(true);
});

it.each([
  null,
  undefined,
  "John",
  "John123 Doe",
  "John Doe Smith"
])("should test invalid name %s", (name: any) => {
  const isValid = validateName(name);
  expect(isValid).toBe(false);
});