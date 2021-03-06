// class BarbellTask extends Component {
class BarbellTask extends React.Component {
  state = {
    showAddTask: true,
    tasks: [
      {
        id: 1,
        text: 'Task with reminder',
        day: 'Dec 2nd at 8:00pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Normal Task',
        day: 'Dec 5th at 8:30am',
        reminder: false,
      },
    ],
  };

  toggleShowAddTask = () => {
    this.setState({
      showAddTask: !this.state.showAddTask,
    });
  };

  toggleReminder = (id) => {
    // let tasks = this.state.tasks
    // tasks.map((task) => {
    //   task.id === id ? task.reminder= !task.reminder  : true;
    // });
    // Dùng {} thì phải có return, () thì ko, khi hàm map giống như loop duyệt qua nhưng ko return về gì cả !!! mà sẽ mod trực tiếp vào array
    // Khi mode thuộc tinh thì dùng dấu assign = chứ ko dùng :, và ko bọc {} lại

    let tasks = this.state.tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    });
    // Có thể dùng findIndex id và set đúng index đó
    // Có thể dùng index khi map render task để tìm vị trí trong array và set
    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    let tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    this.setState({
      tasks : [...this.state.tasks, {...task, id}]
    })
    // console.log('add Task ', id);
  };

  renderTasks = () => {
    return this.state.tasks.map(({ id, text, day, reminder }) => {
      return (
        <div
          className={`task ${reminder ? 'reminder' : ''}`}
          key={id}
          onDoubleClick={() => this.toggleReminder(id)}
        >
          <div className="task-content">
            <h3>{text}</h3>
            <p>{day}</p>
          </div>
          <div
            className="btn-delete-task"
            onClick={() => {
              this.deleteTask(id);
            }}
          >
            ✕
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-barbell-task">
        <header className="header">
          <h1>Task Tracker</h1>
          <button
            style={{
              backgroundColor: this.state.showAddTask ? 'red' : 'darkBlue',
            }}
            className="btn"
            onClick={this.toggleShowAddTask}
            // Đúng ra là arrow nhưng vì KO có tham số nên để callback trực tiếp luôn
          >
            {this.state.showAddTask ? 'Close' : 'Add'}
          </button>
        </header>
        {this.state.showAddTask && <AddTask addTask={this.addTask} />}
        {this.state.tasks.length > 0 ? (
          this.renderTasks()
        ) : (
          <span>No Tasks To Show</span>
        )}
      </div>
    );
  }
}

// Việc đặt tên cho state (hay là state trong props) ko quan trọng
// Khi gọi setState thì tất cả component bị render lại hết
// state giống như hiểu ngầm ko mod trực tiếp
// cần phải check qua es-lint để coi

class AddTask extends React.Component {
  stateDefault = {
    text: '',
    day: '',
    reminder: false,
  };

  // https://stackoverflow.com/questions/59955647/is-state-a-reserved-word-in-react
  state = { ...this.stateDefault };

  // https://reactjs.org/docs/events.html
  // SyntheticEvent

  // https://reactjs.org/docs/forms.html#controlled-components
  // https://reactjs.org/docs/uncontrolled-components.html
  setForm = (event) => {
    let { name, type } = event.target;
    let value = type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    // console.log('submit');
    // console.log('this.state:', this.state);

    if (!this.state.text) {
      alert('Please add a task');
      return;
    }

    this.props.addTask(this.state);
    // Check vô ESLint thử
    this.setState({
      ...this.stateDefault,
    });
  };

  render() {
    return (
      // 3 cách viết gọi SyntheticEvent của event handler
      <form className="add-form" onSubmit={this.onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={this.state.text}
            name="text"
            onChange={(e) => {
              this.setForm(e);
            }}
            // Vì ko return gì từ setForm nên phải bọc {} xung quanh
          />
        </div>

        <div className="form-control">
          <label>Day and Time</label>
          <input
            type="text"
            placeholder="Add Day and Time"
            name="day"
            value={this.state.day}
            onChange={this.setForm}
          />
        </div>

        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            name="reminder"
            value={this.state.reminder}
            checked={this.state.reminder}
            // defaultChecked = {this.state.reminder}
            //
            onChange={(event) => {
              console.log('event.target:', event.target);
              this.setForm(event)
              // event.target.checked = !event.target.checked
              // let { name, value } = event.currentTarget;
              //   console.log(value)
              //   console.log(typeof(value))
              // }}
            }}
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    );
  }
}

ReactDOM.render(<BarbellTask />, document.getElementById('root'));
