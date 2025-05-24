import {DropZone, type Config} from "@measured/puck";

type Props = {
 HeadingBlock: {
  title: string;
  fontSize: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  align: "left" | "center" | "right";
  paddingY: number;
  marginY: number;
  paddingX: number;
  marginX: number;
  color: string;
  fontWeight: "normal" | "bold" | "semibold" | "italic" | "lighter";
  backgroundColor: string;
  lineHeight: number;
 };
 TextBlock: {
  text: string;
  fontSize: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  align: "left" | "center" | "right";
  color: string;
  paddingY: number;
  paddingX: number;
  backgroundColor: string;
  fontWeight: "normal" | "bold" | "semibold" | "italic" | "lighter";
  lineHeight: number;
 };
 LogoBlock: {
  imageUrl: string;
  link: string;
  width: number;
  height: number;
  justify: "left" | "center" | "right";
  rounded: "none" | "20%" | "40%" | "60%" | "100%";
  objectFit: "cover" | "contain";
 };
 Space: {
  height: number;
 };
 Button: {
  text: string;
  link: string;
  align: "left" | "center" | "right";
  fontSize: "xs" | "s" | "m" | "l" | "xl";
  color: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  paddingX: number;
  paddingY: number;
  borderRadius: number;
 };
 GlobalSettings: {
  backgroundImage: string;
  backgroundColor: string;
  fontFamily: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;
  backgroundAttachment: string;
  backgroundGradient: string;
 };
 GridBlock: {
  columns: string;
  gap: number;
  marginX: number;
  marginY: number;
 };
 FlexBlock: {
  direction: "row" | "column";
  justify: "start" | "center" | "end" | "space-between" | "space-around";
  align: "start" | "center" | "end" | "stretch";
  gap: number;
 };
};

