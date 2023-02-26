var complemail;
var complpassword;

 var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

function signup(){

    complemail = email
    complpassword = password
    
}

var complemailsign = document.getElementById("emailsign").value;
var complpasswordsign = document.getElementById("passwordsign").value;

function signin(){

    if(complemailsign == complemail && complpasswordsign == complpassword){
        document.getElementById('complet').setAttribute("href","./netflix.html");
    }
    else{
        document.getElementById('complet').setAttribute("href","./home.html");
    }

}

