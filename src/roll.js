function roll(nbDices = 5){

    let dices = [];
    for (let i = 1; i <= nbDices; i++) {
      dices.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log("DICES : ",dices);
    return dices;
}

module.exports = { roll };
