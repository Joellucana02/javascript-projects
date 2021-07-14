const hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',(e)=>{
    //console.log(e.target);
    let hexColor = '#';
    
    for(let i = 0;i<6;i++){
        hexColor += hexArr[randomNum()];
    }
    console.log(hexColor)
    color.textContent = hexColor;
    document.body.style.background = hexColor;
})
let randomNum = ()=>{
    return Math.floor(Math.random()*hexArr.length);
}