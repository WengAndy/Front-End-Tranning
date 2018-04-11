import apiListData from '../../data/listData';

export default class apiHandle {
  constructor(data) {
    this.data = data;
    this.apiListData = apiListData;
  }

  initData() {
    return this.apiListData;
  }

  getIndex(data) {
    this.data = data;
    return apiListData.findIndex(line => line.device_id === data.device_id);
  }

  removeData(data) {
    this.data = data;
    apiListData.splice(apiListData.findIndex(alldata =>
      alldata.device_id === data.device_id), 1);
  }

  result() {
    return this.apiHandle;
  }
}