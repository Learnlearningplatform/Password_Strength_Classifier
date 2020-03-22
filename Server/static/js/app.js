
$("#submit").click(function () {
    username = $("#username").val()
    password = $("#password").val()

    if (username == "" || password == "")
        return;


    url = "http://127.0.0.1:5000"
    $.ajax({
        url: url + "/predict",
        method: "POST",
        cors: true,
        data: {
            password: password,
        },
        success: function (res) {
            num = res.data;
            console.log(num);
            if (num == "0") {
                $("#main").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
           <strong>Hey ${username}!</strong> You have a weak Password!!
           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
           </button>
       </div>`)
            }
            else if (num == "1") {
                $("#main").append(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Hey ${username}!</strong> You have a moderate Password
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`)
            }
            else {
                $("#main").append(`<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Hey ${username}!</strong> You have a strong password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`)
            }
        }
        ,
        error: function (err) {
            console.log(err);
            alert(err);
        }
    });
})

