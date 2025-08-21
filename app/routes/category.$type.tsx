import { type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import CategoryPageSwitcher from "~/components/category/categoryPageSwitcher";
import { decodeDynamicPath, paramsDecoder } from "~/utils/dynamicUrlsHandler";

function CategoryType() {
  const data = useLoaderData<typeof loader>();

  console.log("category", data);
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-zinc-700 mb-2 pb-2">
        <h1 className="pl-4 capitalize !text-3xl !mb-1">
          {decodeDynamicPath(data.type)}
        </h1>
      </div>
      <CategoryPageSwitcher />
      <Outlet />
    </div>
  );
}

export default CategoryType;

export const loader = async ({
  // request,
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
