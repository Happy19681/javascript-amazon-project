 //import { cart } from "../../data/cart.js";
 //import { getProduct } from "../../data/products.js";
 
 
 //export function renderPaymentSummary(){
 //  cart.forEach(() => {
  // const product = getProduct(cartItem.productId); 
   //productPriceCents * cartItem.quantity;

   //});

   //.log(productPriceCents);
//}


import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../Utils/money.js"; 
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary() {
  let totalCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    totalCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTax = totalCents + shippingPriceCents;
  const tax = Math.round(totalBeforeTax * 0.1); // 10% tax
  const total = totalBeforeTax + tax;

  console.log("Items total:", formatCurrency(totalCents));
  console.log("Shipping:", formatCurrency(shippingPriceCents));
  console.log("Total before tax:", formatCurrency(totalBeforeTax));
  console.log("Tax:", formatCurrency(tax));
  console.log("Order total:", formatCurrency(total));
}
