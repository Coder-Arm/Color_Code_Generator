const colorInput = document.getElementById('color');
const hexCode = document.getElementById('hex-code');
const rgbCode = document.getElementById('rgb-code');
const hslCode = document.getElementById('hsl-code');
const copyBtns = document.querySelectorAll('.copy');


colorInput.addEventListener('input',()=>{
    document.body.style.backgroundColor = colorInput.value;
    hexCode.innerText = colorInput.value; // #RRGGBB
    rgbConverter(colorInput.value);
})

function rgbConverter(value){
    //16 because value is in hexadecimal format
    const red = parseInt(value.slice(1, 3), 16);
    const green = parseInt(value.slice(3, 5), 16);
    const blue = parseInt(value.slice(5, 7), 16);
    rgbCode.innerText = `rgb(${red},${green},${blue})`
}
// async/await used becoz its an api that returns promise
copyBtns[0].addEventListener('click', async ()=>{
   await navigator.clipboard.writeText(hexCode.innerText);
   const copied = document.createElement('div');
   copied.className = "copied";
   copied.innerText = 'copied';
   document.querySelectorAll('.code-box-item')[0].appendChild(copied);

   setTimeout(() => {
    copied.style.opacity = 0;
    setTimeout(() => {
      document.querySelectorAll('.code-box-item')[0].removeChild(copied);
    },500); // Make sure this timeout matches the transition duration (500ms)
  },1200);
})
copyBtns[1].addEventListener('click', async ()=>{
    await navigator.clipboard.writeText(rgbCode.innerText);
    const copied = document.createElement('div');
    copied.className = "copied";
    copied.innerText = 'copied';
    document.querySelectorAll('.code-box-item')[1].appendChild(copied);
 
    setTimeout(() => {
     copied.style.opacity = 0;
     setTimeout(() => {
       document.querySelectorAll('.code-box-item')[1].removeChild(copied);
     },500); // Make sure this timeout matches the transition duration (500ms)
   },1200);
 })

 copyBtns[2].addEventListener('click', async ()=>{
    await navigator.clipboard.writeText(hslCode.innerText);
    const copied = document.createElement('div');
    copied.className = "copied";
    copied.innerText = 'copied';
    document.querySelectorAll('.code-box-item')[2].appendChild(copied);
 
    setTimeout(() => {
     copied.style.opacity = 0;
     setTimeout(() => {
       document.querySelectorAll('.code-box-item')[2].removeChild(copied);
     },500); // Make sure this timeout matches the transition duration (500ms)
   },1200);
 })