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
    aqiData[i][0] = mychar1;
    aqiData[i][1] = mychar2;
    i++;
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
    var my_table = document.getElementById("aqi-table");
    for(var n=0; n<my_table.length; n++){
        my_table.innerHTML+="<li>"+aqiData[n][0]+":"+aqiData[n][1]+"</li>";
    }
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
