import { Spin } from "antd";

function Spinner() {
  return (
    <Spin
      size="large"
      style={{ position: "absolute", top: "50%", left: "50%" }}
    />
  );
}

export default Spinner;
