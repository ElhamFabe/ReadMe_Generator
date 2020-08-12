// function to generate markdown for README
function generateMarkdown(data) {
  return(
  `#${data.title}
  Contents of This File
  -[Description](#description)
  -[Technologies](#technologies)
  -[Installation](#installation)
  -[License](#license)
  ---
  ![Application Image]()

  // Add blockqoute for your application 

# Description 
  ${data.description}
### Technologies
  ${data.technologies}
### Installation
  ${data.installation}
#### License 
  ${renderBadge(data.license)}
  ${data.license}

`);
}

function renderBadge(license){
  if (license === "Apache") {
    return ('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
  } else if (license === "MIT") {
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
  } else if (license === "ISC") {
    return ('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)')
  } else {
    return ('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)')
  };
  

}

module.exports = generateMarkdown;
