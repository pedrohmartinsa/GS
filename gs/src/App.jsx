import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header"

function App() {

  const location = useLocation();

  return (
    <>
        <Header/>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
