import React from 'react';

import AppRoutes from './AppRoutes';
import { ProductContextProvider } from './Contexts/ProductsContext';
import MainLayout from './Layouts/MainLayouts';

function App() {
  return (
    <ProductContextProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ProductContextProvider>
  );
}

export default App;
