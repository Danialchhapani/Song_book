 // Function to show lyrics for selected song
        function showLyrics(songId, language) {
            // Hide all lyrics containers first
            var lyricsContainers = document.querySelectorAll('.lyrics-container');
            lyricsContainers.forEach(container => {
                container.style.display = 'none';
            });

            // Show lyrics container for the selected song
            var lyricsContainer = document.querySelector(`.song-item.${language}[data-song="${songId}"] .lyrics-container`);
            lyricsContainer.style.display = 'block';
        }

        // Event listeners for song item clicks
        document.querySelectorAll('.song-item').forEach(item => {
            item.addEventListener('click', function() {
                var songId = this.getAttribute('data-song');
                var language = this.classList[1]; // Assumes second class is language (e.g., english, hindi, marathi)
                
                // Remove 'active' class from all song items
                document.querySelectorAll('.song-item').forEach(song => {
                    song.classList.remove('active');
                });

                // Add 'active' class to the clicked song item
                this.classList.add('active');

                showLyrics(songId, language);
            });
        });

        // Function to show songs based on selected language
        function showSongs(language) {
            var songs = document.querySelectorAll('.song-item');
            songs.forEach(song => {
                var lyricsContainer = song.querySelector('.lyrics-container');
                if (song.classList.contains(language)) {
                    song.style.display = 'block';
                    lyricsContainer.style.display = 'none'; // Hide lyrics container initially
                } else {
                    song.style.display = 'none';
                }
            });
        }

        // Initial call to show songs based on default selected language
        var languageSelect = document.getElementById('language');
        showSongs(languageSelect.value);

        // Event listener for language selection dropdown
        languageSelect.addEventListener('change', function() {
            var selectedLanguage = this.value;
            showSongs(selectedLanguage);

            // Hide all lyrics containers when changing language
            var lyricsContainers = document.querySelectorAll('.lyrics-container');
            lyricsContainers.forEach(container => {
                container.style.display = 'none';

		    // Restriction on Right click
		  //  $('img').mousedown(function (e) {
//  if(e.button == 2) { // right click
//    return false; // do nothing!
//  }
		    
            });
        });
