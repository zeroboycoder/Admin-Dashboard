import { updateDatas } from "../../../Data/Data";
import "./Update.css";

const Update = () => {
  return (
    <div className="Updates">
      {updateDatas.map((data) => (
        <div className="box" key={data.time}>
          <div className="head">
            <img src={data.img} alt={data.name} />
          </div>

          <div className="tail">
            <div className="text">
              <p>{data.name}</p>
              <p>{data.msg}</p>
            </div>
            <span>{data.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Update;
