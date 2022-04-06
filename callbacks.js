/*
    JavaScript Callbacks
*/

// Create a function to filter for odd numbers

function filter(anArr){
    let output = [];
    for (let element of anArr){
        if (element % 2 !== 0){ // Logic that determines if num is odd
            output.push(element);
        }
    }
    return output;
};

let numbers = [5, 10, 15, 20, 25, 30];
console.log(filter(numbers));


// Create a function to filter out based on any true condition we want

function filterWithCallback(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // Logic that determines if num is filtered
            output.push(element);
        }
    }
    return output;
};

function isEven(num){
    return num % 2 === 0;
};


console.log(filterWithCallback(numbers, isEven));


function isDivByThree(num){
    return num % 3 === 0
}

console.log(filterWithCallback(numbers, isDivByThree));


// isEven and isDivByThree are considered callback functions
// filterWithCallback is considered a higher-order function (because it accepts func as arg)


// Write the function right into the argument
console.log(filterWithCallback(numbers, function(num){
    return num % 10 === 0
}))

// Often written with arrow functions
console.log(filterWithCallback(numbers, num => num % 10 === 0))



// Async Example

// function first(){
//     console.log('First Started')
//     setTimeout(
//         () => {console.log('First')}, 3000
//     )
// }

// function second(){
//     console.log('Second Started')
//     console.log('Second')
// }


// first();
// second();


// Real Life Example

// You have a function that will take in a song name, download the song, and then from that download, you can play the song


// function downloadSong(songName){
//     console.log(`Downloading ${songName}...`)
//     setTimeout(() => {
//         console.log('Finished downloading')
//         return songName
//     }, 3000)
// }

function playSong(song){
    console.log(`${song} is playing!`)
}


// let song = downloadSong('Let It Be')
// playSong(song);


// Fix Async issue with callbacks
function downloadSong(songName, callback){
    console.log(`Downloading ${songName}...`)
    setTimeout(() => {
        console.log('Finished downloading')
        callback(songName)
    }, 3000)
}


downloadSong('Let It Be', playSong);


