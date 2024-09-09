$(function() {
    // モーダルウィンドウ
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(window).load(function() {
    // ネスレのQRコードから飛んできたユーザーにポップアップを表示させる
    if (getParam('from') == 'purina_qr') {
    $.magnificPopup.open({
        items: {
        src: '#purina_popup'
        },
        type: 'inline',
        modal: true,
    }, 0);
}
});

$(document).ready(function () {
    // リンクをコピー
    $('.benefits2024_coupon_code_copy-url').click(function () {
        const url = $(this).data('url');

        // クリップボードにコピー
        navigator.clipboard.writeText(url).then(function () {
            // フラッシュメッセージ表示
            $('.benefits_coupon_code_success-msg').fadeIn("slow", function () {
                $(this).delay(2000).fadeOut("slow");
            });
        }, function (err) {
            console.error('クリップボードへの書き込みに失敗しました: ', err);
        });
    });
    $('.benefits2024_coupon_code_copy-url03').click(function () {
        const url = $(this).data('url');

        // クリップボードにコピー
        navigator.clipboard.writeText(url).then(function () {
            // フラッシュメッセージ表示
            $('.benefits_coupon_code_success-msg').fadeIn("slow", function () {
                $(this).delay(2000).fadeOut("slow");
            });
        }, function (err) {
            console.error('クリップボードへの書き込みに失敗しました: ', err);
        });
    });

    // クーポンコードをコピー
    $('.benefits2024_coupon_code_copy').click(function () {
        const couponCode = 'YOUR_COUPON_CODE'; // ここにクーポンコードを設定
        navigator.clipboard.writeText(couponCode).then(function () {
            alert('クーポンコードがコピーされました: ' + couponCode);
        }, function (err) {
            console.error('クリップボードへの書き込みに失敗しました: ', err);
        });
    });
});
