import  { type Params } from "@remix-run/react";

export const encodeDynamicPath = (path: string): string => {
  return path.replaceAll(" ", "_");
};

export const decodeDynamicPath = (path?: string): string => {
  return path?.replaceAll("_", " ") ?? "";
};

export const paramsDecoder = (path: Params): Record<string, string> => {
  return Object.entries(path).reduce(
    (acc: Record<string, string>, [key, value]) => {
      if (value) acc[key] = decodeDynamicPath(value);
      return acc;
    },
    {}
  );
};
