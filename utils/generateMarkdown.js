// This will add a licence badge to the README, based on the users input in the index.js.
//For this function and all others, if none is selected then the default is a blank section
function renderLicenseBadge(license) {
  switch (license){
    case "MIT":
      return `[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache-2.0":
      return `[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPL-3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    default:
      return'';
  };
};

// This will generate a link on the users README to the respective license.
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
     return "[MIT](https://opensource.org/licenses/MIT)";
    case "Apache-2.0":
     return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
     case 'GPL-3.0':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC':
      return '[ISC License](https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

// This function will generate the licence section after the switch statement
function renderLicenseSection(license) {
  if (license === "none"){
    return "";
  } else{
    return `## License This project is licensed under the ${renderLicenseLink(license)} license.`;
  };
};

// This function will fully generate the README file at the end of the user inquiry
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}
  
  ## Contributing
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, please contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or reach out to ${data.email}.
  `;
  };

module.exports = generateMarkdown;
