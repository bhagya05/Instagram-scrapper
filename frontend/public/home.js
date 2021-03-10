$(document).ready(function () {

    $('body').toggleClass("body-class")
    $("#form").submit(function (event) {
        event.preventDefault();
        let username = $('#username').val();
        let password = $('#password').val();

        console.log(username);
        console.log(password);

        $.ajax({
            url: 'http://localhost:3001/',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            dataType: "json",
            timeout: 1500000,
            beforeSend: function () {
                // Show image container
                $('#form-container').hide();
                $('body').toggleClass('body-class');
                $("#spinner").show();
            },
            success: function (response) {
                console.log(response);

                createLikeGraph(response.likes);
                createCommentGraph(response.comments);
            },
            error: function (_, e, status) {
                console.log(e)
            },
            complete: function (data) {
                // Hide image container
                $("#spinner").hide();
                $('body').toggleClass('body-class');

            }
        });


    })
});

function createLikeGraph(response) {

    var trace1 = {
        x: [...Array(response.length).keys()].map(x => ++x),
        y: response,

        type: 'scatter'
    };
    var layout = {
        title: 'Instagram Likes Trend',
        xaxis: {
            tickmode: "linear",
            title: 'Posts',
            tick0: 0,
            dtick: 1,
        },
        yaxis: {
            title: 'Likes',
        },
    };
    var data = [trace1];

    const graph = document.getElementById('like-graph');
    Plotly.newPlot(graph, data, layout, {
        staticPlot: true
    });
}

function createCommentGraph(response) {

    var trace1 = {
        x: [...Array(response.length).keys()].map(x => ++x),
        y: response,

        type: 'scatter'
    };
    var layout = {
        title: 'Instagram Comment Trend',
        xaxis: {
            tickrange:[0-response.length],
            tickmode:"linear",
            title: 'Posts',
            tick0: 0,
            dtick: 1,
        },
        yaxis: {
            title: 'Comments',
        },
    };
    var data = [trace1];

    const graph = document.getElementById('comment-graph');
    Plotly.newPlot(graph, data, layout, {
        staticPlot: true
    });
}