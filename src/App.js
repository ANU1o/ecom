import { Route, Routes } from "react-router-dom";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 user-select-none">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
