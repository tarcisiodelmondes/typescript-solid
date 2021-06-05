import { ShoppingCart } from './shoppingCart';
import { orderStatusType } from './interfaces/orderStatusType';
import { Message } from '../services/message';
import { SaveOrder } from '../services/persistence';
import { CustomerOrder } from './interfaces/customerProtocol';

export class Order {
  private _orderStatus: orderStatusType = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly message: Message,
    private readonly save: SaveOrder,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): orderStatusType {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmptyCart()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Your request has been received, total ${this.shoppingCart.total()}`,
    );
    this.save.saveOrder();
    this.shoppingCart.clearCart();

    console.log(`
    ${this.customer.getName()}
    ${this.customer.getIDN()}
  `);
  }
}
