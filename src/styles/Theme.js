import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      400: "#7563DC",
    },
    graySky: {
      100: "#F7FAFC",
    },
  },
  fonts: {
    body: "IRANYekan-Regular, sans-serif",
    heading: "IRANYekan-Medium, sans-serif",
    mono: "IRANYekan-Black, monospace",
  },
  styles: {
    global: {
      /* استایل های عمومی */
      "::-webkit-scrollbar": {
        width: "0.7em",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#9999",
        borderRadius: "50px",
      },
      body: {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "IRANYekan-Regular, sans-serif",
      },
      a: {
        textDecoration: "none",
      },

      /* استایل‌های چاپی */
      "@media print": {
        body: {
          margin: 0,
          padding: 0,
        },
        "body *": {
          visibility: "hidden", // تمام عناصر پنهان شوند
        },
        "#printable-table, #printable-table *": {
          visibility: "visible", // فقط جدول و محتوای آن نمایش داده شود
        },
        "#printable-table": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100% !important", // جدول تمام عرض صفحه را بگیرد
          overflowX: "auto", // فعال‌سازی اسکرول افقی (در صورت نیاز)
        },
        table: {
          tableLayout: "auto", // گسترش ستون‌ها بر اساس محتوای داخلی
          width: "100%",
          borderCollapse: "collapse", // حذف فاصله بین سلول‌ها
        },
        th: {
          wordWrap: "break-word", // جلوگیری از شکستن متن در سلول
          whiteSpace: "nowrap", // جلوگیری از پیچیدن متن در سلول
          padding: "8px",
          border: "1px solid black",
          fontSize: "12px",
        },
        td: {
          wordWrap: "break-word",
          whiteSpace: "nowrap",
          padding: "8px",
          border: "1px solid black",
          fontSize: "12px",
        },
      },
    },
  },
});

export default theme;
