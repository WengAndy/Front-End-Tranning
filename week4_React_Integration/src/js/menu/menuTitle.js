export default class MenuTitle {
  constructor(menu) {
    const $mainTemplate = $($('#template-menu').html());
    const $menuList = $mainTemplate.find('.list');
    const $menuTitle = $menuList.find('.menuTitle');
    const $subName = $mainTemplate.find('.subName');
    $menuTitle.find('i').addClass(`${menu.icon}`);
    $menuTitle.find('.menuName').text(`${menu.menuName}`);

    menu.subMenu.forEach((submenu) => {
      const $mainTemplateSubItem = $($('#template-menu').html()).find('.subMenuItem');
      const $subTitle = $mainTemplateSubItem.find('li');
      const $subItem = $mainTemplateSubItem.find('span').text(`${submenu.subMenuName}`);
      $subItem.click(() => {
        $('.subNameText').removeClass('focus');
        $subItem.addClass('focus');
      });
      $subName.append($subTitle);
    });

    this.MenuTitle = $menuList;

    $menuList.click(() => {
      $('.list').removeClass('active');
      $menuList.toggleClass('active');
    });

    $menuTitle.click(() => {
      $('.menuName').removeClass('focus');
    });
  }

  result() {
    return this.MenuTitle;
  }
}
