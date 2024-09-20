import MemberIcon from "../assets/mambers/mamber.svg";
import { CsvData } from "./CsvData";

// MainHeader component declaration
export const MainHeader = ({
  total,
  heading,
  btnText,
  setData,
  setFileModal,
  fileModal,
  formattedData,
  onClickBtnTxt,
}) => {
  return (
    <div className="col-12">
      <div className="row justify-content-between">
        {/* Left side branding section */}
        <div
          className={`${btnText ? "col-12 col-md-6" : "col-12 col-md-8"} mb-3`}
        >
          <div className="flexCls">
            <div className="memBerCls">{heading}</div>
            <div className="colorStyle">
              <img src={MemberIcon} />
              <div className="memBerClsCopy">{total}</div>
            </div>
          </div>
        </div>
        {/* Right side branding section */}
        <div
          className={`${btnText ? "col-12 col-md-6" : "col-12 col-md-4"} mb-3`}
        >
          <CsvData
            setData={setData}
            setShow={setFileModal}
            show={fileModal}
            formattedData={formattedData?.length ? formattedData : []}
            btnText={btnText}
            onClickBtnTxt={onClickBtnTxt}
          />
        </div>
      </div>
    </div>
  );
};
