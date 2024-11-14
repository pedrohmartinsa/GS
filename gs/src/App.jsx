import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {

  const location = useLocation();

  return (
    <>
        <Header/>
        <AnimatePresence mode="wait">
          <motion.div
            className="bg-tertiary"
            key={location.pathname}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Outlet />
            <Footer/>
          </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
