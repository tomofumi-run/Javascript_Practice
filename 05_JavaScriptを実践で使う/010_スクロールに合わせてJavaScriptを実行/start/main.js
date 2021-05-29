const child = document.querySelector('.child');
const cb = function(entries,observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('hoge');
      entry.target.classList.add('inview');
      // observer.unobserve(entry.target);
    }else{
      console.log('unko');
      entry.target.classList.remove('inview');

    }
  })
  // alert('intersecting');
}
const options = {
  root: null,
  rootMargin: "-100px 0px 0px 0px",
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child2);
// io.observe(child3);