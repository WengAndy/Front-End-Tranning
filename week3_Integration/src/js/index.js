import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import menuData from '../data/menuData';
import listData from '../data/listData';
import MenuTitle from '../js/menu/menuTitle';
import HeaderTitle from '../js/header/headerTitle';
import ListTable from '../js/list/listTable';
import FooterPage from '../js/footer/footerPage';

if (ENV !== 'production') {
  require('../index.html');
}

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

  // 分頁
  const $footerPage = new FooterPage(listData);
  $('#main > .content > .page').append($footerPage.result());
});
