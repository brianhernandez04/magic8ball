const inputval = document.querySelector('input');

const button = document.querySelector('button');

const replace = document.getElementById('question');

const replacetwo = document.getElementById('answers');



    



const crtImg = () => {

    let image = document.createElement('img');
    image.src = ['./img/magic8ball_3.png'/*, './img/magic8ball_4.png', './img/magic8ball_5.png', './img/magic8ball_4.png', './img/magic8ball_5.png', './img/magic8ball_6.png', './img/magic8ball_7.png', './img/magic8ball_8.png', './img/magic8ball_9.png', './img/magic8ball_10.png', './img/magic8ball_11.png', './img/magic8ball_12.png', './img/magic8ball_13.png', './img/magic8ball_14.png', './img/magic8ball_15.png', './img/magic8ball_16.png', './img/magic8ball_17.png', './img/magic8ball_18.png', './img/magic8ball_19.png', './img/magic8ball_20.png' */];
    replacetwo.appendChild(image);
    image.style.width = ('28rem')
    
}


button.addEventListener('click', function() {
    
    replace.innerHTML = 
    `
    <h1 style="text-align: center; padding-top: 20vh;">${inputval.value}</h1>
    `
    ;
    crtImg();

    
    
});




