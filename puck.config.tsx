import {DropZone, type Config} from "@measured/puck";
import React from "react";

type Props = {
 HeadingBlock: {
  title: string;
  responsiveFontSize: string;
  responsivePadding: string;
  responsiveMargin: string;
  align: "left" | "center" | "right";
  color: string;
  fontWeight: "normal" | "bold" | "semibold" | "italic" | "lighter";
  backgroundColor: string;
  lineHeight: number;
 };
 TextBlock: {
  text: string;
  align: "left" | "center" | "right";
  color: string;
  responsiveFontSize: string;
  responsivePadding: string;
  responsiveMargin: string;
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
  responsiveHeight: string;
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
  mobileFixedWidth: boolean;
 };
 GridBlock: {
  columns: string;
  gap: number;
  marginX: number;
  marginY: number;
  paddingX: number;
  paddingY: number;
  backgroundColor: string;
  backgroundImage: string;
 };
 FlexBlock: {
  direction: "row" | "column";
  justify: "start" | "center" | "end" | "space-between" | "space-around";
  align: "start" | "center" | "end" | "stretch";
  gap: number;
 };
 InputBlock: {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  width: number;
  type: string;
  align: "left" | "center" | "right"; // ✅ اضافه کن
 };
 DropDownBlock: {
  label: string;
  name: string;
  options: Array<{
   label: string;
   value: string;
  }>;
  width: number;
  align: "left" | "center" | "right";
  required: boolean;
 };
 TextareaBlock: {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  width: number;
  rows: number;
  align: "left" | "center" | "right";
 };
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
    responsiveFontSize: {
     type: "textarea",
     label: "CSS فونت ریسپانسیو",
    },
    responsivePadding: {
     type: "textarea",
     label: "CSS پدینگ ریسپانسیو",
    },
    responsiveMargin: {
     type: "textarea",
     label: "CSS مارجین ریسپانسیو",
    },
    lineHeight: {
     type: "number",
     label: "ارتفاع خط (line-height)",
    },
   },
   defaultProps: {
    title: "Heading",
    align: "left",
    color: "#000000",
    backgroundColor: "",
    fontWeight: "normal",
    lineHeight: 1.4,
    responsiveFontSize: `font-size: 16px;
  @media (min-width: 640px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
    `,
    responsivePadding: `padding: 16px 24px;
  @media (min-width: 640px) {
    padding: 24px 32px;
  }
  @media (min-width: 1024px) {
    padding: 32px 48px;
  }
`,
    responsiveMargin: `margin: 16px 8px;
  @media (min-width: 640px) {
    margin: 24px 16px;
  }
  @media (min-width: 1024px) {
    margin: 32px 24px;
  }
`,
   },
   render: ({
    title,
    align,
    color,
    backgroundColor,
    fontWeight,
    lineHeight,
    responsiveFontSize,
    responsivePadding,
    responsiveMargin,
   }) => {
    const fontWeightMap = {
     normal: "normal",
     bold: "bold",
     semibold: "600",
     italic: "italic",
     lighter: "lighter",
    };

    const textAlign = {
     left: "left",
     center: "center",
     right: "right",
    }[align];
    const className = `custom-heading-${Math.random().toString(36).slice(2)}`;

    return (
     <div
      style={{
       textAlign: textAlign as "left" | "center" | "right",
      }}
     >
      <style>
       {`
            .${className}{
                ${responsiveFontSize}
                ${responsivePadding}
                ${responsiveMargin}
              }

            @media (min-width: 640px) {
              .${className}{
                ${responsiveFontSize}
                ${responsivePadding}
                ${responsiveMargin}
              }
            }

            @media (min-width: 1024px) {
              .${className}{
                ${responsiveFontSize}
                ${responsivePadding}
                ${responsiveMargin}
              }
            }
          `}
      </style>
      <h1
       className={className}
       style={{
        color,
        backgroundColor,
        fontWeight: fontWeightMap[fontWeight],
        fontStyle: fontWeight === "italic" ? "italic" : "normal",
        lineHeight,
       }}
      >
       {title}
      </h1>
     </div>
    );
   },
  },
  TextBlock: {
   fields: {
    text: {
     type: "textarea",
     label: "متن پاراگراف",
    },
    responsiveFontSize: {
     type: "textarea",
     label: "CSS فونت ریسپانسیو",
    },
    responsivePadding: {
     type: "textarea",
     label: "CSS پدینگ ریسپانسیو",
    },
    responsiveMargin: {
     type: "textarea",
     label: "CSS مارجین ریسپانسیو",
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
    align: "left",
    color: "#000000",
    backgroundColor: "",
    fontWeight: "normal",
    lineHeight: 1.4,
    responsiveFontSize: `font-size: 16px;
  @media (min-width: 640px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
    `,
    responsivePadding: `padding: 16px 24px;
  @media (min-width: 640px) {
    padding: 24px 32px;
  }
  @media (min-width: 1024px) {
    padding: 32px 48px;
  }
`,
    responsiveMargin: `margin: 16px 8px;
  @media (min-width: 640px) {
    margin: 24px 16px;
  }
  @media (min-width: 1024px) {
    margin: 32px 24px;
  }
`,
   },
   render: ({
    text,
    align,
    color,
    backgroundColor,
    fontWeight,
    lineHeight,
    responsiveFontSize,
    responsivePadding,
    responsiveMargin,
   }) => {
    const fontWeightMap = {
     normal: "normal",
     bold: "bold",
     semibold: "600",
     italic: "italic",
     lighter: "lighter",
    };

    const textAlign = {
     left: "left",
     center: "center",
     right: "right",
    }[align];
    const className = `custom-paragraph-${Math.random().toString(36).slice(2)}`;
    return (
     <div
      style={{
       textAlign: textAlign as "left" | "center" | "right",
      }}
     >
      <style>
       {`
          .${className} {
            ${responsiveFontSize}
            ${responsivePadding}
            ${responsiveMargin}
          }

          @media (min-width: 640px) {
            .${className} {
              ${responsiveFontSize}
              ${responsivePadding}
              ${responsiveMargin}
            }
          }

          @media (min-width: 1024px) {
            .${className} {
              ${responsiveFontSize}
              ${responsivePadding}
              ${responsiveMargin}
            }
          }
        `}
      </style>
      <p
       className={className}
       style={{
        color,
        backgroundColor,
        fontWeight: fontWeightMap[fontWeight],
        fontStyle: fontWeight === "italic" ? "italic" : "normal",
        lineHeight,
       }}
      >
       {text}
      </p>
     </div>
    );
   },
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
    responsiveHeight: {
     type: "textarea",
     label: "CSS ارتفاع ریسپانسیو",
    },
   },
   defaultProps: {
    responsiveHeight: `height: 16px;
        @media (min-width: 640px) {
          height: 24px;
        }
        @media (min-width: 1024px) {
          height: 32px;
        }`,
   },
   render: ({responsiveHeight}) => {
    const className = `custom-space-${Math.random().toString(36).slice(2)}`;
    return (
     <>
      <style>
       {`
              .${className} {
                ${responsiveHeight}
              }
              @media (min-width: 640px) {
                .${className} {
                  ${responsiveHeight}
                }
              }
              @media (min-width: 1024px) {
                .${className} {
                  ${responsiveHeight}
                }
              }
            `}
      </style>
      <div className={className} />
     </>
    );
   },
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
    paddingX: {type: "number", label: "پدینگ افقی داخلی (px)"},
    paddingY: {type: "number", label: "پدینگ عمودی داخلی (px)"},
    backgroundColor: {type: "text", label: "رنگ پس‌زمینه"},
    backgroundImage: {type: "text", label: "آدرس تصویر پس‌زمینه (URL)"},
   },
   defaultProps: {
    columns: "3",
    gap: 16,
    marginX: 0,
    marginY: 0,
    paddingX: 0,
    paddingY: 0,
    backgroundColor: "",
    backgroundImage: "",
   },
   render: ({columns, gap, marginX, marginY, paddingX, paddingY, backgroundColor, backgroundImage}) => {
    return (
     <DropZone
      zone="my-grid"
      className="grid"
      style={{
       gridTemplateColumns: `repeat(${columns}, 1fr)`,
       gap: `${gap}px`,
       marginLeft: `${marginX}px`,
       marginRight: `${marginX}px`,
       marginTop: `${marginY}px`,
       marginBottom: `${marginY}px`,
       paddingLeft: `${paddingX}px`,
       paddingRight: `${paddingX}px`,
       paddingTop: `${paddingY}px`,
       paddingBottom: `${paddingY}px`,
       backgroundColor: backgroundColor || undefined,
       backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
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
  InputBlock: {
   fields: {
    label: {type: "text", label: "برچسب (label)"},
    name: {type: "text", label: "نام (name)"},
    placeholder: {type: "text", label: "placeholder"},
    width: {type: "number", label: "عرض (px)"},
    type: {
     type: "select",
     label: "نوع ورودی (input type)",
     options: [
      {label: "متن", value: "text"},
      {label: "عدد", value: "number"},
      {label: "ایمیل", value: "email"},
      {label: "رمز عبور", value: "password"},
     ],
    },
    align: {
     type: "select",
     label: "چیدمان",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    required: {
     type: "custom",
     label: "اجباری است؟",
     render: ({value, onChange}) => (
      <label style={{display: "flex", alignItems: "center", gap: "8px", direction: "rtl"}}>
       <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
       <span>اجباری است؟</span>
      </label>
     ),
    },
   },
   defaultProps: {
    label: "نام",
    name: "name",
    placeholder: "مثلاً علی",
    required: false,
    width: 300,
    align: "right",
    type: "text",
   },
   render: ({label, name, placeholder, required, width, align, type}) => {
    if (!name) return <div style={{color: "red"}}>⚠️ نام فیلد وارد نشده</div>;

    const inputAlign: "left" | "center" | "right" = align ?? "right";

    return (
     <div style={{marginBottom: "1rem", direction: "rtl", textAlign: inputAlign}}>
      <label htmlFor={name} style={{display: "block", marginBottom: "0.5rem"}}>
       {label}
      </label>
      <div>
       <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={!!required}
        style={{
         width,
         padding: "8px",
         fontSize: "16px",
         border: "1px solid #ccc",
         borderRadius: "4px",
         display: "inline-block",
        }}
       />
      </div>
      {required && (
       <div style={{marginTop: "4px"}}>
        <small style={{color: "#999", fontSize: "12px"}}>پر کردن این فیلد الزامی است</small>
       </div>
      )}
     </div>
    );
   },
  },
  DropDownBlock: {
   fields: {
    label: {type: "text", label: "برچسب (label)"},
    name: {type: "text", label: "نام (name)"},
    options: {
     type: "array",
     label: "گزینه‌ها",
     arrayFields: {
      label: {type: "text", label: "نمایش گزینه"},
      value: {type: "text", label: "مقدار گزینه"},
     },
     defaultItemProps: {
      label: "",
      value: "",
     },
     min: 0,
    },
    width: {type: "number", label: "عرض (px)"},
    align: {
     type: "select",
     label: "چیدمان",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    required: {
     type: "custom",
     label: "اجباری است؟",
     render: ({value, onChange}) => (
      <label style={{display: "flex", alignItems: "center", gap: 8, direction: "rtl"}}>
       <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.currentTarget.checked)} />
       <span>اجباری است؟</span>
      </label>
     ),
    },
   },
   defaultProps: {
    label: "انتخاب کنید",
    name: "dropdown",
    options: [
     {label: "گزینه ۱", value: "1"},
     {label: "گزینه ۲", value: "2"},
    ],
    width: 300,
    align: "right",
    required: false,
   },
   render: ({label, name, options, required, width, align}) => {
    if (!name) return <div style={{color: "red"}}>⚠️ نام فیلد وارد نشده</div>;

    const selectAlign: "left" | "center" | "right" = align ?? "right";

    return (
     <div style={{marginBottom: "1rem", direction: "rtl"}}>
      <label htmlFor={name} style={{display: "block", marginBottom: "0.5rem"}}>
       {label}
      </label>
      <div style={{textAlign: selectAlign}}>
       <select
        id={name}
        name={name}
        required={!!required}
        defaultValue=""
        style={{
         width,
         padding: "8px",
         fontSize: "16px",
         border: "1px solid #ccc",
         borderRadius: "4px",
         display: "inline-block",
        }}
       >
        <option value="" disabled hidden>
         انتخاب کنید...
        </option>
        {options?.map((opt, idx) => (
         <option key={idx} value={opt.value}>
          {opt.label}
         </option>
        ))}
       </select>
      </div>
      {required && (
       <div style={{marginTop: "4px"}}>
        <small style={{color: "#999", fontSize: "12px"}}>انتخاب این فیلد الزامی است</small>
       </div>
      )}
     </div>
    );
   },
  },
  TextareaBlock: {
   fields: {
    label: {type: "text", label: "برچسب (label)"},
    name: {type: "text", label: "نام (name)"},
    placeholder: {type: "text", label: "placeholder"},
    width: {type: "number", label: "عرض (px)"},
    rows: {type: "number", label: "تعداد سطرها"},
    align: {
     type: "select",
     label: "چیدمان",
     options: [
      {label: "چپ", value: "left"},
      {label: "وسط", value: "center"},
      {label: "راست", value: "right"},
     ],
    },
    required: {
     type: "custom",
     label: "اجباری است؟",
     render: ({value, onChange}) => (
      <label style={{display: "flex", alignItems: "center", gap: 8, direction: "rtl"}}>
       <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.currentTarget.checked)} />
       <span>اجباری است؟</span>
      </label>
     ),
    },
   },
   defaultProps: {
    label: "متن توضیحی",
    name: "textarea",
    placeholder: "توضیحات را اینجا بنویسید...",
    required: false,
    width: 400,
    rows: 4,
    align: "right",
   },
   render: ({label, name, placeholder, required, width, rows, align}) => {
    if (!name) return <div style={{color: "red"}}>⚠️ نام فیلد وارد نشده</div>;

    const alignMap: Record<string, "left" | "center" | "right"> = {
     left: "left",
     center: "center",
     right: "right",
    };

    return (
     <div style={{marginBottom: "1rem", direction: "rtl", textAlign: alignMap[align]}}>
      <label htmlFor={name} style={{display: "block", marginBottom: "0.5rem"}}>
       {label}
      </label>
      <textarea
       id={name}
       name={name}
       placeholder={placeholder}
       required={!!required}
       rows={rows}
       style={{
        width,
        padding: "8px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        display: "inline-block",
       }}
      />
      {required && (
       <div style={{marginTop: "4px"}}>
        <small style={{color: "#999", fontSize: "12px"}}>پر کردن این فیلد الزامی است</small>
       </div>
      )}
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
    mobileFixedWidth: {
     type: "custom",
     label: "فقط حالت موبایل؟ (عرض ثابت ۴۲۰px)",
     render: ({value, onChange}) => (
      <label style={{display: "flex", alignItems: "center", gap: 8, direction: "rtl"}}>
       <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.currentTarget.checked)} />
       <span>فعال کردن حالت موبایل</span>
      </label>
     ),
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
    mobileFixedWidth: false,
   },
   render: () => <div style={{display: "none"}} />,
  },
 },
};

export default config;
