import Account from "../src/domain/Account";

it("should create an account", () => {
  expect(Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asdQWE123")).toBeInstanceOf(Account);
});

it("should not create an account with invalid name", () => {
  expect(() => Account.create("John", "john.doe@gmail.com", "97456321558", "asdQWE123")).toThrow(new Error("Invalid name"));
});

it("should not create an account with invalid email", () => {
  expect(() => Account.create("John Doe", "john.doe@gmail", "97456321558", "asdQWE123")).toThrow(new Error("Invalid email"));
});

it("should not create an account with invalid document", () => {
  expect(() => Account.create("John Doe", "john.doe@gmail.com", "974563215", "asdQWE123")).toThrow(new Error("Invalid document"));
});

it("should not create an account with invalid password", () => {
  expect(() => Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asd")).toThrow(new Error("Invalid password"));
});
