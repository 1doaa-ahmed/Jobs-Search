import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/job/:id" element={<JobPage/>}></Route>
        {/* <HomePage /> */}
        {/* <JobPage /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
