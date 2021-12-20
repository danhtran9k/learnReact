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
            background:linear-gradient(red,blue);
            color:#fff;
            border:none;
            border-radius:0.5rem;
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
