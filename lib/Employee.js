class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };

  getName(getName) {
    this.name = getName;
  }

  getEmail(getEmail) {
    this.email = getEmail;
  }

  getRole(getRole) {
    return 'Employee';
  };
};

module.exports = Employee;