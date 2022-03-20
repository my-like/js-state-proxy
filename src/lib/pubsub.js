export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if(typeof callback !== "function") {
      console.error("callback must be function.");
      return;
    }

    if(!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    return this.events[event].push(callback);
  }

  publish(event, data = {}) {
    if(!this.events.hasOwnProperty(event)) {
      return [];
    }

    return this.events[event].map(callback => callback(data));
  }
}