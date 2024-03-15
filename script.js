const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('loader');
const audioPlayer = document.getElementById('audioPlayer');
const videoPlayer = document.getElementById('videoPlayer');
const imageDisplay = document.getElementById('imageDisplay');
const fileInfoLoad = document.getElementById('div_load_info');

uploadButton.addEventListener('click', function() {
    fileInput.click();
});

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileType = file.type.split('/')[0]; // Get the type of file (audio, video or image)
    const fileName = file.name;

    fileInfoLoad.innerHTML += '<span>Wczytany plik: ' + fileName +   '</span>';
    fileInfoLoad.style.display = 'block';

    if (fileType === 'audio') {
        const reader = new FileReader();
        reader.onload = function() {
            audioPlayer.src = reader.result;
            audioPlayer.style.display = 'block';
            audioPlayer.play();
            imageDisplay.style.display = 'none';
        };

        reader.readAsDataURL(file);
    } else if (fileType === 'video') {
        const reader = new FileReader();
        reader.onload = function() {
            videoPlayer.src = reader.result;
            videoPlayer.style.display = 'block';
            videoPlayer.play();
            imageDisplay.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else if (fileType === 'image') {
        const reader = new FileReader();
        reader.onload = function() {
            imageDisplay.src = reader.result;
            imageDisplay.style.display = 'block';
            audioPlayer.style.display = 'none';
            videoPlayer.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        console.error('Unsupported file type');
    }
});