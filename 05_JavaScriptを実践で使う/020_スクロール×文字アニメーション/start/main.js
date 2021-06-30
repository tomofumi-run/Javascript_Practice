document.addEventListener('DOMContentLoaded', function () {

// 監視対象をanimate-titleに設定
    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                 //文字が画面に入った時に、以下の処理を行う
                const ta = new TextAnimation(entry.target);
                ta.animate();
                //一度アニメーションが発火したらそのままにする
                observer.unobserve(entry.target);
            } else {
            }
        });
        // alert('intersecting');
    }
    const options = {
        root: null,
        rootMargin: "-300px 0px",
        threshold: [0, 0.5, 1]
    };
    const io = new IntersectionObserver(cb, options);
//監視対象をobserveに格納。複数を監視するのでEach
    els.forEach(el => io.observe(el));
});

// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
