/**
 * Basic Employee class that defines the basic attributes and methods of each employee type.
 */
export class Employee {
  constructor({name,id,email}){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }
  /**
   * Returns the name of the employee
   * @returns {string}
   */
  getName(){
    return this.name;
  }
  /**
   * Returns the ID of the employee
   * @returns {number}
   */
  getID(){
    return this.id;
  }
  /**
   * Returns the email of the employee
   * @returns {string}
   */
  getEmail(){
    return this.email;
  }
  /**
   * Returns the role of the employee
   * @returns {string}
   */
  getRole(){
    return this.role;
  }
}