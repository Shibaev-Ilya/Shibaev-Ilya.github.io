var move = document.querySelector('.squad');



move.addEventListener('click', function() {
	var xxx = Math.round(Math.random()  * 100) ;
	move.textContent = xxx ;
})