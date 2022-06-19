const inputval = document.querySelector('input');

const button = document.querySelector('button');

const replace = document.getElementById('question');

const eightballImage = () => {
    // add the random images here (currently this part not workin below)
    let images = ["magic8ball_3.png", "magic8ball_15.png"];
    let imagesLength =  images.length;
    let randomNumber = Math.random();
    randomNumber = randomNumber * imagesLength;
    randomNumber = Math.floor(randomNumber);
    let chosenImage = images[randomNumber];
    answers.src = chosenImage;
}

button.addEventListener('click', function() {
    eightballImage();
    replace.innerHTML = 
    `
    <h1>${inputval.value}</h1>
    `
    ;
    
});



