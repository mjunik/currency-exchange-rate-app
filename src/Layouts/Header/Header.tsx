import { Layout, Menu } from "antd";
import "./Header.css";

function Header() {
  const { Header } = Layout;

  return (
    <Header className="app-header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
}

export default Header;
