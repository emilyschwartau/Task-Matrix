import React, { useState } from 'react';
import './Footer.css';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Grid, List, PlusCircle } from 'react-feather';

function Footer() {

  const user = useSelector((store) => store.user);

  const selectedTask = useSelector((store) => store.selectedTaskReducer); 
  
  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  const [path, setPath] = useState('');

  history.listen ((location, action) => {
    console.log(location, action);
    setPath (location);
  })

  function aboutLoginClick() {
    history.push('/login');
  }

  function aboutLogoutClick() {
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
  }

  function gridClick() {
    history.push('/graph-view');
  }

  function listClick() {
    history.push('/list-view');
  }

  function addClick() {
    history.push('/add-task-form');
  }

  return (
    <footer>
      {(() => {
        if (user.id === undefined && history.location.pathname === "/about") {
          return (
            <div id="aboutLoginBtn">
              <Button id="aboutLoginBtnSpecific" variant="contained" size="large" onClick={() => aboutLoginClick()}>Log In</Button>
            </div>
          )
        } else if (user.id === undefined && history.location.pathname === "/login") {
          return (
            <div>
            </div>
          )
        } else if (user.id === undefined && history.location.pathname === "/registration") {
          return(
            <div>
            </div>
          )   
        } else if (user.id && history.location.pathname === "/about") {
          return (
            <div id="aboutLoggedIn">

              <div id="aboutGridIcon">
                <span id="gridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>

              <div id="aboutLogoutBtn">
                <Button id="aboutLogoutBtnSpecific" variant="contained" size="large" onClick={() => aboutLogoutClick()}>Log Out</Button>
              </div>

              <div id="aboutListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else if (user.id && history.location.pathname === "/user") {
          return (
            <div id="aboutLoggedIn">

              <div id="aboutGridIcon">
                <span id="gridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>

              <div id="addTaskIcon">
                <span id="addTaskIcon" onClick={() => addClick()}>
                  <PlusCircle color='#ffffff' size="40" /> 
                </span>
              </div>

              <div id="userListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else if (user.id && history.location.pathname === "/list-view") {
          return (
            <div id="aboutLoggedIn">

              <div id="GraphAddTaskIcon">
                <span id="addTaskIcon" onClick={() => addClick()}>
                  <PlusCircle color='#ffffff' size="40" /> 
                </span>
              </div>

              <div id="listGridIcon">
                <span id="gridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else if (user.id && history.location.pathname === "/graph-view") {
          return (
            <div id="aboutLoggedIn">

              <div id="GraphAddTaskIcon">
                <span id="addTaskIcon" onClick={() => addClick()}>
                  <PlusCircle color='#ffffff' size="40" /> 
                </span>
              </div>

              <div id="graphListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else if (user.id && history.location.pathname === "/add-task-form") {
          return (
            <div id="aboutLoggedIn">

              <div id="aboutGridIcon">
                <span id="addGridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>
 
              <div id="addListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>
            </div>
          )
        } else if (user.id && history.location.pathname === `/details/${selectedTask.id}`) {
          return (
            <div id="aboutLoggedIn">

              <div id="aboutGridIcon">
                <span id="addGridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>
 
              <div id="addListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else if (user.id && history.location.pathname === `/edit/${selectedTask.id}`) {
            return (
              <div id="aboutLoggedIn">

                <div id="aboutGridIcon">
                  <span id="addGridIcon" onClick={() => gridClick()}>
                    <Grid color='#ffffff' size="40" /> 
                  </span>
                </div>
   
                <div id="addListIcon">
                  <span id="listIcon" onClick={() => listClick()}>
                    <List color='#ffffff' size="40" /> 
                  </span>
                </div>

              </div>
            )
        } else if (user.id && history.location.pathname === `/completed-tasks`) {
          return (
            <div id="aboutLoggedIn">

              <div id="aboutGridIcon">
                <span id="addGridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>
 
              <div id="addListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else if (user.id && history.location.pathname === `/overdue-tasks`) {
          return (
            <div id="aboutLoggedIn">

              <div id="aboutGridIcon">
                <span id="addGridIcon" onClick={() => gridClick()}>
                  <Grid color='#ffffff' size="40" /> 
                </span>
              </div>
 
              <div id="addListIcon">
                <span id="listIcon" onClick={() => listClick()}>
                  <List color='#ffffff' size="40" /> 
                </span>
              </div>

            </div>
          )
        } else {
          return (
            <div>
            </div>
          )
        }
      })()}
    </footer>
  ) 
}

export default Footer;