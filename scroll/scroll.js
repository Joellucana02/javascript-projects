const date = document.querySelector('.date'),
linksUl = document.querySelector('.tags__navbar'),
header = document.querySelector('.head'),
topBtn = document.querySelector('.top-btn');

date.innerHTML = new Date().getFullYear();

/* let ulHeight = linksUl.getBoundingClientRect();
console.log(ulHeight)

 */
window.addEventListener('scroll',(e)=>{
    let scrollheight = window.pageYOffset;
    const navbarHeight = header.getBoundingClientRect().height;
    if(scrollheight>navbarHeight){
        header.classList.add('header');
        topBtn.classList.add('top-btn-active');
    }else{
        header.classList.remove('header');
        topBtn.classList.remove('top-btn-active');
    }
    console.log(navbarHeight)
})
topBtn.addEventListener('click',(e)=>{
    window.scrollTo({
        left:0,
        top:0,
    })
})