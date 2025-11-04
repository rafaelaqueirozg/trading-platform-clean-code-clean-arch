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

it("should make two deposits", () => {
  const account = Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asdQWE123")
  account.deposit("BTC", 1);
  account.deposit("BTC", 1);
  expect(account.getBalance("BTC")).toBe(2);
});

it("should make a withdrawal", () => {
  const account = Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asdQWE123")
  account.deposit("BTC", 1);
  account.withdraw("BTC", 1);
  expect(account.getBalance("BTC")).toBe(0);
});

it("should not deposit negative amounts", () => {
  const account = Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asdQWE123")
  expect(() => account.deposit("BTC", -1)).toThrow(new Error("Quantity must be positive"));
});

it("should not withdraw negative amounts", () => {
  const account = Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asdQWE123")
  expect(() => account.withdraw("BTC", -1)).toThrow(new Error("Quantity must be positive"));
});

it("should not withdraw if insufficient funds", () => {
  const account = Account.create("John Doe", "john.doe@gmail.com", "97456321558", "asdQWE123")
  account.deposit("BTC", 1);
  expect(() => account.withdraw("BTC", 2)).toThrow(new Error("Insufficient funds"));
});
