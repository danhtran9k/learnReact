import React from 'react';

//Giống như reducer bên redux
export const ModelContext = React.createContext();

/**
 * 1 context chỉ có 1 provider
 * Nhưng lại sử dụng nhiều Provider được ???
 * Có thể hiểu giống như reducer
 * Provider sẽ lấy Component ra từ context
 * 
 * -> ~ createStore
 */