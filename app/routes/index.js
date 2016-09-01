import Ember from 'ember';

var todos = [{
  title:'Learn Ember',
  description: 'google everything until you figure stuff out',
  done: false
}, {
  title: 'teach Ember',
  description: 'Do an interpretive dance explaining ember to the entire class',
  done: false
}, {
  title: 'cry in the corner',
  description: 'realizing ember is SIT',
  done: true
}
]

var newestTodo = {
  title: "",
  description: "",
  done: false
}

export default Ember.Route.extend({
  model: function(){
    return todos
  },
  actions: {
    createTodo: function(newTodo) {
    let todo = this.store.createRecord('todos', {
      title: newTodo.title,
      description: newTodo.description
    })
      todo.save()
    }
  }
});
