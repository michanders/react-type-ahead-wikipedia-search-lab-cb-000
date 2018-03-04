'use strict';

export default class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
		const removeListener = () => {
			this.listeners = this.listeners.filter(list => listener !== list);
		};
		return removeListener;
  }

  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      this.state({
        state
      })
    };
  }

  getState() {
    return this.state;
  }
}
