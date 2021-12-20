import styled from 'styled-components';

/**
 * https://styled-components.com/docs/basics#installation
 * Có đề cập cách dùng cdn,
 * Cách fix cdn với React
 * Button này vẫn dùng được các thuộc tính của tag button thường
 * ko phải là component button bằng props
 * Đúng ra nên đặt là Button luôn nhưng ko bắt buộc
 * Tuy nhiên ko có autoformat của extension
 * Cú pháp scss ?
 * Chú ý đôi khi copy sẽ bị lỗi ko ăn, phải gõ tay lại
 */

export const ButtonDemo = styled.button`
            background:${(props) =>
              props.primary ? 'green' : 'linear-gradient(red,blue)'};
            color:#fff;
            border:none;
            border-radius:0.5rem;
            font-size:${(props) => (props.fontSize2x ? '2rem' : '1rem')};
            font-weight:bold;   
            padding:1rem;
            opacity:1;
                &:hover{ 
                    opacity:0.7;
                    transition: all 1s;
                }
                &.button_style{
                    font-size:25px;
                }
`;

export const SmallButton = styled(ButtonDemo)`
// bgc ko đè được bg trong css button gốc,
// comment trong jss được nhưng editor ko hiểu, ko format color lại
//   background-color: orange;
  background: orange;
  font-size: 0.5rem;
  padding: 0.5rem;
`;
