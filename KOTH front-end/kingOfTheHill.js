$(document).ready(function () {

    $.ajax({
        type: 'GET', 
        url: 'http://localhost:8080/kingofthehill/challenges/list',
        async: true,
        success: successCallback,
        error: errorCallback
    });

    function successCallback(response) {
        let challengeData = $('#Table1');
        let arr = response;
    
        for (let i = 0; i < arr.length; i++) {
            challengeData.append("<tr><td>" + arr[i].challengeDescription + "</td>"
                + `<td><button class="btn btn-primary" onclick="watch(${arr[i].id})";> Watch </button></td>`
                + `<td><button class="btn btn-info" onclick="deleteCustomerCall(${arr[i].id})";> Apply </button></td></tr>'`);
        }
        challengeData.append("<div><br><br></div>");
    
    }

    

    $.ajax({
        url: 'http://localhost:8080/kingofthehill/users/list',
        async: true,
        type: 'GET',
        success: populateUserTable,
        error: errorCallback
    });

    function populateUserTable(response) {

        let userData = $('#Table2');
        let arr = response;

    
        for (let i = 0; i < arr.length; i++) {
            userData.append("<tr><td>" + arr[i].username + "</td>"
            + "<td>" + arr[i].rating + "</td>"
            + `<td><button id="inspectbutton" onclick="getUser(${arr[i].id})"><img id="like" src="./magnifyingglass.png" width="35" height="35"></button></td>`
            + `<td><button id="likebutton" onclick="likedUser(${arr[i].id})"><img id="like" src="./like.png" width="35" height="35"></button></td>`
            + `<td><button id="dislikebutton" onclick="dislikedUser(${arr[i].id})"><img id="dislike" src="./dislike.png" width="35" height="35"></td></tr>`);
        }
    
    }


});

function likedUser(id) {

    $.ajax({
        url: `http://localhost:8080/kingofthehill/user/${id}/increment`,
        async: true,
        success: incrementRating,
        error: errorCallback
    });

}

function incrementRating() {
    location.reload();
}

function dislikedUser(id) {

    $.ajax({
        url: `http://localhost:8080/kingofthehill/user/${id}/decrement`,
        async: true,
        success: decrementRating,
        error: errorCallback
    });


}

function decrementRating() {
    location.reload();
}

function getUser(id){
    
    $.ajax({
        url: `http://localhost:8080/kingofthehill/user/${id}`,
        async: true,
        success: showUser,
        error: errorCallback
    })
}


function showUser(response) {

    console.log(response);
    console.log(response.username);

    var w = window.open("userPage.html");
    
    w.document.write('<html><head></head><body><link rel="stylesheet" href="./esthetic.css"><title>KOTH</title><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" modelType="text/css"/><script modelType="application/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script><script modelType="application/javascript" async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script><link href="https://fonts.googleapis.com/css2?family=Abel&family=Rubik+Moonrocks&display=swap" rel="stylesheet"><div class="container"></div><div><table class="table"><th>Username</th><th>Rating</th><tr><td>' + response.username + '</td><td>' + response.rating + '</td></tr></table></div><a href="PartyPage.html" id="cancel-btn" type="button" class="btn btn-danger" >Back to PartyPage</a></div></div><script src ="kingOfTheHill.js"></script></body></html>');
    w.document.close();
       
}

function errorCallback(response) {
    console.log("error");
}

$('#add-btn').click(function () {
    
    $.ajax({
        url: 'http://localhost:8080/kingofthehill/user/add',
        type: 'PUT',
        data: JSON.stringify({
            username: $('#name').val(),
            phone: $('#phone').val()
        }),
        async: true,
        contentType : "application/json",
        success: partyPage,
        error: errorCallback,
    });
});

function setup () {
    location.reload();
}

function partyPage () {
    window.open("PartyPage.html")
}


