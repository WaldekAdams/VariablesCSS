const inputs = document.querySelectorAll('.controls input')

changeValue = function () {
    console.log(this.value)
}

inputs.forEach(input => input.addEventListener('change', changeValue))
inputs.forEach(input => input.addEventListener('mousemove', changeValue))