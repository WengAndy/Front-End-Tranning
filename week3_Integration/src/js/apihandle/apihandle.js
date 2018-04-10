import apiListData from '../../data/listData';

export default function nouse() {}

export function initData() {
  return apiListData;
}

export function getIndex(data) {
  return apiListData.findIndex(line => line.device_id === data.device_id);
}

export function removeData(data) {
  return apiListData.splice(apiListData.findIndex(alldata =>
    alldata.device_id === data.device_id), 1);
}

export function validation(data) {
  let warningArr = [];
  const requestArr = [];
  requestArr.push(data);
  requestArr.forEach((val) => {
    if (val.address === '') {
      warningArr = [...warningArr, `${'address'}：不可以為空\n`];
    }
    if (val.region === '') {
      warningArr = [...warningArr, `${'region'}：不可以為空\n`];
    }
  });
  return warningArr;
}
