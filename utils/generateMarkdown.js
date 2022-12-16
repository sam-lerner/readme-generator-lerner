// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  if (license !== 'None' && color !== 'n/a') {
    return `[![License](https://img.shields.io/badge/license-${license}-${color})](https://opensource.org/licenses/${license})`
  };
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  };
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
  This project is licensed under the ${license} license.
    `
  };
  return '';
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  ${renderLicenseBadge(data.license, data.color)}
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#test)
  ${renderLicenseLink(data.license)}
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

${renderLicenseSection(data.license)}

## Questions
See more of my work [here!](https://github.com/${data.username}) 

I can be reached via e-mail at ${data.email}. Thank you for reading!

`;
}

module.exports = generateMarkdown;
