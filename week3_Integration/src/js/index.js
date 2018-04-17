import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import menuData from '../data/menuData';
import listData from '../data/listData';
import MenuTitle from '../js/menu/menuTitle';
import ListTitle from '../js/list/listTitle';
import HeaderTitle from '../js/header/headerTitle';
import FooterTitle from '../js/footer/footerTitle';
import PageItem from '../js/footer/pageItem';
import ApiHandle from '../js/apihandle/apihandle';

if (ENV !== 'production') {
  require('../index.html');
}

export function pageTotal(data) {
  $('#main > .content > .page > .pageTotal > div').remove();
  const $footerTitle = new FooterTitle(data);
  $('#main > .content > .page > .pageTotal').append($footerTitle.result());
}

export function pageItems(data) {
  const apiHandle = new ApiHandle();
  const aaa = apiHandle.PageItem(data.length);
  $('#main > .content > .page > nav > .pagination > .page-item > div > a').remove();
  let i = 0;
  while (i < aaa) {
    i++;
    const $pageItem = new PageItem(i, data);
    $('#main > .content > .page > nav > .pagination > .page-item').append($pageItem.result());
  }
}

export function commonList(data) {
  $('#main > .content > #table > .tbody > .tr').remove();
  if (data === 'no data') {
    $('#main > .content > #table > .tbody > .tr').append();
  } else {
    data.forEach((list) => {
      const $ListTitle = new ListTitle(list);
      $('#main > .content > #table > .tbody').append($ListTitle.result());
    });
  }
  // pageTotal(data);
}

$(() => {
  window.localStorage.clear();
  menuData.forEach((menu) => {
    const $MenTitle = new MenuTitle(menu);
    $('#menu').append($MenTitle.result());
  });
  const apiHandle = new ApiHandle();

  const aaa = apiHandle.pagination('', listData);
  commonList(aaa);
  pageTotal(listData);
  pageItems(listData);

  const $headerTitle = new HeaderTitle();
  $('#main > .content > .functions').append($headerTitle.result());
});
