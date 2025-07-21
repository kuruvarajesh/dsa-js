const rightTriangle = (n) => {
    for (let i = 1; i < (n * 2); i++) {
        let first = ""
        if (i <= n) {
            for (let j = 1; j <= i; j++) {
                first += "*"
            }
        }
        else {
            for (let j = 1; j <= (n * 2) - i; j++) {
                first += "*"
            }
        }
        // console.log(first)
        return first
    }
}


const diamondPattern = (n) => {
    for (let i = 1; i < (n * 2); i++) {
        let spaces = ""
        let stars = ""
        if (i <= n) {
            for (let spaI = 1; spaI <= i; spaI++) {
                stars += "*"
                if (spaI - 1) {
                    stars = "*" + stars
                }
            }
            for (let staI = 1; staI <= (n - i); staI++) {
                spaces += " "
            }
        }
        else {
            const index = (n * 2) - i
            for (let spaI = 1; spaI <= (index); spaI++) {
                stars += "*"
                if (spaI - 1) {
                    stars = "*" + stars
                }
            }
            for (let staI = 1; staI <= (n - index); staI++) {
                spaces += " "
            }
        }
        console.log(spaces + stars)
        // return spaces+stars
    }
}




// const rightTri =  rightTriangle(15)
const diamondStars = diamondPattern(20)
// console.log(leftTri+rightTri)