import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// 2 const này thực tế sẽ ách file riêng ra
const configDarkTheme = {
  background: '#000',
  color: '#FFF',
  fontSize: '15px',
  fontWeight: 'bold',
};
const configLightTheme = {
  background: '#6633FF',
  color: '#FFF',
  fontSize: '20px',
  fontWeight: '300',
};

const DivStyle = styled.div`
  color: ${(props) => props.theme.color};
  padding: 5%;
  background-color: ${(props) => props.theme.background};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
`;

export default class DemoTheme extends Component {
  state = {
    currentTheme: configDarkTheme,
  };

  render() {
    // Const DivStyle đặt trong đây vẫn được

    return (
      // ThemeProvider sẽ bọc phần lớn nhất chịu ảnh hưởng của Theme
    //   Có thể là app luôn

      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello mình là yasuo thông thạo 7 !!!</DivStyle>
        <select>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
