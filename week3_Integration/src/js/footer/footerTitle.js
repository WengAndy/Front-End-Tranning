import ApiHandle from '../../js/apihandle/apihandle';
// import { commonList } from '../../js/index';

export default class footerTitle {
  constructor(data) {
    const $mainTemplate = $($('#template-page').html());
    const apihandle = new ApiHandle();
    const $pageTotal = $mainTemplate.find('.pageTotal');
    const $pageItem = $mainTemplate.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    const init = apihandle.initData();
    this.init = init;
    this.$pageTotal = $pageTotal;
    this.$pageLink = $pageLink;
    if (data === 'no data') {
      $pageTotal.text(`${0} Models`);
    } else {
      $pageTotal.text(`${data.length} Models`);
    }

    $('.page-top').click(() => {
      console.log('page-top');
    });
    $('.page-prev').click(() => {
      console.log('page-prev');
    });
    $('.page-next').click(() => {
      console.log('page-next');
    });
    $('.page-end').click(() => {
      console.log('page-end');
    });

    // const aaa = apihandle.totalPage(data.length, 2);
    // let i = 0;
    // let detailRow;
    // while (i < aaa) {
    //   i++;
    //   detailRow = `<a class="th-page-link" href="#" value=${i}>${i}</a>`;
    //   $pageItem.append(detailRow);
    //   $pageLink.text(`${i}`);
    //   // $pageItem.find('.th-page-link').add(detailRow);
    // }

    // $pageItem.on('click', '.th-page-link', () => {
    //   console.log('123', $pageItem.val());
    // });

    // $('.page-item > a').click(() => {
    //   console.log('123');
    // });

    // $('.th-page-link').live('click', () => {
    //   console.log('123');
    // });

    // $('.th-page-link').click(() => {
    //   console.log('123');
    // });

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
