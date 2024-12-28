// 星星js
// 獲取所有的星星元素
const stars = document.querySelectorAll('.star');

// 遍歷每顆星星並添加點擊事件
stars.forEach(star => {
    star.addEventListener('click', () => {
        // 清除所有星星的 selected 類
        stars.forEach(s => s.classList.remove('selected'));
        
        // 找到點擊的星星的 data-value，並將其左邊的所有星星標記為 selected
        const rating = star.getAttribute('data-value');
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= rating) {
                s.classList.add('selected');
            }
        });

        // 輸出評分
        console.log(`Rated: ${rating} stars`);
    });
});