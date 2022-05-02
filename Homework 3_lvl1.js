//EX.1
function removeFirstElem(arr, i = 1){
     if(i >= arr.length){
        arr.pop();
        return arr;
     }
    arr[i - 1] = arr[i] ;
    i++
   return removeFirstElem(arr, i)
}

//EX.2
function flatten(arr){
    let result = [];
    for(let elem of arr){
        if(!(Array.isArray(elem))){
            result = result.concat(elem)
        }else{
            result = result.concat(flatten(elem))
        }
    }
    return result;
}

//EX.3
function fn(arr, index){
    if(index === arr.length){
        return arr;
    }
    arr.unshift(arr.pop());
    index ++;
    return fn(arr, index)
}

//EX.4
function sortByPercent(arr){
    return arr.filter(elem => elem.readStatus === true).sort((a,b) => a.percent - b.percent)    
}

//EX.5
function myOwnMapforObjects(func) {
    let result = {};
    if(typeof(func) !== 'function'){
        consol.log(`${func} is not a function`)
        return false
    }
    for(let key in this){
        result[key] = (func(this[key], key, this))
    }
    return result;
}
