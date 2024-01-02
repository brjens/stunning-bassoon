const sidebar = document.getElementById('sidebar');
const currentPage = window.location.pathname.split('/').pop();

// Function to create sidebar links
function createSidebarLink(linkText, href) {
  // Construct the relative path based on the relativePath variable
  const relativePathPrefix = relativePath ? '../' : '';
  const fullHref = relativePathPrefix + href;
  console.log(currentPage);
  console.log(href);
  // Check if the current page matches the href
  const isActive = currentPage === href;

  // Add a CSS class to the link if it is the active page
  const linkClass = isActive ? 'active-link' : '';
  debugger;
  return `<a href="${fullHref}" class="${linkClass}">${linkText}</a>`;
}

// Create sidebar links dynamically
sidebar.innerHTML =
  createSidebarLink('Home', 'index.html') +
  createSidebarLink('School Projects', 'schoolProjects.html') +
  createSidebarLink('Contact', 'contact.html') +
  createSidebarLink('LinkedIn', 'https://www.linkedin.com/in/brandon-jensen-6bb8b688/') +
  createSidebarLink('GitHub', 'https://github.com/brjens');