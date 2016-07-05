/**
 * Created by asus-pc on 2016/4/5.
 */


/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var i = 0;

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var mychar1 = document.getElementById("aqi-city-input");
    var mychar2 = document.getElementById("aqi-value-input");
    aqiData[i] = mychar1.value;
    aqiData[i+1] = mychar2.value;
    i = i+2;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var my_table = document.getElementById("aqi-table");
    for(var j=0; j<=i; j=j+2)
        my_table.innerHTML += '<tr> <td >' + aqiData[j-2] + '</td> <td >' + aqiData[j-1] + '</td> <td> <button onclick="delBtnHandle()">delete</button> </td> </tr>';

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();

}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
