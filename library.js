const library = {
  tracks: { 
    t01: { id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
          },
    t02: { id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
          },
    t03: { id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
          }
  },
  playlists:  { 
    p01: { id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]},
    p02: { id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]}
  } 
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// ----------------  printPlaylists     ------------------------------------- //
  /** prints a list of all playlists, in the form:
   *  p01: Coding Music - 2 tracks
   *  p02: Other Playlist - 1 tracks
   */
  const printPlaylists = function() {
    for (let playlistNumber in library.playlists) {
      let playlists = library.playlists[playlistNumber];
      console.log(playlists.id + ": " + playlists.name + " - " + playlists.tracks.length + " tracks");
      }
  };
  console.log("\n// --------  Log -> printPlaylists Function    -------- //"); 
  printPlaylists(library);
  
// ----------------  printTracks        ------------------------------------- //
  /** prints a list of all tracks, using the following format:
   *  t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
   *  t02: Model View Controller by James Dempsey (WWDC 2003)
   *  t03: Four Thirty-Three by John Cage (Woodstock 1952)
   */
  const printTracks = function() {
    for (let tracksNumber in library.tracks) {
      let tracks = library.tracks[tracksNumber];
      console.log(tracks.id + ": " + tracks.name + " by " + tracks.artist + " (" + tracks.album + ")");
    }
  };
  console.log("\n// --------  Log -> printTracks Function    -------- //"); 
  printTracks(library);

// ----------------  printPlaylist      ------------------------------------- //
  /** prints a list of tracks for a given playlist, using the following format:
   *  p01: Coding Music - 2 tracks
   *  t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
   *  t02: Model View Controller by James Dempsey (WWDC 2003)
   */
  const printPlaylist = function (playlistId) {
    let playlist = library.playlists;
    let tracks = library.tracks;
    let playlistTracks;

    if (playlist.hasOwnProperty(playlistId)) {
      playlistTracks = playlist[playlistId].tracks;
      console.log(playlist[playlistId].id  + ": " + playlist[playlistId].name + " - " + playlist[playlistId].tracks.length + " tracks");
    }

    for (let trackNumber of playlistTracks) {
      if (tracks.hasOwnProperty(trackNumber)) {
        console.log(tracks[trackNumber].id + ": " + tracks[trackNumber].name + " by " + tracks[trackNumber].artist + " (" + tracks[trackNumber].album + ")");
      }
    }
  };
  console.log("\n// -------- Log -> printPlaylist (tracks) Function  -------- //"); 
  printPlaylist('p01');

// ----------------  addTrackToPlaylist ------------------------------------- //
  /** adds an existing track to an existing playlist */
  const addTrackToPlaylist = function (trackId, playlistId) {
    library.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists[playlistId].tracks);
  };
  console.log("\n// --------  Log -> addTrackToPlaylist Function    -------- //"); 
  addTrackToPlaylist('t03', 'p01');

// ----------------  generateUid        ------------------------------------- //
  /** generates a unique id
   *  (already implemented: use this for addTrack and addPlaylist)
   */
  const uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

// ----------------  addTrack           ------------------------------------- //
  /** adds a track to the library */
  const addTrack = function(name, artist, album) {
    let uniqueId = uid();
    library.tracks[uniqueId] = { "id": uniqueId, "name": name, "artist": artist, "album": album };
  };
  console.log("\n// --------  Log -> addTrack Function    ---------------- //"); 
  addTrack('Cover Me', 'Bruce Springsteen', 'Born in America');
  console.log(library);

// ----------------  addPlaylist        ------------------------------------- //
  /** adds a playlist to the library  */
  const addPlaylist = function(name) {
    let uniqueId = uid();
    library.playlists[uniqueId] = { "id": uniqueId, "name": name, "tracks": [] };
  };
    
    console.log("\nTHIS IS ADD PLAYLIST: \n"); 
    addPlaylist('Cool Playlist');
    console.log(library);
  
  
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
