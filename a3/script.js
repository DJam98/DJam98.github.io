const happyBox = document.getElementById('Happy');
const creativeBox = document.getElementById('Creative');
const passionBox = document.getElementById('Passionate');
const sadBox = document.getElementById('Melancholic');
const topBox = document.getElementById('Top');
const mainBox = document.getElementById('Main');
const back = document.getElementById('Back');

happyBox.addEventListener('click', (e) => {
    creativeBox.style.display = "none";
    passionBox.style.display = "none";
    sadBox.style.display = "none";
    topBox.style.display = "none";
    mainBox.style.padding = 0;
    happyBox.style.height = "100vh";
    happyBox.style.borderRadius = 0;
    back.style.display = "inline";
})

creativeBox.addEventListener('click', (e) => {
    happyBox.style.display = "none";
    passionBox.style.display = "none";
    sadBox.style.display = "none";
    topBox.style.display = "none";
    mainBox.style.padding = 0;
    creativeBox.style.height = "100vh"
    creativeBox.style.borderRadius = 0;
    back.style.display = "inline";

})

passionBox.addEventListener('click', (e) => {
    creativeBox.style.display = "none";
    happyBox.style.display = "none";
    sadBox.style.display = "none";
    topBox.style.display = "none";
    mainBox.style.padding = 0;
    passionBox.style.height = "100vh";
    passionBox.style.borderRadius = 0;
    back.style.display = "inline";

})

sadBox.addEventListener('click', (e) => {
    creativeBox.style.display = "none";
    passionBox.style.display = "none";
    happyBox.style.display = "none";
    topBox.style.display = "none";
    mainBox.style.padding = 0;
    sadBox.style.height = "100vh";
    sadBox.style.borderRadius = 0;
    back.style.display = "inline";
})

back.addEventListener('click', (e) => {
    happyBox.style.display = "flex";
    creativeBox.style.display = "flex"; 
    passionBox.style.display = "flex"; 
    sadBox.style.display = "flex";
    topBox.style.display = "flex";

    happyBox.style.height = "25%";
    creativeBox.style.height = "25%";
    passionBox.style.height = "25%";
    sadBox.style.height = "25%";

    mainBox.style.padding = "2vw";

    happyBox.style.borderRadius = "10px";
    creativeBox.style.borderRadius = "10px";
    passionBox.style.borderRadius = "10px";
    sadBox.style.borderRadius = "10px";

    back.style.display = "none";
})