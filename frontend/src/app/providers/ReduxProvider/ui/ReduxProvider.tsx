import {Provider} from "react-redux";
import {store} from "@/app/store/store.ts";
import type {PropsWithChildren} from "react";

export const ReduxProvider = ({children}:PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
