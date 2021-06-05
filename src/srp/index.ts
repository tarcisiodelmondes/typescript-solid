import { Order } from './entities/class/order';
import { Product } from './entities/class/product';
import { Message } from './entities/services/message';
import { SaveOrder } from './entities/services/persistence';
import { ShoppingCart } from './entities/class/shoppingCart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart, new Message(), new SaveOrder());

shoppingCart.addItem(new Product('Notebook', 599.99));
shoppingCart.addItem(new Product('Phone', 1000));

console.log(shoppingCart.items);

console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
