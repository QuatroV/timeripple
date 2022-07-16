import Router from "next/router";
import { useEffect } from "react";
import { RootState } from "../..";
import { PAGES } from "../../../constants/pages";

export const useAuthRedirect = (state: RootState) => {
  useEffect(() => {
    const isAuthenticated = state?.auth?.nickname;
    const isAuthPath = Router.pathname === PAGES.AUTH;

    if (!isAuthenticated && !isAuthPath) {
      Router.push(PAGES.AUTH);
    }
    if (isAuthenticated && isAuthPath) {
      Router.push(PAGES.HOME);
    }
  }, []);
};
