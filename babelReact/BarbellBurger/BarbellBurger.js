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

  renderMidBurger = () => {
    let temp = this.state.burger.map(({ type, amount }, index) => {
      let midBurger = [];
      for (let index = 0; index < amount; index++) {
        midBurger.push(<div key={type + index} className={type}></div>);
      }
      return midBurger;
    });
    // console.log('temp:', temp);
    // Array nested-array vẫn trả về jsx render bình thường
    return temp;
  };

  changeAmount = (index, increase) => {
    // Anti practice, => ko nên
    // nên tạo copy burger, copy state con
    // Burger_copy[index] = obj_copy
    if (!increase) {
      this.state.burger[index].amount--;
    } else {
      this.state.burger[index].amount++;
    }
    this.setState({
      burger: this.state.burger,
    });
  };

  renderOrder = () => {
    return this.state.burger.map(({ type, amount, price }, index) => {
      return (
        <tr key={index}>
          <td className="text-capitalize">{type}</td>
          <td>
            <button
              className="btn btn-success mr-2"
              onClick={() => {
                this.changeAmount(index, true);
              }}
            >
              +
            </button>
            {amount}
            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                this.changeAmount(index, false);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{amount * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Barbell Burger</h1>
        <div className="row">
          <div className="col-12 col-lg-7">
            <h2 className="text-center">Current Burger</h2>
            <div className="breadTop"></div>
            {this.renderMidBurger()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="text-center">Order</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{this.renderOrder()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Sum</td>
                  <td>
                    {this.state.burger.reduce((prev, { amount, price }) => {
                      return (prev += amount * price);
                    }, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BarbellBurger />, document.getElementById('root'));
