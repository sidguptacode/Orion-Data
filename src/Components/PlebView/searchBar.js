import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar'



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
                <SearchBar
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event)}
                    // onChange={event => console.log(event)}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    onClear={() => console.log('onClear')}
                    style={{borderRadius: 15}}
                    // searchIcon={<div/>}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBarMine;