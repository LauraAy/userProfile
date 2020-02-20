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
    name: 'installation',
    message: 'Tell us the install command for this project.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Tell us about usage.'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Tell us about your license'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is contributing?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command will run tests?'
  }

])


  .then(({ githubName, projectTitle, description, installation, usage, license, contributing, tests }) => {

    axios.get(`https://api.github.com/users/${githubName}`)
      .then(({ data }) => {
        console.log(data.avatar_url);

        console.log(projectTitle, description)

const readme = `
##Project Title
${projectTitle}
## Description
${description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${installation}
\`\`\`
## Usage
${usage}
${license}
  
## Contributing
${contributing}
## Tests
To run tests, run the following command:
\`\`\`
${tests}
\`\`\`
## Questions
<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.

`
    fs.writeFile('README.md', readme, e => e ? console.log(e) : null) 
  })
  .catch(e => console.error(e))
})



// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
