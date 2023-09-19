import { chain, banner, theme } from "./middlewares/";

const middlewares = [
  // locale,
  banner,
  theme
];

export default chain(middlewares);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  // '/((?!_next|api|favicon.ico).*)',
  // matcher: "/",
};
