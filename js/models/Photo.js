var Photo = Backbone.Model.extend({
  
  defaults: {
    title: '',
    url: '',
    rating: 0,
    displayPhoto: false
  },
  
  toggleDisplay: function() {
    this.collection.forEach(function(photo) {
      photo.set({displayPhoto: false});
    });
    this.set({displayPhoto: true});
    this.trigger('toggle:display');
  },
  
  setRating: function(event) {
    this.set({rating: event.target.value});
    this.trigger('change:rating');
  }

});
