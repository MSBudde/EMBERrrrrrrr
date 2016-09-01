import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTodo: function(newTodo) {
      // console.log(newTodo.title , newTodo.description)
      this.sendAction('createTodo', newTodo)
      this.set('newTodo.title', null);
    this.set('newTodo.description', null);    }
  }
});
