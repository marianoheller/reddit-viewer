import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubRedditSelector from './SubRedditSelector';


export default class Header extends Component {

    render() {
        
        return( 
            <div>
                <Title title={"Titulo"}></Title>
                <SubRedditSelector></SubRedditSelector>
            </div>
        )
    }
}


class Title extends Component {
    render() {
        return(
            <div>
                {this.props.title}
            </div>
        )
    }
}