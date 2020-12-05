import React from 'react'
import BookList from './Components/BookList'
import NavBar from './Components/NavBar'
import ThemeToggle from './Components/ThemeToggle'
import AuthContextProvider from './Context/AuthContext'
import ThemeContextProvider from './Context/ThemeContext'

function App() {
  return (
    <div className = "App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
