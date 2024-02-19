import { useState } from 'react';
import settingsIcon from "../assets/settings-svgrepo-com.svg"
import './popover.css'; 

import ThemeMode from './ThemeMode';

const Popover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleIconClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="popover-container">
      <button className="icon-button" onClick={handleIconClick}>
        <img width={32} height={32} src={settingsIcon} alt="" />
      </button>
      {isPopoverOpen && (
        <div className="popover-hidden popover-content flex-column gap-16">
          <p className='f-600'>Theme mode</p>
          <ThemeMode/>    
        </div>
      )}
    </div>
  );
};

export default Popover;
