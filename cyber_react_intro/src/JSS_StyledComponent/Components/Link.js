import styled from 'styled-components';
// Ở đây dùng thêm component link từ jsx React nên phải import vào
import React from 'react';


// https://styled-components.com/docs/basics#extending-styles
// C1: Truyền props rồi bóc tách phần tử
// export const Link = (props) => {
//     return <a className={props.className}>
//         {props.children}
//     </a>
// };
// let {className,children} = props;

// https://styled-components.com/docs/basics#styling-any-component
// arrow ngoặc tròn là return ngầm, ngoặc {} thì phải ghi rõ ra

// restprops sẽ tự bung các thuộc tinh còn lại như id, name, type ...
// Hoặc tự bóc tách riêng giống TH của className và lược bỏ bớt
export const Link = ({ className, children, ...resprops }) => (
  <a className={className} {...resprops}>
    {children}
    <p>thẻ p trong đây vẫn ko dc</p>
  </a>
);
// Tức là thẻ a có thể chứa thẻ span trong nó -> (Đúng về html)
// Nếu đổi a thành div/section/footer thì sẽ hiễn thị được các thẻ block, inline-block bên trong
// Vẫn có nhiều trick-hack nhưng ko nên

// color bị BS reboot đè css nhưng ko cần phải dùng tới important!
// TODO Đè theo kiểu độ ưu tiên css bình thường là đủ thì giải quyết trong styled-component thế nào
export const StyledLink = styled(Link)`
  background-color: red;
  font-weight: bold;
  color: #fff !important;
`;

// Các thẻ p lồng trong ko ăn css nhưng vẫn chiếm diện tích trên giao diện