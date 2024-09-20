import { Search as SearchIcon } from "@mui/icons-material";
import { debounce } from "lodash"; 
import { ActiveStatus, StatusOptions } from "../fields/tabsFields"; 
import { IconButton, InputAdornment, TextField, Stack } from "@mui/material"; 
import { useState } from "react";
import { StatusTabs } from "./shareComponent/CustomTab";

// Filters component for managing search and filter functionalities
const Filters = ({
  onFilterChange,
  onSearch,
  entriesValue,
  onStatusChange,
  entries,
  total,
  heading,
  btnText,
}) => {
  const [statusValue, setStatusValue] = useState(0); // State for managing selected status
  const [isSus, setIsSus] = useState(0); // State for managing suspension status

  // Handles changes in status selection
  const onHandleChange = (e, val) => {
    setStatusValue(val);
    if (val === 0) onStatusChange({ status: null });
    else onStatusChange({ status: val });
  };

  // Handles changes in active status selection
  const onActiveChange = (e, val) => {
    setIsSus(val);
    if (val === 0) onFilterChange({ is_suspended: null });
    else onFilterChange({ is_suspended: val });
  };

  // Debounced search handler to optimize search input
  const handleSearch = debounce((value) => {
    console.log(value);
    onSearch(value);
  }, 500);

  return (
    <div className="col-12 row justify-content-between align-items-center">
      <div className="col-12 col-lg-6 row justify-content-between align-items-center">
        <div className="col-12 col-lg-6 mb-3 mb-lg-5">
          <StatusTabs
            className="col-12"
            onHandleChange={onActiveChange}
            tabOptions={ActiveStatus}
            statusValue={isSus}
          />
        </div>
        <div className="col-12 col-lg-6 mb-3 mb-lg-5">
          <StatusTabs
            className="col-12"
            statusValue={statusValue}
            onHandleChange={onHandleChange}
            tabOptions={StatusOptions}
          />
        </div>
      </div>
      <div className="col-12 col-lg-6 mb-3 mb-lg-5 row align-items-end justify-content-end">
        <TextField
          style={{
            borderRadius: "10px",
            padding: "5px",
            width: "400px",
          }}
          placeholder="Search"
          fullWidth
          variant="outlined"
          size="small"
          onChange={(e) => handleSearch({ search: e.target.value })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};
export default Filters;
