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
    let tasks = this.state.tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    });
    // Dùng {} thì phải có return, () thì ko
    // (task) => (task.id === id ? (task.reminder = !task.reminder) : task)
    // hack sol như trên SAI vì khi đó ko return về obj task nữa mà return về BOOLEAN, trừ khi lồng thêm biểu thức con vào 3 ngôi
    // Khi đó destruct bt còn tốt hơn
    // Có thể dùng findIndex id và set đúng index đó
    // Có thể dùng index khi map render task để tìm vị trí trong array và set
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
          <div className="btn-delete-task">✕</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-barbell-task">
        <header className="header">
          <h1>"Task Tracker"</h1>
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
        {this.state.tasks.length > 0 ? (
          this.renderTasks()
        ) : (
          <span>No Tasks To Show</span>
        )}
      </div>
    );
  }
}

ReactDOM.render(<BarbellTask />, document.getElementById('root'));
