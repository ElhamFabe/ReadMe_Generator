// function to generate markdown for README
function generateMarkdown(data) {
  return
   `# ${data.title}
  Contents of This File
  ---
  #Introduction

  ## Description

  ### Requirements

  ### Installation
  
  #### License 
`;
}

module.exports = generateMarkdown;
