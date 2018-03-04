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
			query: '',
			results: resultStore.getState().results
    };
		this.handleChange = this.handleChange.bind(this);
  }

	componentDidMount() {
		this.removeListener = resultStore.addListener(({results}) => {
			this.setState({results});
		})
	}

	componentWillUnmount(){
		this.removeListener();
	}

	handleChange(ev) {
		const query = ev.target.value;
		this.setState({query});

		if(query.length > 2) {
			actions.search(query);
		}
	}
  render() {
		const {query, results} = this.state;
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
				<SearchField
					value={query}
					onChange={this.handleChange} />
				<SearchResults results={results} />
      </div>
    );
  }
}

export default Autocomplete;
