import ApiHandle from '../../js/apihandle/apihandle';
import FooterPageItem from '../footer/footerpageItem';
// import { commonList } from '../../js/index';

export default class footerPage {
  constructor(totalData) {
    const $mainTemplate = $($('#template-page').html());
    // const $page = $mainTemplate.find('.page');
    // const $pagination = $page.find('.pagination');
    const apihandle = new ApiHandle();
    const $pageTotal = $mainTemplate.find('.rowsPerPage');
    const $pageItem = $mainTemplate.find('.page-item');
    // const $pageLink = $pageItem.find('.th-page-link');
    const init = apihandle.initData();

    console.log('getItotalDatatem', totalData);
    let i = 0;
    const getItem = apihandle.PageItem(totalData.length);
    while (i < getItem) {
      i++;
      const $FooterPageItem = new FooterPageItem(i, totalData);
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

    $('.page-top').click(() => {
      // const aaa = apihandle.pagination(1, data);
      // commonList(aaa);
    });
    $('.page-prev').click(() => {
      console.log('page-prev');
    });
    $('.page-next').click(() => {
      // const fff = parseInt(window.localStorage.getItem('currentPage'), 10);
      // const aaa = apihandle.pagination(fff + 1, data);
      // console.log('asasas', aaa);
      // commonList(aaa);
    });
    $('.page-end').click(() => {
      $('.page-item > .th-page-link').addClass('active');
      // $('page-item > .th-page-link').toggleClass('active');
      // const aaaccc = apihandle.PageItem(data.length);
      // const aaa = apihandle.pagination(aaaccc, data);
      // commonList(aaa);
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

    this.footerPage = $mainTemplate;
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
    return this.footerPage;
  }
}
