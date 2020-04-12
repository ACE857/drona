import React from "react";
import CourseName from "./CourseName";
const dataOptions = {
  Apple: null,
  Acer: null,
  Alcatel: null,
  Asus: null,
  Huawei: null,
  HTC: null,
  Karbonn: null, // replace this with the list of courses available
  Lenovo: null,
  Lava: null,
  LG: null,
  Microsoft: null,
  Meizu: null,
  Nokia: null,
  Oppo: null,
  OnePlus: null,
  Sony: null,
  Vivo: null,
  Yu: null,
  Google: "https://placehold.it/250x250"
};
export default function Form() {
  return (
    <div>
      <div className="row" style={{ width: "90%" }}>
        <CourseName data={dataOptions} />
      </div>
    </div>
  );
}
