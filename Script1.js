var url = window.location.href;
var accessToken = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]; // Set your Spotify API access token here

// Fetch user's playlists using Spotify Web API
function fetchPlaylists() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.spotify.com/v1/me/playlists");
  xhr.setRequestHeader("Authorization", "Bearer " + access_token);
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
