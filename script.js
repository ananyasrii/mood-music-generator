const mockPlaylists = {
    happy: [
      { title: "Happy", artist: "Pharell Williams", cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg" },
      { title: "Good Vibrations", artist: "The Beach Boys", cover: "https://www.udiscovermusic.com/wp-content/uploads/2016/10/The-Beach-Boys-Good-Vibrations.jpg" },
      { title: "September", artist: "Earth, Wind & Fire", cover: "https://upload.wikimedia.org/wikipedia/en/1/18/EarthWindAndFireSeptember7InchSingleCover.jpg" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", cover: "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2" },
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", cover: "https://m.media-amazon.com/images/I/81KZ8aCX6vL._UF894,1000_QL80_.jpg" },
      { title: "Good Life", artist: "OneRepublic", cover: "https://upload.wikimedia.org/wikipedia/en/4/4e/OneRepublic_Good_Life.jpg" },
      { title: "Shut Up and Dance", artist: "WALK THE MOON", cover: "https://i0.wp.com/classicsongoftheday.com/wp-content/uploads/2023/04/Screenshot-2023-04-15-133755.png?fit=623%2C618&ssl=1" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", cover: "https://i1.sndcdn.com/artworks-Zx3ZZMU1U2vp7jRk-IZaxqg-t500x500.jpg" },
      
    ],
    chill: [
      { title: "Lost in Japan", artist: "Shawn Mendes", cover: "https://upload.wikimedia.org/wikipedia/en/4/42/Shawn_Mendes_Lost_in_Japan.png" },
      { title: "Sunflower", artist: "Post Malone, Swae Lee", cover: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f" },
       { title: "Sunday Best", artist: "Surfaces", cover: "https://upload.wikimedia.org/wikipedia/en/7/77/Surfaces_-_Sunday_Best_%28Live%29.png" },
      { title: "Better Now", artist: "Post Malone", cover: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268" },
      { title: "Good Day", artist: "Greg Street, Nappy Roots", cover: "https://i.scdn.co/image/ab67616d0000b273f9fde61817e49769b3d89131" },
       { title: "Electric Feel", artist: "MGMT", cover: "https://i1.sndcdn.com/artworks-dcVQ6twCHNl9a5ML-mSZ6oQ-t500x500.png" },
      { title: "Location", artist: "Khalid", cover: "https://upload.wikimedia.org/wikipedia/en/3/38/LocationKhalid.png" },
       { title: "Put It All On Me", artist: "Ed Sheeran", cover: "https://upload.wikimedia.org/wikipedia/commons/7/70/PUT_IT_ALL_ON_ME.jpg" }
      
    ]
  };

  const btn = document.getElementById('generateBtn');
  const input = document.getElementById('moodInput');
  const container = document.getElementById('playlistsContainer');

  btn.addEventListener('click', () => {
    const mood = input.value.trim().toLowerCase();
    console.log(mood)
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