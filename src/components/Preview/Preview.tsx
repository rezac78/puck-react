import {Render} from "@measured/puck";
import config from "../../../puck.config";

function Preview() {
 const saved = localStorage.getItem("puck-data");
 const data = saved ? JSON.parse(saved) : {};

 return (
  <div>
   <Render config={config} data={data} />
  </div>
 );
}

export default Preview;
