
// import './App.css'

import MainLayout from "./components/layouts/MainLayout"
import ProtectedRoute from "./components/layouts/ProtectedRoute"

function App() {
 

  return (
    <>
      {/* <h1>ph university management</h1> */}
      <ProtectedRoute>
        <MainLayout></MainLayout>
      </ProtectedRoute>
      
    </>
  )
}

export default App
