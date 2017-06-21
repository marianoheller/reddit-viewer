import React, { Component } from 'react';
import { connect } from 'react-redux';

import { configApp } from '../config';


export default class SubRedditSelector extends Component {


    handleChange() {
        console.log("select Changed");
    }

    render() {
        const subreddits = configApp.subreddits.map( (subR, i) => (
            <option
            key={`${subR.name+i}`}
            value={subR.name}
            >
            {subR.showName}
            </option>
        ));

        return( 
            <div>
                <select onChange={this.handleChange.bind(this)}>
                    {subreddits}
                </select>
            </div>
        )
    }
}