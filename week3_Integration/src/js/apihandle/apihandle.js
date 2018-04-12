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

  search(value, data, status) {
    this.data = data;
    let res = [];
    if (status === 'search') {
      res = (value.filter(result => result.address.includes(data.searchValue)
      || result.region.includes(data.searchValue)));
    }
    if (status === 'advancedSearchValue') {
      res = value.filter(result => result.status.includes(data.status) &&
      (result.address.includes(data.searchValue) || result.region.includes(data.searchValue)));
    }
    if (res.length === 0) return 'no data';
    return res;
  }

  result() {
    return this.apiHandle;
  }
}