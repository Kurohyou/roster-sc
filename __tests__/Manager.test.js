import {Manager} from '../source/Manager.js';
describe('Manager class',()=>{
  const testValues = {
    name:'My Test',
    id:42,
    email:'test@dne.com',
    officeNumber:24
  };
  const testE = new Manager(testValues);
  test(`Manager.getName() should return the Manager's Name`,()=>{
    expect(testE.getName()).toBe('My Test');
  });
  test(`Manager.getID() should return the Manager's ID`,()=>{
    expect(testE.getID()).toBe(42);
  });
  test(`Manager.getEmail() should return the Manager's Email`,()=>{
    expect(testE.getEmail()).toBe('test@dne.com');
  });
  test(`Manager.getOffice() should return the Manager's office number`,()=>{
    expect(testE.getOffice()).toBe(24);
  });
  test(`Manager.getRole() should return the Manager's Role`,()=>{
    expect(testE.getRole()).toBe('Manager');
  });
});