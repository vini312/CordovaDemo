
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    /*
    // Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyAGGJyhKuXjt1EahLBHhCVvVFx6Nhx3gvk",
        authDomain: "demoapp-5835a.firebaseapp.com",
        projectId: "demoapp-5835a",
        storageBucket: "demoapp-5835a.appspot.com",
        messagingSenderId: "747954802651",
        appId: "1:747954802651:web:c611d4ee843515755a61fe",
        measurementId: "G-75Y6B4VF21"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    */

    //listener to run after Device is Ready
    document.getElementById('btn').addEventListener('click', takePhoto)
}

function takePhoto() {
    let options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK
    };

    navigator.camera.getPicture(pictureCaptured, pictureError, options);
}

function pictureCaptured(imgURI) {
    /*
    // Create a root reference
    let storageRef = firebase.storage().ref();
        
    storageRef.child('images/photo.jpeg').put(imgURI)
    */
   
    document.getElementById('photo').src = imgURI;
}

function pictureError(msg) {
    document.getElementById('msg').textContent = msg;
}

