Component({
  properties: {
    info: {
      type: Array,
      value: [{
        title: null,
        img: null,
        excerpt: null,
        url: null
      }]
    }, //Data
    exclass: {
      type: String,
      value: ""
    } //CSS class
  },
  options: {
    addGlobalClass: true
  },
})