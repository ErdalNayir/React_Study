import "./App.css";
import Background from "./components/background";
import StickerPlace from "./components/stickerplace";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Background></Background>
      <StickerPlace></StickerPlace>
    </div>
  );
}

export default App;
