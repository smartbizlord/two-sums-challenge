function twoSum(nums, target) {
    let resultObj = {}
    let resultArr = []


    nums.forEach((item, index) => {
        let currentDifference = target - item
        if(resultObj[currentDifference] != undefined) {
            resultArr.push(resultObj[currentDifference], index)
            return;
        }
        resultObj[item] = index
    })

    return resultArr;
};