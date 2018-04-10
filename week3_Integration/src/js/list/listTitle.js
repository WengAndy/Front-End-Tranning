import apiListData from '../../data/listData';

export default class listTitle {
  constructor(list) {
    const {
      device_id, model, machine_temp, status, address, region
    } = list;
    this.list = list;
    const $mainTemplate = $($('#template-list').html()).find('.tr');
    this.$mainTemplate = $mainTemplate;
    const editMode = $mainTemplate.find('.editMode');
    const reviewMode = $mainTemplate.find('.reviewMode');
    const $deviceId = $mainTemplate.find('.td-device-id');
    const $model = $mainTemplate.find('.td-model');
    const $status = $mainTemplate.find('.td-status').find('.status');
    const $addressInputVal = '';
    const $regionInputVal = '';
    const initStatus = true;
    this.$addressInputVal = $addressInputVal;
    this.$regionInputVal = $regionInputVal;
    this.initStatus = initStatus;
    this.editMode = editMode;
    this.reviewMode = reviewMode;
    switch (list.status) {
      case 'ONLINE':
        $deviceId.addClass('online');
        $status.addClass('status-online').text(status);
        break;
      case 'OFFLINE':
        $deviceId.addClass('offline');
        $status.addClass('status-offline').text(status);
        break;
      case 'ERROR':
        $deviceId.addClass('error');
        $status.addClass('status-error').text(status);
        break;
      default:
        break;
    }
    const $machineTemp = $mainTemplate.find('.td-machine-temp');
    const $address = $mainTemplate.find('.td-address-content');
    const $region = $mainTemplate.find('.td-region-content');
    this.$address = $address;
    this.$region = $region;
    $deviceId.text(device_id);
    $model.text(model);
    $machineTemp.text(machine_temp);
    $address.text(address);
    $region.text(region);
    this.$delBtn = $mainTemplate.find('.list-del');
    this.$previewBtn = $mainTemplate.find('.list-detail');
    this.$editBtn = $mainTemplate.find('.list-edit');
    this.$cancelBtn = $mainTemplate.find('.list-cancel');
    this.$checkBtn = $mainTemplate.find('.list-check');
    const { $delBtn, $previewBtn, $editBtn, $cancelBtn, $checkBtn } = this;
    $delBtn.click(() => {
      this.delList();
    });

    $previewBtn.click(() => {
      this.previewDtail();
    });

    $editBtn.click(() => {
      this.edit();
    });

    $cancelBtn.click(() => {
      this.cancel();
    });

    $checkBtn.click(() => {
      this.check();
    });
    this.listTitle = $mainTemplate;
  }

  check() {
    const { editMode, reviewMode, $address, $region } = this;
    const index = apiListData.findIndex(line => line.id === this.list.id);
    editMode.hide();
    reviewMode.show();
    $('.list-del').attr('disabled', false);
    $('.list-edit').attr('disabled', false);
    this.$addressInputVal = $($('.input-address')[index]).val();
    this.$regionInputVal = $($('.input-region')[index]).val();

    if (this.$addressInputVal === '' || this.$regionInputVal === '') {
      $address.text(`${this.list.address}`);
      $region.text(`${this.list.region}`);
    } else {
      $address.text(this.$addressInputVal);
      $region.text(this.$regionInputVal);
    }
    $($('.input-address')[index]).val(this.$addressInputVal);
    $($('.input-region')[index]).val(this.$regionInputVal);
    this.initStatus = false;
    apiListData[index].address = this.$addressInputVal;
    apiListData[index].region = this.$regionInputVal;
  }

  edit() {
    const { list, $addressInputVal, $regionInputVal } = this;
    $('.list-del').attr('disabled', true);
    $('.list-edit').attr('disabled', true);
    this.editMode.show();
    this.reviewMode.hide();
    const index = apiListData.findIndex(line => line.id === list.id);
    if (this.initStatus === true) {
      $($('.input-address')[index]).val(list.address);
      $($('.input-region')[index]).val(list.region);
    } else if (this.initStatus === false) {
      if ($addressInputVal === '' || $regionInputVal === '') {
        $($('.input-address')[index]).val(list.address);
        $($('.input-region')[index]).val(list.region);
      } else {
        $($('.input-address')[index]).val($addressInputVal);
        $($('.input-region')[index]).val($regionInputVal);
      }
    }
  }

  cancel() {
    const { list, $address, $region, $addressInputVal, $regionInputVal } = this;
    this.editMode.hide();
    this.reviewMode.show();
    $('.list-del').attr('disabled', false);
    $('.list-edit').attr('disabled', false);
    if ($addressInputVal === '' || $regionInputVal === '') {
      $address.text(`${list.address}`);
      $region.text(`${list.region}`);
    }
    this.initStatus = false;
  }


  delList() {
    const { list } = this;
    const confirm = window.confirm('Are you sure you want to delete this data?');
    if (!confirm) return;
    apiListData.splice(apiListData.findIndex(alldata => alldata.id === list.id), 1);
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

  result() {
    return this.listTitle;
  }
}
