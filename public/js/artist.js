$(document).ready(function () {
    var artistInput = $("#artist-name");
    var artistList = $("tbody");
    var artistContainer = $(".artist-container");

    $(document).on("submit", "#artist-form", handleArtistFormSubmit);
    $(document).on("click", ".delete-artist", handleDeleteButtonPress);


    getArtist();

    // A function to handle what happens when the form is submitted to create a new Author
    function handleArtistFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!artistInput.val().trim().trim()) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertArtist({
            name: artistInput
                .val()
                .trim()
        });
    }

    // A function for creating an artist. Calls getArtist upon completion
    function upsertArtist(artistData) {
        $.post("/api/artists", artistData)
            .then(getArtist);
    }

    // Function for creating a new list row for artists
    function createArtistRow(artistData) {
        var newTr = $("<tr>");
        newTr.data("artist", artistData);
        newTr.append("<td>" + artistData.name + "</td>");
        if (artistData.Posts) {
            newTr.append("<td> " + artistData.Posts.length + "</td>");
        } else {
            newTr.append("<td>0</td>");
        }
        newTr.append("<td><a href='/blog?artist_id=" + artistData.id + "'>Go to Posts</a></td>");
        newTr.append("<td><a href='/cms?artist_id=" + artistData.id + "'>Create a Post</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-artist'>Delete Artist</a></td>");
        return newTr;
    }

    // Function for retrieving artists and getting them ready to be rendered to the page
    function getArtist() {
        $.get("/api/artists", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createArtistRow(data[i]));
            }
            renderArtistList(rowsToAdd);
            artistInput.val("");
        });
    }

    // A function for rendering the list of artists to the page
    function renderArtistList(rows) {
        artistList.children().not(":last").remove();
        artistContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            artistList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no artists
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create an Artist before you can create a Post.");
        artistContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("artist");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/artists/" + id
        })
            .then(getArtist);
    }
});

