$(function() {

    $.validator.setDefaults({
        errorClass: 'help-block'
    });


    $(function() {

        $("#login").validate({
            rules: {
                user: {
                    required: true,
                    email: true

                },
                pass: "required"
            },
            message: {
                user: {
                    required: 'Please enter a valid user',
                    email: 'Please enter a valid email'
                },
                pass: 'Please enter a valid password'
            }
        });
    });

    $(function() {

        $("#registration").validate({
            rules: {
                reguser: {
                    required: true,
                    email: true

                },
                regpass: "required",
                repass: {
                    required: true,
                    equalTo: '#regpass'
                }
            },
            message: {
                reguser: {
                    required: 'Please enter a valid user',
                    email: 'Please enter a valid email'
                },
                regpass: {
                    required: 'Please enter a valid password'
                }
            }
        });
    });
});