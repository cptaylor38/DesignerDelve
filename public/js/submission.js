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

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    $('#mySidebar').css('border-right', '5px solid black');
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $('#mySidebar').css('border-right', 'none');
}
