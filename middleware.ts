import { chain, banner, theme, locale } from "./middlewares/";

const middlewares = [
  locale,
  banner,
  theme,
];

export default chain(middlewares);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};
