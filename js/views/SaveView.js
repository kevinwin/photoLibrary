var SaveView = Backbone.View.extend({
  
  el: '<form class="save">',
  
  template: _.template('URL: <input type="text" name="link"> Title: <input type="text" name="title"><input type="submit" value="Save Photo">'),
  
  events: {
    submit: function(event) {
      event.preventDefault();
      this.saveImage();
    }
  },
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  saveImage: function() {
    var url = $('[name="link"]').val();
    var title = $('[name="title"]').val();
    this.collection.addPhoto(url, title);
    this.clearInput();
  },

  clearInput: function() {
    $('[name="link"]').val('');
    $('[name="title"]').val('');
  }
  
});
