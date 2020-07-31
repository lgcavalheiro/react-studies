import React, { Component } from 'react';

export default class SecondJsx extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            cup: 'water',
            thing: props.thing
        }

        if(this.state.thing !== undefined) {
            this.thingComp = (
                <>
                    <p>And now for a completely different thing called: {this.state.thing}</p>
                </>
            ) 
        } else {
            this.thingComp = (
                <br/>
            )
        }
    }

    changeCup = () => {
        this.setState({
            cup: 'empty'
        })
    }

    shouldComponentUpdate(incoming) {
        if(this.state.thing !== incoming.thing) return true
        else return false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                cup: 'half-empty'
            });
        }, 6000);
    }

    render() {
        return (
            <>
                <h2>CLASSY STUFF BRO{this.state.clock}</h2>
                <button onClick={this.changeCup}>{this.state.cup}</button>
                {this.thingComp}
            </>
        )
    }
}