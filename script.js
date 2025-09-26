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
      
    ],
    sad: [
      { title: "Someone Like You", artist: "Adele", cover: "https://upload.wikimedia.org/wikipedia/en/7/7a/Adele_-_Someone_Like_You.png" },
      { title: "Let Me Down Slowly", artist: "Alec Benjamin", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovpkDcN26xGVN_PVJnm8JhvhRMTR4r-nnSA&s" },
       { title: "Fix You", artist: "Coldplay", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Coldplay_-_Fix_You.jpg/250px-Coldplay_-_Fix_You.jpg" },
      { title: "Another Love", artist: "Tom Odell", cover: "https://upload.wikimedia.org/wikipedia/en/b/b2/Another_Love-song.jpg" },
      { title: "Love Is Gone", artist: "Zelli King, lost., Pop Mage ", cover: "https://cdn-images.dzcdn.net/images/cover/4617acc1dd5ad4f48e1757e8d3063b00/0x1900-000000-80-0-0.jpg" },
       { title: "The A Team", artist: "Ed Sheeran", cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Ed_Sheeran_-_The_A_Team.png" },
      { title: "My Love Mine All Mine", artist: "Mitski", cover: "https://i.scdn.co/image/ab67616d0000b27334f21d3047d85440dfa37f10" },
       { title: "Infinity", artist: "Hannah Gracelynn, lost., Pop Mage", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/a2/20/ca/a220ca7e-552c-d477-9469-807a30bf2c08/752470543128_cover.jpg/3000x3000bb.jpg" }
    ],
    energetic: [
      { title: "Eye of the Tiger", artist: "Survivor", cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/Eye_of_the_Tiger_Survivor.jpg" },
      { title: "Believer", artist: "Imagine Dragons", cover: "https://images.genius.com/79d328b4d5eb0f96b95b408b396978ac.1000x1000x1.jpg" },
       { title: "Don't Stop Me Now", artist: "Queen", cover: "https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg" },
      { title: "Level Up", artist: "Ciara", cover: "https://upload.wikimedia.org/wikipedia/en/0/0d/Ciara_-_Level_Up_single_cover.png" },
      { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", cover: "https://upload.wikimedia.org/wikipedia/en/6/61/Can%27t_Hold_Us.png" },
       { title: "Stronger", artist: "Kanye West", cover: "https://upload.wikimedia.org/wikipedia/en/d/d7/KW-Stronger.jpg" },
      { title: "Motivation", artist: "Normani", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Normani_-_Motivation.png/250px-Normani_-_Motivation.png" },
       { title: "Good as Hell", artist: "Lizzo", cover: "https://upload.wikimedia.org/wikipedia/en/1/1c/Lizzo_-_Good_as_Hell.png" }
    ],
    angry: [
      { title: "Break Stuff", artist: "Limp Bizkit", cover: "https://images.genius.com/8fa833d97b2ca5a48eec2f1c30fc70ef.711x711x1.png" },
      { title: "Smells Like Teen Spirit", artist: "Nirvana", cover: "https://upload.wikimedia.org/wikipedia/en/3/3c/Smells_Like_Teen_Spirit.jpg" },
       { title: "Killing In the Name", artist: "Rage Against the Machine", cover: "https://i.scdn.co/image/ab67616d0000b27324f31a0a281320f0cec6f86f" },
      { title: "You Oughta Know", artist: "Alanis Morissette", cover: "https://upload.wikimedia.org/wikipedia/en/b/bb/You_Oughta_Know_single.jpg" },
      { title: "Bulls on Parade", artist: "Rage Against the Machine", cover: "https://upload.wikimedia.org/wikipedia/en/c/c7/Bullsonparade_domestic.jpg" },
       { title: "Numb", artist: "Linkin Park", cover: "https://bhavyasm.wordpress.com/wp-content/uploads/2018/07/download.jpg?w=775" },
      { title: "DNA.", artist: "Kendrick Lamar", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvTEBjW8Umzl1PVP2kRJBLBpjc1cagwxQyw&s" },
       { title: "The Way I Am", artist: "Eminem", cover: "https://upload.wikimedia.org/wikipedia/en/8/8b/Eminem_-_The_Way_I_Am_CD_cover.jpg" }
    ],
    dreamy: [
      { title: "Fade Into You", artist: "Mazzy Star", cover: "https://i.scdn.co/image/ab67616d0000b27389a392107ebd79818022b3ea" },
      { title: "Space Song", artist: "Beach House", cover: "https://i.scdn.co/image/ab67616d0000b2739b7190e673e46271b2754aab" },
       { title: "Riptide", artist: "Vance Joy", cover: "https://i.scdn.co/image/ab67616d0000b273a9929deb093a6617d2493b03" },
      { title: "Somewhere Only We Know", artist: "Keane", cover: "https://upload.wikimedia.org/wikipedia/en/e/e9/Keane-SOWK.jpg" },
      { title: "Somebody Else", artist: "The 1975", cover: "https://upload.wikimedia.org/wikipedia/en/2/28/SomebodyElse.jpg" },
       { title: "Dreams", artist: "Fleetwood Mac", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Fleetwood_Mac_-_Dreams.png/250px-Fleetwood_Mac_-_Dreams.png" },
      { title: "Walking On A Dream", artist: "Empire of the Sun", cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Empire_of_the_Sun_-_Walking_on_a_Dream_%28album%29.png" },
       { title: "DOG DAYS ARE OVER", artist: "Florence + The Machine", cover: "https://images.genius.com/3c24b8f52cfda126ffca3d0dddbcac23.1000x1000x1.png" }
    ]
    
  };

  const btn = document.getElementById('generateBtn');
  const input = document.getElementById('moodInput');
  const container = document.getElementById('playlistsContainer');

  btn.addEventListener('click', () => {
   const checkedRadio = document.querySelector('input[name="mood"]:checked');
let mood = "";
if (checkedRadio) {
  mood = checkedRadio.value.trim().toLowerCase();
} else {
  console.log("No option selected");
}



    console.log(mood);
    container.innerHTML = '';
    if (!mood || !mockPlaylists[mood]) {
      container.innerHTML = '<p style="color:#bbb;">Please choose a mood.</p>';
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