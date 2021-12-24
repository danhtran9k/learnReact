import React from 'react';
import { useSprings, animated, to } from 'react-spring';
export default function Ex3UseSprings() {
  let arrOpacity = [
    { opacity: 0.1, color: 'red', content: 'FullStack', num: 100 },
    { opacity: 0.3, color: 'green', content: 'BackEnd', num: 200 },
    { opacity: 0.5, color: 'blue', content: 'FrontEnd', num: 300 },
    { opacity: 0.7, color: 'orange', content: 'Cyberlearn', num: 400 },
    { opacity: 1, color: 'purple', content: 'Cybersoft', num: 500 },
  ];

  /**
   * Cú pháp
   * https://react-spring.io/hooks/use-springs#either-overwrite-values-to-change-the-animation
   *
   */
  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => {
      return {
        opacity: item.opacity,
        color: item.color,
        content: item.content,
        num: item.num,
        from: {
          opacity: 0,
          color: 'black',
          num: 0,
        },
        config: {
          duration: 3000,
        },
      };
    })
  );

  //   Cách xử lý nông dân
  //   let renderContent = (propsAnim, index) => {
  //     let resultAnimComponent = [];

  //     for (let key in propsAnim) {
  //       if (key === 'content' || key === 'num') {
  //         resultAnimComponent.push(
  //           <animated.h1 style={propsAnim} key={key + index}>
  //             {propsAnim[key]}
  //           </animated.h1>
  //         );
  //       }
  //     }

  //     return resultAnimComponent;
  //   };

  // eslint-disable-next-line
  let renderContent = (propsAnim, index) => {
    let resultAnimComponent = [];

    for (let key in propsAnim) {
      if (key === 'content' || key === 'num') {
        resultAnimComponent.push(
          <animated.h1 style={propsAnim} key={key + index}>
            {propsAnim[key]}
          </animated.h1>
        );
      }
    }

    return resultAnimComponent;
  };

  // eslint-disable-next-line
  let interpolateRender = (propsAnim) => {
    return to([propsAnim.num, propsAnim.content], (num, content) => {
      //   console.log(content);
      //   return (
      //     <>
      //       <animated.h1>{num}</animated.h1>
      //       <animated.p>{content}</animated.p>
      //     </>
      //   );
      //   return `${num} - ${content}`;
      return `${num} - ${content}`;
      // <animated.div>
      //   <animated.h1>{num}</animated.h1>
      //   <animated.p>{content}</animated.p>
      // </animated.div>
    });
  };

  //  https://react-spring.io/basics#view-interpolation
  //  https://react-spring.io/common/interpolation
  //  https://react-spring.io/basics#shorthand-style-props
  //  https://github.com/pmndrs/react-spring/issues/83

  return (
    <div>
      {propsAnimationUseSprings.map((propsAnim, index) => {
        return (
          <animated.div key={index} style={propsAnim}>
            <animated.h1>{propsAnim.content}</animated.h1>
            <animated.p>{propsAnim.num}</animated.p>
          </animated.div>
          // {propsAnim.content} ko phải là string là mà Spring Obj
          // Chỉ khi bọc trong tag animated. mới convert về string
          // div bọc ngoài có thể ko dùng animated.div cũng ok nhưng sẽ phải đưa style={{propsAnim}} vô tất cả thẻ animated. bên trong
          //   Khai báo kiểu nông dân từng props muốn bóc

          // ===========================================
          // Cách 2
          // -> tách hàm để return riêng thì ok nhưng xử lý bên trong vẫn sida
          //   Code gọn có hệ thống hơn nhưng phải kèm ĐK phức tạp
          //   Bóc tách props hàng loạt được

          //   <React.Fragment key={index}>
          //     {renderContent(propsAnim, index)}
          //   </React.Fragment>
          // ===========================================
          // Cách 3
          // Tạo string interpolation từ nhiều props
          // trả string đã process phức tạp được
          // Tuy nhiên bị khai báo nông dân thủ công (bắt buộc) như 1
          // ko tạo tên biến tự động được từ es6 vì cú pháp lạ

          //   <animated.div style={propsAnim} key={index}>
          //     {interpolateRender(propsAnim)}
          //   </animated.div>

          // ===========================================
        );
      })}
    </div>
  );
}
// ko code riêng dạng
/**
 *
 * Tham khảo animation trên themeforest
 * ko code gom chung 2 dòng này được ?
 * {console.log(propsAnim.num)}
 * {'helo'}
 *  gon thành
 * {
 * console.log(propsAnim.num);
 * return {'helo}
 * }
 * đưa trực tiếp vào inline jsx sẽ sai
 * Phải tạo hàm rồi gọi thực thi hàm đó trong inline jsx
 * ko truyền callback gì được hết,
 * TODO IEFF ?
 */
