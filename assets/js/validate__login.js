const Login = document.getElementById('btn-login');
const Back_Register = document.getElementById('btn-controls-back__register');
var checkValidate = true;

Login.onclick = function () {
    var name__login = document.getElementById('login-name__input').value;
    var pass__login = document.getElementById('login-password__input').value;
    var error_namelogin = document.getElementById('error_namelogin');
    var error_passlogin = document.getElementById('error_passwordlogin');
    /*
    todo : Validate Name
    */
    if (name__login.length == 0) {
        error_namelogin.innerHTML = '*Tên đăng nhập không được để trống*';
        checkValidate = false;
    }
    else if (name__login.length < 6) {
        error_namelogin.innerHTML = '*Tên đăng nhập phải có ít nhất 6 kí tự*'
        checkValidate = false;
    } else {
        // var regxTen = /^((\(\+84\))\s?[0-9]{9})|(0[0-9]{9})|([a-zA-Z0-9_\-.]+@{1}[a-zA-Z0-9]+\.?[a-zA-Z]+\.[a-zA-Z]{2,3})$/;
        var regxSDT1 = /^(0[0-9]{9})$/;
        var regxSDT2 = /^((\(\+84\))\s[0-9]{9})$/;
        var regxEmail = /^([a-zA-Z0-9_\-.]+@{1}[a-zA-Z0-9]+\.?[a-zA-Z]+\.[a-zA-Z]{2,3})$/;
        var testTen1 = regxSDT1.test(name__login);
        var testTen2 = regxSDT2.test(name__login);
        var testTen3 = regxEmail.test(name__login);
        if (!testTen1 && !testTen2 && !testTen3) {
            error_namelogin.innerHTML = "*Tên đăng nhập không hợp lệ*!";
            checkValidate = false;
        } else {
            error_namelogin.innerHTML = "";
        }
    }
    /*
   todo : Validate pass
   */

    if (pass__login.length == 0) {
        error_passlogin.innerHTML = '*Mật khẩu không được để trống*';
        checkValidate = false;
    } else {
        error_passlogin.innerHTML = "";
    }
    /*
    todo : Redirect(chuyển hướng)
     */
    if (checkValidate == true) {
        window.location = "index.html"
    }
};

Back_Register.onclick = function () {
    window.location = "Register.html";
};