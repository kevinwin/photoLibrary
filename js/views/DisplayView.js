var DisplayView = Backbone.View.extend({
  
  className: 'display',
  
  template: _.template('<img src=<%= url %> class="display"/><p>Title: <%= title %> </p><p>Rating: <%= rating %> out of 5</p>'),
  
  initialize: function() {
    this.render();
    this.collection.on('toggle:display', this.render, this);
    this.collection.on('change:rating', this.render, this);
  },
  
  render: function() {
    this.collection.forEach(function(photo) {
      if (photo.attributes.displayPhoto) {
        this.$el.html(this.template(photo.attributes));
        this.input = new RatingView({model: photo});
        this.$el.append(this.input.$el);
      }
    }, this);
    return this;
  }
  
});
