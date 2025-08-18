import { useLocation, useNavigate, useOutletContext } from "@remix-run/react";
import classNames from "classnames";
import { decodeDynamicPath } from "~/utils/dynamicUrlsHandler";

function Breadcrumbs() {
  const loc = useLocation();
  const xx = useOutletContext();
  const navigate = useNavigate();
  const paths = loc.pathname.split("/").filter(Boolean);
  console.log({ xx, paths });
  return (
    <div className="border-b border-gray-200 dark:border-zinc-700 mb-2 pb-2">
      <ul className="pl-4 flex items-center gap-1 text-xs text-gray-300">
        {paths.slice(1).map((value, i, arr) => {
          const isActive = i === arr.length - 1;
          return (
            <li key={"breadcrumbs_" + value}>
              <button
                className={classNames("mr-1 capitalize", {
                  "text-gray-400": isActive,
                  "cursor-pointer": !isActive,
                })}
                onClick={() =>
                  navigate(`/${paths.slice(0, i - 1).join("/")}/${value}`)
                }
              >
                {decodeDynamicPath(value)}
              </button>
              {!isActive ? ">" : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
