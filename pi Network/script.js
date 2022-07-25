$(document).ready(function () {
    // Validate Username
    $("#contactForm").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4
            },
            lname: {
                required: true,

            },
            email: {
                required: true,
                email: true
            },

            message: {
                required: true
            }

        },
        message: {
            lname: "Enter your last name."
        },





    })



})
