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
    this.state.tasks.map;
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
        {this.state.showAddTask && <AddTask />}
        {this.state.tasks.length > 0 ? (
          this.renderTasks()
        ) : (
          <span>No Tasks To Show</span>
        )}
      </div>
    );
  }
}

class AddTask extends React.Component {
  render() {
    return (
      <form className="add-form">
        <div className="form-control">
          <label>Task</label>
          <input type="text" placeholder="Add Task" />
        </div>

        <div className="form-control">
          <label>Day and Time</label>
          <input type="text" placeholder="Add Day and Time" />
        </div>

        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input type="checkbox" />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    );
  }
}

ReactDOM.render(<BarbellTask />, document.getElementById('root'));
