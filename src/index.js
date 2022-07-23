import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Data } from "./data";
import { FaAngleDoubleRight } from "react-icons/fa";

const Main = () => {
  const [Datas, SetDatas] = React.useState(Data);
  const [Index, SetIndex] = React.useState(0);
  const { id, title, duties, company, dates } = Datas[Index];
  return (
    <main className="main">
      <div>
        <div className="maintitle">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          <div className="buttoncontainer">
            {Datas.map((items, index) => {
              const { company } = items;
              return (
                <button
                  className={`buttonclass ${
                    Index === index && `buttonfocused`
                  }`}
                  type="button"
                  key={index}
                  onClick={() => SetIndex(index)}
                >
                  {company}
                </button>
              );
            })}
          </div>
          <div className="contentcontainer">
            <div>
              <h2 className="title">{title}</h2>
              <span className="company">{company}</span>
              <p className="dates">{dates}</p>
            </div>
            <div className="dutiescontainer">
              {duties.map((itemss) => {
                return (
                  <div className="dutieswrapper">
                    <div className="icondiv">
                      <FaAngleDoubleRight className="icon" />
                    </div>
                    <div className="itemsdiv">
                      <p>{itemss}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <h3 className='author'>Zuzim Ajo &copy; 2021 </h3>
    </main>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
