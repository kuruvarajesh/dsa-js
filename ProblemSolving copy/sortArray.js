
const sortAnArray1 = (arr) => {
    // CASE: 1 ----> USING SPLICE
    let re = [arr[0]]

    for (let index = 1; index < arr.length; index++) {
        for (let index2 = 0; index2 < re.length; index2++) {
            if (arr[index] > re[index2]) {
                if (index2 === (re.length - 1)) {
                    re.push(arr[index])
                    break;
                }
                continue
            }
            else {
                re.splice(index2, 0, arr[index])
                break
            }
        }
    }
    console.log(re)
}
const sortAnArray2 = (arr) => {
    // CASE: 1 ----> Without any built-in methods 
        // let re = [arr[0]]
        // for (let index = 1; index < arr.length; index++) {
        //     for (let index2 = 0; index2 < re.length; index2++) {
        //         if (arr[index] > re[index2]) {
        //             if (index2 === (re.length - 1)) {
        //                 re = [...re, arr[index]]
        //                 break;
        //             }
        //             continue
        //         }
        //         else {
        //             let first = []
        //             let sec = []
        //             for (const pi in re) {
        //                 if (pi < index2) first = [...first, re[pi]]
        //                 else sec = [...sec, re[pi]]
        //             }
        //             re = [...first, arr[index], ...sec]
        //             break
        //         }
        //     }
        // }
        // console.log(re)

    // CASE: 2 ----> Without any built-in methods 
        let re = [arr[0]]
        for (let index = 1; index < arr.length; index++) {
            let temp = []
            let flag = false
            for (let val of re) {
              if(arr[index] < val && !flag ){
                temp = [...temp, arr[index], val]
                flag = true
              }
              else temp = [...temp, val]
            }
            if(!flag) temp = [...temp, arr[index]]
            re = temp
        }
        console.log(re)

}

const sortAnArray3 = (arr) => {
    const re = arr.sort((a,b) => a-b)
    console.log(re);
}

// Sort array with splice
// const sort1 = sortAnArray1([99, 89, 32, 12, 3, 1, 4, 5, 88, 65, 4, 3, 2, 12, 4, 3, 211, 23, 45, 32])

// Sort array without built-in methods
// const sort2 = sortAnArray2([99, 89, 32, 12, 3, 1, 4, 5, 88, 65, 4, 3, 2, 12, 4, 3, 211, 23, 45, 32])
// sortAnArray2([3,2,1,-5,-49,0])

// With sort() method
// sortAnArray3([3,"2",1,-5,-49,0])


const zeroToTheEnd = (arr) => {
    // CASE: 1 => using splice
    // let count = 0
    //     for(let index = 0; index<arr.length; index++) {
    //         if([0]?.includes(arr[count])){
    //             arr.splice(arr.length+1, 0, 0)
    //             arr.splice(count, 1)
    //         }
    //         else  count += 1
    //     }
    
    // CASE: 2 => without built-in methods
    for (let index=0; index < arr.length; index++){
        
    }
    console.log("Zeroes at END ", arr);     
    
}

zeroToTheEnd([0,8,0,7, 0])

