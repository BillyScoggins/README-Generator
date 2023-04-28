// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge; 
  switch (license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
      case "Apache":
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
        case "Boost":
          badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
          break;
  }

  return badge 
}
  
    
    

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let link; 
  switch (license) {
    case "MIT":
      link = "(https://opensource.org/licenses/MIT)";
      break;
      case "Apache":
        link = "(https://opensource.org/licenses/Apache-2.0)";
        break;
        case "Boost":
          link = "(https://www.boost.org/LICENSE_1_0.txt)";
          break;
  }

  return link 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  }
  else {
    licenseSection = `This project is licensed under the ${renderLicenseLink(license)}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
${renderLicenseBadge(data.license)}
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


${renderLicenseSection(data.license)}

## Questions

Github profile: [${data.github}](https://github.com/${data.github})<br>
For further questions I can be reached at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
