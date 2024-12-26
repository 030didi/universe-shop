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




// 選取 .shopcard 區塊
const shopcard = document.querySelector(".shopcard");

// 購物車功能邏輯
shopcard.addEventListener("click", (event) => {
    const target = event.target;

    // 處理數量增減
    if (target.classList.contains("quantity-btn")) {
        const action = target.dataset.action;
        const productItem = target.closest(".product-item");
        const quantitySpan = productItem.querySelector(".quantity");
        const priceSpan = productItem.querySelector(".price");
        let quantity = parseInt(quantitySpan.textContent);

        if (action === "increase") {
            quantity++;
        } else if (action === "decrease" && quantity > 1) {
            quantity--;
        }

        quantitySpan.textContent = quantity;
        updateTotal();
    }

    // 處理商品刪除
    if (target.classList.contains("delete-button") || target.closest(".delete-button")) {
        const productItem = target.closest(".product-item");
        productItem.remove();
        updateTotal();
    }
});

// 更新總金額
function updateTotal() {
    const productItems = document.querySelectorAll(".product-item");
    let total = 0;

    productItems.forEach((item) => {
        const price = parseInt(item.querySelector(".price").textContent, 10);
        const quantity = parseInt(item.querySelector(".quantity").textContent, 10);

        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        }
    });

    const totalElement = document.querySelector("#total");
    totalElement.textContent = total;

    if (productItems.length === 0) {
        totalElement.textContent = "0";
        alert("購物車已清空！");
    }
}



});