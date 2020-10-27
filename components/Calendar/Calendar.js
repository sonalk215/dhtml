import React, { Component } from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import classes from './Calendar.module.css';

const scheduler = window.scheduler;
class Calendar extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date());
        scheduler.clearAll();
        scheduler.parse(events);
    }

    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '97%', height: '95vh' } }
            ></div>
       );
    }
}

export default Calendar;