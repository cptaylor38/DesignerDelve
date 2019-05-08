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



launchGallery = function () {
    artContainer.empty();
    var submissionsToAdd = [];
    for (var i = 0; i < 2; i++) {
        console.log(submissions[i]);
        submissionsToAdd.push(createNewRow(submissions[i]));
    }
    artContainer.append(submissionsToAdd);
};

function createNewRow(submission) {
    var name = submission.name;
    var email = submission.email || '';
    var photoURL = submission.PhotoURL;
    var description = submission.description;
    var facebookURL = submission.facebookURL || "#";
    var linkedInURL = submission.linkedInURL || "#";
    var title = submission.artTitle;

    var newPost = $(`
    <div class="col-lg-4 col-md-12 mb-4">
            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-body mb-0 p-0">
                            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                <iframe class="embed-responsive-item"
                                    src="${photoURL}"
                                    allowfullscreen></iframe>
                            </div>
                            <div class='artInfo container'>
                                    <div class='row artInfoRow'>
                                        <h1>${title}</h1>
                                    </div>
                                    <div class='row artInfoRow'>
                                        <h4>${name}</h4>
                                        <h6>${email}</h6>
                                        <h6>${location}</h6>
                                    </div>
                                    <div class='row artInfoRow descriptionRow'>
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
            <a><img class="img-fluid z-depth-1"
                    src="${photoURL}"
                    alt="video" data-toggle="modal" data-target="#modal"></a>
        </div>
    `);


    return newPost;
}
