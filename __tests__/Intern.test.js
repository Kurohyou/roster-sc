import {Intern} from '../source/Intern.js';
describe('Intern class',()=>{
  const testValues = {
    name:'My Test',
    id:42,
    email:'test@dne.com',
    school:'Test U'
  };
  const testE = new Intern(testValues);
  test(`Intern.getName() should return the Intern's Name`,()=>{
    expect(testE.getName()).toBe('My Test');
  });
  test(`Intern.getID() should return the Intern's ID`,()=>{
    expect(testE.getID()).toBe(42);
  });
  test(`Intern.getEmail() should return the Intern's Email`,()=>{
    expect(testE.getEmail()).toBe('test@dne.com');
  });
  test(`Intern.getSchool() should return the Intern's school`,()=>{
    expect(testE.getSchool()).toBe('Test U');
  });
  test(`Intern.getRole() should return the Intern's Role`,()=>{
    expect(testE.getRole()).toBe('Intern');
  });
});