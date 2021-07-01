document.addEventListener('DOMContentLoaded', function () {

    

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});

class ScrollObserver {
    constructor (els, cb, options) {
        this.els = document.querySelectorAll('.animate-title');
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.options = Object.assign(defaultOptions, options);
        this.init();
    }
    _init(){
        const cb = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // const ta = new TextAnimation(entry.target);
                    // ta.animate();
                    observer.unobserve(entry.target);
                } else {
                }
            });
        };
    }
}