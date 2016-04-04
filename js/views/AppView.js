var AppView = Backbone.View.extend({
  
  el: '#app',
  
  initialize: function() {
    var initialCollection = new Photos(this.model.get('data'), {model: Photo});
    
    this.library = new LibraryView({
      collection: initialCollection
    });
    
    this.header = new TitleView();
    
    this.save = new SaveView({
      collection: initialCollection
    });
    
    this.display = new DisplayView({
      collection: initialCollection
    });
    
    this.render();
  },
  
  render: function() {
    this.$el.append([
      this.header.$el,
      this.save.$el,
      this.library.$el,
      this.display.$el,
    ]);
    return this;
  }
  
});

