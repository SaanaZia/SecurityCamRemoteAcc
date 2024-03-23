document.addEventListener('DOMContentLoaded', function () {
    // Access the webcam stream and display it in the video element
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            var videoElement = document.getElementById('live-video');
            videoElement.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing the webcam:', error);
        });
});
