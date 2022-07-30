import { Outlet } from "react-router-dom";
import Quote from "../../components/Quotes/Quote";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Toolbar />
      <main className="Layout-Content">
        <Quote />
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </>
  )
};

export default Layout;