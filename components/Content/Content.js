import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Calendar from '../Calendar/Calendar';
import classes from './Content.module.css';

let cxTest = classNames.bind(classes);
class Content extends Component {
    state={
        sidebarOpen: false
    }
    
    sidebarToggle=()=>{
        const old_sidebarOpen=this.state.sidebarOpen
        this.setState({sidebarOpen: !old_sidebarOpen}) 
    }

    render() {
        let dhtmlElm, newBookingElms=null
        let sidebarStyle=cxTest({
            nb__sidebar: true,
            nb__sidebar__expand: this.state.sidebarOpen
        })
        let nb__dhtml=cxTest({
            nb__dhtml: true,
            nb__dhtml__compress: this.state.sidebarOpen,
        })
        
        dhtmlElm=(
            <div className={nb__dhtml}>
                <Calendar />
            </div>
        )

        if(!this.state.sidebarOpen) {
            newBookingElms=(
                <>
                    <div className={sidebarStyle} onClick={this.sidebarToggle}>
                        <div>
                            HI FROM SIDEBAR
                        </div>
                    </div>
                    {dhtmlElm}
                </>
            )
        }
        else {
            newBookingElms= (
                <>
                    <div className={sidebarStyle}  onClick={this.sidebarToggle}>
                        <div>
                            HI FROM SIDEBAR
                        </div>
                    </div> 
                    {dhtmlElm}
                </>
            )
        }
        return ( <div>{newBookingElms}</div>)
    }
}

export default Content;