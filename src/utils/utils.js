function sortAscending(dices){

    var tmp;

    //Sort dices array
    for(var i=0; i <= dices.length; i -= -1){
        for(var j=dices.length - 1; j >= i+1; j--){
            if(dices[j] < dices[i]){
                tmp = dices[i];
                dices[i] = dices[j];
                dices[j] = tmp;
            }
        }
    }

    return dices;
}

module.exports = { sortAscending };