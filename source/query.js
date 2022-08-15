// Class Imports
import { Engineer } from "./Engineer.js";
import { Intern } from "./Intern.js";
import { Manager } from "./Manager.js";
// Dependency import
import inquirer from 'inquirer';

/**
 * Creates the message prompt for a given question about the employee to be created using their name instead of a generic "the employee".
 * @param {Object} answers - The answers object from the inquirer session
 * @param {string} property The property to ask the user about.
 * @returns {string}
 */
const posWithName = (answers,property) => `What is ${answers.name}'s ${property}?`;
/**
 * Checks the answers object to see if a given question was answered appropriately for this question to be asked.
 * @param {Object} answers - The answers object from the inquirer session
 * @param {string} key - The key to check in the answers object
 * @param {string|number|boolean} value - The value that the answer for the indicated key should be equal to.
 * @returns {boolean}
 */
const checkWhen = (answers,key,value) => answers[key] === value;
/**
 * Tests text input to ensure that it meets requirements.
 * @param {string|number|boolean} answers - The answers object from the inquirer session
 * @param {RegExp} rx - Regular expression to use to test the input
 * @param {string} errMsg - The error message to display for incorrect input
 * @returns {string|boolean}
 */
const minInput = ({answer,rx = /.+/,errMsg}) => rx.test(`${answer}`) ?
    true :
    errMsg;
    
const waitUserInput = false;
/**
 * Questions template for the employee questions.
 */
const questions = [
  {
    waitUserInput,
    name:'name',
    type:'input',
    message:`What is the employee's name?`,
    validate:(answer)=>minInput({
      answer,
      errMsg:'Employee names must have at least one character.'
    })
  },
  {
    waitUserInput,
    name:'id',
    type:'number',
    message:(answers) => posWithName(answers,'employee ID'),
    validate:(answer)=>minInput({
      answer,
      errMsg:'Employee IDs must be at least 1 digit, and should ideally be at least 3'
    })
  },
  {
    waitUserInput,
    name:'email',
    type:'input',
    message:(answers) => posWithName(answers,'email address'),
    default:(answers) => `${answers.name.replace(/\s+/g,'.').toLowerCase()}@company.com`,
    validate:(answer)=>minInput({
      answer,
      rx:/^[^@]+@.+\.[a-z]+$/i,
      errMsg:'Employee emails must be in the format name@email.com. Spaces should be replaced with underscores or periods.'
    })
  },
  {
    waitUserInput,
    name:'position',
    type:'list',
    message:(answers) => posWithName(answers,'position'),
    choices:[
      {name:'Manager',value:'manager'},
      {name:'Engineer',value:'engineer'},
      {name:'Intern',value:'intern'}
    ]
  },
  {
    waitUserInput,
    when:(answers) => checkWhen(answers,'position','manager'),
    name:'officeNumber',
    type:'input',
    message:(answers) => posWithName(answers,'Office Number'),
    validate:(answer)=>minInput({
      answer,
      errMsg:'Managers must be assigned an office space.'
    })
  },
  {
    waitUserInput,
    when:(answers) => checkWhen(answers,'position','engineer'),
    name:'github',
    type:'input',
    message:(answers) => posWithName(answers,'github username'),
    validate:(answer)=>minInput({
      answer,
      errMsg:'Engineers must have a github username.'
    })
  },
  {
    waitUserInput,
    when:(answers) => checkWhen(answers,'position','intern'),
    name:'school',
    type:'input',
    message:(answers) => posWithName(answers,'school'),
    validate:(answer)=>minInput({
      answer,
      errMsg:'Interns must be associated with an educational institution.'
    })
  },
  {
    waitUserInput,
    name:'new',
    type:'list',
    message:'Create another employee?',
    choices:[
      {name:'Yes',value:true},
      {name:'No',value:false}
    ]
  }
];

/**
 * variable to hold the position classes in an object for easy dynamic referencing
 */
const position = {engineer:Engineer,intern:Intern,manager:Manager};

/**
 * Initiates prompting the user for their team information. Continues to query for information on additional employees as long as the user continues selecting "Yes" for the final question "Create another employee?".
 * @param {Array} accumulate - Accumulates answers with employee information
 * @returns {Promise|Array}
 */
export const employeeQuestion = async (accumulate = {members:[]})=>{
  const teamAnswer = accumulate.team ?
    {team:accumulate.team} :
    await inquirer.prompt([{
      name:'team',
      type:'input',
      message:`What is your team's name?`,
      validate:(answer) => minInput({
        answer,
        errMsg:'You must have a team name.'
      })
    }]);
  const answers = await inquirer.prompt(questions);
  const employee = new position[answers.position](answers);
  const newAcc = {team:teamAnswer.team,members:[...accumulate.members,employee]};
  const newEmployee = answers.new ;
  delete answers.new;
  return newEmployee ?
    employeeQuestion(newAcc) :
    newAcc;
};