import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/job/:id" element={<JobPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
