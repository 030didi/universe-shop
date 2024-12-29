//加入購物車
 // 減少數量按鈕
 $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCart(name);  // 減少數量 1
    displayCart();
  });
  
  // 增加數量按鈕
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.addItemToCart(name, 1);  // 增加數量 1
    displayCart();
  });
  
  // 直接修改數量框
  $('.show-cart').on("change", ".item-count", function(event) {
    var name = $(this).data('name');
    var count = Number($(this).val());  // 獲取用戶輸入的數量
    if (count > 0) {  // 確保數量大於 0
      shoppingCart.setCountForItem(name, count);  // 更新商品數量
    } else {
      shoppingCart.removeItemFromCartAll(name);  // 若數量為 0，則移除商品
    }
    displayCart();
  });
    // 將數量加入購物車
    $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    var quantity = Number($('#quantity').val()); // 從input框中獲取數量
    shoppingCart.addItemToCart(name, price, quantity); // 將數量傳遞給購物車
    displayCart();
    });



// 子選單下拉
$(document).ready(function () {
    // 點擊主選單項目，顯示或隱藏子選單
    $('.submenu > a').click(function () {
        // 切換 active 類來控制顯示與隱藏
        $(this).parent().toggleClass('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sideMenuToggle = document.getElementById('sideMenu-active');
    const container = document.querySelector('.container');
    const sideMenu = document.querySelector('.sideMenu');
    const article = document.querySelector('article');
    const footer = document.querySelector('footer');

    function adjustHeights() {
        const newHeight = Math.max(sideMenu.scrollHeight, article.scrollHeight);
        container.style.height = newHeight + 'px';
        sideMenu.style.height = newHeight + 'px';
        article.style.height = newHeight + 'px';
    }

    sideMenuToggle.addEventListener('change', function () {
        adjustHeights();
    });

    document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
            adjustHeights();
        });
    });

    // 初始調整高度
    adjustHeights();
});

document.querySelector('.add-to-cart').addEventListener('click', function(event) {
    event.preventDefault();
    var name = this.getAttribute('data-name');
    var price = this.getAttribute('data-price');
    // 在這裡加入購物車的處理邏輯
    console.log('商品名稱: ' + name + ', 價格: ' + price);
});