const repositories = [
  { name: 'https://trump.dudo.fi', pic: '/images/strump.jpg' },
  { name: 'https://dudo.fi', pic: '/images/scv.jpg' },
  { name: 'https://risto.dudo.fi', pic: '/images/sport.jpg' },
  { name: 'https://spin.dudo.fi', pic: '/images/sspin.jpg' },
  { name: 'https://paint.dudo.fi', pic: '/images/spaint.jpg' },
  { name: 'https://start.dudo.fi', pic: '/images/sstart.jpg' },
  { name: 'https://2025.dudo.fi', pic: '/images/s2025.jpg' },
  { name: 'https://rss.dudo.fi', pic: '/images/srss.jpg' },
];

const repoContainer = document.getElementById('repositories');

function fetchAndDisplayRepos() {
  for (const repo of repositories) {
    const card = document.createElement('li');
    //card.className = 'repo-card';
    if ((repoContainer.children.length) % 3 === 0) {
      card.className = 'last';
    }; // Create a new div for each item
    card.innerHTML = `
      <a href="${repo.name}" target="_blank"><img src="${repo.pic}" alt="${repo.name}"></a>
    `;
    repoContainer.appendChild(card);
  }
}

fetchAndDisplayRepos();
