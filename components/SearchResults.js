'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className="search-results">
	{
		results.map(({title, description, link}, i) => (
			<li key={i}>
				<a href={link}>{title}</a>
				<p>{description}</p>
			</li>
		))
	}
  </ul>
);

export default SearchResults;
