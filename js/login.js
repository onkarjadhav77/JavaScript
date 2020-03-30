function loginUser(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let obj = JSON.parse(localStorage.getItem("user"));

    if(obj.email === email && obj.pwd === pwd)
    {
        document.getElementById("msg").innerHTML=null;
        return true;
    }
    else{
        document.getElementById("msg").innerHTML="Email or Password is incorrect";
    }
}