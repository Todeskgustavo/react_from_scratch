import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
        <>
          <div>
            <h1>Login</h1>
          </div>
        </>
      }
      />
      <Route path="/" element={
        <>
          <div>
            <h1>Home</h1>
          </div>
        </>
      }
      />
      </Routes> 
    </BrowserRouter>
  );
}

export default App
