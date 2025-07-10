import {useParams} from "react-router-dom";
import {Render} from "@measured/puck";
import config from "../../../puck.config";

function PreviewSlug() {
 const {slug} = useParams();
 const storageKey = `puck-data-${slug}`;
 const saved = localStorage.getItem(storageKey);
 const data = saved ? JSON.parse(saved) : {};
 return (
  <div>
   <Render config={config} data={data} />
  </div>
 );
}

export default PreviewSlug;
