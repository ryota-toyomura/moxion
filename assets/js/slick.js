$(function () {
    $('.p-slide__main').slick({
        pauseOnHover: false,
        centerPadding: "40%",
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化
        asNavFor: ".p-slide__thumbnails", // サムネイルと同期
    });
    $(".p-slide__thumbnails").slick({
        slidesToShow: 7, // サムネイルの表示数
        asNavFor: ".p-slide__main", // メイン画像と同期
        focusOnSelect: true, // サムネイルクリックを有効化
    });
});
