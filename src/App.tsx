import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Info from "./pages/Info";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<Router>
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/addContact" element={<AddEdit />} />
					<Route path="/editContact/:id" element={<AddEdit />} />
					<Route path="/info/:id" element={<Info />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
