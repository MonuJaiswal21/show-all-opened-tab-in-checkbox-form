// Function to generate checkboxes for each tab
function displayTabs(tabs) {
    const tabList = document.getElementById('tabList');
    tabList.innerHTML = ''; // Clear any existing content
  
    tabs.forEach(tab => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `tab-${tab.id}`;
      checkbox.value = tab.id;
  
      const label = document.createElement('label');
      label.htmlFor = checkbox.id;
      label.textContent = tab.title;
  
      const div = document.createElement('div');
      div.appendChild(checkbox);
      div.appendChild(label);
  
      tabList.appendChild(div);
    });
  }
  
  // Get all open tabs and display them
  chrome.tabs.query({}, function(tabs) {
    displayTabs(tabs);
  });
  