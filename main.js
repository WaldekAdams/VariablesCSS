const inputs = document.querySelectorAll('.controls input')

changeValue = function () {
    console.log(this.value)
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', changeValue))
inputs.forEach(input => input.addEventListener('mousemove', changeValue))