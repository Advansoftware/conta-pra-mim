import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { StoriesPage } from "./pages/StoriesPage";
import { StoryReaderPage } from "./pages/StoryReaderPage";
import { LandingPage } from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "historias", Component: StoriesPage },
      { path: "historias/:id", Component: StoryReaderPage },
    ],
  },
]);
