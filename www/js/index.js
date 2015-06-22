var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// Camera plugin functionality

var numberOfPhotosUploaded = 1;

function getPhoto() {

    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 320,
        targetHeight: 320,
        popoverOptions: CameraPopoverOptions
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        var photos = document.getElementById('photos');
        photos.innerHTML = "Photos uploaded: " + (numberOfPhotosUploaded++);
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Reason for failure: ' + message);
    }
}
