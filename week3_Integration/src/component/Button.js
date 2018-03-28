import '../css/styles.scss';
import menuBar from '../data/MenuBar';

export default class Button {
  constructor() {
    menuBar.forEach((data) => {
      console.log('data', data.Icon)
      $('#menu').append(`
      <div class="list">
        <i class="${data.Icon}"></i> 
        ${data.menuName}
      </div>
    `);
      $('i').css({ fontSize: 20 });
    });
    document.querySelectorAll('#menu > .list').forEach((dom, index) => {
      $(dom).hover(() => {
        $(dom).addClass('hover-lv1');
        menuBar[index].submenuName.forEach((data) => {
          $(dom).append(`<div class="hover-lv1">${data.subTitle} </div>`);
        });
        $('.hover-lv1').show();
      }, () => {
        $(dom).removeClass('hover-lv1');
        $('.hover-lv1').remove();
      });
    });
  }

  render() {
    return Button;
  }
}
