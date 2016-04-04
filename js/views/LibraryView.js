var LibraryView = Backbone.View.extend({
  
  el: '<table class="library">',
  
  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();

    this.$el.append('<tr><th class="entry entry-title">Photos</th></tr>');
    this.collection.forEach(function(photo) {
      this.$el.append(new LibraryEntryView({model: photo}).$el);
    }, this);
    return this;
  }
  
});
