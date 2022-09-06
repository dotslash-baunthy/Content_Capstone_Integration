import React from 'react';

import { accountService } from '@/_services';
import './Style.less';

function Program() {
    const user = accountService.userValue;
    
    return (
        <div>
            
       <nav className="navbar middleBar">
  <div className="container-fluid">
    
    <ul className="nav navbar-nav bodyNav">
      <li ><a href="#">File</a></li>
      <li ><a href="#">Edit</a></li>
      <li ><a href="#">View</a></li>
      <li ><a href="#">Insert</a></li>
      <li ><a href="#">Runtime</a></li>
      <li ><a href="#">Tools</a></li>
      <li ><a href="#">Help</a></li>

      <li><a href="#" style={{textDecoration: 'underline'}}>All Changes Saved</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-comment"></span> Comment</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-share"></span> Share</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-cog"></span></a></li>
      <li><a href="#">  {user.firstName} <span className="glyphicon glyphicon-menu-down"></span></a></li>
    </ul>
  </div>
</nav>

<nav className="navbar columnBar">
  <div className="">
      <div className="col-md-1 leftCol">
      <ul className="leftMenu">
            <li><a href="#"><span className="glyphicon glyphicon-th-list"></span> </a></li>
            <li><a href="#"> <span className="glyphicon glyphicon-search"></span></a></li>
            <li><a href="#">{"{x}"}</a></li>
            <li><a href="#"> <span className="glyphicon glyphicon-folder-close"></span></a></li>
        </ul>
      </div>
    <div className="col-md-11 rightCol">
        <div className='col-md-12 bb'>
        <ul className="nav navbar-nav belowNav">
        <li ><a href="#"><span>+</span>Code</a></li>
        <li ><a href="#"><span>+</span>Text</a></li>      
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Connect <span className="glyphicon glyphicon-triangle-bottom"></span> </a></li>
            <li><a href="#"> <span className="glyphicon glyphicon-pencil"></span> Editing</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-chevron-up	"></span></a></li>
        </ul>
        </div>
        
        <div className="col-md-12 codeEditor">
            <div className="bgIcon">
                <div className="playIcon">
                    <span class="glyphicon glyphicon-play-circle"></span>
                </div>
                <input type="text" name="inputData"></input>
            </div>
        </div>
  </div>

  </div>

</nav>  

</div>

        
    );
}

export { Program };