import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

export default function Ex5UseTransition() {
  let [arrItem, setArrayItem] = useState([
    { id: 1, title: 'FrontEndOnline', content: 'cyberlearn' },
    { id: 2, title: 'FrontEndOffline', content: 'cybersoft' },
    { id: 3, title: 'FrontEndTuXa', content: 'cybersoft' },
  ]);

  const [article, setArticle] = useState({
    id: '',
    title: '',
    content: '',
  });

  const propsUseTransition = useTransition(arrItem, {
    from: { transform: 'translate3d(0,-40px,0)' }, //Component từ vị trí trước khi render
    enter: { transform: 'translate3d(0,0px,0)' }, //Component tại thời điểm render
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: { duration: 500 },
  });

  // https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/list-reordering
  // code ref from docs
  let renderItem = () => {
    return propsUseTransition((style, item) => {
      return (
        <animated.div style={style} className="bg-dark text-white p-3 mt-2">
          <div className="text-right">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              X
            </button>
          </div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>
      );
    });
  };

  const deleteItem = (id) => {
    // console.log('delete item');
    //set lại arrItem mới = bằng cách lấy những phần tử != id đó => giống như tìm index xóa và cập lại
    setArrayItem([...arrItem.filter((item) => item.id !== id)]);
  };

  const handleChange = (e) => {
    // console.log('handle change');
    let { value, name } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  //   Submit xong phải reset field -> TODO fix
  const handleSubmit = () => {
    // console.log('handle submit');
    let item = { ...article, id: Date.now() };
    // setArray phải tự tạo copy lại của obj (như redux)
    // ko auto merge như setState của class
    setArrayItem([...arrItem, item]);
  };

  console.log('re-render');

  return (
    <div className="container">
      {renderItem()}
      <div className="form-group">
        <h3>
          Title <Mount />
        </h3>
        <input className="form-control" name="title" onChange={handleChange} />
      </div>
      <div className="form-group">
        <h3>
          Content <Toggle />
        </h3>
        <input
          className="form-control"
          name="content"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button onClick={handleSubmit}>Add article</button>
      </div>
    </div>
  );
}

// https://react-spring.io/common/configs

function Mount() {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!show),
  });
  // console.log('Toggle re-render');

  return transitions(
    (styles, item) => item && <animated.span style={styles}>✌️</animated.span>
  );
}

function Toggle() {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  });

  return transitions(({ opacity }, item) => {
    return item ? (
      <animated.span
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        😄
      </animated.span>
    ) : (
      <animated.span
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        🤪
      </animated.span>
    );
  });
}

/**
 * https://react-spring.io/hooks/use-transition#keys
 *
 * Nhiều keys
 * useTransition(items, {
 * keys: item => item.key,
 * })
 *
 * Nếu chỉ 1 item
 * useTransition(item, {
 *   key: item.key,
 * })
 *
 * (data,props)
 *
 * =====================================
 *
 * const eles = transition((style, item, t, i) => (
 *   <a.div style={style}>{t.phase}</a.div>
 * ))
 *
 * (any, lookyp)
 */
