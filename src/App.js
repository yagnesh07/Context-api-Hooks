import React from 'react'
import BookList from './Components/BookList'
import NavBar from './Components/NavBar'
import ThemeToggle from './Components/ThemeToggle'
import AuthContextProvider from './Context/AuthContext'
import BookContextProvider from './Context/BookContext'
import ThemeContextProvider from './Context/ThemeContext'

function App() {
  return (
    <div className = "App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
