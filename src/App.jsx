import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='header'>Joshua Parungao</div>

      <div className='content'>
        <div className='content1'>

          <div className='left-column'>
            <div className='hero'>Hero</div>
            <div className='sidebar'>Sidebar</div>
          </div>

          <div className='right-column'>
            <div className='main'>Main Content</div>
            <div className='extra'>Extra Content</div>
          </div>
        </div>

        <div className='content2'>
          <div className='ri'>Related Images</div>
          <div className='rp'>Related Posts</div>
        </div>
      </div>

      <div className='footer'>CPEITEL IT3B</div>
    </div>
  )
}

export default App
