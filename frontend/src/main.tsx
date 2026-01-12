import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@/app/App.tsx";
import { ReduxProvider } from "@/app/providers/ReduxProvider/ui/ReduxProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
