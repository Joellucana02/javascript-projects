const about = document.querySelector('.about'),
content = document.querySelectorAll('.content'),
btns = document.querySelectorAll('.tab-btn');

about.addEventListener('click',(e)=>{
    //console.log()
    let id = e.target.dataset.id;
    if(id){
        btns.forEach((btn)=>{
            console.log(e.target)
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        content.forEach((art)=>{
            art.classList.remove('active');
        })
        let myElem = document.getElementById(id);
        myElem.classList.add('active') 
    }
})