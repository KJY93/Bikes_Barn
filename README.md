### Bikes Barn

## Introduction

This is my attempt of building a simple shopping cart using Angular.

## Demo Link
[Bikes Barn](https://kjy93.github.io/Bikes_Barn/index.html)

## Folder Description

The main folder is the app folder in which I have added two new folders under it.
1. Components folder
    * There is one subfolder within the components folder, in this case, it is the folder that has been named inventory.
2.  Models folder
    * A file named inventory.ts contains a hardcoded array of products.

## Code Logic

1. The inventory data under the models folder is imported to app.component file. This is saved under the inventory variable and passed to the inventory component via the products variable.

2. In the inventory.component.html file, the products data received from Step 1 was used to populate the products list table.

3. An "Add" Button was added to every product items. This product has a function called addItemToCart which is tied to the onclick button event. The addItemToCart function receive two arguments, one being the product's name and the other one being the product's image url.

4. Onclick, this will trigger the addItemToCart function in the inventory component and emit an onAddItem event.

5. Once the onAddItem event is triggered, the populateCart function in the app component will be triggered. This will then save the items that was added to a dictionary that has been named shoppingCart.

6. The shoppingCart dictionary was then used to populate the shopping cart list in the app component.

7. In the app component, if the remove button is clicked, this will then trigger the removeItemFromCart function in the app component to perform an update on the shopping cart list.