import { useEffect, useState } from 'react';
import "./themeMode.css"

function ThemeMode(){

  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = ()=>{  
    if(themeMode==='light'){
      setThemeMode('dark')
    }else{
      setThemeMode('light')
    }

    console.log(themeMode)
  }
  useEffect(()=>{
    localStorage.setItem("theme", themeMode);
    const userTheme:string = localStorage.getItem("theme");
    document.querySelector('html')?.setAttribute('data-theme', userTheme)
  }, [themeMode])

  return(
    <>
      <div className="theme">
        <label className="theme-switch">
          <input type="checkbox" value={themeMode} onChange={handleToggle} defaultChecked={themeMode === "light" ? true : false}/>
          <span className="theme-slider round"></span>
        </label>
        <span className="current-theme">{themeMode} Mode</span>
      </div>
    </>
  )
}

export default ThemeMode;