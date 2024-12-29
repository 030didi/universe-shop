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
});
