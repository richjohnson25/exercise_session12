/*function lengthOfLastWord(s){
    let trimS = s.trim()
    let wordArr = trimS.split(" ")
    let words = wordArr.length
    let lastWord = wordArr[words - 1]
    let lastWordLength = lastWord.length

    return lastWordLength
}

console.log(lengthOfLastWord("Hello World"))*/

/*function romanToInt(roman){
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0
    for(let i = 0; i < roman.length; i++){
        let currentSymbol = romanNumerals[roman[i]]
        let nextSymbol = romanNumerals[roman[i+1]]
        if(nextSymbol && currentSymbol < nextSymbol){
            result -= currentSymbol
        } else {
            result += currentSymbol
        }
    }

    return result
}

console.log(romanToInt("LVIII"))*/

/*function missingNumber(nums){
    let missed = 0
    let n = nums.length + 1
    let total = (n * (n + 1)) / 2
    let missingSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, n)
    missed = total - missingSum
    return missed
}

console.log(missingNumber([3,0,1]))*/

/*function isPalindrome(s){
    let str = s.replace(/[^a-zA-Z0-9]/g, "")
    let lowercaseStr = ""
    let reverse = ""

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            str[i].toLowerCase()
            lowercaseStr += str[i]
        } else {
            lowercaseStr += str[i]
        }
    }

    for(let i = lowercaseStr.length-1; i >= 0; i--){
        reverse += lowercaseStr[i]
    }

    if(reverse == lowercaseStr){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))*/

/*function reversePrefix(word, ch){
    let reverse = ""
    let temp = ""
    let key = word.indexOf(ch)

    temp = word.substring(key + 1)
    for(let i = key; i >= 0; i--){
        reverse += word[i]
    }

    return reverse + temp
}

console.log(reversePrefix("subdue", "b"))*/

/*function reverseString(s){
    ss = s.split("")
    reverse = []

    for(let i = ss.length-1; i >= 0; i--){
        reverse.push(ss[i])
    }

    return reverse
}

console.log(reverseString(["hello"]))*/

/*function excelColumn(columnTitle){
    let columnNumber = 0
    let power = columnTitle.length - 1

    for(let i = 0; i < columnTitle.length; i++){
        columnNumber += ((columnTitle.charCodeAt(i) - 64) * (26 ** power))
        power--
    }

    return columnNumber
}

console.log(excelColumn("ZY"))*/

/*function intToRoman(n){
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = ""
    for(let key in romanNumerals){
        while(n >= romanNumerals[key]){
            result += key
            n -= romanNumerals[key]
        }
    }

    return result
}

console.log(intToRoman(355))*/

/*function matrixSum(nums){
    let sum = 0
    let n = nums[0].length
    let m = nums.length
    let container = []
    let reverseArr = []

    for(let i = 0; i < n; i++){
        let subContainer = []
        for(let j = 0; j < m; j++){
            subContainer.push(nums[j][0])
            nums[j].shift()
        }
        container.push(subContainer)
    }
    console.log(container)

    for(let k = 0; k < container.length; k++){
        let reverse = sortReverse(container[k])
        reverseArr.push(reverse)
        sum += reverseArr[k][0]
    }
    console.log(reverseArr)

    return sum
}

function sortReverse(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    arr.reverse()

    return arr
}

console.log(matrixSum([[1,8,16,15,12,9,15,11,18,6,16,4,9,4],[3,19,8,17,19,4,9,3,2,10,15,17,3,11],[13,10,19,20,6,17,15,14,16,8,1,17,0,2],[12,20,0,19,15,10,7,10,2,6,18,7,7,4],[17,14,2,2,10,16,15,3,9,17,9,3,17,10],[17,6,19,17,18,9,14,2,19,12,10,18,7,9],[5,6,5,1,19,8,15,2,2,4,4,1,2,17],[12,16,8,16,7,6,18,13,18,8,14,15,20,11],[2,10,19,3,15,18,20,10,6,7,0,8,3,7],[11,5,10,13,1,3,4,7,1,18,20,17,19,2],[0,3,20,6,19,18,3,12,2,11,3,1,19,0],[6,5,3,15,6,1,0,17,13,19,3,8,2,7],[2,20,9,11,13,5,1,16,14,1,19,3,12,6]]))
*/

/*function buildArray(target, n){
    let stackArr = []
    let counter = 0

    for(let i = 1; i <= n && counter < target.length; i++){
        if(i === target[counter]){
            stackArr.push("Push")
            counter++
        } else {
            stackArr.push("Push")
            stackArr.push("Pop")
        }
    }
    return stackArr
}

console.log(buildArray([1,2], 4))*/

// Reverse Integer using math
function reverseInteger(num){
    let bit = Math.pow(2,31) - 1
    let isNegative = num < 0
    num = Math.abs(num)
    let revNum = 0
    while(num > 0){
        let digit = num % 10
        revNum = revNum * 10 + digit
        num = Math.floor(num / 10)
    }

    if(revNum > (bit) || revNum < -(bit)){
        return 0
    }
    
    return isNegative ? -revNum : revNum
}

console.log(reverseInteger(1534236469))

// Reverse integer using parseInt
/*function reverseInteger(num){
    let isNegative = num < 0
    let revNum = parseInt(Math.abs(num).toString().split('').reverse().join(''))
    
    return isNegative ? -revNum : revNum
}

console.log(reverseInteger(1534236469))*/