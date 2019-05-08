var myWidget = cloudinary.createUploadWidget({

}, (error, result) => {
    console.log(result)
    if (!error && result && result.event === "success") {
        var imageURL = result.info.secure_url;
        console.log('Done! Here is the image info: ', result.info.secure_url);
        postSubmit(imageURL);
    }
    else (console.log(error));
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
    var facebook = $('#facebookURL');
    var linkedIn = $('#linkedIn');

    var newSubmit = {
        name: name,
        artTitle: title,
        facebookURL: facebook,
        location: state,
        linkedInURL: linkedIn,
        category: medium,
        email: email,
        photoURL: imageLink,
        description: rightBox
    }

    $('#submitbtn').on('click', (event) => {
        $.post("/api/submissions/", newSubmit, function () {
            window.location.href = "/home";
        });
    });


}
