import ApiHandle from '../../js/apihandle/apihandle';

export default class footerpageItem {
  constructor(pageNumber) {
    const $mainTemplate = $($('#template-page').html());
    const apihandle = new ApiHandle();
    const $pageItem = $mainTemplate.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    const apiListData = JSON.parse(window.localStorage.getItem('apiData'));
    this.$pageLink = $pageLink;
    this.apihandle = apihandle;
    this.apiListData = apiListData;

    $pageLink.text(`${pageNumber}`);

    $pageLink.click(() => this.pageNumber());

    this.footerpageItem = $pageLink;
  }

  pageNumber() {
    const { $pageLink } = this;
    $pageLink.find('a').find('.th-page-link').addClass('active');
    window.localStorage.setItem('currentPage', $pageLink.text());
    this.pagehandle();
  }

  pagehandle() {
    const { apiListData, apihandle, $pageLink } = this;
    const searchData = JSON.parse(window.localStorage.getItem('searchData'));
    let result;
    if (searchData !== null) {
      result = apihandle.pagination($pageLink.text(), searchData);
    } else {
      result = apihandle.pagination($pageLink.text(), apiListData);
    }
    window.localStorage.setItem('currentPage', $pageLink.text());
    apihandle.reloadPage(result);
  }
  result() {
    return this.footerpageItem;
  }
}
