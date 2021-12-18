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
    console.log('temp:', temp);
    // Array nested-array vẫn trả về jsx render bình thường
    return temp;
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Barbell Burger</h1>
        <div className="row text-center">
          <div className="col-7">
            <h2 className="text-center">Current Burger</h2>
            <div className="breadTop"></div>
            {this.renderMidBurger()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-capitalize">salad</td>
                  <td>
                    <button className="btn btn-success mr-2" onClick={() => {}}>
                      +
                    </button>
                    1
                    <button className="btn btn-danger ml-2" onClick={() => {}}>
                      -
                    </button>
                  </td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td className="text-capitalize">cheese</td>
                  <td>
                    <button className="btn btn-success mr-2" onClick={() => {}}>
                      +
                    </button>
                    1
                    <button className="btn btn-danger ml-2" onClick={() => {}}>
                      -
                    </button>
                  </td>
                  <td>20</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td className="text-capitalize">beef</td>
                  <td>
                    <button className="btn btn-success mr-2" onClick={() => {}}>
                      +
                    </button>
                    1
                    <button className="btn btn-danger ml-2" onClick={() => {}}>
                      -
                    </button>
                  </td>
                  <td>55</td>
                  <td>55</td>
                </tr>
              </tbody>
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
