import { employeeQuestion } from './source/query.js';
import { createTeamPage } from './source/createTeamPage.js';
/**
 * Controls the questioning of the user and responding to the entered data. Acts as a switchboard to call necessary functions.
 */
(async ()=>{
  const roster = await employeeQuestion();
  // as long as at least one member was returned, create the team page.
  if(roster.members.length){
    createTeamPage(roster);
  }
})();