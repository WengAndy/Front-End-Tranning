import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import menuData from '../data/menuData';
import listData from '../data/listData';
import MenuTitle from '../js/menu/menuTitle';
// import ListTitle from '../js/list/listTitle';
import HeaderTitle from '../js/header/headerTitle';
// import FooterTitle from '../js/footer/footerTitle';
// import PageItem from '../js/footer/pageItem';
// import ApiHandle from '../js/apihandle/apihandle';
import ListTable from '../js/list/listTable';
import FooterPage from '../js/footer/footerPage';

if (ENV !== 'production') {
  require('../index.html');
}

// export function pageTotal(data) {
//   $('#main > .content > .page > .pageTotal > div').remove();
//   const $footerTitle = new FooterTitle(data);
//   $('#main > .content > .page > .pageTotal').append($footerTitle.result());
// }

// export function pageItems(data) {
//   const apiHandle = new ApiHandle();
//   const aaa = apiHandle.PageItem(data.length);
//   $('#main > .content > .page > nav > .pagination > .page-item > div > a').remove();
//   let i = 0;
//   while (i < aaa) {
//     i++;
//     const $pageItem = new PageItem(i, data);
//     $('#main > .content > .page > nav > .pagination > .page-item').append($pageItem.result());
//   }
// }

$(() => {
  window.localStorage.clear();
  window.localStorage.setItem('currentPage', 1);
  menuData.forEach((menu) => {
    const $MenTitle = new MenuTitle(menu);
    $('#menu').append($MenTitle.result());
  });

  // 搜尋功能及新增機台
  const $headerTitle = new HeaderTitle();
  $('#main > .content > .functions').append($headerTitle.result());

  // 列表
  const $listTable = new ListTable(listData);
  $('#main > .content > .table').append($listTable.result());

  // 換頁
  const $footerPage = new FooterPage(listData);
  $('#main > .content > .page').append($footerPage.result());

  // commonList(aaa);
  // pageTotal(listData);
  // pageItems(listData);
});
