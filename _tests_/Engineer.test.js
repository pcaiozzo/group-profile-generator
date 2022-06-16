const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
  const engineer = new Engineer();

  expect(typeof engineer).toBe("object");
});

test("gets the github name of the engineer", () => {
  const github = "pcaiozzo";
  const engineer = new Engineer("Paige", 7, "Paige@test.com", github);

  expect(engineer.github).toBe(github);
});

test("Should tell what role the employee has", () => {
  const role = "Engineer";
  const engineer = new Engineer("Paige", 7, "Paige@test.com", role);

  expect(engineer.getRole()).toBe(role);
});