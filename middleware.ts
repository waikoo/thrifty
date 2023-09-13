import { chain, banner, theme } from "./middlewares/";

const middlewares = [banner, theme];

export default chain(middlewares);

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: "/",
};
