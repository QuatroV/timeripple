import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import { GlobalStyle, Modal } from "../components";

import { store } from "../store";
import { useAuthRedirect } from "../store/domains/auth/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  useAuthRedirect(store.getState());
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Modal />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
