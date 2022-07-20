const Register = document.getElementById('btn-register');
const back_login = document.getElementById('btn-controls-back__login');

Register.onclick = function () {
    var checkValidate = true;

    var name__register = document.getElementById('register-name__input').value;
    var pass__register = document.getElementById('register-pass__input').value;
    var respass__register = document.getElementById('register-respass__input').value;

    var error_nameregister = document.getElementById('error_nameregister');
    var error_passregister = document.getElementById('error_passregister');
    var error_respassregister = document.getElementById('error_respassregister');

    /*
    todo : validate name
    */
    if (name__register.length == 0) {
        error_nameregister.innerHTML = '*Tên đăng ký không được để trống*';
        checkValidate = false;
    }
    else if (name__register.length < 6) {
        error_nameregister.innerHTML = '*Tên đăng ký phải có ít nhất 6 kí tự*'
        checkValidate = false;
    } else {
        var regxSDT1 = /^(0[0-9]{9})$/;
        var regxSDT2 = /^((\(\+84\))\s[0-9]{9})$/;
        var regxEmail = /^([a-zA-Z0-9_\-.]+@{1}[a-zA-Z0-9]+\.?[a-zA-Z]+\.[a-zA-Z]{2,3})$/;
        var testTen1 = regxSDT1.test(name__register);
        var testTen2 = regxSDT2.test(name__register);
        var testTen3 = regxEmail.test(name__register);
        if (!testTen1 && !testTen2 && !testTen3) {
            error_nameregister.innerHTML = "*Tên đăng ký bạn nhập không đúng định dạng*!";
            checkValidate = false;
        } else {
            error_nameregister.innerHTML = "";
        }
    }
    /*
    todo : validate password
    */
    if (pass__register.length == 0) {
        error_passregister.innerHTML = '*Mật Khẩu không được để trống*';
        checkValidate = false;
    } else if (pass__register.length < 6) {
        error_passregister.innerHTML = '*Mật Khẩu phải có ít nhất 6 kí tự*'
        checkValidate = false;
    } else {
        error_passregister.innerHTML = "";
    }
    /*
    todo : validate password
    */
    if (respass__register.length == 0) {
        error_respassregister.innerHTML = '*Bạn phải xác nhận mật khẩu*';
        checkValidate = false;
    } else if (respass__register != pass__register) {
        error_respassregister.innerHTML = '*Mật Khẩu bạn nhập không khớp*'
        checkValidate = false;
    }
    else {
        error_respassregister = "";
    }

    /*
    todo : Redirect(chuyển hướng)
     */
    if (checkValidate == true) {
        window.location = "index.html"
    }
}

back_login.onclick = function () {
    window.location = "login.html"
}
