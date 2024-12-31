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

    // 切換表單顯示的邏輯
    document.getElementById("loginSwitch").addEventListener("click", function () {
        document.getElementById("loginForm").classList.add("active");
        document.getElementById("registerForm").classList.remove("active");
        this.classList.add("active");
        document.getElementById("registerSwitch").classList.remove("active");
    });

    document.getElementById("registerSwitch").addEventListener("click", function () {
        document.getElementById("registerForm").classList.add("active");
        document.getElementById("loginForm").classList.remove("active");
        this.classList.add("active");
        document.getElementById("loginSwitch").classList.remove("active");
    });

});



