const red = document.querySelector('.item1');
const green = document.querySelector('.item2');
const blue = document.querySelector('.item3');
const grey = document.querySelector('.item4');
const randomColor1 = document.querySelector('.item5');
const randomColor2 = document.querySelector('.item6');

const fillRed  = () =>
{
    red.addEventListener('click', () =>
    {
        red.classList.toggle('red');
    });
};

const fillGreen = () => 
{
    green.addEventListener('click', () =>
    {
        green.classList.toggle('green');
    });
};

const fillBlue = () => 
{
    blue.addEventListener('click', () =>
    {
        blue.classList.toggle('blue');
    });
};
    

const fillGrey = () => 
{
    grey.addEventListener('click', () =>
    {
        grey.classList.toggle('grey');
    });
};


const fillRandomColor1 = () => 
{
    randomColor1.addEventListener('click', () =>
    {
        const colorArray = ['cyan', 'violet', 'lightblue', 'cyan', 'red', 'green', 'blue', 'grey'];
        let randomNumber = Math.floor(Math.random() * colorArray.length);

        randomColor1.textContent = colorArray[randomNumber];
        randomColor1.style.backgroundColor = `${colorArray[randomNumber]}`;
    });
};


const fillRandomColor2 = () => 
{
    randomColor2.addEventListener('click', () =>
    {
        const colorArray = ['cyan', 'violet', 'lightblue', 'cyan', 'red', 'green', 'blue', 'grey', 'orange'];
        let randomNumber = Math.floor(Math.random() * colorArray.length);
    
        randomColor2.textContent = colorArray[randomNumber];
        randomColor2.style.backgroundColor = `${colorArray[randomNumber]}`;
    });
};

fillRed();
fillGreen();
fillBlue();
fillGrey();
fillRandomColor1();
fillRandomColor2();