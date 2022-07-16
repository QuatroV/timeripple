import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import { GlobalStyle, Modal } from "../components";

import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Modal />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
