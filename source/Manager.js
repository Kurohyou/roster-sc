import {Employee} from './Employee.js';
/**
 * Class describing the manager role's required information.
 */
export class Manager extends Employee {
  constructor({name,id,email,officeNumber}){
    super({name,id,email});
    this.role = 'Manager';
    this.officeNumber = officeNumber;
  }
  /**
   * Returns the room number of the manager's office
   * @returns {string}
   */
  getOffice(){
    return this.officeNumber;
  }
};