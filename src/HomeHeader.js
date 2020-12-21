import React, { useState } from 'react'
import './HomeHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import { auth } from './firebase.js';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import images from './images.jpg'
function HomeHeader() {
    // const history = useHistory('');

    // if (user === false) {
    //     history.push("/login")
    // }

    // const logout = (event) => {
    //     event.preventDefault();
    //     auth.signOut();
    //     history.push("/login");
    // }
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
                
            <img src={images} class="homeHeader_logo"/>


            </div>

            <div className="homeHeader__inputSearch">
                <input type="text" placeholder="Search" />
                <SearchIcon className="homeHeader__inputButton" />
            </div>
            <div className="homeHeader__icons">
                <section>
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h3 className="homeHeader__name">Suma</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Home</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Find Friends</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Create</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <GroupAddIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <TelegramIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <NotificationsIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <AssignmentIndIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <div className="dropdown">
                        <ArrowDropDownIcon className="dropdown" />
                        <div className="dropdown-content">
                            <a ><p>Logout</p></a>
                        </div>
                    </div>
                </section>

                <h3 className="homeHeader__dash"> | </h3>
            </div>
        </div>
    )
}

export default HomeHeader