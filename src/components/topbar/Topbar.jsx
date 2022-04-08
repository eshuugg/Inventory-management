import React from 'react';
import "./topbar.css";
import { NotificationsNone,Language,Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
       <div className='topbarWrapper'>
            <div className='topleft'>
                <span className="logo">Admin</span>
            </div>
            <div className='topright'>
                <div className="topbarIconContainer">
                    < NotificationsNone/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    < Language/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    < Settings/>
                </div>
                <img src="https://st.depositphotos.com/1428083/2946/i/950/depositphotos_29460297-stock-photo-bird-cage.jpg" alt="" className="topAvatar" />
            </div>
            
       </div>
    </div>
  )
}
