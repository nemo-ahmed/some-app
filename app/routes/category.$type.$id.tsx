import type { HeadersFunction } from "@remix-run/node";
import { useLoaderData, type MetaFunction } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { decodeDynamicPath } from "~/utils/dynamicUrlsHandler";
import Product from "~/components/category/product";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // ! This will need to be verified as sometimes it's value is "installHook.js.map"
  console.log("CategoryType loader called", decodeDynamicPath(params.id || ""));
  return decodeDynamicPath(params.id || "");
};

export const meta: MetaFunction = ({ params }) => [
  { title: params.type ? `${params.id}` : "Product" },
  { name: "description", content: "Product Page" },
];

export const headers: HeadersFunction = () => [];

export default function ID() {
  return <Product />;
}
