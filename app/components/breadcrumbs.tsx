import { useLocation, useNavigate, useParams } from "@remix-run/react";
import classNames from "classnames";
import { decodeDynamicPath } from "~/utils/dynamicUrlsHandler";

function Breadcrumbs() {
  const ro = useParams();
  const loc = useLocation();
  console.log("bread", ro, loc);
  const navigate = useNavigate();
  return (
    <div>
      <ul className="flex items-center gap-1 text-xs text-gray-300">
        {Object.entries(ro).map(([key, value], i, arr) => {
          const isActive = i === arr.length - 1;
          return (
            <li key={key}>
              <button
                className={classNames("mr-1 capitalize", {
                  "text-gray-400": isActive,
                  "cursor-pointer": !isActive,
                })}
                onClick={() =>
                  navigate(`/${loc.pathname.split("/")[1]}/${value}`)
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
