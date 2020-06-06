$(document).ready(function() {
    $("#loginForm").validate({
        rules: {
            username: "required",
            password: "required"
        },
        messages: {
            username: "username is empty",
            password: "password is empty"
        },
        submitHandler: async function() {
            await $.ajax({
                url: "login.php",
                type: "POST",
                data: $('#loginForm').serialize(),
                success: function(data) {
                    let { success, message } = JSON.parse(data);
                    Swal.fire({
                        icon: success ? 'success' : 'error',
                        title: message,
                    }).then(() => {
                        if (success) window.location.href = "home.php"
                    });
                }
            });
        },
    });
});