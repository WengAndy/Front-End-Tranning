import apiListData from '../../data/listData';
import ListTitle from '../../js/list/listTitle';

export default class headerTitle {
  constructor() {
    const $mainTemplate = $($('#template-header-function').html());
    const $btnSave = $('.btn-save');
    const $addBtn = $mainTemplate.find('.addmore');
    $addBtn.click(() => {
      $('.modal-title').text('新增機台');
      const detailRow = Object.keys(apiListData[0]).map(key => (
        `<div class="detailList">
            <p class="detailName">${key}：</p>
            <input class=input_${key} type="text" name="" />
          </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    $btnSave.click(() => {
      const $modalModel = $('#ModalDialog').find('.modal-content').find('.modal-body');
      const $addId = $modalModel.find('.input_id').val();
      const $device_id = $modalModel.find('.input_device_id').val();
      const $model = $modalModel.find('.input_model').val();
      const $status = $modalModel.find('.input_status').val();
      const $machine_temp = $modalModel.find('.input_machine_temp').val();
      const $address = $modalModel.find('.input_address').val();
      const $region = $modalModel.find('.input_region').val();
      const machine = {
        id: parseInt($addId, 10),
        device_id: $device_id,
        model: $model,
        status: $status.toUpperCase(),
        machine_temp: $machine_temp,
        address: $address,
        region: $region,
      };
      apiListData.push(machine);
      $('#main > .content > #table > .tbody > .tr').remove();
      apiListData.forEach((list) => {
        const $ListTitle = new ListTitle(list);
        $('#main > .content > #table > .tbody').append($ListTitle.result());
      });
      $('#ModalDialog').modal('hide');
    });

    this.headerTitle = $mainTemplate;
  }

  result() {
    return this.headerTitle;
  }
}
