const sidebar = document.getElementById('dbSidebar');
const mainContent = document.getElementById('dbMain');
const menuButton = document.querySelector('.db-menu-toggle');

function isSidebarOpen() {
  return sidebar.classList.contains('open');
}

function toggleSidebar(forceState) {
  if (typeof forceState === 'boolean') {
    sidebar.classList.toggle('open', forceState);
  } else {
    sidebar.classList.toggle('open');
  }
}

// Toggle via menu button
menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleSidebar();
});

// Close when clicking main content area
mainContent.addEventListener('click', () => {
  if (isSidebarOpen()) {
    toggleSidebar(false);
  }
});

// Close when clicking outside (on the overlay)
document.body.addEventListener('click', (event) => {
    // If sidebar is open and the click is not inside the sidebar
    if (isSidebarOpen() && !sidebar.contains(event.target)) {
        // And the click is not the menu button itself
        if (!menuButton.contains(event.target)) {
            toggleSidebar(false);
        }
    }
});

// Prevent clicks inside the sidebar from closing it
sidebar.addEventListener('click', (e) => {
  e.stopPropagation();
});
