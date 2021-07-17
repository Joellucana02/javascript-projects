let menuDisplay = ()=>{
    const btn = document.getElementById('btn'),
    header = document.querySelector('.head'),
    tags = document.querySelector('.tags__navbar'),
    tagsArr = document.querySelectorAll('.tags__navbar li'),
    link = document.querySelectorAll('.tags__navbar li a');
    btn.addEventListener('click', ()=>{
        tags.classList.toggle('tags__navbar-active');
        tagsArr.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation ='';    
            }else{
                link.style.animation = `navLinkFade .5s ease forwards ${index/7 +.3}s`
            }
        })
    })
    link.forEach((e)=>{
        e.addEventListener('click', (e)=>{
            tags.classList.add('tags__navbar-active');
            let fixedNav = document.querySelector('.header');
        e.preventDefault();
            let headerHeight= header.getBoundingClientRect().height;
            let id = e.currentTarget.getAttribute("href").slice(1);
            let element = document.getElementById(id);
            let position = element.offsetTop - headerHeight;
            console.log(element.offsetTop, headerHeight)
        if(!fixedNav){
            position -= headerHeight;
        }
            window.scrollTo({
                left:0,
                top:position,
            })
        })
    })
    console.log(link)
}
document.addEventListener('DOMContentLoaded', menuDisplay);