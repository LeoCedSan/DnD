import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/storypage" element={<StoryPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;