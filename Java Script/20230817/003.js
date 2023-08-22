//재귀 함수를 사용하여 숫자를 원소로하는 배열의 모든 요소를 합하는 함수를 만들어 보세요!
function addEle(Arr) {
    // Base case: If the array is empty, return 0
    if (Arr.length === 0) {
        return 0;
    }
    
    // Recursive case: Return the first element plus the sum of the rest of the array
    return Arr[0] + addEle(Arr.slice(1));
}

const result = addEle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result); // Output: 55
