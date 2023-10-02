import { useEffect, useState } from "react";

function isClient() {
  return typeof window !== "undefined";
}

type TuseMediaQuery = <T>(
  queries: string[],
  values: T[],
  defaultValue: T
) => T;

const useMediaQuery: TuseMediaQuery = (queries = [], values = [], defaultValue) => {
  const mediaQueryList = isClient()
    ? queries.map((query) => window.matchMedia(query))
    : [];

  const getValue = () => {
    if (!isClient()) {
      return defaultValue;
    }

    const index = mediaQueryList.findIndex((mql) => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    if (!isClient()) {
      return;
    }

    const handler = () => setValue(getValue());

    mediaQueryList.forEach((mql) => mql.addEventListener("change", handler));

    return () => {
      mediaQueryList.forEach((mql) => mql.removeEventListener("change", handler));
    };
  }, [mediaQueryList, getValue]);

  return value;
};

export default useMediaQuery;

