export default class MenuCard {
  constructor(menu) {
    const $mainTemplate = $($('#template-menu').html());
    const $menuList = $mainTemplate.find('.list');
    const $menuTitle = $menuList.find('.menuTitle');
    const $groupLink = $mainTemplate.find('.subName');
    $menuTitle.find('i').addClass(`${menu.icon}`);
    $menuTitle.find('.menuName').text(`${menu.menuName}`);

    menu.subMenu.forEach((submenu) => {
      const $mainTemplateSubItem = $($('#template-menu').html()).find('.subMenuItem');
      const $subTitle = $mainTemplateSubItem.find('li');
      const $subItem = $mainTemplateSubItem.find('a').text(`${submenu.subMenuName}`);
      $subItem.click(() => {
        $('a').removeClass('focus');
        $subItem.addClass('focus');
      });
      $groupLink.append($subTitle);
    });

    this.MenuCard = $menuList;

    $menuList.click(() => {
      $('.list').removeClass('active');
      $menuList.toggleClass('active');
    });

    $menuTitle.click(() => {
      $('a').removeClass('focus');
    });
  }

  result() {
    return this.MenuCard;
  }
}
