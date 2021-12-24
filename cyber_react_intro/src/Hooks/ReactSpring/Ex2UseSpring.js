import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Ex2UseSpring() {
  //   let { color, ...propsUseSpring } = useSpring({
  let { color } = useSpring({
    color: [131, 111, 255], //Màu sắc sau animation (màu sắc trong phần to : {color})
    from: {
      color: [238, 99, 99],
      // Màu sắc bắt đầu, có thể dùng chuỗi string trực tiếp được luôn
      // Tuy nhiên để backend can thiệp vào thì nên để dạng mảng,
      // -> xử lý data, truy xuất sẽ tiện hơn chuỗi gốc (lại phải cắt ra)
    },
    config: { duration: 2000, delay: 0 },
  });
  console.log('color:', color);

  // Tuy chỉ bóc color ra nhưng đây vẫn là 1 obj react-string chứ ko phải array
  // Cách định nghĩa trong có vẻ như obj nhưng thực chất là API
  // propsUseString nếu ko xài thì viết cách dưới, tránh ESLint warn

  //Tăng font chữ tăng độ dài
  let propAnimation = useSpring({
    from: {
      width: '0%',
      height: '0%',
      fontSize: '10px',
    },
    // https://react-spring.io/hooks/use-spring#async-chainsscripts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next
    // https://react-spring.io/common/props#cancel-prop
    // https://react-spring.io/common/props#overview
    // -> cancel trong react-spring
    to: async (next, cancel) => {
      await next({ width: '100%', height: '100%', fontSize: '50px' });
      await next({ width: '50%', height: '50%', fontSize: '10px' });
      await next({ width: '100%', height: '100%', fontSize: '50px' });
    },
    config: { duration: 1000 },
    // duration ms cho mỗi await
    // Nếu gặp return giữa chừng sẽ dừng lại
  });

  return (
    <div>
      <animated.div
        style={{
          // color: color.interpolate((r, g, b) => {
          //   return `rgb(${r},${g},${b})`;
          // }),
          // "interpolate" function is deprecated, replace with 'to'
          color: color.to((r, g, b) => {
            //  console.log('r:', r);
            // r,g,b khi destruct ra thì là primitive thật sự
            //  Nếu log sẽ thấy giá trị trả về liên tục
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        hello cybersoft
      </animated.div>
      <animated.span style={propAnimation} className="bg-dark text-white">
        <span>hello cyberlearn</span>
        <p>Khóa học được thực hiện tại cyberlearn.vn</p>
      </animated.span>
    </div>
  );
}

/**
 * https://react-spring.io/basics#view-interpolation
 * https://react-spring.io/common/interpolation
 * 
 * useSpring và useSprings là 2 thư viện khác nhau
 */
