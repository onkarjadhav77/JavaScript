let gen = "";
let imgdata;
let newUser = {
    fname: "",
    lname: "",
    email: "",
    addr: "",
    gen: "",
    pwd: "",
    file: "",
    todoArr: []
};

function getRadio(value) {
    newUser.gen = value;

}

function emailCheck(value) {
    if (value.toLowerCase() !== "" || value.toLowerCase() !== null) {
        if (localStorage.getItem(value.toLowerCase()) === null) {
            document.getElementById("emailCheck").innerHTML = "";
            return true;
        }
        else {
            document.getElementById("emailCheck").innerHTML = "Email is Already exist";
            return false;
        }
    }
    else {
        document.getElementById("emailCheck").innerHTML = "Email can't be empty";
        return false;
    }
}

function pwdValid(value) {
    if (value.length >= 8) {
        var ptn = /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d)/;
        if (value.match(ptn)) {
            document.getElementById("tooltiptext").style.visibility = "hidden";
            document.getElementById("tooltiptext").style.opacity = "0";
            document.getElementById("pwd").style.borderBottom = "1px solid white";
            newUser.pwd = document.getElementById("pwd").value;
            return true;
        }
        else {
            document.getElementById("tooltiptext").style.visibility = "visible";
            document.getElementById("tooltiptext").style.opacity = "1";
            document.getElementById("pwd").style.borderBottom = "solid red";
            return false;
        }
    }
    else {
        document.getElementById("tooltiptext").style.visibility = "visible";
        document.getElementById("tooltiptext").style.opacity = "1";
        document.getElementById("pwd").style.borderBottom = "solid red";
        return false;
    }
}

function pwdCheck(value) {
    let password = document.getElementById("pwd").value;
    let conpassword = document.getElementById("conpwd").value;

    if (conpassword != password) {
        document.getElementById("pwdCheck").innerHTML = "Password Not Matched";
        return false;
    }
    document.getElementById("pwdCheck").innerHTML = "";
    return true;
}

function checkRadio(value) {
    if (value == "M") {
        document.getElementById("genM").checked = true;
        getRadio(value);
    } else if (value == "F") {
        document.getElementById("genF").checked = true;
        getRadio(value);
    }
}

function addProfilePic() {
    let profileImage = document.getElementById("file").files[0];
    let imagereader = new FileReader();
    imagereader.readAsDataURL(profileImage);

    imagereader.onload = function () {
        imgdata = imagereader.result;
        document.getElementById("profile").src = imgdata;
    };
}

function registerUser() {

    newUser.fname = document.getElementById("fname").value;
    newUser.lname = document.getElementById("lname").value;
    newUser.email = document.getElementById("email").value.toLowerCase();
    newUser.addr = document.getElementById("addr").value;
    newUser.file = imgdata;

    if (emailCheck(newUser.email) == true && pwdCheck() == true && pwdValid(newUser.pwd) == true) {

        localStorage.setItem(newUser.email, JSON.stringify(newUser));
        alert("Registered Successfully");
        clear();
        return true;
    }
    else {
        return false;
    }
}


function clear() {
    document.getElementById("fname").value = null;
    document.getElementById("lname").value = null;
    document.getElementById("email").value = null;
    document.getElementById("addr").value = null;
    document.getElementById("pwd").value = null;
    document.getElementById("conpwd").value = null;
    document.getElementsByName("gender").checked = false;
}
