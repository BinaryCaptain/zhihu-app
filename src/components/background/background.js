import React,{ Component } from 'react';
import './background.css'
import  'jparticles'




export default class BackGround extends Component{
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render(){
        return(  
             <div id="demo" style="width: 400px; height: 250px;"></div>
              
            );
    }
}