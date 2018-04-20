// import apiListData from '../../data/listData';
import ListTable from '../list/listTable';
import FooterPage from '../footer/footerPage';

export default class apiHandle {
  constructor() {
    const apiListData = JSON.parse(window.localStorage.getItem('apiData'));
    this.apiListData = apiListData;
    this.pageParameter = {
      pageSize: 2,
      currentPage: 1,
    };
  }

  initData() {
    return this.apiListData;
  }

  getIndex(data) {
    return this.apiListData.findIndex(line => line.device_id === data.device_id);
  }

  removeData(data) {
    const { apiListData } = this;
    apiListData.splice(apiListData.findIndex(alldata =>
      alldata.device_id === data.device_id), 1);
    return [...apiListData];
  }

  search(value, data, status) {
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
    return res;
  }

  pagination(pageNo, array) {
    let page = pageNo;
    const { pageParameter } = this;
    if (page === '') {
      page = pageParameter.currentPage;
    }
    const offset = (page - 1) * pageParameter.pageSize;
    return (offset + pageParameter.pageSize >= array.length)
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + pageParameter.pageSize);
  }

  PageItem() {
    const searchData = JSON.parse(window.localStorage.getItem('searchData'));
    const { pageParameter, apiListData } = this;
    let result;
    if (searchData !== null) {
      result = Math.ceil(searchData.length / pageParameter.pageSize);
    } else {
      result = Math.ceil(apiListData.length / pageParameter.pageSize);
    }
    return result;
  }

  reloadPage(data) {
    const $ListTable = new ListTable(data);
    const $FooterPage = new FooterPage(data);
    $('#table').remove();
    $('.page-init').remove();
    $('#main > .content > .table').append($ListTable.result());
    $('#main > .content > .page').append($FooterPage.result());
  }

  result() {
    return this.apiHandle;
  }
}