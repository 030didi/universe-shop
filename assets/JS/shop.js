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
    // 結帳按鈕事件
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

    // 初始調整高度
    adjustHeights();
});

