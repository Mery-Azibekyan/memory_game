class Player extends Game{
	score = 0;
	steps = 10;
	plusScore(){
		this.score+=100;
		this.scoreOutput = "Score : " + this.score;
		this.scoreElement.innerHTML = this.scoreOutput;
		//console.log(this.score);
	}
	haveSteps(){
		return this.steps > 0;
	}
}
