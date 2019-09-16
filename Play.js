class Play extends Board {
	flipped(event) {
		if(this.lock) return;
		if(event.currentTarget === this.card1) return;
		event.currentTarget.classList.toggle('flip');
			
		if(!this.hasFlippedCards){
			this.hasFlippedCards = true;
			this.card1 = event.currentTarget;
		} else {
		    this.steps--;
		    this.stepElement.innerHTML=`Steps : ${this.steps}`;
			this.hasFlippedCards = false;
			this.card2 = event.currentTarget;
			this.checkForMatch();
			this.gameOver();			                                                     
		}
	}

	checkForMatch(){
		let isMatch = this.card1.lastElementChild.src === this.card2.lastElementChild.src;
		isMatch ? this.openedCards() : this.unflipCards();
	}

	openedCards(){
		this.card1.removeEventListener('click',this.flipped);
		this.card2.removeEventListener('click',this.flipped);
		this.plusScore();
		this.flippedCards +=2;
		let isLevelPassed = this.flippedCards === memory_array.length;
		if(isLevelPassed) this.newLevel();

	}

	unflipCards(){
		this.lock = true;
		setTimeout(() => {
			this.card1.classList.remove('flip');
			this.card2.classList.remove('flip');
			this.lock = false;
		    this.card1={};
		    this.card2={};
		},500);
	}

	newLevel(){
		setTimeout(() => {
	        this.flippedCards = 0;
	        this.score = 0;
	        this.steps =10;
	        if (this.level < 4){
	            this.levels(this.level+1);
	            this.level++;
	        } else{
	            this.containerElem.innerHTML = "You WIN";
	            this.containerElem.style = "font-size : 50px; text-align:center; color:red; ";
	        }
	    },700);  
	}

	gameOver(){
		if(!this.haveSteps() && (this.flippedCards < memory_array.length)) {
		    this.containerElem.innerHTML = `Game Over<br>
				Your score is ${this.score}<br>
				<button>Try again</button>`;
			this.containerElem.style = "font-size : 50px; text-align:center; color:#3566e6; ";
		} 
	}

	levels(level){
	    var n = arr.length;
	    arr.push(n+1,n+2);
	    memory_array = [...arr,...arr];


	    this.newBoard();
	    this.levelElem.innerHTML = `Level ${level}`;
	    this.steps = memory_array.length;
	    this.stepElement.innerHTML = `Steps : ${this.steps}`;
	    this.scoreOutput = "Score : 0";
	    this.scoreElement.innerHTML = this.scoreOutput;
	    //console.log(flippedCards);
	    let container = document.getElementById('memory_card');
	    container.style.width = "740px";
	    if(level>=3){
	        container.style.height="840px";
	    }
	    let newCards =  document.querySelectorAll(".card");
	    newCards.forEach(card => { 
	       card.style.height = `calc(${100/(level+1)}% - 10px)`;
	    });
	    newCards.forEach(card => card.addEventListener("click", this.flipped.bind(this)));
	}
}
