import { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      inputTodo: '',
      todos: [
        {
          id: 1,
          task: "task 1 : reviser JS",
          completed: false,
        },
        {
          id: 2,
          task: "task 2 : reviser css",
          completed: false,
        },
      ],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      inputTodo: e.target.value,
    });
    //console.log(this.state.inputTodo);
  };
  handleAddTodo = (e) => {
  
    console.log(~~Math.random()*100);
    
    if (this.state.inputTodo.length === 0) {
      alert("champs requis");
      return;
    }

    const todo = {
      id: Date.now(),
      task: this.state.inputTodo,
      completed: false,
    };
    //console.log(todo);
    this.setState({
      todos: [...this.state.todos, todo],
      inputTodo: "",
    });
  };
  handleDeleteTodo = (id) => {
    const copyTodos = [...this.state.todos];
    const copyTodosUpdate = copyTodos.filter((todo) => todo.id !== id);
    this.setState({
      todos: copyTodosUpdate,
      inputTodo: "",
    });
  };

  handleUpdateTodo = (index) => {
    const copyTodos = this.state.todos.slice();
    copyTodos[index].completed === true
      ? (copyTodos[index].completed = false)
      : (copyTodos[index].completed = true);
    //console.log(copyTodos);
    this.setState({
      todos: copyTodos,
    });
  };
  render() {
    return (
      <>
        <div className="mx-auto text-center px-6 py-12">
            <h1 className="text-3xl text-slate-800 font-extrabold uppercase ">Liste des taches</h1>
          <hr className=" my-6 border-2 border-gray-100 mx-auto " />
          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col sm:flex-row mx-auto text-center mt-10 space-y-4 sm:space-y-0 sm:space-x-3 py-12 px-6 justify-center items-center min-w-full "
          >
            <input
              onChange={this.handleChange}
              className=" placeholder:text-gray-300  text-3xl sm:w-2/3 rounded-lg w-full h-10 ring-1 border-gray-100 py-8 px-3 text-gray-500"
              required
              type="text"
              value={this.state.inputTodo}
              placeholder="Give your todo..."
            />
            <button
              onClick={this.handleAddTodo}
              className="text-white  font-extrabold text-2xl w-full bg-purple-400 sm:w-1/3 hover:bg-purple-300 py-4 px-3 capitalize rounded-lg"
            >
              Add Todo
            </button>
          </form>

          <div>
            <ul className="flex flex-col space-y-3 divide-y-2 divide-solid ">
              {this.state.todos.map((todo, index) => {
                return (
                  <li
                    key={todo.id}
                    id={todo.id}
                    className={
                      todo.completed
                        ? " line-through text-gray-500 py-3 px-1 text-2xl flex justify-between  flex-row items-center"
                        : '"py-3 px-1 text-2xl flex justify-between  flex-row items-center'
                    }
                  >
                    <span> {todo.task} </span>{" "}
                    <div className="space-x-3">
                      <button
                        onClick={() => this.handleUpdateTodo(index)}
                        className="w-10 h-10 bg-purple-300 px-2 text-center"
                      >
                        V
                      </button>
                      <button
                        onClick={() => this.handleDeleteTodo(todo.id)}
                        className="w-10 h-10 bg-red-400 px-2 text-center"
                      >
                        X
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
