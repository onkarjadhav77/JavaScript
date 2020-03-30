let gen = "";

let newUser = {
    fname: "",
    lname: "",
    email: "",
    addr: "",
    gen: "",
    pwd: "",
    file: ""
};

function getRadio(value) {
    newUser.gen = value;

}

function registerUser() {
    newUser.fname = document.getElementById("fname").value;
    newUser.lname = document.getElementById("lname").value;
    newUser.email = document.getElementById("email").value;
    newUser.addr = document.getElementById("addr").value;
    newUser.pwd = document.getElementById("pwd").value;
    newUser.file = document.getElementById("file").value;

    localStorage.setItem("user", JSON.stringify(newUser));
    console.log("Registered Successfully");
    clear();
}

function clear() {
    document.getElementById("fname").value = null;
    document.getElementById("lname").value = null;
    document.getElementById("email").value = null;
    document.getElementById("addr").value = null;
    document.getElementById("pwd").value = null;
    document.getElementById("file").value = null;
    document.getElementById("conpwd").value = null;
    document.getElementById("genM").checked = false;
    document.getElementById("gen").checked = false;
}

function pwdCheck(value) {
    if (value !== document.getElementById("pwd").value) {
        document.getElementById("pwdCheck").innerHTML = "Password Not Match";
    }
    else {
        document.getElementById("pwdCheck").innerHTML = null;
    }
}