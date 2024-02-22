import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";
import {colors} from "./contants/theme/colors.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBorderColor: colors.blue2,
                defaultColor: colors.blue2
              }
            },
          }}
        >
          <App/>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
)
