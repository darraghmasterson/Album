var url = window.location.href;
var accessToken = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]; // Set your Spotify API access token here

// Fetch user's playlists using Spotify Web API
function fetchPlaylists() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.spotify.com/v1/me/playlists");
  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      var playlists = json.items;
      var playlistSelect = document.getElementById("playlistSelect");
      playlistSelect.innerHTML = "<option value=''>--Select Playlist--</option>"; // Clear existing options
      for (var i = 0; i < playlists.length; i++) {
        var option = document.createElement("option");
        option.value = playlists[i].id;
        option.text = playlists[i].name;
        playlistSelect.add(option);
      }
    } else {
      console.error("Failed to fetch playlists: ", xhr.status);
    }
  };
  xhr.send();
}

// Fetch playlist artists and display as a list
function getPlaylistArtists() {
  var playlistId = document.getElementById("playlistSelect").value;
  if (playlistId) {
    var artistsData = {}; // Object to store artist names and their counts

    // Function to fetch playlist tracks from URL
    function fetchPlaylistTracks(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
      xhr.onload = function () {
        if (xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          var items = json.items;
          for (var i = 0; i < items.length; i++) {
            var artists = items[i].track.artists;
            for (var j = 0; j < artists.length; j++) {
              var artistName = artists[j].name;
              if (artistsData[artistName]) {
                artistsData[artistName]++; // Increment count if artist already exists
              } else {
                artistsData[artistName] = 1; // Add artist with count 1 if doesn't exist
              }
            }
          }
          var nextUrl = json.next;
          if (nextUrl) {
            fetchPlaylistTracks(nextUrl); // Fetch next page of tracks recursively
          } else {
            // Render artists list
            renderArtistsList(Object.keys(artistsData));
          }
        } else {
          console.error("Failed to fetch playlist tracks: ", xhr.status);
        }
      };
      xhr.send();
    }

    // Call fetchPlaylistTracks with initial URL
    var initialUrl = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks";
    fetchPlaylistTracks(initialUrl);
  }
}

// Render artists list
function renderArtistsList(artists) {
  var artistsList = document.getElementById("artistsList");
  artistsList.innerHTML = ""; // Clear existing list
  for (var i = 0; i < artists.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = artists[i];
    artistsList.appendChild(listItem);
  }
}

// Fetch playlists and populate dropdown menu
fetchPlaylists();
