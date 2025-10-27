import { validateCpf } from "../src/validateCpf";

it.each([
  "97456321558",
  "71428793860",
  "87748248800"
])("should test valid cpf %s", (cpf: string) => {
  const isValid = validateCpf(cpf);
  expect(isValid).toBe(true);
});

it.each([
  null,
  undefined,
  "111111111111",
  "1111111111",
  "11111111111111"
])("should test invalid cpf %s", (cpf: any) => {
  const isValid = validateCpf(cpf);
  expect(isValid).toBe(false);
});