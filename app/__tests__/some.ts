import { expect, test } from "vitest";
import {
  decodeDynamicPath,
  encodeDynamicPath,
} from "~/utils/dynamicUrlsHandler";

test("some test", () => {
  expect(encodeDynamicPath("A B C")).toBe("A_B_C");
  expect("A B C").toBe(decodeDynamicPath("A_B_C"));
});
