import { Page } from "../Pages/pages";

jest.mock("../Pages/pages", () => (): Page[] => [
  { title: "Page 1", path: "/page-1", component: () => <div></div> },
]);

test("should display menu item", () => {});

test("should direct to a path after click", () => {});
