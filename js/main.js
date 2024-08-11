// Selects the users input from the form
const inputval = document.querySelector('input');
// Notes the button from the form
const button = document.querySelector('button');
// Variable to be called later to transform into an H1
const replace = document.getElementById('question');
// Variable to be called later which will show the image response
const replace_ans = document.getElementById('answers');


const crtImg = () => {
    
    // Variable that stores image
    const image = document.createElement('img');

    // Array of Images
    let images = ['./img/magic8ball_3.png', './img/magic8ball_4.png', './img/magic8ball_5.png', './img/magic8ball_4.png', './img/magic8ball_5.png', './img/magic8ball_6.png', './img/magic8ball_7.png', './img/magic8ball_8.png', './img/magic8ball_9.png', './img/magic8ball_10.png', './img/magic8ball_11.png', './img/magic8ball_12.png', './img/magic8ball_13.png', './img/magic8ball_14.png', './img/magic8ball_15.png', './img/magic8ball_16.png', './img/magic8ball_17.png', './img/magic8ball_18.png', './img/magic8ball_19.png', './img/magic8ball_20.png'];

    // Randomly selects image within the array above
    let randomImage = Math.floor(Math.random() * images.length);

    // Source of the predefined image variable is the random image that was generated
    image.src = images[randomImage]

    // Replaces the answer with the randomly selected generator.
    replace_ans.appendChild(image);
    image.style.width = ('28rem');
    
}

// Listens for a user 'Click' on the button & then calls the function above once clicked
button.addEventListener('click', function() {
    
    // Makes the input from the user into an H1 
    replace.innerHTML = 
    `
    <h1 style="text-align: center; padding-top: 22vh;">${inputval.value}</h1>
    `
    ;

    crtImg();
    
});




