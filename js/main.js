function check(form)
{
    if(form.email.value == "simranferwani99@gmail.com" && form.pword.value == "mypswrd")
{
    window.open('signin.html')
}
else{
    alert("Error Password or Username")
}
}
/*var objPeople=[
    {
        email:"simranferwani99@gmail.com",
        password:"mypswrd"
    },
    {
        email:"xyz.email.com",
        password:"xyz"
    },
    {
        email:"abcd.email.com",
        password:"abcd"
    }
]

function login(){

var email = document.getElementById("email").value
var password = document.getElementById("password").value

for( var i = 0 ; i < objPeople.length ; i++)
{
    if(email == objPeople[i].email && password == objPeople[i].password)
    {
    window.open('index.html')
    }
    else{
        alert("Error Password or username")
    }
}
}


function registerUser(){
    var registeremail =document.getElementById("email").value
    var registerpassword =document.getElementById("password").value
    var dob =document.getElementById("date").value
    var position =document.getElementById("position").value

    var newUser={
    email: registeremail,
    password: registerpassword,


}
objPeople.push(newUser)
console.log(objPeople)
}
*/