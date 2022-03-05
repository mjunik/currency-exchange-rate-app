import { Layout } from "antd";
import Header from "./Layouts/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import pages from "./Pages/pages";
import React from "react";

function App() {
  const { Content } = Layout;

  return (
    <Router>
      <Layout>
        <Header />
        <Content className="content-wrapper">
          <div className="content">
            <Routes>
              {pages.map((page) => (
                <Route
                  path={page.path}
                  element={React.createElement(page.component)}
                  key={page.path}
                />
              ))}
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
