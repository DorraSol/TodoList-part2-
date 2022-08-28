import React , {useState}from 'react'


function BtnDarkMode() {

    const [darkMode, setDarkMode] = useState(false);




  return (
    
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default  BtnDarkMode ;