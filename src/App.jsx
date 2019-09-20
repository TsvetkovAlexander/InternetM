import React, { Component } from 'react';
import {users}from './utils/database';
import {Athorization} from './Athorization'
export default class App extends Component {

    render() {
        console.log(users);
        return (
            <Athorization/>
        );
    };
}
