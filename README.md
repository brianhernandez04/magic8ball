# Magic 8-Ball Image Selector

This JavaScript project simulates a Magic 8-Ball by selecting and displaying a random image from a predefined set of images each time a user submits a question. The user's input is displayed as a heading above the image.

## Features

- **Dynamic User Interaction:** Takes user input from a form and transforms it into a heading.
- **Random Image Selection:** Randomly selects an image from a set of 20 Magic 8-Ball images.
- **Responsive Design:** Images are displayed in a consistent size.

## How It Works

1. **User Input:** The user types a question into the input field.
2. **Button Click:** When the user clicks the button, the following occurs:
   - The input value is displayed as an `H1` heading.
   - An image is randomly selected from the predefined array of images.
   - The selected image is displayed beneath the question.

## Example Usage

1. **Input Field:** User enters "Will I get a promotion?"
2. **Button Click:** The question "Will I get a promotion?" is displayed as a heading, and a randomly chosen Magic 8-Ball image is shown below it.

![Screenshot 2024-08-11 160102](https://github.com/user-attachments/assets/6d0cb12f-5501-44f6-982a-b4ed11bd714f)

## Code Explanation

- **User Input & Button:** 
    ```javascript
    const inputval = document.querySelector('input');
    const button = document.querySelector('button');
    ```

- **Element to Display Question:**
    ```javascript
    const replace = document.getElementById('question');
    ```

- **Element to Display Image:**
    ```javascript
    const replace_ans = document.getElementById('answers');
    ```

- **Image Creation & Random Selection Function:**
    ```javascript
    const crtImg = () => {
        const image = document.createElement('img');
        let images = ['./img/magic8ball_3.png', './img/magic8ball_4.png', ...];
        let randomImage = Math.floor(Math.random() * images.length);
        image.src = images[randomImage];
        replace_ans.appendChild(image);
        image.style.width = '28rem';
    }
    ```

- **Event Listener for Button Click:**
    ```javascript
    button.addEventListener('click', function() {
        replace.innerHTML = `<h1 style="text-align: center; padding-top: 22vh;">${inputval.value}</h1>`;
        crtImg();
    });
    ```

## Installation & Setup

1. Clone the repository to your local machine.
2. Ensure you have the image files in the `/img/` directory.
3. Open the HTML file in your browser via Live Server. * Ensure you have the Live Server extension in your code editor *

## Version Control

This project is managed using git. Clone the repository and track changes with commit messages.

## Learn More

For more information on JavaScript fundamentals, refer to the [MDN Web Docs]
https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/

## Credits

This project was developed by Brian Hernandez. 
