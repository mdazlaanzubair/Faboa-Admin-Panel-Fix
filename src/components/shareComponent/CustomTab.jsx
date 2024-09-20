import React from "react";
import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";

// Styled components for custom Tabs
const CustomTabs = styled(Tabs)(({ theme }) => ({
  border: "1px solid #d9d9d9", // Border around the entire tabs component
  borderRadius: "8px",
  overflow: "hidden",
  minHeight: "36px", // Adjust height
  marginRight: "10px",
  padding: "5px",
  // Media queries for responsiveness
  [theme.breakpoints.down("sm")]: {
    minHeight: "32px", // Reduce height on small screens
    padding: "3px", // Adjust padding
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "40px", // Increase height on medium screens
    padding: "6px",
  },
}));

const CustomTab = styled(Tab)(({ theme, selected }) => ({
  textTransform: "none", // Keep the text as it is, without uppercasing
  fontWeight: 500,
  fontSize: "14px",
  color: selected ? "#172e00 !important" : "#495057 !important", // Dark green for selected, grey for others
  backgroundColor: selected ? "#fdf3e4 !important" : "#fff !important", // Light beige for selected, white for others
  minHeight: "36px",
  borderRadius: "8px",
  padding: "6px 12px",
  "&:hover": {
    backgroundColor: "#f7f7f7", // Slight hover effect for non-selected tabs
  },
  // Media queries for responsive tab design
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px", // Reduce font size on small screens
    padding: "4px 8px", // Adjust padding on small screens
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px", // Increase font size on medium screens
    padding: "8px 16px", // Adjust padding on medium screens
  },
}));

// Reusable Tab Component
export const StatusTabs = ({ statusValue, onHandleChange, tabOptions }) => {
  return (
    <CustomTabs
      value={statusValue}
      onChange={onHandleChange}
      variant="scrollable"
      scrollButtons="auto"
      indicatorColor=""
    >
      <CustomTab label="All" value={0} selected={statusValue === 0} />

      {tabOptions.map((item, index) => (
        <CustomTab
          key={index}
          label={item?.label}
          value={item?.value}
          selected={statusValue === item?.value}
        />
      ))}
    </CustomTabs>
  );
};
