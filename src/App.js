import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactForm } from "./pages";
import { Slide, ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/contact-us">
          <Routes>
            <Route element={<ContactForm />} path="/" />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-right" transition={Slide} />
      </QueryClientProvider>
    </>
  );
}

export default App;
