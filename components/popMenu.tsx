import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  MdMarkAsUnread,
  MdEdit,
  MdPersonRemoveAlt1,
  MdDeleteOutline,
} from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white  dark:border-[#343A40] rounded-md py-2 px-3 text-sm"
        >
          <HiDotsHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 dark:bg-[#1F1F1F] border bg-white text-black dark:text-white  dark:border-[#343A40] ">
        <ul className=" flex flex-col gap-2">
          <li className="flex gap-2 items-center p-2">
            <span>
              <MdMarkAsUnread size={26} />
            </span>
            <p className="font-medium">Mark as read</p>
          </li>
          <li className="flex gap-2 items-center p-2">
            <span>
              <MdEdit size={26} />
            </span>
            <p className="font-medium">Edit</p>
          </li>
          <li className="flex gap-2 items-center p-2">
            <span>
              <MdPersonRemoveAlt1 size={26} />
            </span>
            <p className="font-medium">Remove User</p>
          </li>
          <li className="flex gap-2 items-center p-2">
            <span>
              <FaRegClock size={26} />
            </span>
            <p className="font-medium">Set remainder</p>
          </li>
          <li className="flex gap-2 items-center p-2">
            <span>
              <MdDeleteOutline size={26} />
            </span>
            <p className="font-medium">Delete</p>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
