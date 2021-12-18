// rcc snippet init

class BarbellBurger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burger: [
        { type: 'salad', amount: 1, price: 10 },
        { type: 'cheese', amount: 1, price: 20 },
        { type: 'beef', amount: 1, price: 55 },
      ],
    };
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Barbell Burger</h1>
      </div>
    );
  }
}

ReactDOM.render(<BarbellBurger />, document.getElementById('root'));
