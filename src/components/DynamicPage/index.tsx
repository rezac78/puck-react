import {useParams} from "react-router-dom";
import {useState} from "react";
import {Puck} from "@measured/puck";
import config from "../../../puck.config";

function DynamicPage() {
 const {slug} = useParams();
 const storageKey = `puck-data-${slug}`;
 const [publishedData, setPublishedData] = useState(() => {
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : {};
 });
 const handlePublish = async (data: unknown) => {
  setPublishedData(data);
  localStorage.setItem(storageKey, JSON.stringify(data));

  try {
   const response = await fetch("/api/save", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
   });

   if (response.ok) {
    console.log("✅ Data saved to server");
   } else {
    console.error("❌ Server error");
   }
  } catch (error) {
   console.error("❌ Network error", error);
  }
 };

 return (
  <div>
   <Puck config={config} data={publishedData} onPublish={handlePublish} />
  </div>
 );
}

export default DynamicPage;
