import { IfProps } from "./types";

export const If = ({ test, children }: IfProps): JSX.Element | null => {
  if (test) {
    if (Array.isArray(children)) {
      return <>{children}</>;
    } else {
      return children as JSX.Element;
    }
  }
  return null;
}

