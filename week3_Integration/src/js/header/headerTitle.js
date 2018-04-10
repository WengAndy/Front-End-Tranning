import { initData, validation } from '../../js/apihandle/apihandle';
import commonList from '../../js/index';

export default class headerTitle {
  constructor() {
    const $mainTemplate = $($('#template-header-function').html());
    const $btnSave = $('.btn-save');
    const $addBtn = $mainTemplate.find('.addmore');
    const init = initData();
    $addBtn.click(() => {
      $('.modal-title').text('新增機台');
      const detailRow = Object.keys(init[0]).map(key => (
        `<div class="detailList">
            <p class="detailName">${key}：</p>
            <input class=input_${key} type="text" name="" />
          </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    $btnSave.click(() => {
      this.save();
    });

    this.headerTitle = $mainTemplate;
  }

  save() {
    let { $modalModel, $device_id, $model, $status, $machine_temp, $address, $region } = this;
    const init = initData();
    $modalModel = $('#ModalDialog').find('.modal-content').find('.modal-body');
    $device_id = $modalModel.find('.input_device_id').val();
    $model = $modalModel.find('.input_model').val();
    $status = $modalModel.find('.input_status').val();
    $machine_temp = $modalModel.find('.input_machine_temp').val();
    $address = $modalModel.find('.input_address').val();
    $region = $modalModel.find('.input_region').val();

    const machine = {
      device_id: $device_id || parseInt(Math.floor(Math.random() * 100), 10),
      model: $model,
      status: $status.toUpperCase() || 'OFFLINE',
      machine_temp: $machine_temp,
      address: $address,
      region: $region,
    };
    const validata = validation(machine);
    if (validata.length > 0) {
      alert(validata.join(''));
    } else {
      init.push(machine);
      $('#main > .content > #table > .tbody > .tr').remove();
      commonList(init);
      $('#ModalDialog').modal('hide');
    }
  }

  result() {
    return this.headerTitle;
  }
}
