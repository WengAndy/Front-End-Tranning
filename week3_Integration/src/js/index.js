import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import menuData from '../data/menuData';
import listData from '../data/listData';
import MenuTitle from '../js/menu/menuTitle';
import ListTitle from '../js/list/listTitle';
import HeaderTitle from '../js/header/headerTitle';
import FooterTitle from '../js/footer/footerTitle';

if (ENV !== 'production') {
  require('../index.html');
}

export function page(data) {
  $('#main > .content > .page > .initPage').remove();
  const $footerTitle = new FooterTitle(data);
  $('#main > .content > .page').append($footerTitle.result());
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
  page(data);
}

$(() => {
  // window.localStorage.clear();
  menuData.forEach((menu) => {
    const $MenTitle = new MenuTitle(menu);
    $('#menu').append($MenTitle.result());
  });

  commonList(listData);

  const $headerTitle = new HeaderTitle();
  $('#main > .content > .functions').append($headerTitle.result());

  page(listData);
});
