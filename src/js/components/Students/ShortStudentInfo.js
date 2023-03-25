import { takeRight } from "lodash";
import moment from "moment";
import React from "react";
import { SlUser, SlUserFemale } from "react-icons/Sl";

const ShortStudentInfo = ({ student }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-3 items-center flex-none">
        <div className="flex-none">
          <div
            className={`rounded-full border-2 w-16 h-16 grid place-items-center text-3xl bg-white ${
              student.female ? "border-pink-300" : "border-blue-300"
            }`}
          >
            {student.female ? <SlUserFemale /> : <SlUser />}
          </div>
        </div>
        <div className="flex-auto">
          <div className="font-light">{student.forename}</div>
          <div className="font-bold text-2xl">
            {takeRight(student.name.split(" "), 2).join(" ")}
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col space-y-5 flex-auto">
        <div className="flex flex-col">
          <div className="font-thin text-sm">Họ và Tên</div>
          <div className="font-bold text-xl">{student.name}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Tên Thánh</div>
          <div className="font-bold text-xl">{student.forename}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Giới tính</div>
          <div className="font-bold text-xl">
            {student.female ? "Nữ" : "Nam"}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Lớp hiện tại</div>
          <div className="font-bold text-xl">
            {!!student.level_id ? student.level.name : "-"}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Sinh nhật</div>
          <div className="font-bold text-xl">
            {!!student.birthday ? (
              <>
                {moment(student.birthday).format("DD/MM/YYYY")} (
                {moment
                  .duration(moment().diff(moment(student.birthday)))
                  .years()}{" "}
                tuổi)
              </>
            ) : (
              "-"
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Bổn mạng</div>
          <div className="font-bold text-xl">{student.feast || "-"}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Số điện thoại</div>
          <div className="font-bold text-xl">{student.phone || "-"}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-sm">Phụ huynh</div>
          <div className="font-bold text-xl">-</div>
        </div>
      </div>
    </div>
  );
};

export default ShortStudentInfo;
