import apiListData from '../../data/listData';

export default class apiHandle {
  constructor(data) {
    this.data = data;
    this.apiListData = apiListData;
    this.pageParameter = {
      pageSize: 5,
      currentPage: 1,
    };
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
    return [...apiListData];
  }

  search(value, data, status) {
    this.data = data;
    let res = [];
    if (status === 'search') {
      res = (value.filter(result => result.address.includes(data.searchValue)
      || result.region.includes(data.searchValue)));
    }
    if (status === 'advancedSearch') {
      res = value.filter(result => result.status.includes(data.status) &&
      (result.address.includes(data.searchValue) || result.region.includes(data.searchValue)));
    }
    if (res.length === 0) return 'no data';
    window.localStorage.setItem('search', JSON.stringify(res));
    return res;
  }

  pagination(pageNo, array) {
    let page = pageNo;
    const { pageParameter } = this;
    if (page === '') {
      page = pageParameter.currentPage;
    }
    const offset = (page - 1) * pageParameter.pageSize;
    this.PageItem(array.length, pageParameter.pageSize);
    return (offset + pageParameter.pageSize >= array.length)
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + pageParameter.pageSize);
  }

  PageItem(pageNo) {
    let page = pageNo;
    const { pageParameter } = this;
    if (page === '') {
      page = pageParameter.currentPage;
    }
    return Math.ceil(pageNo / pageParameter.pageSize);
  }

  result() {
    return this.apiHandle;
  }
}