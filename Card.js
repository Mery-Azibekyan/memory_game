class Card {
	constructor(id) {
		this.id = id;
	}
	
	createCard() {

		return `<div class="card" id="tile_${this.id}">
	        <img class="front" src="assets/images/front.png" />
	       	<img class="back" src="assets/images/${memory_array[this.id]}.png" />
       	</div>`;
	}

}
