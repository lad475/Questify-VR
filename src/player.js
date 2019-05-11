import { Inventory, HUD } from './UI';

export default class Player {
  constructor() {
    this.money = 0;
    this.hud = new HUD();
    this.inventory = new Inventory();

    setTimeout(() => this.el = document.getElementById('player'), 0);

    document.addEventListener('keypress', (evt) => {
      if (evt.key === 'i') {
        this.inventory.toggleHidden();
      }
    });
  }

  addToInventory(item) {
    this.inventory.addItem(item);
  }

  changeMoneyUI() {
    this.hud.amtCurrency.textContent = this.money;
  }

  addMoney(amt) {
    this.money = amt + this.money;
    this.changeMoneyUI();
  }

  withdrawMoney(amt) {
    if (amt <= this.money) {
      this.money = this.money - amt;
      this.changeMoneyUI();
      return true;
    }
    return false;
  }
}