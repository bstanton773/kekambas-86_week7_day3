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


// isEven and isDivByThree are considered callback functions (because they are functions passed into another function as an arg)
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
function downloadSong(songName, downloadTime, callback){
    console.log(`Downloading ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log('Finished downloading')
        // Execute callback function once finished downloading
        callback(songName)
    }, downloadTime)
}


// downloadSong('Let It Be', 5000, playSong);


// downloadSong('YMCA', 3000, (s) => console.log(`Sending ${s} to friend`))

let song1 = 'Wonderwall';
let song2 = 'Brown Eyed Girl';
let song3 = 'Dreams';


// downloadSong(song1, 3000, (s) => {
//     console.log(`Saving ${s} to playlist`)
//     downloadSong(song2, 2000, (s) => {
//         console.log(`Saving ${s} to playlist`)
//         downloadSong(song3, 4000, (s) => {
//             console.log(`Sending ${s} to a friend`)
//         })
//     })
// })



/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷
                })
            })
        })
    })
*/


// Handling Errors


function downloadSong2(songName, callbackSucces, callbackFail){
    console.log(`Searching for ${songName} in our database...`)
    setTimeout(() =>{
        // Simulate a valid song choice
        if (songName.length > 4){
            callbackSucces(songName)
        } else {
            callbackFail(songName)
        }
    }, 3000)
}


// downloadSong2(
//     'ABC',
//     (s) => {console.log(`${s} has succesfully downloaded and is now playing`)},
//     (s) => {console.error(`${s} is not a valid song choice`)}
// )


// In-class Exercise
// Create a map function that takes in an array and a callback function and returns a new array with that function applied



myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function myMap(arr, fn){
    let newArray = [];
    for (let el of arr){
        newArray.push(fn(el))
    }
    return newArray
}

console.log(myMap(myArr, (x) => x**2))
console.log(myMap(myArr, (x) => x + 2))
console.log(myMap(myArr, (x) => (2**x)))

function doStuff(num){
    let x = 2 ** num;
    if (x > 100){
        x *= 3
        return x /2
    } else {
        return -1*x
    }
}


console.log(myMap(myArr, doStuff))