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


    //購物車動態


    // 結帳按鈕
    const getShopButton = document.getElementById("getshop");
    if (getShopButton) {
        getShopButton.addEventListener("click", function () {
            const paymentMethod = document.querySelector('input[name="usetopay"]:checked').value;
            if (paymentMethod === "VISA") {
                window.location.href = "visa.html";
            } else if (paymentMethod === "cash") {
                swal("付款完成！", "可在會員中心確認訂單資訊！", "success");
            }
        });



    }
    //購物車按鈕曾減少刪除

    // 選擇所有刪除按鈕
    const deleteButtons = document.querySelectorAll('.delete');

    // 刪除商品功能
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cartItem = this.closest('.cart-item'); // 找到對應的商品項目
            cartItem.remove(); // 移除該商品
        });
    });

    // 控制數量增加與減少
    const quantityControls = document.querySelectorAll('.controls');

    quantityControls.forEach(control => {
        const decreaseButton = control.querySelector('button:nth-child(1)');
        const quantityDisplay = control.querySelector('.quantity');
        const increaseButton = control.querySelector('button:nth-child(3)');

        // 減少數量
        decreaseButton.addEventListener('click', function () {
            let quantity = parseInt(quantityDisplay.textContent, 10);
            if (quantity > 1) { // 避免數量小於 1
                quantityDisplay.textContent = quantity - 1;
            }
        });

        // 增加數量
        increaseButton.addEventListener('click', function () {
            let quantity = parseInt(quantityDisplay.textContent, 10);
            quantityDisplay.textContent = quantity + 1;
        });





        // 初始調整高度
        adjustHeights();


        const checkbox = document.getElementById('sideMenu-active');
        const sideMenu1 = document.querySelector('.sideMenu');

        if (!checkbox || !sideMenu1) {
            console.error('Error: Missing #sideMenu-active or .sideMenu elements.');
            return;
        }

        // 監聽 checkbox 狀態改變
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                // 當 checkbox 被選中，滾動至頂部
                window.scrollTo({
                    top: 0,
                    behavior: 'auto', // 平滑滾動
                });
            } else {
                // 當 checkbox 被取消選中，滾動至頂部
                window.scrollTo({
                    top: 0,
                    behavior: 'auto', // 平滑滾動
                });
            }
        });
    });
});

