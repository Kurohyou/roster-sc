import {Employee} from './Employee.js';
/**
 * Class describing the intern role's required information.
 */
export class Intern extends Employee {
  constructor({name,id,email,school}){
    super({name,id,email});
    this.role = 'Intern';
    this.school = school;
  }
  /**
   * Returns the school the intern attends
   * @returns {string}
   */
  getSchool(){
    return this.school;
  }
};