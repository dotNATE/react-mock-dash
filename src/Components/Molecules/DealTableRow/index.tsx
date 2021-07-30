type DealData = {
  address: string;
  type: string;
  profit: number;
  features: string[];
  description: string;
  imageUrl: string;
};

type DealTableRowProps = {
  address: string;
  type: string;
  features: string[];
  profit: number;
  description: string;
  imageUrl: string;
  clicker: ({ address, type, profit, features, description }: DealData) => void;
};

const DealTableRow = ({
  address,
  type,
  profit,
  features,
  description,
  imageUrl,
  clicker,
}: DealTableRowProps): JSX.Element => (
  <li
    className="w-full cursor-pointer group transition"
    onClick={() =>
      clicker({ address, type, profit, features, description, imageUrl })
    }
  >
    <div className="block hover:bg-gray-100">
      <div
        className={
          "px-4 py-4 border-l-8 " +
          (profit > 0 ? "border-green-500" : "border-red-500")
        }
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium truncate group-hover:text-indigo-600">
            {address}
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <p
              className={
                "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
                (profit > 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800")
              }
            >
              {profit + "%"}
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {type}
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              {Array.isArray(features)
                ? features.map((feature) => <p>{`${feature},`}</p>)
                : null}
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <p>
              Closing on
              <time dateTime="2020-01-07">January 7, 2020</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default DealTableRow;
