"use client";

import { p2e } from "@/utils/replaceNmber";

export default function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const ChangeValueHandler = (e) => {
    const { value, name } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <section className=" w-full max-w-sm min-w-[200px] sm:min-w-[350px] my-3 border-double border-4 border-stone-500 rounded-md py-1 px-2">
      <div className="flex flex-row items-center">
        <div className="basis-4/12">
          <label htmlFor={name} className="font-semibold text-stone-700">
            {title} :
          </label>
        </div>
        {textarea ? (
          <div className="basis-10/12">
            <textarea
              placeholder={`${title} را وارد کنید ...`}
              name={name}
              value={profileData[name]}
              onChange={ChangeValueHandler}
              className="peer h-full min-h-[120px] w-full resize-none p-2 focus:outline-none"
            ></textarea>
          </div>
        ) : (
          <div className="basis-9/12">
            <input
              placeholder={`${title} را وارد کنید ...`}
              type="text"
              id={name}
              name={name}
              value={profileData[name]}
              onChange={ChangeValueHandler}
              className="w-full outline-none border-none"
            />
          </div>
        )}
      </div>
    </section>
  );
}
