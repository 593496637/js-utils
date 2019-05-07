// 原文：https://juejin.im/post/5cc7afdde51d456e671c7e48?utm_source=gold_browser_extension


// 时间对比：时间个位数形式需补0
const time1 = "2019-03-31 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime = time1 > time2;
// overtime => false



// 格式化金钱：带小数无效
const thousand = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = thousand(19941112);
// money => "19,941,112"


// 生成随机ID
const randomId = len => Math.random().toString(36).substr(3, len);
const id = randomId(10);
// id => "jg7zpgiqva"

// 生成随机HEX色值
const randomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = randomColor();
// color => "#f03665"

// 生成星级评分
const startScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = startScore(3);
// start => "★★★"

// 操作URL查询参数
const params = new URLSearchParams(location.search); // location.search = "?name=yajun&sex=female"
params.has("yajun"); // true
params.get("sex"); // "female"

// 取整：代替正数的Math.floor()，代替负数的Math.ceil()
const num1 = ~~ 1.69;
const num2 = 1.69 | 0;
const num3 = 1.69 >> 0;
// num1 num2 num3 => 1 1 1


// 补零
const fillZero = (num, len) => num.toString().padStart(len, "0");
const num = fillZero(169, 5);
// num => "00169"

// 转数值：只对null、""、false、数值字符串有效
const num1 = +null;
const num2 = +"";
const num3 = +false;
const num4 = +"169";
// num1 num2 num3 num4 => 0 0 0 169


// 精确小数
const round = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = round(1.69, 1);
// num => 1.7



// 判断奇偶
const num = 0;
const odd = !!(num & 1);
// odd => false


// 取最小最大值
const arr = [0, 1, 2];
const min = Math.min(...arr);
const max = Math.max(...arr);
// min max => 0 2

// 短路运算符
const a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
const c = !d; // 取假赋值：单个表达式转换为true则返回false，否则返回true


// 是否为空数组
const arr = [];
const flag = Array.isArray(arr) && !arr.length;
// flag => true


// 是否为空对象
const obj = {};
const flag = !Array.isArray(obj) && Object.prototype.toString.call(obj) && !Object.keys(obj).length;
// flag => true

// 满足条件时执行
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行


// 为非假值时执行
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();

// 数组不为空时执行
const arr = [0, 1, 2];
arr.length && Func();

// 对象不为空时执行
const obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();

// 函数退出代替条件分支退出
if (flag) {
    Func();
    return false;
}
// 换成
if (flag) {
    return Func();
}

