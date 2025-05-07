// Restructure the DOM to make the tab system work with the existing content
document.addEventListener('DOMContentLoaded', function() {
  // Move the main content to the character creation tab
  const mainContent = document.querySelector('main');
  const headerContent = document.querySelector('header');
  const footerContent = document.querySelector('footer');
  
  // Save references to the tabs container and tabs
  const tabsContainer = document.querySelector('.tabs-container');
  const characterTab = document.getElementById('character-tab');
  
  // Create a new container for both header and main content
  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container';
  
  // Clone nodes to keep all event listeners
  const headerClone = headerContent.cloneNode(true);
  const mainClone = mainContent.cloneNode(true);
  const footerClone = footerContent.cloneNode(true);
  
  // Hide the original elements
  headerContent.style.display = 'none';
  mainContent.style.display = 'none';
  footerContent.style.display = 'none';
  
  // Add the cloned content to the character tab
  contentContainer.appendChild(headerClone);
  contentContainer.appendChild(mainClone);
  contentContainer.appendChild(footerClone);
  characterTab.appendChild(contentContainer);
  
  // Move tabs container to the right position in the DOM
  const container = document.querySelector('.container');
  container.insertBefore(tabsContainer, headerContent);
  
  // Set up tab switching logic
  setupTabs();
  
  // Populate the armory with armor pieces
  setTimeout(populateArmory, 200);
});

function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to current button and corresponding content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const tabContent = document.getElementById(tabId);
      
      if (tabContent) {
        tabContent.classList.add('active');
      }
    });
  });
}

