

import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        
      </div>
      {/* Tailwind test element */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-bold rounded-lg shadow-lg text-center">
        If you see this box styled, Tailwind CSS is working!
      </div>
    </>
  )
}

export default App
