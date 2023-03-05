import { cartManager } from '../cart/cart-manager';

export function Cart() {

  const section = document.createElement('section');

  section.innerHTML = `
    <h2>Cart</h2>
    <p>Przeglądaj zawartość koszyka:</p>
    <table class="table"></table>
  `;

  const tableHead = document.createElement('tr');

  tableHead.innerHTML = `
    <th>Name</th>
    <th>Quantity</th>
    <th>Price</th>
  `;

  const tableRows = cartManager.getAllItems().map(item => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price.toFixed(2)}</td>
    `;

    return tr;
  });

  const tableFooter = document.createElement('tr');

  tableFooter.innerHTML = `
    <td></td>
    <td>
      <strong>Total =</strong>
    </td>
    <td>
      <strong>${cartManager.getTotalPrice()}</strong>
    </td>
  `;

  // kompletujemy zawartosc tabeli
  section.querySelector('.table').append(tableHead, ...tableRows, tableFooter);

  return section;

}
