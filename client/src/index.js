import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { store } from "./redux/store";
import { Provider } from "react-redux";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource-variable/asap';
import '@fontsource/cousine';
import '@fontsource/roboto';
import '@fontsource/source-sans-pro';

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
