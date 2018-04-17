import ApiHandle from '../../js/apihandle/apihandle';
import { commonList, pageItems } from '../../js/index';

export default class pageItem {
  constructor(pageNumber, data) {
    const $mainTemplate = $($('#template-page-item').html());
    const apihandle = new ApiHandle();
    const $pageItem = $mainTemplate.find('.th-page-link');
    $pageItem.text(`${pageNumber}`);
    $pageItem.click(() => {
      console.log('$pageItem.text()', $pageItem.text());
      const aaa = apihandle.pagination($pageItem.text(), data || apihandle.initData());
      commonList(aaa);
      pageItems(data);
    });

    this.pageItem = $mainTemplate;
  }
  result() {
    return this.pageItem;
  }
}
