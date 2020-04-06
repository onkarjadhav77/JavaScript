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
    if (value !== "" || value !== null) {
        if (localStorage.getItem(value) === null) {
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

function pwdCheck(value) {
    let password = document.getElementById("pwd").value;
    let conpassword = document.getElementById("conpwd").value;

    if (conpassword != password) {
        document.getElementById("pwdCheck").innerHTML = "Password Not Matched";
        return false;
    }
    document.getElementById("pwdCheck").innerHTML = "";
    newUser.pwd = document.getElementById("pwd").value;
    return true;
}

function checkRadio(value) {
    if (value == 1) {
        document.getElementById("genM").checked = true;
    } else if (value == 2) {
        document.getElementById("genF").checked = true;
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
    newUser.email = document.getElementById("email").value;
    newUser.addr = document.getElementById("addr").value;
    newUser.file = imgdata;

    if (emailCheck(newUser.email) == true && pwdCheck() == true) {

        localStorage.setItem(newUser.email, JSON.stringify(newUser));
        alert("Registered Successfully");
        return true;
    }
    else {
        return false;
    }
}







