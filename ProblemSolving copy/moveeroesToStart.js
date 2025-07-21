
// input = [1,0,1,0,1,0,1]
// output= [1,1,1,1,0,0,0]
const moveZeroesToStart = (arr) => {
    let index = 0
    for(let i of arr ) {
        if(arr[index] ===0){
            // Iterate and update all the values from arr starting from "index"
            const len = arr.length
            for (let j=index; j<arr.length; j++){
                arr[j] = arr[j+1]
            }
            arr[len-1] = 0
        }
        else index++
    }
    console.log(arr);
}

// moveZeroesToStart([1,0,1,0,1,0,1])
// moveZeroesToStart([0,0,0,0,3,23,0,0,0,0])
// moveZeroesToStart([4,4,4,2,0,2])
// moveZeroesToStart([1,1,1,0])


// input = [1,2,3,4,5], K=2
// output = [4,5,1,2,3]
const swapKValues = (arr,k) => {
    const len = arr.length
    for (let i = 1; i<=k; i++){
        const val = arr[len-1]
        for (j=1; j<len;j++){
            arr[len-j] = arr[len-j-1]
        }
        arr[0] = val
    }
    console.log(arr)

}

swapKValues([1,2,3,4,5],3)
// swapKValues([1,2,3,4,5],4)