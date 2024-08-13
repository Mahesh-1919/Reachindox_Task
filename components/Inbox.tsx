import React, { useEffect } from "react";
import { Input } from "./ui/input";

type Props = {};

const Inbox = (props: Props) => {
  useEffect(() => {
    const Token = localStorage.getItem("token");
    console.log(Token);

    const fetchData = async () => {
      const response = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div className="  border-r border-[#33383F] h-full p-4">
      <div className="flex justify-between items-center p-2">
        <div className="p-2">
          <div className="">
            <h1 className="text-[#4285F4] font-bold flex gap-2 items-center md:text-xl">
              All Inbox(s)
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div>
            <h3 className="font-bold">
              25/25{" "}
              <span className="text-gray-600 font-normal">
                {" "}
                Inboxes selected
              </span>
            </h3>
          </div>
        </div>
        <span className="p-2 hover:bg-slate-500/50 rounded-md bg-[#25262B]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div className="p-2">
        <Input
          type="search"
          placeholder="Search Inbox"
          className="bg-[#FFFFFF1A] border border-[#FFFFFF]/10 mb-2"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className=" bg-[#222426] rounded-xl px-2 py-1 text-[#5C7CFA] text-sm ">
              26
            </span>
            <h3>New Replies</h3>
          </div>
          <div className="flex items-center gap-1">
            Newest
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
