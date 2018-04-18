// import ApiHandle from '../../js/apihandle/apihandle';
// import { commonList } from '../../js/index';

export default class footerpageItem {
  constructor(pageNumber, data) {
    const $mainTemplate = $($('#template-page').html());
    // const apihandle = new ApiHandle();
    // const $pageItem = $mainTemplate.find('.page-item');
    const $pageItem = $mainTemplate.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    // const $pageLink = $mainTemplate.find('.th-page-link');
    // const $pageItem = $mainTemplate.find('.th-page-link');
    // window.localStorage.setItem('currentPage', JSON.stringify(1));
    console.log('data', data);
    // let i = 0;
    // const getItem = apihandle.PageItem(data.length);
    // while (i < getItem) {
    //   i++;
    //   console.log('i', i);
    // }
    $pageLink.text(`${pageNumber}`);

    // $pageLink.text(`${pageNumber}`);
    $pageLink.click(() => {
      console.log('$pageLink', $pageLink.text());
      // $('.th-page-link').removeClass('active');
      // $pageLink.toggleClass('active');
      // $mainTemplate.find('a').removeClass('active');
      // $pageItem.addClass('active');
      // window.localStorage.clear();
      // window.localStorage.setItem('currentPage', $pageItem.text());
      // const aaa = apihandle.pagination($pageItem.text(), data || apihandle.initData());
      // commonList(aaa);
      // pageItems(data);
    });

    this.footerpageItem = $pageLink;
  }
  result() {
    return this.footerpageItem;
  }
}
