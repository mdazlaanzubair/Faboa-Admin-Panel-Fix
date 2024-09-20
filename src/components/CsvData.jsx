import uploadIcon from "../assets/mambers/upload-cloud.svg"; 
import exportIcon from "../assets/mambers/exportCld.svg"; 
import plusIcon from "../assets/mambers/plus.svg";
import ImportCSVModal from "./ImportCSVModal/inde"; 
import Loading from "./Loading"; 
import { CSVLink } from "react-csv";

// Functional component for handling CSV data import and export
export const CsvData = ({
  setData, // Function to set the data
  show, // State to control the visibility of the modal
  isLoading, // State to indicate loading status
  setShow, // Function to toggle modal visibility
  formattedData, // Data formatted for CSV export
  btnText, // Text for the button
  onClickBtnTxt, // Function to handle button click
}) => {
  console.log("formattedData//////", formattedData); // Logging formatted data for debugging
  return (
    <div
      className="col-12 d-flex flex-wrap align-items-start justify-content-lg-end justify-content-start"
      style={{
        rowGap: "10px", // Setting gap between rows
      }}
    >
      <div className="importDevStyle">
        <img src={uploadIcon} className="" /> {/* Displaying upload icon */}
        <div className="importStyle" onClick={() => setShow(true)}>
          {" "}
          {/* Triggering modal on click */}
          Import
        </div>
      </div>
      <CSVLink
        data={formattedData} // Data to be exported
        className="csvLink"
        filename={btnText + "-List.csv"} // Filename for the exported CSV
      >
        <div
          className="importDevStyle"
          style={{ marginLeft: 10, marginRight: 10 }} // Setting margins for export button
          onClick={() => {}}
        >
          <img src={exportIcon} className="" /> {/* Displaying export icon */}
          <div className="importStyle" onClick={() => {}}>
            Export
          </div>
        </div>
      </CSVLink>
      <ImportCSVModal
        show={show} // Passing show state to modal
        setModalClose={setShow} // Function to close modal
        selectedData={setData} // Function to set selected data
      />
      {btnText && (
        <div onClick={onClickBtnTxt}>
          <button className="importDevStyle copyMem">
            <img src={plusIcon} /> {/* Displaying plus icon */}
            <div className="importStyle colorWhite">{btnText}</div>{" "}
            {/* Button text */}
          </button>
        </div>
      )}
      {isLoading && <Loading type={"bars"} />}{" "}
      {/* Displaying loading indicator if loading */}
    </div>
  );
};
