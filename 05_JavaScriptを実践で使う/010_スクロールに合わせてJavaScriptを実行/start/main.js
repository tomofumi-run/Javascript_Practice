const child = document.querySelector('.child');
const cb = function(entries,observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('inview');
      entry.target.classList.add('inview');
      // alert('入ったな！');
      // observer.unobserve(entry.target);
    } else {
      console.log('outview');
      // alert('さようなら！');
    }
  });
  // alert('あぶなーーーい');
}

const options = {
  root: null,
  rootMargin: "0px 0px 0px -100px",
  threshold: 0
};

const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
