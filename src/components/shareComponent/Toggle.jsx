import { Switch } from "@mui/material";
import { useState } from "react";

// export const ToggleComponent = ({ handleToggleActive, status, defaultValue }) => {
//   console.log(status);
  
//   return (
//     <Switch
//       // onChange={handleToggleActive}
//       onClick={handleToggleActive}
//       checked={status}
//       offColor="#E6D5B1 !important"
//       onColor="#C1963B"
//       // defaultValue={value}
//       // value={status}
//       defaultChecked={defaultValue}

 
//       height={15}
//       width={35}
//       handleDiameter={12}
//       sx={{
//         color: "#E6D5B1",
//       }}
//     />
//   );
// };
export const ToggleComponent = ({ onChange, status, defaultValue,value }) => {
  const [data,setData]=useState(status)

  console.log({data});
  
  return (
    <Switch
      onChange={(e)=>{onChange(e?.target?.checked)}} // Call onChange with the updated boolean value
      checked={status}
      sx={{
        color: "#E6D5B1",
        "& .Mui-checked": {
          color: "#C1963B !important",
        },
        "& .Mui-checked + .MuiSwitch-track": {
          backgroundColor: "#C1963B !important",
        },
      }}
    />
  );
};
