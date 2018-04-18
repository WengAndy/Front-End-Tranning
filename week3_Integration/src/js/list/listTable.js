import ListTitle from '../list/listTitle';
import ApiHandle from '../../js/apihandle/apihandle';

export default class listTable {
  constructor(data, pageNo) {
    const $mainTemplate = $($('#template-data-table').html());
    const $mainTable = $mainTemplate.find('.tbody');
    const apihandle = new ApiHandle();
    const countData = apihandle.pagination(pageNo || 1, data);
    countData.forEach((list) => {
      const $ListTitle = new ListTitle(list);
      $mainTable.append($ListTitle.result());
    });
    this.listTable = $mainTemplate;
  }

  result() {
    return this.listTable;
  }
}
