import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
export default function Navigation() {
 const [slugs, setSlugs] = useState<string[]>([]);
 const location = useLocation();
 useEffect(() => {
  const allKeys = Object.keys(localStorage);
  const puckKeys = allKeys.filter((key) => key.startsWith("puck-data"));
  const foundSlugs = new Set<string>();

  for (const key of puckKeys) {
   const slug = key.replace("puck-data", "").replace(/^-/, "").trim();
   if (slug) {
    foundSlugs.add(slug);
   }
  }

  setSlugs(Array.from(foundSlugs));
 }, [location.pathname]);
 return (
  <nav style={{padding: "1rem", background: "#eee"}}>
   <Link to="/" style={{marginRight: 10}}>
    صفحه اصلی
   </Link>
   {slugs.map((slug) => (
    <Link key={slug} to={`/build/${slug}`} style={{marginRight: 10}}>
     {decodeURIComponent(slug)}
    </Link>
   ))}
  </nav>
 );
}
