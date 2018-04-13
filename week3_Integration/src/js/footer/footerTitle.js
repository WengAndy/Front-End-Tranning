import ApiHandle from '../../js/apihandle/apihandle';
// import { commonList } from '../../js/index';

export default class footerTitle {
  constructor(data) {
    const $mainTemplate = $($('#template-page').html());
    const apihandle = new ApiHandle();
    const $pageTotal = $mainTemplate.find('.pageTotal');
    const init = apihandle.initData();
    this.init = init;
    this.$pageTotal = $pageTotal;
    if (data === 'no data') {
      $pageTotal.text(`${0} Models`);
    } else {
      $pageTotal.text(`${data.length} Models`);
    }
    this.footerTitle = $mainTemplate;
  }

  // addModal() {
  //   const { init, $btnSave } = this;
  //   $('.modal-title').text('新增機台');
  //   const detailRow = Object.keys(init[0]).map(key => (
  //     `<div class="detailList">
  //         <p class="detailName">${key}：</p>
  //         <input class=input_${key} type="text" name="" />
  //       </div>`
  //   ));
  //   $btnSave.show();
  //   $('.modal-body').html(detailRow.join(''));
  // }

  // search() {
  //   const { init, $searchInput, apihandle } = this;
  //   const searchValue = $searchInput.val();
  //   const parameter = {
  //     searchValue,
  //     status: '',
  //   };
  //   const search = apihandle.search(init, parameter, 'search');
  //   commonList(search);
  // }

  result() {
    return this.footerTitle;
  }
}
