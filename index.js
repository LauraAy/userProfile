const prompt = require('inquirer').createPromptModule()
const axios = require('axios')
const fs = require('fs')

// const buildProfile =

prompt([
  {
    type: 'input',
    name: 'githubName',
    message: 'What is your github user name?'
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
  },
  {
    type: 'input',
    name: 'toc',
    message: 'What is the Table of contents for your project?'
  }

])


.then(({githubName, projectTitle, description, toc}) => {

  axios.get(`https://api.github.com/users/${githubName}`)
    .then((response) => {
      console.log(response.data.avatar_url);

      console.log(projectTitle, description, toc)

      const html = `
    <img src=${response.data.avatar_url}>
    <p> ${response.data.email}</p>
    <h1>${projectTitle}</h1>
    <p>${description}</p>
    <p>${toc}</p>
  `
      fs.writeFile('profile.html', html, e => e ? console.log(e) : null)
    }, (error) => {
      console.log(error);
    });


  })
  .catch(e => console.error(e))




// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
