import React from 'react';
import { useSprings, animated } from 'react-spring';

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

        from: {
          opacity: 0,
          color: 'black',
        },
        config: {
          duration: 3000,
        },
      };
    })
  );

  return (
    <div>
      {propsAnimationUseSprings.map((propsAnim, index) => {
        return (
          <animated.h1 style={propsAnim} key={index}>
            renderContent()
          </animated.h1>
        );
      })}
    </div>
  );
}
