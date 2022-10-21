const validatePassword = require("./index");
const { it, describe } = require("@jest/globals");

describe("validatePassword method test", () => {
  const valid = "!!!aaaZZZ000";
  //numeros
  it("Si la password no tiene numeros, debe devolver false", () => {
    const pass = "asdfagdfs";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la password tiene menos de tres numeros, debe devolver false", () => {
    const pass = "asdf1ag3dfs";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la password tiene tres numeros, debe devolver true", () => {
    const result = validatePassword(valid);
    expect(result).toBeTruthy();
  });
  //lowers
  it("Si la pass no tiene lower, debe devolver false", () => {
    const pass = "UIERNUIFER1423!!!";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene menos de tres lowers, debe devolver false", () => {
    const pass = "ASDFDASaa123!!!";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene al menos 3 lowers, debe devolver false", () => {
    const result = validatePassword(valid);
    expect(result).toBeTruthy();
  });
  //uppers
  it("Si la pass no tiene uppers, debe devolver false", () => {
    const pass = "aaa!!!123";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene menos de tres uppers, debe devolver false", () => {
    const pass = "aaa!!!123AA";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene al menos tres uppers, debe devolver true", () => {
    const result = validatePassword(valid);
    expect(result).toBeTruthy();
  });
  //specials
  it("Si la pass no tiene specials, debe devolver false", () => {
    const pass = "aaaAAA123";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene menos de tres specials, debe devolver false", () => {
    const pass = "aaa!!123AAA";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene al menos tres specials, debe devolver true", () => {
    const result = validatePassword(valid);
    expect(result).toBeTruthy();
  });
  //length
  it("Si la pass tiene menos de 8 caracteres, debe devolver false", () => {
    const pass = "a!1A";
    const result = validatePassword(pass);
    expect(result).toBeFalsy();
  });
  it("Si la pass tiene mas de 8 caracteres, debe devolver true", () => {
    const result = validatePassword(valid);
    expect(result).toBeTruthy();
  });
});
