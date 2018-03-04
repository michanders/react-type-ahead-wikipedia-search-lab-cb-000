'use strict'

import React from 'react';
import actions from '../actions';
import resultStore from '../stores/resultStore';

import SearchField from './SearchField';
import SearchResults from './SearchResults';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: resultStore.getState().results
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    var query = event.target.value;
    this.setState({
      query
    });
    if(query.length > 2){
      actions.search(query)
    };
  }



  render() {
    return (
      <div>
        <h2>Autocomplete</h2>
      </div>
    );
  }
}

export default Autocomplete;
