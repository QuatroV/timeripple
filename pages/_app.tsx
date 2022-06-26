import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import { GlobalStyle } from "../components";

import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
