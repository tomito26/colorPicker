let colorPicker =  document.getElementById("color-picker");
document.body.style.backgroundColor = colorPicker.value;
colorPicker.addEventListener("input",updateColor);

function updateColor(e){
    document.body.style.backgroundColor = colorPicker.value;
}