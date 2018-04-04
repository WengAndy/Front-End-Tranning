import apiListData from '../../data/listData';

export default class listTitle {
  constructor(list) {
    const $mainTemplate = $($('#template-list').html()).find('.tr');
    const $deviceId = $mainTemplate.find('.td-device-id');
    const $model = $mainTemplate.find('.td-model');
    const $status = $mainTemplate.find('.td-status').find('.status');
    switch (list.status) {
      case 'ONLINE':
        $deviceId.addClass('online');
        $status.addClass('status-online').text(`${list.status}`);
        break;
      case 'OFFLINE':
        $deviceId.addClass('offline');
        $status.addClass('status-offline').text(`${list.status}`);
        break;
      case 'ERROR':
        $deviceId.addClass('error');
        $status.addClass('status-error').text(`${list.status}`);
        break;
      default:
        break;
    }
    const $machineTemp = $mainTemplate.find('.td-machine-temp');
    const $address = $mainTemplate.find('.td-address');
    const $region = $mainTemplate.find('.td-region');
    $deviceId.text(`${list.device_id}`);
    $model.text(`${list.model}`);
    $machineTemp.text(`${list.machine_temp}`);
    $address.text(`${list.address}`);
    $region.text(`${list.region}`);
    const $delBtn = $mainTemplate.find('.list-del');

    const delFunc = () => {
      const confirm = window.confirm('Are you sure you want to delete this data?');
      if (!confirm) return;
      apiListData.splice(apiListData.findIndex(alldata => alldata.id === list.id), 1);
      $mainTemplate.remove();
    };
    $delBtn.click(() => {
      delFunc();
    });
    this.listTitle = $mainTemplate;
  }

  result() {
    return this.listTitle;
  }
}
