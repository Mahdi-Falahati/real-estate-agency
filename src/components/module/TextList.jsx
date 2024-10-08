"use client";

import { BsFillTrash3Fill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";

export default function TextList({
  setProfileData,
  profileData,
  typeTextList,
  title,
  icon,
}) {
  const addHandler = () => {
    const cpy = { ...profileData };
    cpy[typeTextList].push("");
    setProfileData(cpy);
  };

  const changeHandler = (e, index) => {
    const value = (profileData[typeTextList][index] = e.target.value);
    setProfileData({ ...profileData, value });
  };

  const deleteHandler = (index) => {
    const cpy = { ...profileData };
    cpy[typeTextList].splice(index, 1);
    setProfileData(cpy);
  };

  return (
    <section className="my-5 font-semibold w-full text-gray-800 max-w-sm min-w-[200px] sm:min-w-[350px]">
      <h2 className="flex text-xl">
        {icon}
        {title} :
      </h2>
      {profileData[typeTextList]?.map((item, index) => (
        <div className="flex items-center" key={index}>
          <section className=" w-full my-3 border-double border-4 border-stone-500 rounded-md py-1 px-2">
            <input
              value={item}
              type="text"
              onChange={(e) => changeHandler(e, index)}
              className="w-full outline-none border-none"
            />
          </section>
          <button
            onClick={() => deleteHandler(index)}
            className="mr-2 text-xl flex justify-center items-center text-white bg-red-700 h-10 w-10 rounded-lg"
          >
            <BsFillTrash3Fill />
          </button>
        </div>
      ))}
      <button
        onClick={addHandler}
        className="w-[180px] sm:w-[300px] rounded-lg flex justify-center items-center bg-indigo-700 hover:bg-indigo-600 text-white h-8"
      >
        افزودن
        <BiAddToQueue className="mr-2 text-xl   " />
      </button>
    </section>
  );
}
