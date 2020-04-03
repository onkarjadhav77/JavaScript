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
    if (value !== document.getElementById("pwd").value) {
        document.getElementById("pwdCheck").innerHTML = "Password Not Matched";
        // return false;
    }
    else {
        document.getElementById("pwdCheck").innerHTML = "";
        // return true;
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
    newUser.pwd = document.getElementById("pwd").value;
    // let imagefile= document.getElementById("profile");
    // let img= getBase64Image(imagefile);

    newUser.file=imgdata;

    if (emailCheck(newUser.email) == true) {

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
    document.getElementById("file").value = null;
    document.getElementById("conpwd").value = null;
    if (document.getElementById("genM").checked == true) {
        document.getElementById("genM").checked = false;
    }
    else {
        document.getElementById("genF").checked = false;
    }
}







