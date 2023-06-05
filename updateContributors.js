//const fetch = require('node-fetch');
import('node-fetch').then((fetch) => {
  }).catch((error) => {
    console.error('Failed to import node-fetch:', error);
  });
const fs = require('fs');
const owner = 'NageshMandal';
const repo = 'Engineering-Notes-Website';
fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
  .then(response => response.json())
  .then(contributors => {
    const contributorList = contributors.map(contributor => `- ${contributor.login}`).join('\n');
    const readmeContent = fs.readFileSync('README.md', 'utf-8');
    if (readmeContent.includes('<!-- CONTRIBUTORS -->') && !readmeContent.includes(contributorList)) {
      const updatedContent = readmeContent.replace('<!-- CONTRIBUTORS -->', `<!-- CONTRIBUTORS -->\n${contributorList}`);
      fs.writeFileSync('README.md', updatedContent);
      console.log('Contributors list updated.');
    } else {
      console.log('Contributors list is already up to date.');
    }
    contributors.forEach(contributor => {
        console.log(contributor.login);
      });
  })
  .catch(error => console.error(error));
