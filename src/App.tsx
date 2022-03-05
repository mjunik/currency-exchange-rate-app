import { Layout } from "antd";
import Header from "./Layouts/Header/Header";
import "./App.css";

function App() {
  const { Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content className="content-wrapper">
        <div className="content">Content</div>
      </Content>
    </Layout>
  );
}

export default App;
