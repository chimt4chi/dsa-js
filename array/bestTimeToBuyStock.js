const prices = [7,1,5,3,6,4];
// const prices = [7,6,4,3,1]
// op: 5

// brute force

// function bestTimeToBuyStock(arr) {
//     let maxProfit = -Infinity;
//     let minPrice = 0;
//     for(let i=0; i<arr.length; i++) {
//         for(let j=i; j<arr.length; j++) {
//             if(arr[i] < minPrice) {
//                 minPrice = arr[j];
//             }
//             let currProfit = arr[j] - minPrice;
            
//             if(currProfit > maxProfit) {
//                 maxProfit = currProfit
//             }
//         }
//     }

//     return maxProfit
// }


// optimal
function bestTimeToBuyStock(arr) {
    let buyPrice = arr[0];
    let maxProfit = 0

    for(let i=1; i<arr.length; i++) {
        let currProfit = arr[i] - buyPrice;
        // if(arr[i] < buyPrice) buyPrice = arr[i];

        buyPrice = Math.min(buyPrice, arr[i])

        // if(currProfit > profit) profit = calc

        maxProfit = Math.max(maxProfit, currProfit)
    }

    return maxProfit
}

console.log(bestTimeToBuyStock(prices))