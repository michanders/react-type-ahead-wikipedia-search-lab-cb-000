'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)){
			return true;
		}
		var [titles,descriptions,links] = data;
		var results = titles.map((t, i) => ({
			t,
			description: descriptions[i],
			link: links[i]
		}));

		resultStore.setState({
			results,
			updated: requested
		});
  });
};


export default { search };
