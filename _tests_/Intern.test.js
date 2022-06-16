const Intern = require("../lib/Intern");

test("creates an Intern", () => {
  intern = new Intern(
    "Paige",
    7,
    "Paige@test.com",
    "MSU"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});