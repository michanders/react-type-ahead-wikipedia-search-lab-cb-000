'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)) {
			return true;
		}
		const [query,titles,descriptions,links] = data;
		const results = titles.map((t, i) => ({
			title: t,
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