function populateArmory() {
  console.log("Populating armory with data", armorData);
  
  // Add refresh button to the armory
  const armorySection = document.querySelector('.armory-section');
  if (armorySection && !document.querySelector('.refresh-button')) {
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh Armory Data';
    refreshButton.className = 'refresh-button';
    refreshButton.addEventListener('click', populateArmory);
    
    const heading = armorySection.querySelector('h2');
    if (heading) {
      armorySection.insertBefore(refreshButton, heading.nextSibling);
    }
  }
  
  const armorCategories = {
    'helmet': 'Helmets',
    'pauldrons': 'Pauldrons',
    'chest': 'Chest Armor',
    'arms': 'Arms/Gloves',
    'boots': 'Boots',
    'raiment': 'Raiments'
  };
  
  for (const [category, title] of Object.entries(armorCategories)) {
    const selectElement = document.getElementById(`${category}-select`);
    if (!selectElement) {
      console.warn(`Select element for ${category} not found`);
      continue;
    }
    
    const armorGrid = document.getElementById(`${category}-grid`);
    if (!armorGrid) {
      console.warn(`Grid element for ${category} not found`);
      continue;
    }
    
    // Clear existing content
    armorGrid.innerHTML = '';
    
    // Get options from the select element
    const options = Array.from(selectElement.options).slice(1); // Skip the first option
    
    // For each armor piece, create a card
    options.forEach(option => {
      const armorId = option.value;
      const armorName = option.textContent;
      
      if (!armorId) return;
      
      // Create the card
      const card = document.createElement('div');
      card.className = 'armor-card';
      
      // Add click event listener
      card.addEventListener('click', () => {
        const selectElem = document.getElementById(`${category}-select`);
        if (selectElem) {
          selectElem.value = armorId;
          const changeEvent = new Event('change');
          selectElem.dispatchEvent(changeEvent);
          const characterTabBtn = document.querySelector('.tab-btn[data-tab="character-tab"]');
          if (characterTabBtn) {
            characterTabBtn.click();
          }
        }
      });
      
      // Image container
      const imageContainer = document.createElement('div');
      imageContainer.className = 'armor-card-image';
      
      // Try to find an image
      let imageFound = false;
      
      // Try to get the image from armorData
      if (armorData[armorId] && armorData[armorId].imageUrl) {
        const img = document.createElement('img');
        img.src = armorData[armorId].imageUrl;
        img.alt = armorName;
        imageContainer.appendChild(img);
        imageFound = true;
      }
        
      if (!imageFound) {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-text';
        placeholder.style.padding = '10px';
        placeholder.style.textAlign = 'center';
        placeholder.textContent = 'Image will be available in character creator';
        imageContainer.appendChild(placeholder);
      }
      
      card.appendChild(imageContainer);
      
      // Content section
      const content = document.createElement('div');
      content.className = 'armor-card-content';
      
      // Title
      const title = document.createElement('h3');
      title.textContent = armorName.replace(/^[A-Z]\.\s/, ''); // Remove prefixes like "A. "
      content.appendChild(title);
      
      // Description
      const description = document.createElement('div');
      description.className = 'armor-card-description';
      
      // Check for armorFullDescriptions first
      if (typeof armorFullDescriptions !== 'undefined' && armorFullDescriptions[armorId]) {
        const fullDesc = armorFullDescriptions[armorId];
        
        // Add main description
        const descPara = document.createElement('p');
        descPara.innerHTML = fullDesc.fullDescription;
        description.appendChild(descPara);
        
        // Add progression if available
        if (fullDesc.levelFeatures) {
          const progression = document.createElement('div');
          progression.className = 'armor-progression';
          
          const progressHeader = document.createElement('h4');
          progressHeader.textContent = 'Level Features';
          progression.appendChild(progressHeader);
          
          // Determine which level keys to use based on the category
          const levelKeys = category === 'raiment' ? ['3', '6', '8', '12', '14'] : ['1', '4', '7', '11', '14'];
          
          levelKeys.forEach(level => {
            if (fullDesc.levelFeatures[level] && fullDesc.levelFeatures[level].trim() !== "") {
              const levelPara = document.createElement('p');
              levelPara.innerHTML = `<strong>Level ${level}:</strong> ${fullDesc.levelFeatures[level]}`;
              progression.appendChild(levelPara);
            }
          });
          
          // Check for special keys like "3-upgrade"
          Object.keys(fullDesc.levelFeatures).forEach(key => {
            if (key.includes('-') && fullDesc.levelFeatures[key].trim() !== "") {
              const levelPara = document.createElement('p');
              const parts = key.split('-');
              const displayKey = `Level ${parts[0]} ${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)}`;
              levelPara.innerHTML = `<strong>${displayKey}:</strong> ${fullDesc.levelFeatures[key]}`;
              progression.appendChild(levelPara);
            }
          });
          
          description.appendChild(progression);
        }
      } 
      // Fallback to armorData description
      else if (armorData[armorId] && armorData[armorId].description) {
        const descPara = document.createElement('p');
        descPara.innerHTML = armorData[armorId].description;
        description.appendChild(descPara);
        
        // Add progression if available
        if (armorData[armorId].progression) {
          const progression = document.createElement('div');
          progression.className = 'armor-progression';
          
          const progressHeader = document.createElement('h4');
          progressHeader.textContent = 'Progression';
          progression.appendChild(progressHeader);
          
          if (Array.isArray(armorData[armorId].progression)) {
            armorData[armorId].progression.forEach(levelDesc => {
              const levelPara = document.createElement('p');
              levelPara.innerHTML = levelDesc;
              progression.appendChild(levelPara);
            });
          } else {
            for (const [level, levelDesc] of Object.entries(armorData[armorId].progression)) {
              const levelPara = document.createElement('p');
              levelPara.innerHTML = `<strong>Level ${level}:</strong> ${levelDesc}`;
              progression.appendChild(levelPara);
            }
          }
          
          description.appendChild(progression);
        }
      } 
      // No description available
      else {
        const noPara = document.createElement('p');
        noPara.textContent = `No detailed information available for this ${category} piece.`;
        description.appendChild(noPara);
      }
      
      content.appendChild(description);
      card.appendChild(content);
      // Add card to grid
      armorGrid.appendChild(card);
    });
    
    // If no cards were created, show a message
    if (armorGrid.children.length === 0) {
      const emptyMsg = document.createElement('p');
      emptyMsg.textContent = `No ${title.toLowerCase()} found.`;
      emptyMsg.style.color = 'var(--silver)';
      emptyMsg.style.textAlign = 'center';
      emptyMsg.style.padding = '20px';
      armorGrid.appendChild(emptyMsg);
    }
  }
}
