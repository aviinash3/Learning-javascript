var email= true;
var facebook = false;
var google= true;

if (email === true){
    console.log ("logedin with email");

}
if (facebook === true){
    console.log ("logedin with facebook");

}
if (google === true){
    console.log ("logedin with google");

}
//// with or operators

if (email || google || facebook === true ){
    console.log("login sucessfull")
}

if (email && google && facebook === true ){
    console.log("login sucessfull with and operator")
}