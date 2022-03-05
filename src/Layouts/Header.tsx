import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import pages from "../Pages/pages";
import "./Header.css";

function Header() {
  const { Header } = Layout;

  return (
    <Header className="app-header">
      <div className="logo">Logo</div>
      <Menu theme="dark" mode="horizontal">
        {pages.map((page) => {
          return (
            <Menu.Item key={page.path}>
              <Link to={page.path}>{page.title}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
}

export default Header;
