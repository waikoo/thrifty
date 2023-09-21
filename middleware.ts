import { chain, banner, theme, locale, category } from "./middlewares/";

const middlewares = [
  locale,
  banner,
  theme,
  category
];

export default chain(middlewares);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};
