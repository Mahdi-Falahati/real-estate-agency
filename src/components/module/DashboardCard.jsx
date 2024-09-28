"use client";

import Card from "@/module/Card";
import { useRouter } from "next/navigation";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

export default function DashboardCard({ data }) {
  const router = useRouter();
  const deleteHandler = () => {};
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  return (
    <div className="my-5 shadow-inner rounded-md shadow-slate-400 pt-3">
      <div className="flex justify-around font-medium">
        <button
          onClick={deleteHandler}
          className={`${btnStyles} border-red-700 hover:bg-red-700 `}
        >
          <RiDeleteBinLine className={`${btnIconStyles} bg-red-700`} />
          <span className="px-2">حذف</span>
        </button>
        <button
          onClick={editHandler}
          className={`${btnStyles} border-green-500 hover:bg-green-500 `}
        >
          <LuClipboardEdit className={`${btnIconStyles} bg-green-500`} />
          <span className="px-2">ویرایش</span>
        </button>
      </div>
      <Card data={data} />
    </div>
  );
}

const btnStyles =
  "flex items-center border-2 border-solid hover:text-white rounded-md text-gray-700";
const btnIconStyles = "text-white text-2xl ml-1";
