
    // List of GitHub repositories
    const repositories = {
      name:'https://github.com/ristoxxx/budgify/main',
      name:'https://github.com/ristoxxx/budgify/main',
    }
  

    const repoContainer = document.getElementById('repositories');

    function fetchAndDisplayRepos() {
      for (const repo of repositories) {
        
        

          card.innerHTML = `
            <a href="${repo.name}" target="_blank">${repo.name}</a>
            </div>
            
          `;
          repoContainer.appendChild(card);
      }
    }
    fetchAndDisplayRepos();