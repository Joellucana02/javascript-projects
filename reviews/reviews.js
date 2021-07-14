const reviewsArr = [
    {
        id:1,
        name:'Jane Doe',
        job:'HR',
        img:'https://randomuser.me/api/portraits/women/33.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:2,
        name:'Jane Smith',
        job:'Designer',
        img:'https://randomuser.me/api/portraits/women/43.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:3,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/65.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:4,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/61.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:5,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/49.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:6,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/52.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:7,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/68.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:8,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/34.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
    {
        id:9,
        name:'Kate Doe',
        job:'Painter',
        img:'https://randomuser.me/api/portraits/women/29.jpg',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis autem natus consectetur voluptas, quam vel cupiditate molestiae delectus quos, officiis animi dolor dolores repudiandae id iste deleniti numquam praesentium!',
    },
]
const nameP = document.querySelector('.name-p'),
job = document.querySelector('.job'),
img = document.querySelector('.img-container'),
info = document.querySelector('.info'),
prev = document.querySelector('.btn-prev'),
next = document.querySelector('.btn-next'),
random = document.querySelector('.btn-random');
currentReview = 0;
document.addEventListener('DOMContentLoaded',(e)=>{
    actualReview(currentReview)
})
let actualReview = (e)=>{
    const review = reviewsArr[e];
    img.src = review.img;
    nameP.textContent = review.name;
    job.textContent = review.job
    info.textContent = review.info
}
next.addEventListener('click', (e)=>{
    if(currentReview===reviewsArr.length-1) return;
    currentReview++;
    actualReview(currentReview)
})
prev.addEventListener('click', (e)=>{
    if(currentReview===0) return;
    currentReview--;
    actualReview(currentReview)
})
random.addEventListener('click', (e)=>{
    actualReview(Math.floor(Math.random()*reviewsArr.length));
})