// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
    //"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  }
  else {
    licenseSection = `${renderLicenseBadge(license)}${renderLicenseLink}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
## Description  
${data.purpose}
  

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${data.install}

## Usage

${data.use}

## Contributing

${data.contribute}

## License

This project is licensed under the ${data.license} License.
${renderLicenseSection()}

## Questions

Github profile: [github.com/${data.github}](https://github.com/${data.github})<br>
For further questions I can be reached at ${data.email}
`;
}

module.exports = generateMarkdown;
