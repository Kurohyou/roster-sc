import {Engineer} from '../source/Engineer.js';
describe('Engineer class',()=>{
  const testValues = {
    name:'My Test',
    id:42,
    email:'test@dne.com',
    github:'test-git'
  };
  const testE = new Engineer(testValues);
  test(`Engineer.getName() should return the employee's Name`,()=>{
    expect(testE.getName()).toBe('My Test');
  });
  test(`Engineer.getID() should return the employee's ID`,()=>{
    expect(testE.getID()).toBe(42);
  });
  test(`Engineer.getEmail() should return the employee's Email`,()=>{
    expect(testE.getEmail()).toBe('test@dne.com');
  });
  test(`Engineer.getGithub() should return the employee's Github User name`,()=>{
    expect(testE.getGithub()).toBe('test-git');
  });
  test(`Engineer.getRole() should return the employee's Role`,()=>{
    expect(testE.getRole()).toBe('Engineer');
  });
});