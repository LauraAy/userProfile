const prompt = require('inquirer').createPromptModule()
const axios = require('axios')
const fs = require('fs')

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

  axios.get(``)
  console.log(projectTitle, description)
})




// const questions = [

// ];

function writeToFile(fileName, data) {
}

function init() {

}

init();
