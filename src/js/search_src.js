 // Function to filter songs based on search input
    function filterSongs(searchText) {
        var songs = document.querySelectorAll('.song-item');
        songs.forEach(song => {
            var title = song.textContent.toLowerCase(); // Get song title text
            if (title.includes(searchText.toLowerCase())) {
                song.style.display = 'block'; // Show song if title matches search
            } else {
                song.style.display = 'none'; // Hide song if title does not match search
            }
        });
    }

    // Event listener for search input
    var searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        var searchText = this.value.trim();
        filterSongs(searchText);
    });
