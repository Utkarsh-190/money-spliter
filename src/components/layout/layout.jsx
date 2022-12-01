import classes from "./layout.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListItem from "../listItems/listItems";
import Navbar from "../navbar/navbar";
import {persons} from '../../utility/person_dummy'

function Layout() {
  console.log(persons);
  return (
    <Router>
      <Navbar/>


      <Routes>
        <Route
          exact
          path="/friends"
          element={<ListItem data={persons}/>}
        />
        {/* <Route
          exact
          path="/groups"
          element={<ListItem/>}
        /> */}
      </Routes>
    </Router>
  );
}

export default Layout;
