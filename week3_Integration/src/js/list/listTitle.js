import Apihandle from '../../js/apihandle/apihandle';

export default class listTitle {
  constructor(list) {
    const {
      device_id, model, machine_temp, status, address, region
    } = list;
    this.list = list;
    const $mainTemplate = $($('#template-list').html()).find('.tr');
    this.$mainTemplate = $mainTemplate;
    const $editMode = $mainTemplate.find('.editMode');
    const $reviewMode = $mainTemplate.find('.reviewMode');
    const $deviceId = $mainTemplate.find('.td-device-id');
    const $model = $mainTemplate.find('.td-model');
    const $status = $mainTemplate.find('.td-status').find('.status');
    const $addressInput = $mainTemplate.find('.input-address');
    const $regionInput = $mainTemplate.find('.input-region');
    const $machineTemp = $mainTemplate.find('.td-machine-temp');
    const $address = $mainTemplate.find('.td-address-content');
    const $region = $mainTemplate.find('.td-region-content');
    const initStatus = true;
    $deviceId.addClass(`${list.status}`);
    $status.addClass(`status-${list.status}`).text(status);
    $deviceId.text(device_id);
    $model.text(model);
    $machineTemp.text(machine_temp);
    $address.text(address);
    $region.text(region);
    this.addressInputVal = '';
    this.regionInputVal = '';
    this.initStatus = initStatus;
    this.$editMode = $editMode;
    this.$addressInput = $addressInput;
    this.$regionInput = $regionInput;
    this.$reviewMode = $reviewMode;
    this.$address = $address;
    this.$region = $region;
    this.$delBtn = $mainTemplate.find('.list-del');
    this.$previewBtn = $mainTemplate.find('.list-detail');
    this.$editBtn = $mainTemplate.find('.list-edit');
    this.$cancelBtn = $mainTemplate.find('.list-cancel');
    this.$checkBtn = $mainTemplate.find('.list-check');
    const { $delBtn, $previewBtn, $editBtn, $cancelBtn, $checkBtn } = this;
    $delBtn.click(() => this.delList());

    $previewBtn.click(() => this.previewDtail());

    $editBtn.click(() => this.edit());

    $cancelBtn.click(() => this.cancel());

    $checkBtn.click(() => this.check());

    this.listTitle = $mainTemplate;
  }

  check() {
    const { list, $address, $region, $addressInput, $regionInput } = this;
    const apiHandle = new Apihandle();
    const index = apiHandle.getIndex(list);
    this.addressInputVal = $addressInput.val();
    this.regionInputVal = $regionInput.val();
    if (this.addressInputVal === '' || this.regionInputVal === '') {
      alert('資料不可為空');
    } else {
      this.changeMode('review');
      $address.text(this.addressInputVal);
      $region.text(this.regionInputVal);
      this.$addressInput.val(this.addressInputVal);
      this.$regionInput.val(this.regionInputVal);
      this.initStatus = false;
      const init = apiHandle.initData();
      init[index].address = this.addressInputVal;
      init[index].region = this.regionInputVal;
    }
  }

  edit() {
    const { list, $addressInput, $regionInput, addressInputVal, regionInputVal } = this;
    this.changeMode('edit');
    if (this.initStatus === true) {
      $addressInput.val(list.address);
      $regionInput.val(list.region);
    } else if (this.initStatus === false) {
      if (addressInputVal === '' || regionInputVal === '') {
        $addressInput.val(list.address);
        $regionInput.val(list.region);
      } else {
        $addressInput.val(addressInputVal);
        $regionInput.val(regionInputVal);
      }
    }
  }

  cancel() {
    const { list, $address, $region, addressInputVal, regionInputVal } = this;
    this.changeMode('review');
    if (addressInputVal === '' || regionInputVal === '') {
      $address.text(`${list.address}`);
      $region.text(`${list.region}`);
    }
    this.initStatus = false;
  }

  delList() {
    const { list } = this;
    const confirm = window.confirm('Are you sure you want to delete this data?');
    if (!confirm) return;
    const apiHandle = new Apihandle();
    apiHandle.removeData(list);
    this.$mainTemplate.remove();
  }
  // 顯示明細
  previewDtail() {
    const { list } = this;
    $('.modal-title').text('詳細清單');
    $('.btn-save').hide();
    const detailRow = Object.keys(list).map(key => (
      `<div class="detailList">
        <p class="detailName">${key}：</p>
        <p class="detailContent">${list[key]}</p>
      </div>`
    ));
    $('.modal-body').html(detailRow.join(''));
  }

  changeMode(data) {
    const { $editMode, $reviewMode } = this;
    if (data === 'review') {
      $editMode.hide();
      $reviewMode.show();
      $('.list-del').attr('disabled', false);
      $('.list-edit').attr('disabled', false);
    } else {
      $editMode.show();
      $reviewMode.hide();
      $('.list-del').attr('disabled', true);
      $('.list-edit').attr('disabled', true);
    }
  }

  result() {
    return this.listTitle;
  }
}
