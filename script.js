const mockPlaylists = {
    happy: [
      { title: "Happy Song 1", artist: "Artist A", cover: "https://via.placeholder.com/180?text=Happy+1" },
      { title: "Happy Song 2", artist: "Artist B", cover: "https://via.placeholder.com/180?text=Happy+2" }
    ],
    chill: [
      { title: "Chill Song 1", artist: "Artist C", cover: "https://via.placeholder.com/180?text=Chill+1" },
      { title: "Chill Song 2", artist: "Artist D", cover: "https://via.placeholder.com/180?text=Chill+2" }
    ]
  };

  const btn = document.getElementById('generateBtn');
  const input = document.getElementById('moodInput');
  const container = document.getElementById('playlistsContainer');

  btn.addEventListener('click', () => {
    const mood = input.value.trim().toLowerCase();
    container.innerHTML = '';
    if (!mood || !mockPlaylists[mood]) {
      container.innerHTML = '<p style="color:#bbb;">Please enter a valid mood like "happy" or "chill".</p>';
      return;
    }

    mockPlaylists[mood].forEach(track => {
      const card = document.createElement('div');
      card.className = 'playlist-card';
      card.innerHTML = `
        <img src="${track.cover}" alt="Album cover for ${track.title}" />
        <div class="track-title">${track.title}</div>
        <div class="artist-name">${track.artist}</div>
      `;
      container.appendChild(card);
    });
  });