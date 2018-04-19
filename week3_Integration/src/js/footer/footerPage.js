import ApiHandle from '../../js/apihandle/apihandle';
import FooterPageItem from '../footer/footerpageItem';
import apiListData from '../../data/listData';

export default class footerPage {
  constructor(totalData) {
    const $mainTemplate = $($('#template-page').html());
    const $page = $mainTemplate.find('.page-init');
    // const $pagination = $page.find('.pagination');
    const $pageTop = $page.find('.page-top');
    const $pagePrev = $page.find('.page-prev');
    const $pageNext = $page.find('.page-next');
    const $pageEnd = $page.find('.page-end');
    // const $pagination = $page.find('.pagination');
    const apihandle = new ApiHandle();
    const $pageTotal = $mainTemplate.find('.rowsPerPage');
    const $pageItem = $mainTemplate.find('.page-item');
    // const $pageLink = $pageItem.find('.th-page-link');
    const init = apihandle.initData();
    this.PageStorage = {
      machineData: apiListData,
      pagination: {
        currentPage: JSON.parse(window.localStorage.getItem('currentPage')) || 1,
      }
    };

    // pageItem
    let i = 0;
    const getItem = apihandle.PageItem();
    while (i < getItem) {
      i++;
      const $FooterPageItem = new FooterPageItem(i);
      $pageItem.append($FooterPageItem.result());
    }

    this.init = init;
    this.$pageTotal = $pageTotal;
    // this.$pageLink = $pageLink;
    if (totalData === 'no data') {
      $pageTotal.text(`${0} Models`);
    } else {
      $pageTotal.text(`${totalData.length} Models`);
    }

    $pageTop.click(() => {
      this.PageStorage.pagination.currentPage = 1;
      const aaa = apihandle.pagination(this.PageStorage.pagination.currentPage, apiListData);
      window.localStorage.setItem('currentPage', this.PageStorage.pagination.currentPage);
      apihandle.reloadPage(aaa);
    });

    $pagePrev.click(() => {
      if (this.PageStorage.pagination.currentPage === 1) return;
      this.PageStorage.pagination.currentPage -= 1;
      const aaa = apihandle.pagination(this.PageStorage.pagination.currentPage, apiListData);
      window.localStorage.setItem('currentPage', this.PageStorage.pagination.currentPage);
      apihandle.reloadPage(aaa);
    });

    $pageNext.click(() => {
      if (this.PageStorage.pagination.currentPage === getItem) return;
      this.PageStorage.pagination.currentPage += 1;
      const aaa = apihandle.pagination(this.PageStorage.pagination.currentPage, apiListData);
      window.localStorage.setItem('currentPage', this.PageStorage.pagination.currentPage);
      apihandle.reloadPage(aaa);
    });

    $pageEnd.click(() => {
      this.PageStorage.pagination.currentPage = getItem;
      const aaa = apihandle.pagination(this.PageStorage.pagination.currentPage, apiListData);
      window.localStorage.setItem('currentPage', this.PageStorage.pagination.currentPage);
      apihandle.reloadPage(aaa);
    });

    this.footerPage = $page;
  }

  result() {
    return this.footerPage;
  }
}
