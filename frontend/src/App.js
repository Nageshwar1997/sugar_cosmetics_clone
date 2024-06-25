import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./stores/userSlice";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Context from "./context/context";
import axios from "axios";
import SummaryApi from "./common/SummaryApi";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    try {
      const response = await axios({
        url: `${SummaryApi.current_user.url}`,
        method: `${SummaryApi.current_user.method}`,
        credentials: "include",
      });
      const dataResponse = response.data;
      if (dataResponse.status === "success") {
        dispatch(setUserDetails(dataResponse));
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <Header />
        <main className="app_outlet">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </Context.Provider>
    </>
  );
}

export default App;
