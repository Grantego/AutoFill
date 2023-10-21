const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	suggestions.innerHTML = '';
	let strLower = str.toLowerCase()
	let results = fruit.filter(el => el.toLowerCase().includes(strLower));
	// console.log(results);
	return results;
}

function searchHandler(e) {
	const val = e.target.value
	// console.log(val);
	const results = search(val);
	showSuggestions(results, val)
}

function showSuggestions(results, inputVal) {
	for (let i = 0; i < results.length; i++) {
		if (!inputVal) {
			suggestions.innerHTML = '';
			suggestions.classList.remove('has-suggestions')
			return;
		}
		suggestions.classList.add('has-suggestions')
		const newLi = document.createElement('li')
		newLi.innerHTML = results[i].replace(inputVal, "<strong>" + inputVal + "</strong>");
		suggestions.append(newLi);
	}
}

function useSuggestion(e) {
	const clickedLi = e.target
	input.value = clickedLi.innerText;
	suggestions.classList.remove('has-suggestions')
	search(input.value)
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);