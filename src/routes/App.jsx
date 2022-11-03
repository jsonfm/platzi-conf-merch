import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Home } from "@/containers/Home";
import { Checkout } from "@/containers/Checkout";
import { Information } from "@/containers/Information";
import { NotFound } from "@/containers/NotFound";
import { Layout } from "@/components/Layout";

// State Provider
import { AppProvider } from "@/store/provider";

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/checkout/information" element={<Information />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
