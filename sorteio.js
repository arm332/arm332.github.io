"use strict";

// Resources:
// - <https://javascript.info/task/shuffle>
// - <https://stackoverflow.com/a/2450976>
// - <https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array>
// - <https://stackoverflow.com/questions/8495687/split-array-into-chunks>
// - <https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs>
// - <https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript>

section1.addEventListener("submit", async function(event) {
	console.log("section1.submit");
	event.preventDefault();

	const form = event.target;
	const textarea1 = form.elements.textarea1;
	const value1 = textarea1.value;
	const array = value1.split(',');
	
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].trim();
	}
	
	const select1 = form.elements.select1;
	const selectedIndex = select1.selectedIndex;
	const aux = []
	const res = [];

	if (select1.selectedIndex == 0) {
		//console.log(array);
		
		// The de-facto unbiased shuffle algorithm is the 
		// Fisher–Yates (aka Knuth) Shuffle.
		
		for (let i = array.length - 1; i > 0; i--) {
			// Pick a random index from 0 to i.
			
			let j = Math.floor(Math.random() * (i + 1));
			
			// And swap it with the current element.
			// NOTE: using "destructuring assignment" syntax to achieve that.
			
			[array[i], array[j]] = [array[j], array[i]];
		}
		
		//console.log(aux);
		
		for (let i = 0; i < array.length - 1; i += 4) {
			const chunk1 = array.slice(i, i + 2);
			const chunk2 = array.slice(i + 2, i + 4);
			res.push(chunk1.join(", ") + " x " + chunk2.join(", "));
		}
		//console.log(res);
	}
	else {
		//console.log(array);
		
		for (let i = 0; i < array.length; i++) {
			for (let j = i + 1; j < array.length; j++) {
				aux.push([array[i], array[j]]);
			}
		}
		
		//console.log(aux);
		
		for (let i = 0; i < aux.length; i++) {
			for (let j = i + 1; j < aux.length; j++) {
				if (!aux[i].some(e => aux[j].includes(e))) {
					res.push(aux[i].join(", ") + " x " + aux[j].join(", "));
				}
			}
		}
		
		//console.log(res);
	}
	
	const textarea2 = form.elements.textarea2;
	textarea2.value = res.join("\n");
});
