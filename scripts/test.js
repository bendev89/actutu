let sourceArray = [1, 2, 3, 4, 5, 6, 7];
let neededElements = 3;
let getMeRandomElements = function (sourceArray, neededElements) {
    let result = [];
    for (var i = 0; i < neededElements; i++) {
        result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
}
getMeRandomElements(sourceArray, neededElements);