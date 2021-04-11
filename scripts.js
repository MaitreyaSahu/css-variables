//console.log('connected');

const controls = document.querySelectorAll('.controls input');
//console.log(controls);

controls.forEach(control => {
    control.addEventListener('change', changeValue);
    control.addEventListener('input', changeValue);
});

function changeValue(e){
    //console.log(e);
    const suffix = this.dataset.suffix || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}