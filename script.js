let beastScore = 0;
let opponentScore = 0;
const adminPassword = "DSPF";  // Change this password to your preference

// Function to show the score section for viewers
function viewScore() {
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('scoreSection').style.display = 'block';
}

// Function to show the admin login form
function showLogin() {
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Function to check if the entered password is correct
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === adminPassword) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('scoreSection').style.display = 'block';
        document.getElementById('buttonsSection').style.display = 'block';
    } else {
        alert("Incorrect password! Only the admin can update scores.");
    }
}

// Function to update scores
function updateScore(team, points) {
    if (team === 'beast') {
        beastScore += points;
        document.getElementById('beastScore').innerText = beastScore;
    } else if (team === 'opponent') {
        opponentScore += points;
        document.getElementById('opponentScore').innerText = opponentScore;
    }
}

// Function to reset scores
function resetScores() {
    beastScore = 0;
    opponentScore = 0;
    document.getElementById('beastScore').innerText = beastScore;
    document.getElementById('opponentScore').innerText = opponentScore;

}
function goBack() {
    document.getElementById('modeSelection').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('scoreSection').style.display = 'none';
}

// Function to display uploaded media
function displayFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const mediaDisplay = document.getElementById('mediaDisplay');
    mediaDisplay.innerHTML = '';

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileURL = e.target.result;

            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = fileURL;
                img.alt = "Match Photo";
                img.style.maxWidth = '300px';
                mediaDisplay.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = fileURL;
                video.controls = true;
                video.style.maxWidth = '300px';
                mediaDisplay.appendChild(video);
            }
        };
        reader.readAsDataURL(file);
    }
}
