const frame = document.querySelector('section');
const lists = frame.querySelectorAll('article');
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists) {

    let pic = el.querySelector(".pic");
    let play = el.querySelector('.play');
    let pause = el.querySelector('.pause');
    let load = el.querySelector('.load');

    play.addEventListener("click", e => {
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        e.currentTarget.closest("article").querySelector("audio").play();

        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.opacity = '0.6';
        e.currentTarget.closest("article").querySelector('.pause').style.transform = 'scale(1.5)';
        e.currentTarget.closest("article").querySelector('.pause').style.opacity = '0.9';
    });

    pause.addEventListener("click", e => {
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
        e.currentTarget.closest("article").querySelector("audio").pause();

        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.opacity = '0.6';
        e.currentTarget.closest("article").querySelector('.play').style.transform = 'scale(1.5)';
        e.currentTarget.closest("article").querySelector('.play').style.opacity = '0.9';
    });

    load.addEventListener("click", e => {
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        e.currentTarget.closest("article").querySelector("audio").load();
        e.currentTarget.closest("article").querySelector("audio").play();

        e.currentTarget.closest("article").querySelector('.play').style.transform = 'scale(1)';
        e.currentTarget.closest("article").querySelector('.play').style.opacity = '0.6';

        e.currentTarget.closest("article").querySelector('.pause').style.transform = 'scale(1.5)';
        e.currentTarget.closest("article").querySelector('.pause').style.opacity = '0.9';

    });


    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;

    pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`;
    i++;
}