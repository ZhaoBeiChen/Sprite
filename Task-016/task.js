/**
 * Created by asus-pc on 2016/4/5.
 */


/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
var aqiData = {};
var i = 0;

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {
    var mychar1 = document.getElementById("aqi-city-input");
    var mychar2 = document.getElementById("aqi-value-input");
    aqiData[i] = mychar1.value;
    aqiData[i+1] = mychar2.value;
    i = i+2;
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
    var my_table = document.getElementById("aqi-table");
    for(var j=0; j<=i; j=j+2)
        my_table.innerHTML += '<tr> <td >' + aqiData[j-2] + '</td> <td >' + aqiData[j-1] + '</td> <td> <button onclick="delBtnHandle()">delete</button> </td> </tr>';

}

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();

}

function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����

    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����

}

init();
