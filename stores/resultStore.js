'use strict';

import Store from './Store';

class ResultStore {
}

const resultStore = new ResultStore({
	results: [],
	updated: new Date()
});
export default resultStore;
