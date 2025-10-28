function checkResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const popup = document.getElementById('resolution-warning');
    const sizeText = document.getElementById('screen-size');

    sizeText.textContent = `${width} × ${height}`;

    // Allow small variation (browser bars, zoom levels, etc.)
    if (width < 1450 || width > 1600 || height < 730 || height > 820) {
        popup.classList.add('show');
    } else {
        popup.classList.remove('show');
    }
    }

    // Run once at load
    checkResolution();

    // Recheck when resized
    window.addEventListener('resize', checkResolution);