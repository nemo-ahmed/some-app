import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  //   const userSession = await getUserSessionOrWhatever();
  // TODO: Here we would check if the user session exists.
  console.log("I was VISITED");
  //   if (!userSession) {
  return redirect("/404");
  //   }

  // return json({ ok: true });
};

export default () => {
  console.log();
  // Redirect to the 404 page
  // This is a simple redirect to the 404 page.
  return <div>this page doesn't exist</div>;
};
