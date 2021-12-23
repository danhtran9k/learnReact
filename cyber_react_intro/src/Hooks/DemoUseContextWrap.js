import React from 'react';
import ContextProvider from './Context/ContextProvider';
import DemoUseContext from './DemoUseContext';

export default function DemoUseContextWrap() {
  // Wrap trực tiếp bọc ngoài DemoUseContext ko debug nổi
  // Đúng ra phải wrap trong App.js luôn nhưng set ở đây để local tạm thời
  // Nếu ko tạo store (đóng vài trò root gom) thì sẽ như local cho đúng 1 context
  
  return (
    <ContextProvider>
      <DemoUseContext />
    </ContextProvider>
  );
}

/**
 * Demo này chỉ reformat lại Demo useReducer trước đó và giới thiệu cách đưa Context quản lý lacal rộng hơn vào
 * Vì useReducer thực chất là useState nâng cao chỉ áp dụng cho 1 component
 */