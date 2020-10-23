import React from 'react';

class Timer extends React.Component
{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    
    render(){
        return (
            <div> 
                <h1> Timer page </h1>
                <h2> Current time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}


export default Timer;
