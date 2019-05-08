var myWidget = cloudinary.createUploadWidget({
    cloudName: 'drjosejms',
    uploadPreset: 'cptupload'
}, (error, result) => {
    var imageURL;
    if (!error && result && result.event === "success") {
        imageURL = result.info.secure_url;
        console.log('Done! Here is the image info: ', result.info.secure_url);
        postSubmit(imageURL);
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

postSubmit = function (imageURL) {
    var name = $('#name').val().trim();
    var medium = $('#medium').val();
    var title = $('#title').val().trim();
    var state = $('#state').val();
    var email = $('#email').val().trim();
    var rightBox = $('#rightBox').val().trim();
    var imageLink = imageURL;
    var facebook = $('#facebook').val().trim();
    var linkedIn = $('#linkedIn').val().trim();

    var newSubmit = {
        name: name,
        artTitle: title,
        facebookURL: facebook || 'facebook.com/#blank',
        location: state,
        linkedInURL: linkedIn || 'linkedin.com/#blank',
        category: medium,
        email: email || '#@yahoo.com',
        photoURL: imageLink,
        description: rightBox
    }

    $('#submitbtn').on('click', (event) => {
        console.log(newSubmit);
        $.post("/api/submissions", newSubmit, function () {

        }).then(() => {
            console.log(newSubmit);
        });
    });


}
