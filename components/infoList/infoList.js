Component({
  properties: {
    info: {
      type: Array,
      value: [{
        title: null,
        img:null,
        url: null
      }]
    }, //Data
    exClass: {
      type: String,
      value: null
    } //CSS class
  },
  options: {
    addGlobalClass: true
  },
  data: {

  },
  observers: {
    info: {

    }
  }
})