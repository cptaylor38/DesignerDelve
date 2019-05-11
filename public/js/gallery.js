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

var submissions;
var artContainer = $('.artContainer');

$(document).ready(() => {
    $('#submitbtn').on('click', (event) => {
        console.log('button clicked');
        event.preventDefault();
        var stateQuery = $('#state').val();
        var mediumQuery = $('#medium').val();
        getPosts(mediumQuery, stateQuery);
    });
});

function getPosts(mediumQuery, stateQuery) {
    var queryString = `/${mediumQuery}/${stateQuery}`
    console.log(queryString);

    $.get("/api/submissions" + queryString, function (data) {
        console.log("Submissions", data);
        submissions = data;
        if (!submissions || !submissions.length) {
            // displayEmpty();
            console.log('data undefined');
        }
        else {
            launchGallery(data);
        }
    });
}



launchGallery = function (submissions) {
    artContainer.empty();
    var submissionsToAdd = [];
    for (var i = 0; i < submissions.length; i++) {
        console.log(submissions[i]);
        submissionsToAdd.push(createNewRow(submissions[i], i));
    }
    artContainer.append(submissionsToAdd);
};

function createNewRow(submission, idx) {
    var name = submission.name;
    var email = submission.email || ' ';
    var photoURL = submission.photoURL;
    var description = submission.description;
    var facebookURL = submission.facebookURL || '#';
    var linkedInURL = submission.linkedInURL || '#';
    var title = submission.artTitle;

    var newPost = $(`
    <div class="col-lg-4 col-md-12 mb-4">
            <div class="modal fade" id="modal${idx}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-body mb-0 p-0">
                            <img src="${photoURL}" style='height: 100%; width: 100%;'
                                    allowfullscreen></img>
                            <div class='artInfo container'>
                                <div class='headerDescription-modal'>
                                    <div class='row artInfoRow' id='artTitle-modal'>
                                        <h1>${title}</h1>
                                    </div>
                                    <div class='row artInfoRow' id='artistInfo-modal'>
                                        <div class='contactInfo'>
                                            <h2>${name}</h2>
                                            <p>${email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='row artInfoRow descriptionRow' style='display:block; text-align: center;'>
                                    <p class="mr-4">${description}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                        <a href='${facebookURL}' type='button' target='_blank' class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
                        <a href='${linkedInURL}' type='button' target='_blank' class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
                            <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4"
                                data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <a id='modalPop'>
                <img class="img-fluid z-depth-1"
                    src="${photoURL}" alt="video" data-toggle="modal" data-target="#modal${idx}"><h5 style='text-align:center; margin-top: 10px;'>${name}</h5>
            </a>
        </div>
    `);


    return newPost;
}




