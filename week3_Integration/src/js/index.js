import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import menuData from '../data/menuData';
import listData from '../data/listData';
import MenuTitle from '../js/menu/menuTitle';
import ListTitle from '../js/list/listTitle';
import HeaderTitle from '../js/header/headerTitle';

if (ENV !== 'production') {
  require('../index.html');
}

export default function commonList(data) {
  data.forEach((list) => {
    const $ListTitle = new ListTitle(list);
    $('#main > .content > #table > .tbody').append($ListTitle.result());
  });
}

$(() => {
  menuData.forEach((menu) => {
    const $MenTitle = new MenuTitle(menu);
    $('#menu').append($MenTitle.result());
  });

  commonList(listData);

  const $headerTitle = new HeaderTitle();
  $('#main > .content > .functions').append($headerTitle.result());
});
