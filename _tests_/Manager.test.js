const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create an manager object with name, id, email, officeNumber", () => {
    const manager = new Manager("Paige", 7, "Paige@test.com", 10);

    expect(manager.officeNumber).toEqual(10);
  });

  describe("getRole", () => {
    it("should return the role as a Manager", () => {
      const manager = new Manager("Paige", 7, "Paige@test.com", 10);
      expect(manager.getRole()).toEqual('Manager');
    });
  });

  describe("officeNumber", () => {
    it("should return the managers office number", () => {
      const manager = new Manager("Paige", 7, "Paige@test.com", 10);
      expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
    });
  });
});