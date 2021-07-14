const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((e)=>{
    e.addEventListener('click',(ej)=>{
        const styles = ej.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            document.body.style.background = "#6CBE02";
        }else if(count<0){
            document.body.style.background = "#A1321D";
        }
        else{
            document.body.style.background = "#555";
        }
        value.textContent = count;
    })
})