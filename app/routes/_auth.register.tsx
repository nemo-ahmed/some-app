import { json, redirect, type ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData } from "@remix-run/react";
import Input from "~/components/input";

type Value = "email" | "password";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const { _action, ...values } = Object.fromEntries(formData);
  console.log(formData, _action, values);
  const errors: Partial<Record<Value, string>> = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.length < 12) {
    errors.password = "Password should be at least 12 characters";
  }

  if (Object.keys(errors).length > 0) {
    console.log({ errors });
    return json({ errors, values });
  }

  // Redirect to dashboard if validation is successful
  return redirect("/dashboard");
}

export default function Register() {
  const d = useActionData<typeof action>();
  console.log(d);
  return (
    <Form
      method="post"
      className="flex flex-col items-center justify-center gap-1 w-[400px]"
    >
      <Input
        type="email"
        name="email"
        // defaultValue={d?.values?.email}
      />
      {d?.errors?.email && (
        <span className="text-red-500">{d.errors.email}</span>
      )}
      <Input
        type="password"
        name="password"
        // defaultValue=""
      />
      {d?.errors?.password && (
        <span className="text-red-500">{d.errors.password}</span>
      )}
      <button type="submit" name="_action" value="create">
        Sign Up
      </button>
    </Form>
  );
}
