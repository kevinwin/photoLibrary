var LibraryEntryView = Backbone.View.extend({
  el: '<tr>',
  
  className: 'entry',
  
  template: _.template('<td class="entry"><%= title %></td>'),
  
  events: {
    'click': function() {
      this.model.toggleDisplay();
    }
  },
  
  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
  
});
