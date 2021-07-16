const wrapper = document.querySelector('.wrapper'),
btn = document.querySelector('.btn__next');
let api = 'https://randomuser.me/api/';
let userArr = [];
let randomUser = async ()=>{
    userArr = [];
    try {
        for(let i=0;i<2;i++){
            let rawData = await axios.get(api),
            data = await rawData.data,
            user = await data.results[0];
            userArr.push(user);
        }  
        userArr.forEach((item,index)=>{
            console.log(index, userArr.length)
            wrapper.insertAdjacentHTML('afterend',box(item));
        })
        console.log(userArr);
    } catch (error) {
        console.warn(error)
    }
}
btn.addEventListener('click', randomUser);
document.addEventListener('DOMContentLoaded', randomUser)
let box = (user)=>{
    return `
        <div>
        <img src="${user.picture.large}" alt="${user.dob.gender}">
            <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>From: <span>${user.location.country}<span></p>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
            
        </div>
        `
    }