const fontSizeMap: Record<Props["HeadingBlock"]["fontSize"], string> = {
 xs: "12px",
 s: "14px",
 m: "16px",
 l: "20px",
 xl: "24px",
 xxl: "32px",
 xxxl: "48px",
};
const fontWeightMap: Record<Props["HeadingBlock"]["fontWeight"], string> = {
 normal: "normal",
 bold: "bold",
 semibold: "600",
 italic: "italic",
 lighter: "lighter",
};
const buttonFontSizeMap: Record<Props["Button"]["fontSize"], string> = {
 xs: "12px",
 s: "14px",
 m: "16px",
 l: "20px",
 xl: "24px",
};
export const config: Config<Props> = {
 components: {
  HeadingBlock: {
   fields: {
    title: {type: "text", label: "عنوان"},
    fontSize: {
     type: "select",
     label: "اندازه فونت",
     options: [
      {label: "XS", value: "xs"},
      {label: "S", value: "s"},
      {label: "M", value: "m"},
      {label: "L", value: "l"},
      {label: "XL", value: "xl"},
      {label: "XXL", value: "xxl"},
      {label: "XXXL", value: "xxxl"},
     ],
    },
    align: {
     type: "select",
     label: "چیدمان متن",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    paddingX: {
     type: "number",
     label: "فاصله از چپ و راست درون (px)",
    },
    paddingY: {
     type: "number",
     label: "فاصله از بالا و پایین درون (px)",
    },
    marginX: {
     type: "number",
     label: "فاصله از چپ و راست بیرون (px)",
    },
    marginY: {
     type: "number",
     label: "فاصله از بالا و پایین بیرون (px)",
    },
    color: {
     type: "text",
     label: "رنگ متن (مثلاً: red یا #ff0000)",
    },
    backgroundColor: {
     type: "text",
     label: "رنگ پس زمینه (مثلاً: red یا #333 یا #ff0000)",
    },
    fontWeight: {
     type: "select",
     label: "وزن فونت",
     options: [
      {label: "Normal", value: "normal"},
      {label: "Bold", value: "bold"},
      {label: "SemiBold", value: "semibold"},
      {label: "Italic", value: "italic"},
      {label: "Lighter", value: "lighter"},
     ],
    },
    lineHeight: {
     type: "number",
     label: "ارتفاع خط (line-height)",
    },
   },
   defaultProps: {
    title: "Heading",
    fontSize: "m",
    align: "left",
    paddingX: 32,
    marginX: 16,
    paddingY: 32,
    marginY: 16,
    color: "#000000",
    backgroundColor: "",
    fontWeight: "normal",
    lineHeight: 1.4,
   },
   render: ({
    title,
    fontSize,
    align,
    paddingX,
    marginX,
    paddingY,
    marginY,
    color,
    fontWeight,
    backgroundColor,
    lineHeight,
   }) => (
    <div
     style={{
      paddingLeft: paddingX,
      paddingRight: paddingX,
      paddingTop: paddingY,
      paddingBottom: paddingY,
      marginLeft: marginX,
      marginRight: marginX,
      marginTop: marginY,
      marginBottom: marginY,
      textAlign: align,
     }}
    >
     <h1
      style={{
       fontSize: fontSizeMap[fontSize],
       color: color,
       backgroundColor: backgroundColor,
       fontWeight: fontWeightMap[fontWeight],
       fontStyle: fontWeight === "italic" ? "italic" : "normal",
       lineHeight: lineHeight,
      }}
     >
      {title}
     </h1>
    </div>
   ),
  },
  TextBlock: {
   fields: {
    text: {
     type: "textarea",
     label: "متن پاراگراف",
    },
    fontSize: {
     type: "select",
     label: "اندازه فونت",
     options: [
      {label: "XS", value: "xs"},
      {label: "S", value: "s"},
      {label: "M", value: "m"},
      {label: "L", value: "l"},
      {label: "XL", value: "xl"},
      {label: "XXL", value: "xxl"},
      {label: "XXXL", value: "xxxl"},
     ],
    },
    paddingX: {
     type: "number",
     label: "فاصله از چپ و راست درون (px)",
    },
    paddingY: {
     type: "number",
     label: "فاصله از بالا و پایین درون (px)",
    },
    align: {
     type: "select",
     label: "چیدمان متن",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    color: {
     type: "text",
     label: "رنگ متن (مثلاً: red یا #333 یا #ff0000)",
    },
    backgroundColor: {
     type: "text",
     label: "رنگ پس زمینه (مثلاً: red یا #333 یا #ff0000)",
    },
    fontWeight: {
     type: "select",
     label: "وزن فونت",
     options: [
      {label: "Normal", value: "normal"},
      {label: "Bold", value: "bold"},
      {label: "SemiBold", value: "semibold"},
      {label: "Italic", value: "italic"},
      {label: "Lighter", value: "lighter"},
     ],
    },
    lineHeight: {
     type: "number",
     label: "ارتفاع خط (line-height)",
    },
   },
   defaultProps: {
    text: "اینجا متن پاراگراف قرار می‌گیرد.",
    fontSize: "m",
    align: "left",
    paddingX: 0,
    paddingY: 0,
    color: "#000000",
    backgroundColor: "",
    fontWeight: "normal",
    lineHeight: 1.4,
   },
   render: ({text, fontSize, align, color, backgroundColor, fontWeight, lineHeight, paddingX, paddingY}) => (
    <p
     style={{
      fontSize: fontSizeMap[fontSize],
      textAlign: align,
      paddingLeft: paddingX,
      paddingRight: paddingX,
      paddingTop: paddingY,
      paddingBottom: paddingY,
      fontWeight: fontWeightMap[fontWeight],
      color,
      backgroundColor,
      lineHeight: lineHeight,
     }}
    >
     {text}
    </p>
   ),
  },
  LogoBlock: {
   fields: {
    imageUrl: {
     type: "text",
     label: "آدرس لوگو (مثلاً /logo.png یا https://...)",
    },
    link: {
     type: "text",
     label: "لینک وقتی روی لوگو کلیک می‌کنی (اختیاری)",
    },
    justify: {
     type: "select",
     label: "چیدمان",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    rounded: {
     type: "select",
     label: "گوشه‌های گرد",
     options: [
      {label: "بدون گردی", value: "none"},
      {label: "20%", value: "20%"},
      {label: "40%", value: "40%"},
      {label: "60%", value: "60%"},
      {label: "100%", value: "100%"},
     ],
    },

    width: {
     type: "number",
     label: "عرض (px)",
    },
    height: {
     type: "number",
     label: "ارتفاع (px)",
    },
    objectFit: {
     type: "select",
     label: "نحوه نمایش تصویر",
     options: [
      {label: "Cover", value: "cover"},
      {label: "Contain", value: "contain"},
     ],
    },
   },
   defaultProps: {
    imageUrl: "/logo.png",
    link: "/",
    width: 120,
    height: 60,
    justify: "left",
    rounded: "none",
    objectFit: "contain",
   },
   render: ({imageUrl, link, width, height, justify, rounded, objectFit}) => {
    const image = (
     <img
      src={imageUrl}
      alt="Logo"
      width={width}
      height={height}
      style={{
       objectFit,
       borderRadius: rounded === "none" ? 0 : rounded,
       display: "block",
      }}
     />
    );

    return <div style={{display: "flex", justifyContent: justify}}>{link ? <a href={link}>{image}</a> : image}</div>;
   },
  },
  Space: {
   fields: {
    height: {
     type: "number",
     label: "ارتفاع فاصله (px)",
    },
   },
   defaultProps: {
    height: 20,
   },
   render: ({height}) => <div style={{height: `${height}px`}} />,
  },
  Button: {
   fields: {
    text: {
     type: "text",
     label: "متن دکمه",
    },
    link: {
     type: "text",
     label: "لینک دکمه (مثلاً: /page یا https://...)",
    },
    hoverBackgroundColor: {
     type: "text",
     label: "رنگ پس‌زمینه هنگام هاور (مثلاً: #0056b3)",
    },
    hoverColor: {
     type: "text",
     label: "رنگ متن هنگام هاور (مثلاً: #ffffff)",
    },
    align: {
     type: "select",
     label: "چیدمان دکمه",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    fontSize: {
     type: "select",
     label: "اندازه فونت",
     options: [
      {label: "XS", value: "xs"},
      {label: "S", value: "s"},
      {label: "M", value: "m"},
      {label: "L", value: "l"},
      {label: "XL", value: "xl"},
     ],
    },
    color: {
     type: "text",
     label: "رنگ متن (مثلاً: white یا #ffffff)",
    },
    backgroundColor: {
     type: "text",
     label: "رنگ پس‌زمینه (مثلاً: blue یا #007bff)",
    },
    paddingX: {
     type: "number",
     label: "فاصله افقی داخلی (px)",
    },
    paddingY: {
     type: "number",
     label: "فاصله عمودی داخلی (px)",
    },
    borderRadius: {
     type: "number",
     label: "شعاع گوشه‌ها (px)",
    },
   },
   defaultProps: {
    text: "کلیک کنید",
    link: "#",
    align: "center",
    fontSize: "m",
    color: "#ffffff",
    backgroundColor: "#007bff",
    hoverBackgroundColor: "#0056b3",
    hoverColor: "#ffffff",
    paddingX: 20,
    paddingY: 10,
    borderRadius: 5,
   },
   render: ({
    text,
    link,
    align,
    fontSize,
    color,
    backgroundColor,
    paddingX,
    paddingY,
    borderRadius,
    hoverBackgroundColor,
    hoverColor,
   }) => {
    const alignMap = {
     left: "justify-start",
     center: "justify-center",
     right: "justify-end",
    };

    const styleVars = {
     "--text-color": color,
     "--bg-color": backgroundColor,
     "--hover-text-color": hoverColor,
     "--hover-bg-color": hoverBackgroundColor,
    } as React.CSSProperties;

    return (
     <div className={`flex ${alignMap[align]}`}>
      <a
       href={link}
       className={`
              inline-block 
              transition-all duration-200 ease-in-out
              font-sans
            `}
       style={{
        ...styleVars,
        fontSize: buttonFontSizeMap[fontSize],
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        borderRadius: `${borderRadius}px`,
        color: "var(--text-color)",
        backgroundColor: "var(--bg-color)",
       }}
       onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--hover-text-color)";
        e.currentTarget.style.backgroundColor = "var(--hover-bg-color)";
       }}
       onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-color)";
        e.currentTarget.style.backgroundColor = "var(--bg-color)";
       }}
      >
       {text}
      </a>
     </div>
    );
   },
  },
  GridBlock: {
   fields: {
    columns: {
     type: "select",
     label: "تعداد ستون‌ها",
     options: [
      {label: "1 ستونه", value: "1"},
      {label: "2 ستونه", value: "2"},
      {label: "3 ستونه", value: "3"},
     ],
    },
    gap: {
     type: "number",
     label: "فاصله بین ستون‌ها (px)",
    },
    marginX: {
     type: "number",
     label: "فاصله افقی بیرونی (px)",
    },
    marginY: {
     type: "number",
     label: "فاصله عمودی بیرونی (px)",
    },
   },
   defaultProps: {
    columns: "3",
    gap: 16,
    marginX: 0,
    marginY: 0,
   },
   render: ({columns, gap, marginX, marginY}) => {
    return (
     <DropZone
      zone="my-grid"
      className={`
             grid
           `}
      style={{
       gridTemplateColumns: `repeat(${columns}, 1fr)`,
       gap: `${gap}px`,
       marginLeft: `${marginX}px`,
       marginRight: `${marginX}px`,
       marginTop: `${marginY}px`,
       marginBottom: `${marginY}px`,
      }}
     />
    );
   },
  },
  FlexBlock: {
   fields: {
    direction: {
     type: "select",
     label: "جهت نمایش",
     options: [
      {label: "افقی (row)", value: "row"},
      {label: "عمودی (column)", value: "column"},
     ],
    },
    justify: {
     type: "select",
     label: "ترازبندی افقی",
     options: [
      {label: "شروع", value: "start"},
      {label: "مرکز", value: "center"},
      {label: "پایان", value: "end"},
      {label: "بین آیتم‌ها", value: "space-between"},
      {label: "اطراف آیتم‌ها", value: "space-around"},
     ],
    },
    align: {
     type: "select",
     label: "ترازبندی عمودی",
     options: [
      {label: "شروع", value: "start"},
      {label: "مرکز", value: "center"},
      {label: "پایان", value: "end"},
      {label: "کِشسان (stretch)", value: "stretch"},
     ],
    },
    gap: {
     type: "number",
     label: "فاصله بین آیتم‌ها (px)",
    },
   },
   defaultProps: {
    direction: "row",
    justify: "start",
    align: "stretch",
    gap: 16,
   },
   render: ({direction, justify, align, gap}) => {
    return (
     <div
      style={{
       display: "flex",
       flexDirection: direction,
       justifyContent: justify,
       alignItems: align,
       gap: `${gap}px`,
      }}
     >
      <DropZone zone="my-flex" />
     </div>
    );
   },
  },

  GlobalSettings: {
   fields: {
    backgroundImage: {type: "text", label: "عکس بک گراند"},
    backgroundColor: {type: "text", label: "رنگ بک گراند"},
    fontFamily: {
     type: "select",
     label: "فونت",
     options: [
      {label: "Yekan", value: "YekanBakhFaNum, sans-serif"},
      {label: "Peyda", value: "PeydaWeb, sans-serif"},
     ],
    },
    backgroundPosition: {
     type: "select",
     label: "موقعیت عکس",
     options: [
      {label: "left top", value: "left top"},
      {label: "center top", value: "center top"},
      {label: "right top", value: "right top"},
      {label: "left center", value: "left center"},
      {label: "center", value: "center"},
      {label: "right center", value: "right center"},
      {label: "left bottom", value: "left bottom"},
      {label: "center bottom", value: "center bottom"},
      {label: "right bottom", value: "right bottom"},
     ],
    },
    backgroundRepeat: {
     type: "select",
     label: "تکرار عکس",
     options: [
      {label: "no-repeat", value: "no-repeat"},
      {label: "repeat-x", value: "repeat-x"},
      {label: "repeat-y", value: "repeat-y"},
      {label: "repeat", value: "repeat"},
     ],
    },
    backgroundSize: {
     type: "select",
     label: "اندازه عکس",
     options: [
      {label: "cover", value: "cover"},
      {label: "contain", value: "contain"},
      {label: "100% 100%", value: "100% 100%"},
     ],
    },
    backgroundAttachment: {
     type: "select",
     label: "تثبیت عکس",
     options: [
      {label: "fixed", value: "fixed"},
      {label: "scroll", value: "scroll"},
     ],
    },
    backgroundGradient: {
     type: "text",
     label: "گرادینت (مثلاً: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)))",
    },
   },
   defaultProps: {
    backgroundImage: "",
    backgroundColor: "",
    fontFamily: "Arial, sans-serif",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundGradient: "",
   },
   render: () => <div style={{display: "none"}} />,
  },
 },
};

export default config;
