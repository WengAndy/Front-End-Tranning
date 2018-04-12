import ApiHandle from '../../js/apihandle/apihandle';
import { commonList } from '../../js/index';

export default class headerTitle {
  constructor() {
    const $mainTemplate = $($('#template-header-function').html());
    const $btnSave = $('.btn-save');
    const $addBtn = $mainTemplate.find('.addmore');
    const $searchBtn = $mainTemplate.find('.search-btn');
    const $searchInput = $mainTemplate.find('.search-box');
    const apihandle = new ApiHandle();
    this.apihandle = apihandle;
    this.$btnSave = $btnSave;
    this.$searchBtn = $searchBtn;
    this.$searchInput = $searchInput;
    const init = apihandle.initData();
    this.init = init;
    $addBtn.click(() => {
      this.addModal();
    });

    $btnSave.click(() => {
      this.save();
    });

    $searchBtn.click(() => {
      const searchValue = this.$searchInput.val();
      const search = this.apihandle.search(init, searchValue);
      commonList(search);
    });

    this.headerTitle = $mainTemplate;
  }

  addModal() {
    const { init, $btnSave } = this;
    $('.modal-title').text('新增機台');
    const detailRow = Object.keys(init[0]).map(key => (
      `<div class="detailList">
          <p class="detailName">${key}：</p>
          <input class=input_${key} type="text" name="" />
        </div>`
    ));
    $btnSave.show();
    $('.modal-body').html(detailRow.join(''));
  }

  save() {
    let { $modalModel, $device_id, $model, $status, $machine_temp, $address, $region } = this;
    const init = this.apihandle.initData();
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
      status: $status || 'offline',
      machine_temp: $machine_temp,
      address: $address,
      region: $region,
    };
    const validata = this.validation(machine);
    if (validata.length > 0) {
      alert(validata.join(''));
    } else {
      init.push(machine);
      commonList(init);
      $('#ModalDialog').modal('hide');
    }
  }

  validation(data) {
    let warningArr = [];
    this.warningArr = warningArr;
    if (data.address === '') {
      warningArr = [...warningArr, `${'address'}：不可以為空\n`];
    }
    if (data.region === '') {
      warningArr = [...warningArr, `${'region'}：不可以為空\n`];
    }
    return warningArr;
  }

  result() {
    return this.headerTitle;
  }
}
