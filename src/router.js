import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MeetingInner from "./pages/MeetingInner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/:meetingId",
        element: <MeetingInner/>,
    },
  ]);

export default router