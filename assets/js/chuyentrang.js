var cart_btn = document.getElementById('header__cart-see-cart');
 cart_btn.onclick = function(){
    window.location="Cart.html";
 };

 const cart__items = document.querySelectorAll(".header__cart-item")
 
 for(const cart__item of cart__items){
    cart__item.addEventListener('click', chuyentrang)
 }

 function chuyentrang(){
    window.location="Cart.html";
 }

 const product__items = document.querySelectorAll(".home-product-item");
 for(const product__item of product__items){
    product__item.addEventListener('click',chuyentrang2)
 }
 function chuyentrang2(){
    window.location="product__detail.html";
 }