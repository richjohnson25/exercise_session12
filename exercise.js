//1. Majority Element
function majorityElement(nums){
    half = nums.length / 2

    for(let i = 0; i < nums.length; i++){
        let majority = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j]){
                majority += 1
            }
        }

        if(majority > half){
            return nums[i]
        }
    }

    return -1
}
console.log(majorityElement([3,2,3]))
console.log(majorityElement([6,2,6,6,7,2,6]))

//2. Roman to Integer
function romanToInt(roman){
    const romanNumerals = {
        I:1,
        IV:4,
        V:5,
        IX:9,
        X:10,
        XL:40,
        L:50,
        XC:90,
        C:100,
        CD:400,
        D:500,
        CM:900,
        M:1000
    }

    let result = 0
    for(let i = 0; i < roman.length; i++){
        let currentSymbol = romanNumerals[roman[i]]
        let nextSymbol = romanNumerals[roman[i+1]]

        /*if(nextSymbol && currentSymbol < nextSymbol){
            result -= currentSymbol
        } else {
            result += currentSymbol
        }*/

        if(currentSymbol < nextSymbol){
            let temp = nextSymbol - currentSymbol
            result += temp
            i++
        } else {
            result += currentSymbol
        }
    }

    return result
}

console.log(romanToInt("MCMXCIV"))

//3. Pascal's Triangle
function pascalTriangle(numRows){
    let triangle = []

    for(let i = 0; i < numRows; i++){
        let triangleRow = []
        for(let j = 0; j < i+1; j++){
            if(j == 0 || i == j){
                triangleRow.push(1)
            } else {
                let rowElement = triangle[i-1][j-1] + triangle[i-1][j]
                triangleRow.push(rowElement)
            }
        }
        triangle.push(triangleRow)
    }
    return triangle
}

console.log(pascalTriangle(5))

//4. Profit of the Day
function stockExchange(prices){
    let maxProfit = 0
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            if(prices[j] - prices[i] > maxProfit){
                maxProfit = prices[j] - prices[i]
            }
        }
    }
    return maxProfit
}

console.log(stockExchange([7,1,5,3,6,4]))