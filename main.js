// function func(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2){
//             return i
//         }
//     }
    
// }

// console.log(func([1, 3, 2, 6, 4, 8,])); 




// function func(arr){
//     let n = ''
//     for(let i = 0; i < arr.length; i++){
//         n += arr[i][0]
//     }
//     return n
// }

// console.log(func(['Adam', 'Sarah', 'Malc'])); 




// function func(str){
//     let arr = str.split(' ')
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 'Nemo'){
//             return `I found nemo at ${i}`
//         }
//     }
//     return 'I can not find nemo :('
// }

// console.log(func('I am finding Nemo')); 
// console.log(func('Nemo is am')); 
// console.log(func(' is am')); 




function func(str){
    let initial = str.slice(0,str.length-1)
    let last = str.reverse()[0]
    for(let i = 0; i < str.length; i++){
        if(initial.reduce((a,b) => a+b) == last){
            return true
        }
    }
    return false
}

console.log(func(['rsq', '6hi', 'g', 'rsq6hig'])); 
console.log(func([1, 1, 1, '11'])); 
console.log(func([8, 'thunder', true, '8thundertrue']));







