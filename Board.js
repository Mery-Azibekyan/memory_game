class Board extends Player {
	lock = false;
	hasFlippedCards = false;
	flippedCards = 0;
	newBoard() {
		let output = '';
	    memory_array.memory_tile_shuffle();
	    
		for(var i = 0; i < memory_array.length; i++) {
			let card = new Card(i);
			output += card.createCard();
		}

		document.getElementById('memory_card').innerHTML = output;
	}

	
}
