var text = "IAMHERE";
var code = "HEY";

function transpositionCipher(input, keyword) {
    var array = [];
    var cols = keyword.length;
    var rows = Math.ceil(input.length/keyword.length) + 1;

    for (var i = 0; i < cols; i++) {
        array[i] = [];
    }

    var str = keyword.concat(input);

    for (let i = 0; i < cols; i++) {
        var currLetter = i;
        for (let j = 0; j < rows; j++) {
            var letter = str.substring(currLetter, currLetter + 1);
            
            if (letter == "") {
                letter = "X";
            }
            array[i][j] = letter;
            currLetter = currLetter + cols;
        }
        
    }

    console.log("Pre-shuffle: ");
    console.log(array);

    sortCols(array);

    console.log("Post-shuffle: ");
    console.log(array);

    let returnedStr = "";

    for (let i = 0; i < cols; i++) {
        for (let j = 1; j < rows; j++) {
            // console.log(array[i][j]);
            returnedStr = returnedStr.concat(array[i][j]);
        }
    }

    console.log("Message: " + returnedStr + " and Keycode: " + keyword);
}

function sortCols(array) {
    for (var j = 1; j < array.length; j++) {
        let ins = array[j];
        let i = j-1;
        while (i >= 0 && ins[0] < array[i][0]) {
            array[i+1] = array[i]
            i = i-1
        }
        array[i+1] = ins;
    }
}

transpositionCipher(text, code);