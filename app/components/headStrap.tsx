import { useOutletContext } from "@remix-run/react";

function HeadStrap() {
  const user = useOutletContext();
  return (
    <div className="flex justify-between items-center px-2 py-2.5 h-12 shadow-sm shadow-black/30 dark:shadow-white/30">
      <h2 className="text-lg font-bold">My Application</h2>
      <div className="flex items-center gap-2">
        {user?.id ? (
          <span className="text-sm text-gray-500">
            Welcome, {user?.name ?? "User"}!
          </span>
        ) : (
          <>
            <button className="px-1.5 text-xs py-0.5 bg-blue-500 text-white rounded">
              Sign in
            </button>
            <button className="px-1.5 text-xs py-0.5 bg-blue-500 text-white rounded">
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeadStrap;
