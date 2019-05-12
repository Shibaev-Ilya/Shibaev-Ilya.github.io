var move = document.querySelector('.squad');
var buttonNext = document.querySelector('.button');

var string = "be, to, of, and, a, in, that, have, I, it, for, not, on, with, he, as, you, do, at, this, but, his, by, from, they, we, say, her, she, or, an, will, my, one, all, would, there, their, what, so, up, out, if, about, who, get, which, go, me, when, make";

var comma = ', ';

var arrayWords = string.split( comma );

console.log( arrayWords.length );


buttonNext.addEventListener('click', function() {
	var xxx = Math.round( Math.random()  * arrayWords.length ) ;

	var wordsToLearn = arrayWords[xxx];

	buttonNext.textContent = 'NEXT WORD';

	move.textContent = wordsToLearn ;
})