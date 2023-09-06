const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    halfTime() {
    console.log('Halftime score is '+ this.score + ' and there are ' + this.fouls + ' fouls in the game.');
    return this;
    },
    fullTime() {
    console.log('Fulltime score is ' + (this.score * 2) + ' and there are ' + (this.fouls * 2) + ' fouls in the game.');
    return this;
    },
    foulIncrement() {
    this.fouls++;
    return this;
    },
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

    basketballGame.basket().freeThrow().threePointer().foulIncrement().foulIncrement().basket().threePointer().basket().halfTime().fullTime();