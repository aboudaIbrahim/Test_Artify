

const exercice2 = (arr)=>{ 
    let maxLength = 0 
     let index = 0 ; 
     for(let i=0 ; i<arr.length ; i++){  
        let len ; 
        if(arr[i]===0){ 
            index = i
        } 
        len++ ; 
        if(len>maxLength){ 
            maxLength=len ; 
        }
     } 
     return index ; 
} 

const array = [0,0,0,1,0,1] 
console.log(exercice2(array))