var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dvxy9zbhp',
    uploadPreset: 'blpubx5b'
}, (error, result) => {
    console.log(result)
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
    }
});

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);
