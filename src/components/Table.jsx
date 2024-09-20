import React, { useState } from "react";
import { Table } from "react-bootstrap";
import propTypes from "prop-types";
import { ReactComponent as FilterC } from "../assets/mambers/FilterC.svg";
import { ReactComponent as ArrowDown } from "../assets/mambers/arrow-down.svg";
import Checkbox from "./Checkbox";
import PaginationComponent from "./Pagination";
import "../assets/css/table.css";
import { Tooltip } from "@mui/material";

const TableView = ({
  data,
  fields,
  pageChanged,
  hasPagination,
  isChecked,
  extraCells,
  isMemeber,
  extraHeads,
  navigate,
}) => {
  // Function to calculate the number of columns for the table
  const colspanFields = () => {
    return Object.keys(fields).length + 1;
  };

  const [isCopied, setIsCopied] = useState(false);

  // Function to copy text to clipboard
  const copyToClipboard = (email) => {
    if (email) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setIsCopied(true);
          // Reset tooltip text after 3 seconds
          setTimeout(() => setIsCopied(false), 3000);
        })
        .catch((err) => {
          console.error("Failed to copy email: ", err);
        });
    }
  };

  return (
    <>
      <div className="tblStyle w-full overflow-hidden">
        <Table
          responsive
          className={`m-auto table table-responsive overflow-auto`}
        >
          <thead>
            <tr className="thdCls">
              <th className="fixed-left-col left">
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      textAlign: "left",
                      minWidth: "20%",
                    }}
                  >
                    <Checkbox
                      id={data?._id}
                      style={{ fontSize: "16px", marginLeft: "10px" }}
                    />
                  </div>
                  <div
                    className="d-flex me-2 flex-row text-start ms-3"
                    style={{
                      textAlign: "left",
                      minWidth: "80%",
                    }}
                  >
                    <span>{fields[0]?.label}</span>
                    <ArrowDown
                      className="filter-icon"
                      style={{
                        display: "inline-block",
                        marginLeft: "1em",
                      }}
                    />
                    {/* Assuming Bootstrap Icons */}
                  </div>
                </div>
              </th>

              {/* Scrollable Middle Columns */}
              {fields?.map(
                (field, fieldIndex) =>
                  fieldIndex !== 0 && (
                    <th key={fieldIndex} className="scrollable-col">
                      <div className="m-1">
                        <span style={{ marginRight: "8px" }}>
                          {field.label}
                        </span>
                        <FilterC className="filter-icon" />
                      </div>
                    </th>
                  )
              )}
              {/* Status Column */}
              {extraHeads()}
            </tr>
          </thead>
          <tbody className="p-3">
            <>
              {data?.length > 0 &&
                data?.map((item, itemIndex) => (
                  <tr key={itemIndex} className="tableRow">
                    <td className="fixed-left-col">
                      <div className="d-flex align-items-center">
                        {/* Checkbox */}
                        <div
                          style={{
                            textAlign: "left",
                            minWidth: "20%",
                          }}
                        >
                          <Checkbox
                            id={data?._id}
                            style={{ fontSize: "16px", marginLeft: "10px" }}
                          />
                        </div>

                        {/* First Name and optional Arrow Icon */}
                        <div
                          className="d-flex me-2 flex-column text-start ms-3"
                          style={{
                            textAlign: "left",
                            minWidth: "80%",
                          }}
                        >
                          <strong>
                            {item.first_name ? item.first_name : ""}
                          </strong>
                          <Tooltip
                            title={isCopied ? "Copied!" : item?.user_id?.email}
                            arrow
                          >
                            <span
                              onClick={() =>
                                copyToClipboard(item?.user_id?.email)
                              } // Handle click to copy email
                              style={{
                                cursor: "pointer",
                                textDecoration: "underline",
                              }} // Style to indicate it's clickable
                            >
                              {item?.user_id?.email}
                            </span>
                          </Tooltip>
                        </div>
                      </div>
                      {/* Adjust to match your data structure */}
                    </td>
                    {/* Scrollable Middle Columns */}
                    {fields?.map(
                      (field, fieldIndex) =>
                        field.label !== "Full Name" && (
                          <td
                            className="scrollable-col"
                            style={{
                              cursor: "pointer",
                              // Prevent text from wrapping to the next line
                              whiteSpace: "nowrap",
                              // Hide overflowed text
                              overflow: "hidden",
                              // Add ellipsis to truncated text
                              textOverflow: "ellipsis",
                              // Set a maximum width for the cell
                              maxWidth: "150px", // Adjust this value based on your layout
                            }}
                            key={fieldIndex}
                          >
                            <Tooltip
                              // Show the full text in a tooltip when hovered
                              title={
                                field.format
                                  ? field.format(data[itemIndex][field.key])
                                  : data[itemIndex][field.key]
                              }
                              arrow
                            >
                              <span>
                                {field.format
                                  ? // Format the text if a formatting function is provided
                                    field.format(data[itemIndex][field.key])
                                      .length > 30
                                    ? // Truncate the text to 30 characters and add ellipsis if it exceeds the limit
                                      `${field
                                        .format(data[itemIndex][field.key])
                                        .substring(0, 30)}...`
                                    : field.format(data[itemIndex][field.key])
                                  : data[itemIndex][field.key].length > 30
                                  ? // Truncate the text to 30 characters and add ellipsis if it exceeds the limit
                                    `${data[itemIndex][field.key].substring(
                                      0,
                                      30
                                    )}...`
                                  : data[itemIndex][field.key]}
                              </span>
                            </Tooltip>
                          </td>
                        )
                    )}
                    {/* Status Column */}
                    {extraCells(item)} {/* Adjust accordingly */}
                  </tr>
                ))}
            </>
          </tbody>
        </Table>
      </div>
      <div>
        <PaginationComponent
          page={data?.page}
          handlePage={pageChanged}
          totalPages={data?.totalPage}
        />
      </div>
    </>
  );
};

TableView.propTypes = {
  fields: propTypes.array,
  hasPagination: propTypes.bool,
  extraCells: propTypes.func,
  pageChanged: propTypes.func,
  extraHeads: propTypes.func,
};

TableView.defaultProps = {
  data: {},
  fields: [],
  hasPagination: true,
  extraCells: (item) => {},
  extraHeads: (item) => {},
  pageChanged: (item) => {},
};

export default TableView;
