import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/styles.scss';
import '../img/user.jpg';
import '../index.html';
import menuData from '../data/menuData';
import MenuTitle from '../menu/menuTitle';

if (ENV !== 'production') {
  require('../index.html');
}

$(() => {
  menuData.forEach((menu) => {
    const $MenTitle = new MenuTitle(menu);
    $('#menu').append($MenTitle.result());
  });
});
