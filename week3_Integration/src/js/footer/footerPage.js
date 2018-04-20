import ApiHandle from '../../js/apihandle/apihandle';
import FooterPageItem from '../footer/footerpageItem';

export default class footerPage {
  constructor(totalData) {
    const $mainTemplate = $($('#template-page').html());
    const $page = $mainTemplate.find('.page-init');
    const $pageTop = $page.find('.page-top');
    const $pagePrev = $page.find('.page-prev');
    const $pageNext = $page.find('.page-next');
    const $pageEnd = $page.find('.page-end');
    const apihandle = new ApiHandle();
    const $pageTotal = $mainTemplate.find('.rowsPerPage');
    const $pageItem = $mainTemplate.find('.page-item');
    const apiListData = JSON.parse(window.localStorage.getItem('apiData'));
    const getItem = apihandle.PageItem();
    this.getItem = getItem;
    this.apiListData = apiListData;
    this.apihandle = apihandle;
    this.PageStorage = {
      machineData: apiListData,
      pagination: {
        currentPage: JSON.parse(window.localStorage.getItem('currentPage')) || 1,
      }
    };

    // pageItem
    let i = 0;
    while (i < getItem) {
      i++;
      const $FooterPageItem = new FooterPageItem(i);
      $pageItem.append($FooterPageItem.result());
    }

    this.$pageTotal = $pageTotal;
    if (totalData === 'no data') {
      $pageTotal.text(`${0} Models`);
    } else {
      const result = JSON.parse(window.localStorage.getItem('searchData'));
      if (result !== null) {
        $pageTotal.text(`${result.length} Models`);
      } else {
        $pageTotal.text(`${apiListData.length} Models`);
      }
    }

    $pageTop.click(() => this.topfunction());

    $pagePrev.click(() => this.prevfunction());

    $pageNext.click(() => this.nextfunction());

    $pageEnd.click(() => this.endfunction());

    this.footerPage = $page;
  }

  topfunction() {
    this.PageStorage.pagination.currentPage = 1;
    this.pagehandle();
  }

  endfunction() {
    const { getItem } = this;
    this.PageStorage.pagination.currentPage = getItem;
    this.pagehandle();
  }

  nextfunction() {
    const { getItem } = this;
    if (this.PageStorage.pagination.currentPage === getItem) return;
    this.PageStorage.pagination.currentPage += 1;
    this.pagehandle();
  }

  prevfunction() {
    if (this.PageStorage.pagination.currentPage === 1) return;
    this.PageStorage.pagination.currentPage -= 1;
    this.pagehandle();
  }

  pagehandle() {
    const { apiListData, apihandle } = this;
    const searchData = JSON.parse(window.localStorage.getItem('searchData'));
    let result;
    if (searchData !== null) {
      result = this.apihandle.pagination(this.PageStorage.pagination.currentPage, searchData);
    } else {
      result = this.apihandle.pagination(this.PageStorage.pagination.currentPage, apiListData);
    }
    window.localStorage.setItem('currentPage', this.PageStorage.pagination.currentPage);
    apihandle.reloadPage(result);
  }

  result() {
    return this.footerPage;
  }
}
