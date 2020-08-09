function map(array,func) {
    return array.map(func)
}


function reduce(sourceArray,func,startingPoint){
    if (startingPoint===undefined){
        return sourceArray.reduce(func)
    }
    else{return sourceArray.reduce(func,startingPoint)}
}