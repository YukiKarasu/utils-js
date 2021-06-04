# Array

## _.chunk(array, [size=1])
> 将数组拆分成多个size长度的区块,并将这些区块组成一个新数组,若数组无法被等分,那么最后剩下的元素将组成一个区块
## _.compact(array)
> 创建一个新的数组,包含原数组所有的非假值元素,如false,null, 0, "", undefined, NaN
> 仅针对第一层, 对第一层进行深拷贝
## _.concat(array, [values])
> 创建一个新的数组,连接任何值
> 仅针对第一层, 对第一层进行深拷贝
## _.difference(array, [values])
> 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
## _.differenceBy(array, [values], [iteratee=_.identity])
> 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
```javascript
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```