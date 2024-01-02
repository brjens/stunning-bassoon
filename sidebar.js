const sidebar = document.getElementById('sidebar');
const upPath = '../';

// Function to create sidebar links
function createSidebarLink(linkText, href) {

  // Check if the HTML file is in a subdirectory
  // by checking if the path of the current page contains a "/"
  // if so then add "../" to the href to go up one level
  if (window.location.pathname.split('/').length > 2) {
    return `<a href="${upPath}${href}">${linkText}</a>`;
  }  
  else {
    return `<a href="${href}">${linkText}</a>`;
  }
}

// Create sidebar links dynamically
sidebar.innerHTML =
  createSidebarLink('Home', 'index.html') +
  createSidebarLink('School Projects', 'schoolProjects.html') +
  createSidebarLink('Contact', 'contact.html') +
  createSidebarLink('LinkedIn', 'https://www.linkedin.com/in/brandon-jensen-6bb8b688/') +
  createSidebarLink('GitHub', 'https://github.com/brjens');

// // sidebar.js
//   const sidebar = document.getElementById('sidebar');
//   sidebar.innerHTML = '<a href="index.html">Home</a>' + 
// 	'<a href="schoolProjects.html">School Projects</a>' +
// 	'<a href="contact.html" >Contact</a>' +
// 	'<a href="https://www.linkedin.com/in/brandon-jensen-6bb8b688/" target="blank">LinkedIn</a>' +	
//         '<a href="https://github.com/brjens" target="blank">GitHub</a>';
