
// input              Output

// [2,1,4, 4, 4]  ----> [4] array
// [1, 1, 1, 2]   ----> [1]
//  [1,2,3,4]     ----> []
// [1,1,2,2,3,3]  ----> [1,2,3]
// ["Array","Array", "dog"] ----> ["Array"]


// Edge Case
// ["Array", "String", true, false, 1, true ] --> 
// [3, 3, 3, 3]   ----> [3]
// []              ---> [] 


// 1: Instructions 
// 
// 2: Loop through the pile 
// -----> map function || for loop 
// 3: identify each value within the array
// -----> 
// 4: Compare the value to all previous ones or its index 
// 5: Identify the duplicates 
// 6: Add the duplicate values into a different pile or an array 
// 7: Return the duplicate pile 


// for(let i = 0; i < duplicate.length; i++){


// }




// const duplicate = [2,1,4, 4]


// let d = duplicate.map(( x, index )=> {
//     if(x === index){
//     return x 
//     }
// });

// console.log(d);


// Sub-Sequence sum 

// Input    -  |    Output 

// [10, 3, 1, 7] --->|  8 
//                  --->  | 
//                   ---> | 
//                   ---> | 
//                  --->  | 
//                  --->  | 
//                  --->  | 
//                  --->  | 
//                   ---> | 
//                   ---> | 
//                  --->  | 


 let array = [10, 3, 1, 7 ] 

// array.map((i, index) => {

// })

// Using Reduce to get the sum 

// let a = array.reduce((acc, cur) => {
//     console.log("acc: ", acc)
//     console.log("cur: ", cur)

//     let result = acc * cur
//     console.log("result1: ", result)
    
//     let r = result * acc 
//     console.log("result2: ", result)

//     // if ((result) === 8) {
//             // return result}
// return r
//     })


//     console.log(a)



//     let d = new Date();
// let n = d.getTime()

// let y = Math.round(n / years)


// let minutes = 1000 * 60
// console.log( minutes )

// let hours = minutes * 60 
// console.log( hours )

// let days = hours * 24 
// console.log( hours )

// let years = days * 365 
// console.log( hours )


// let years 

// console.log(y)


// ----------------------> Reverse 

const reverse = (arr) => {
    new_arr = []
    for(let i = 0; i < arr.length; i++) {
        console.log(i)
        new_arr.unshift(arr[i])
    }
    return new_arr
}

console.log("Reverse", reverse([4,3,65,32,15,35,24,64,25,3]))



// ----------------------> Creating Duplicates 

const hasDuplicates = (arr) =>{
    for(let i = 0; i < arr.length; i++) {
        for(j = i+1; i < arr.length; i++){
            if(i == j){
                return true;
            }
        }
    }
    return false;
}

 console.log(hasDuplicates( ["Orange", "Blue", "Blue", "Orange", "Pink", "Purple", "Yellow"] ))


// ----------------------> Fibonacci Sequence

// fi