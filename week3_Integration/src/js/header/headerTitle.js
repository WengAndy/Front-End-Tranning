import ApiHandle from '../../js/apihandle/apihandle';

export default class headerTitle {
  constructor() {
    const $mainTemplate = $($('#template-header-function').html());
    const $btnSave = $('.btn-save');
    const $addBtn = $mainTemplate.find('.addmore');
    const $searchMore = $mainTemplate.find('.searchmore');
    const $searchBtn = $mainTemplate.find('.search-btn');
    const $searchInput = $mainTemplate.find('.search-box');
    const $advancedSearchDialog = $mainTemplate.find('.advanced-search-dialog');
    const $advancedSearchClose = $mainTemplate.find('.advanced-close');
    const $advancedSearchBtn = $mainTemplate.find('.advanced-search');
    const $advancedSearchInput = $mainTemplate.find('.advanced-search-Input');
    const $selectSearch = $mainTemplate.find('.select-search');
    const apihandle = new ApiHandle();
    this.apihandle = apihandle;
    this.$btnSave = $btnSave;
    this.$searchBtn = $searchBtn;
    this.$searchMore = $searchMore;
    this.$searchInput = $searchInput;
    this.$advancedSearchDialog = $advancedSearchDialog;
    this.$advancedSearchInput = $advancedSearchInput;
    this.$selectSearch = $selectSearch;
    const init = apihandle.initData();

    this.init = init;
    $addBtn.click(() => {
      this.addModal();
    });

    $btnSave.click(() => {
      this.save();
    });

    $searchBtn.click(() => {
      this.search();
    });

    $searchMore.click(() => {
      $advancedSearchDialog.show();
    });

    $advancedSearchClose.click(() => {
      $advancedSearchDialog.hide();
    });

    $advancedSearchBtn.click(() => {
      this.advancedSearch();
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

  search() {
    const { init, $searchInput, apihandle } = this;
    const searchValue = $searchInput.val();
    const parameter = {
      searchValue,
      status: '',
    };
    console.log('init', init);
    const search = apihandle.search(init, parameter, 'search');
    // const aaa = apihandle.pagination('', search);
    // window.localStorage.setItem('searchData', JSON.stringify(aaa));
    this.apihandle.reloadPage(search);
    console.log('search', search);
    // pageTotal(search);
    // pageItems(search);
  }

  advancedSearch() {
    const { init, $selectSearch, $advancedSearchInput, apihandle } = this;
    const type = {
      0: 'online',
      1: 'offline',
      2: 'error'
    };
    const searchValue = $advancedSearchInput.val();
    let statusType = type[$selectSearch.val()];
    if (statusType === undefined) {
      statusType = '';
    }
    const parameter = {
      searchValue,
      status: statusType,
    };
    const search = apihandle.search(init, parameter, 'advancedSearch');
    // const aaa = apihandle.pagination('', search);
    this.apihandle.reloadPage(search);
    // pageTotal(search);
    // pageItems(search);
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
      // const search = apihandle.search(init, parameter, 'advancedSearch');
      // const aaa = apihandle.pagination('', search);
      // commonList(aaa);
      init.push(machine);
      // const aaa = this.apihandle.pagination('', init);
      // commonList(aaa);
      this.apihandle.reloadPage(init);
      // pageTotal(init);
      // pageItems(init);
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
