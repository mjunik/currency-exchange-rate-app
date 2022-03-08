import { Typography } from "antd";

function ApiLimitMsg() {
  const { Text } = Typography;

  return (
    <div style={{ margin: "20px 0" }}>
      <Text type="danger">
        <strong>Please note:</strong> Free subscription plan of the API supports
        only EUR as a base currency.
      </Text>
    </div>
  );
}

export default ApiLimitMsg;
