import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar'
import { Motion, spring } from "react-motion";




class SearchBarMine extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: '',
            value: ''};
    }
    render() {
        return (
            <div className="search-bar" style={{width: '100%', marginBottom: 20}}>
                <Motion defaultStyle={{x: -800, opacity: 1}} style={{
                    x: spring(0, {stiffness: 130, damping: 26}),
                    opacity: spring(1)
                }}>
                    {(style) => (
                <SearchBar
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event)}
                    // onChange={event => console.log(event)}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    onClear={() => console.log('onClear')}
                    style={{opacity: style.opacity, transform: `translateX(${style.x}%)`, borderRadius: 15}}
                    // searchIcon={<div/>}
                />
                        )}
                </Motion>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBarMine;