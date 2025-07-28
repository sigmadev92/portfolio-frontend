import { useState } from "react";
import certificationsArr from "../../static_data/certificates";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Courses() {
  let [current, setCurrent] = useState(0);

  function handleCurrent(value) {
    console.log(current);
    if (current === 0 && value === -1) {
      setCurrent(certificationsArr.length - 1);
      return;
    }
    if (current === certificationsArr.length - 1 && value === 1) {
      setCurrent(0);
      return;
    }
    setCurrent(current + value);
  }
  return (
    <div id="courses" className="md:w-[90%] mx-auto relative">
      <div className="w-[100%] md:w-[70%] h-[300px] mx-auto border-2 border-black relative flex justify-center">
        <img
          src={certificationsArr[current].imgURL}
          alt={certificationsArr[current].name}
          className="md:h-[100%] md:w-[70%]"
        />
        <div className="absolute left-[50%] bottom-0 translate-x-[-50%] ">
          <span className="bg-white px-2">
            {current + 1}
            {"/"}
            {certificationsArr.length}
          </span>
        </div>
      </div>

      <FaChevronLeft
        onClick={() => handleCurrent(-1)}
        className=" absolute left-0 top-[40%] cursor-pointer hover:bg-[black] hover:text-white text-[2rem] rounded-full"
      />

      <FaChevronRight
        onClick={() => handleCurrent(1)}
        className=" absolute right-0 top-[40%] cursor-pointer hover:bg-[black] hover:text-white text-[2rem] rounded-full"
      />

      <div
        id="certi-details"
        className="w-[100%] md:w-[70%] h-[150px] overflow-y-auto mx-auto border-2 border-black p-2 bg-[black] text-white text-[12px] md:text-[16px]"
      >
        <b>Name :</b> {certificationsArr[current].name}
        <br />
        <b>Concepts : </b>
        {certificationsArr[current].concepts}
        <br />
        {certificationsArr[current].instructor && (
          <>
            <b>Instructor : </b>
            {certificationsArr[current].instructor} <br />
          </>
        )}
        {certificationsArr[current].issuedBy && (
          <>
            <b>Issued By : </b>
            {certificationsArr[current].issuedBy} <br />
          </>
        )}
        <b>Organisation : </b>
        {certificationsArr[current].org}
      </div>
    </div>
  );
}

export default Courses;
