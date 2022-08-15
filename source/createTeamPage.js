// Dependency Imports
import Mustache from "mustache";
// Node method import
import * as fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 
 * @param {string} pathString - String describing where to put the new file
 * @returns 
 */
const createFile = (pathString) => fs.open(path.resolve(pathString),'w+');

/**
 * Creates the roster page for the team.
 * @param {Object} teamInfo - Object describing the team and it's members
 */
export const createTeamPage = async (teamInfo) => {
  // array to use for sorting of employees based on position
  const positionOrder = ['Manager','Engineer','Intern'];
  // initialize a new team object
  const team = {
    team:teamInfo.team,
    // sort the members by their position and name
    members:[...teamInfo.members]
      .sort((a,b)=>positionOrder.indexOf(a.getRole()) - positionOrder.indexOf(b.getRole()))
      .sort((a,b)=>a.getName().localeCompare(b.getName()))
  };
  // get the template for the card items
  const cardTemplate = await fs.readFile(path.resolve(__dirname,'templates/card.template.html'),{encoding:'utf8'});
  // Get the index.html template file
  const content = await fs.readFile(path.resolve(__dirname,'templates/index.template.html'),{encoding:'utf8'})
    // Render the new content using the index.html template, team object, and card template
    .then(t => Mustache.render(t,team,{card:cardTemplate}));
  // Construct the file name for the new roster html
  const fileName = team.team.replace(/\s+/g,'_').toLowerCase();
  // Create the file for the roster html file
  const rosterHandle = await createFile(`${fileName}.html`);
  // Write to the roster html file
  await rosterHandle.writeFile(content);
  // make sure the file is closed
  rosterHandle.close();
  // notify the user of the file's name and location
  console.log(`Roster created as ${fileName}.html in ${__dirname}`);
};