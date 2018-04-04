import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import menuData from '../data/menuData';
import listData from '../data/listData';
import MenuTitle from '../js/menu/menuTitle';
import ListTitle from '../js/list/listTitle';

if (ENV !== 'production') {
  require('../index.html');
}

$(() => {
  menuData.forEach((menu) => {
    const $MenTitle = new MenuTitle(menu);
    $('#menu').append($MenTitle.result());
  });

  listData.forEach((list) => {
    const $ListTitle = new ListTitle(list);
    $('#main > .content > #table > .tbody').append($ListTitle.result());
  });
});
