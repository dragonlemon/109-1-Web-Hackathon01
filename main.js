var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'
var now = 0

for (var i = 0; i <= 27; i++) {
	cells[i].setAttribute('onclick', "changecolor(this)")
}

function changecolor(ele) {
	for (var i = 0; i <= 27; i++) {
		cells[i].classList.remove('date-click')
	}
	ele.classList.add('date-click')
	now = ele
}

function inputing(){
	datemp = now.innerHTML
	now.innerHTML = datemp + "<p style='color:" + color.value + "'>" + input.value + "</p>"
}

input.addEventListener('keyup', event => {
  if (event.keyCode === 13 && event.target.value !== ''){
  	inputing()
 }
})


//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}