function checkAccess() {
    if (localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)) == null) {
        document.getElementsByTagName("body").innerHTML = "You Don't Have Access to this page...!";
        window.location.href = "login.html";
        return false;
    }
    else {
        return true;
    }
}

let obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let locObj = JSON.parse(localStorage.getItem(sessionStorage.key(sessionStorage.length - 1)));
let imgdata;

let fillProfile = (function () {
    document.getElementById("fname").value = obj.fname;
    document.getElementById("lname").value = obj.lname;
    document.getElementById("email").value = obj.email;
    document.getElementById("addr").value = obj.addr;

    if (obj.gen === "M") {
        document.getElementById("genM").checked = true;
    } else {
        document.getElementById("genF").checked = true;
    }

    if (locObj.file === undefined) {
        document.getElementById("profile").src = "../images/profile.png"
    } else {
        document.getElementById("profile").src = locObj.file;
    }
})();

let editbtn = document.getElementById("edit");
let savebtn = document.getElementById("submit");

editbtn.addEventListener("click", function () {
    document.getElementById("fname").readOnly = false;
    document.getElementById("lname").readOnly = false;
    document.getElementById("addr").readOnly = false;
    editbtn.style.display = "none";
    savebtn.style.display = "block";
    document.getElementById("inputfile").style.display = "block";
    document.getElementById("propic").style.display = "block";
});

function getRadio(value) {
    obj.gen = value;
    locObj.gen = value;

}

function addProfilePic() {
    let profileImage = document.getElementById("inputfile").files[0];
    let imagereader = new FileReader();
    imagereader.readAsDataURL(profileImage);

    imagereader.onload = function () {
        imgdata = imagereader.result;
        document.getElementById("img").src = imgdata;
    };
}

savebtn.addEventListener("click", function () {
    obj.fname = document.getElementById("fname").value;
    obj.lname = document.getElementById("lname").value;
    obj.addr = document.getElementById("addr").value;
    obj.file = imgdata;
    locObj.fname = document.getElementById("fname").value;
    locObj.lname = document.getElementById("lname").value;
    locObj.addr = document.getElementById("addr").value;
    locObj.file = imgdata;
    localStorage.setItem(sessionStorage.key(sessionStorage.length - 1), JSON.stringify(locObj));
    sessionStorage.setItem(sessionStorage.key(sessionStorage.length - 1), JSON.stringify(obj));
    editbtn.style.display = "block";
    savebtn.style.display = "none";
    document.getElementById("fname").readOnly = true;
    document.getElementById("lname").readOnly = true;
    document.getElementById("addr").readOnly = true;
    document.getElementById("inputfile").style.display = "none";
    document.getElementById("propic").style.display = "none";
});

function logout() {
    if (confirm("Are You Sure?")) {
        sessionStorage.clear();
    }
    else {
        return false;
    }
}

function checkRadio(value) {
    if (value == 1) {
        document.getElementById("genM").checked = true;
    } else if (value == 2) {
        document.getElementById("genF").checked = true;
    }
}