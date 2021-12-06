'use strict';
// Shorthand để dùng js ko cần jsx
const e = React.createElement;

class SingleLikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Read the comment ID from a data-* attribute.
document.querySelectorAll('.like_button_container').forEach((domContainer) => {
  const commentID = parseInt(domContainer.dataset.commentid, 10);
  ReactDOM.render(e(LikeButton, { commentID: commentID }), domContainer);
});

const domContainer = document.querySelector('#single_like_button');
ReactDOM.render(e(SingleLikeButton), domContainer);

// JSX style, cần babel để convert
// https://reactjs.org/docs/react-without-jsx.html
// https://babeljs.io/repl

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('tick-clock'));
// }

function tick() {
  const element = e(
    'div',
    null,
    e('h1', null, 'Hello, world!'),
    e('h2', null, 'It is ', new Date().toLocaleTimeString(), '.')
  );
  ReactDOM.render(element, document.getElementById('tick-clock'));
}
setInterval(tick, 1000);
