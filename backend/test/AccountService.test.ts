import AccountService from "../src/AccountService";
import { AccountDAODatabase, AccountDAOMemory } from "../src/AccountDAO";

let accountService: AccountService;

beforeEach(() => {
  const accountDAO = new AccountDAODatabase();
  accountService = new AccountService(accountDAO);
});

it("should create an account", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWE123"
  }
  const outputSignup = await accountService.signup(input);
  expect(outputSignup.accountId).toBeDefined();
  const outputGetAccount = await accountService.getAccount(outputSignup.accountId);
  expect(outputGetAccount.name).toBe(input.name);
  expect(outputGetAccount.email).toBe(input.email);
  expect(outputGetAccount.document).toBe(input.document);
  expect(outputGetAccount.password).toBe(input.password);
});

it("should not create an account with invalid name", async () => {
  const input = {
    name: "John",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWE123"
  }
  await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid name"));
});

it("should not create an account with invalid email", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail",
    document: "97456321558",
    password: "asdQWE123"
  }
  await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid email"));
});

it("should not create an account with invalid document", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "974563215",
    password: "asdQWE123"
  }
  await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid document"));
});

it("should not create an account with invalid password", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWEasd"
  }
  await expect(() => accountService.signup(input)).rejects.toThrow(new Error("Invalid password"));
});

it("should create an account with spy", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWE123"
  }
  const saveSpy = jest.spyOn(AccountDAODatabase.prototype, "saveAccount");
  const getSpy = jest.spyOn(AccountDAODatabase.prototype, "getAccountById");
  const outputSignup = await accountService.signup(input);
  expect(outputSignup.accountId).toBeDefined();
  const outputGetAccount = await accountService.getAccount(outputSignup.accountId);
  expect(outputGetAccount.name).toBe(input.name);
  expect(outputGetAccount.email).toBe(input.email);
  expect(outputGetAccount.document).toBe(input.document);
  expect(outputGetAccount.password).toBe(input.password);
  expect(saveSpy).toHaveBeenCalledTimes(1);
  expect(getSpy).toHaveBeenCalledTimes(1);
  expect(getSpy).toHaveBeenCalledWith(outputSignup.accountId);
  saveSpy.mockRestore();
  getSpy.mockRestore();
});

