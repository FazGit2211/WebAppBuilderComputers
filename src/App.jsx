import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
