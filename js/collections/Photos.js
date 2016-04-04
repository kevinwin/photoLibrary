var Photos = Backbone.Collection.extend({
  model: Photo,
  
  addPhoto: function(url, title) {
    this.add({
      title: title,
      url: url
    });
  }
});
