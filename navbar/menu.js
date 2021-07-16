let menuDisplay = ()=>{
    const btn = document.getElementById('btn'),
    tags = document.querySelector('.tags__navbar'),
    tagsArr = document.querySelectorAll('.tags__navbar li');
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
}
document.addEventListener('DOMContentLoaded', menuDisplay);