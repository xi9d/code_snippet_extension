// Example code snippet data
let snippets = [];
  
  // Load and display code snippets
  const codeSnippetsContainer = document.getElementById("code-snippets");
  
  function displayCodeSnippets() {
    snippets.forEach((snippet, index) => {
      const snippetDiv = document.createElement("div");
      snippetDiv.innerHTML = `
        <h3>${snippet.title}</h3>
        <p>${index}</p>
        <pre>${snippet.code}</pre>
        <button onclick="deleteSnippet(${index})">Delete</button>
      `;
      codeSnippetsContainer.appendChild(snippetDiv);
    });
  }
  
  displayCodeSnippets();
  
  // Add a new code snippet
  const snippetForm = document.getElementById("snippet-form");
  const snippetTitleInput = document.getElementById("snippet-title");
  const snippetCodeInput = document.getElementById("snippet-code");
  
  snippetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = snippetTitleInput.value;
    const code = snippetCodeInput.value;
    if (title && code) {
      snippets.push({ title, code });
      displayCodeSnippets();
      snippetTitleInput.value = "";
      snippetCodeInput.value = "";
    }
  });
  
  // Delete a code snippet
  function deleteSnippet(index) {
    snippets.splice(index, 1); 
    codeSnippetsContainer.innerHTML = ""; // Clear the display
    displayCodeSnippets(); // Redisplay snippets
  }
  