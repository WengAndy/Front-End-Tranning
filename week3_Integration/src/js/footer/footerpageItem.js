import ApiHandle from '../../js/apihandle/apihandle';
import apiListData from '../../data/listData';

export default class footerpageItem {
  constructor(pageNumber) {
    const $mainTemplate = $($('#template-page').html());
    const apihandle = new ApiHandle();
    const $pageItem = $mainTemplate.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    $pageLink.text(`${pageNumber}`);
    $pageLink.click(() => {
      window.localStorage.setItem('currentPage', $pageLink.text());
      const aaa = apihandle.pagination($pageLink.text(), apiListData);
      apihandle.reloadPage(aaa);
    });

    this.footerpageItem = $pageLink;
  }
  result() {
    return this.footerpageItem;
  }
}
