import {Employee} from '../source/Employee.js';
describe('Employee class',()=>{
  const testValues = {
    name:'My Test',
    id:42,
    email:'test@dne.com'
  };
  const testE = new Employee(testValues);
  test(`Employee.getName() should return the employee's Name`,()=>{
    expect(testE.getName()).toBe('My Test');
  });
  test(`Employee.getID() should return the employee's ID`,()=>{
    expect(testE.getID()).toBe(42);
  });
  test(`Employee.getEmail() should return the employee's Email`,()=>{
    expect(testE.getEmail()).toBe('test@dne.com');
  });
  test(`Employee.getRole() should return the employee's Role`,()=>{
    expect(testE.getRole()).toBe('Employee');
  });
});