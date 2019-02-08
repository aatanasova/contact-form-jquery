$(document).ready(function(){
    $('#forma').submit(function(event) {
        event.preventDefault(); // toa shto e defaultna akcija(prati ja formata i refresiraj ja stranata) stopiraj go
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
         
        $(".error").remove();
     
  
        if (name.length < 3) {
            $('#name').after('<span class="error">The name must be at least 3 characters long</span>');
        }

        var element = email.split("");

        for( var i=0; i<element.length; i++){
            if ( email < 5 && element[i] == "+" ) {
                $('#email').after('<span class="error">The E-mail address must be at least 5 characters long and must not include the + sign</span>');
            } 

        }
        
        if (message.length < 10) {
            $('#message').after('<span class="error">The message must be at least 10 characters long.</span>');
        } else {
            $('#forma').slideUp("slow");
            $('#showText').slideDown('slow');
        }

    });

    $('#openForm').click(function(event){
        event.preventDefault();
        $('#showText').slideUp('slow');
        $('#forma').slideDown('slow');
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
});