import {Employee} from './Employee.js';
/**
 * Class describing the engineer role's required information.
 */
export class Engineer extends Employee {
  constructor({name,id,email,github}){
    super({name,id,email});
    this.role = 'Engineer';
    this.github = github;
  }
  /**
   * Returns the github username of the engineer
   * @returns {string}
   */
  getGithub(){
    return this.github;
  }
};