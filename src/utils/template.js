
window.onload = function($) {
  document.querySelector('.nav-item.dropdown').addEventListener('click',function() {
    if(this.className.indexOf('show') >= 0){
      this.children[0].setAttribute('aria-expanded', false);
    }
    else{
      this.children[0].setAttribute('aria-expanded', true);
    }
    this.children[1].classList.toggle('show');
    this.classList.toggle('show');
  });
  
  document.querySelector('.icon-menu').addEventListener('click',function() {
    document.querySelector('.sidebar').classList.toggle('active');
  });   
}