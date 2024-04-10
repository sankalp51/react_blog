import Header from "./components/Header"
import { useContext } from "react"
import { BlogContext } from "./context/BlogContext"
import Home from "./components/Home";
import Form from "./components/Form";
import About from "./components/About";

function App() {
  const { state } = useContext(BlogContext);

  return (
    <>
      <Header />
      {state.page === "about_us" ? <About /> : state.page === "add_post" ? <Form /> : <Home />}
    </>
  )
}

export default App
