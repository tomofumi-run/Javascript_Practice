const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to ??',
    completed: false
  },
  {
    id: 3,
    title: 'Go to runnning',
    completed: true
  }
];

for(let todo of todos ){
  if (todo.completed === true){
    console.log(todo.title);
  }
}