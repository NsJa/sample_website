import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./navbar.scss"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbarContainer">
        <div className="lineOne">
          <div className="left">
            <span className="logo">Title</span>
          </div>
          <div className="right">
          	<button className="navButtonNotif">使用webpack測試</button>
          	<button className="navButton">註冊</button>
          	<button className="navButton">登入</button>
        	</div>
      	</div>
        <div className="lineTwo">
					<div className="item active">
							<FontAwesomeIcon icon="fa-solid fa-file" />
							<span >Item 1</span>
					</div>
					<div className="item">
							<FontAwesomeIcon icon="fa-solid fa-file" />
							<span >Item 2</span>
					</div>
					<div className="item">
							<FontAwesomeIcon icon="fa-solid fa-file" />
							<span >Item 3</span>
					</div>
					<div className="item">
							<FontAwesomeIcon icon="fa-solid fa-file" />
							<span >Item 4</span>
					</div>
					<div className="item">
							<FontAwesomeIcon icon="fa-solid fa-file" />
							<span >Item 5</span>
					</div>
        </div>
      </div>
    </div>
	)
}

export default Navbar