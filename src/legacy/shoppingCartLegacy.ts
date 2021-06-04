type CartItem = { name: string; price: number };
type orderStatusType = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: orderStatusType = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): orderStatusType {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmptyCart()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Your request has been received, total ${this.total()}`);
    this.saveOrder();
    this.clearCart();
  }

  isEmptyCart(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Message sent: ', msg);
  }

  saveOrder(): void {
    console.log('Order saved successfully');
  }

  clearCart(): void {
    this._items.length = 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();

shoppingCartLegacy.addItem({ name: 'Notebook', price: 599.99 });
shoppingCartLegacy.addItem({ name: 'Phone', price: 1000 });

console.log(shoppingCartLegacy.items);

shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
