const config = {
    PARENT_CONTAINER_ID: "applicationContainer",
    RANDOM_MAX: 5,
    RANDOM_MIN: 1
};

(()=>{
    generateTable([11,10]);
})()

/**
 * Renders the original table in groups
 */
function generateTable(arraySets){
    let arrayGroup = [];
    if(arraySets.size === 0){
        throw new ZoopException("renderTable called with 0 as argument");
    }
    for(let i = 0; i < arraySets.length; i++){
        arrayGroup.push(populateArray(arraySets[i], config.RANDOM_MIN, config.RANDOM_MAX));
    }
    renderTable(arrayGroup);
}


/**
 * Draws table of arrays for Zoop
 * @param arrayGroup
 */
function renderTable(arrayGroup){
    console.log(arrayGroup);
}



/**
 *
 * @param arraySize pass the size of the array to be generated
 * @param min min random value
 * @param max max random value
 * @returns {*[]} populated array
 */
function populateArray(arraySize, min, max){
    let populatedArray = [];
    if(arraySize === 0){
        throw new ZoopException("populateArray called with 0 as argument");
    }
    if(min === max){
        throw new ZoopException("populateArray no range specified");
    }
    for(let i = 0; i < arraySize; i++){
        populatedArray.push(Math.floor(Math.random() * (config.RANDOM_MAX - config.RANDOM_MIN + 1) + config.RANDOM_MIN));
    }
    return populatedArray;
}








ZoopException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
}

// Create an object type UserException
function ZoopException(message) {
    this.message = message;
    this.name = 'UserException';
}
