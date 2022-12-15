// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  [![License](https://img.shields.io/badge/license-${data.license}-${data.color})](https://opensource.org/licenses/${data.license})
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  


## Description

${data.description}

## Installation

${data.install}

## Usage

${data.useage}

## Contributions

${data.contributions}

## Tests

${data.test}

## License
${data.license}

## Questions
See more of my work [here!](https://github.com/${data.username}) 

I can be reached via e-mail at ${data.email}. Thank you for reading!

`;
}

module.exports = generateMarkdown;
