

$("#submit").click(function () {
    username = $("#username").val()
    password = $("#password").val()

    if (username == "" || password == "")
        return;

    console.log(username);
    console.log(password);

    url = "http://127.0.0.1:5000"
    $.ajax({
        url: url + "/predict",
        method: "POST",
        cors: true,
        data: {
            message: message,
        },
        success: function (res) {
            console.log(res);
        }
        ,
        error: function (err) {
            console.log(err);
            alert(err);
        }
    });
})

