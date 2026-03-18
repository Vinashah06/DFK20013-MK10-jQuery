$(document).ready(function(){

    $("#userLoginForm").on("submit", function(event){

        event.preventDefault();

        var username = $("#user").val();
        var password = $("#pass").val();

        if(username.length > 0 && password.length > 0)
        {
            $.mobile.changePage("#pageSuccess");
        }
        else
        {
            $("#errorPopup").popup("open");
        }

    });

});