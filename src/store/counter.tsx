import { makeAutoObservable } from "mobx";

class CounterStore {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };
}

export default new CounterStore();
