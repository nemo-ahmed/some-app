import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import CategoryPageSwitcher from "~/components/category/categoryPageSwitcher";
import { decodeDynamicPath, paramsDecoder } from "~/utils/dynamicUrlsHandler";

function CategoryType() {
  const data = useLoaderData<typeof loader>();

  console.log("category", data);
  return (
    <div>
      <h1 className="capitalize !text-3xl">{decodeDynamicPath(data.type)}</h1>
      <p>Type: {decodeDynamicPath("type")}</p>
      <CategoryPageSwitcher />
      <Outlet />
    </div>
  );
}

export default CategoryType;

export const loader = async ({
  request,
  params,
  context,
}: LoaderFunctionArgs) => {
  // ! This will need to be verified as sometimes it's value is "installHook.js.map"
  console.log(
    "CategoryType loader called",
    decodeDynamicPath(params.type || ""),
    context
  );

  return paramsDecoder(params);
};

export const meta: MetaFunction<
  typeof loader,
  { "routes/category.$type": LoaderFunctionArgs }
> = ({ params, ...rest }) => {
  console.log(rest);
  return [
    { title: params.type ? `Category: ${params.type}` : "Category Type" },
    { name: "description", content: "Category Type Page" },
  ];
};
