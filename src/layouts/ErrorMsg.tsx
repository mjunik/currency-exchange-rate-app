import { Alert } from "antd";

function ErrorMsg() {
  return (
    <div style={{ position: "absolute", top: "50%", width: "100%" }}>
      <Alert
        message="Something went wrong :("
        description="Please try again later"
        type="error"
        style={{ maxWidth: 500, margin: "0 auto" }}
      />
    </div>
  );
}

export default ErrorMsg;
