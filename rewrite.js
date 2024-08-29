var arr = [5, 7, 10, 15];
var fn = (ele, index, arr)=>{
    console.log(ele);
    console.log(index);
    console.log(arr);
};
//forEach() thực hiện hàm fn cho mỗi phần tử trong mảng.
var arr = [5, 7, 10, 15];
var fn = (ele, index, arr) => {
    console.log('Element:', ele);
    console.log('Index:', index);
    console.log('Array:', arr);
};

arr.forEach(fn);
//map() tạo một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử.
var arr = [5, 7, 10, 15];
var doubledArr = arr.map(ele => ele * 2);

console.log(doubledArr); // [10, 14, 20, 30]
//reduce() tính toán một giá trị duy nhất từ tất cả các phần tử của mảng.
var arr = [5, 7, 10, 15];
var sum = arr.reduce((acc, ele) => acc + ele, 0);

console.log(sum); // 37, tổng tất cả các phần tử trong mảng
//filter() tạo một mảng mới với các phần tử thỏa mãn điều kiện.
var arr = [5, 7, 10, 15];
var filteredArr = arr.filter(ele => ele > 7);

console.log(filteredArr); // [10, 15]
//find() tìm phần tử đầu tiên thỏa mãn điều kiện.
var arr = [5, 7, 10, 15];
var foundElement = arr.find(ele => ele > 8);

console.log(foundElement); // 10, phần tử đầu tiên lớn hơn 8
//some() kiểm tra xem ít nhất một phần tử trong mảng có thỏa mãn điều kiện không.
var arr = [5, 7, 10, 15];
var isAnyGreaterThanTen = arr.some(ele => ele > 10);

console.log(isAnyGreaterThanTen); // true, vì 15 lớn hơn 10

