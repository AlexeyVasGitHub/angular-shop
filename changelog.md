# Changelog

All notable changes to this project will be documented in this file.

## [0.0.5] - 2021-02-27

### Added

- Admin module: manage-product.component, products.component, orders.component,
- is-admin-available.guard
- can-deactivate.guard

### Modified

- app.component,
- cart.component
- added local-storage.service to cart.service

## [0.0.4] - 2021-02-05

### Added

- OrderBy pipe

### Modified

- Add pipes to: cart-list.component, cart-item.component,
  product-list.component, product-item.component
- Product service return observable

## [0.0.3] - 2021-01-31

### Added

- ClickFonts directive
- Constants service
- Generator service
- LocalStorage service
- ConfigOptions service

### Modified

- CartService
- FirstComponent: added services

## [0.0.2] - 2021-01-26

### Added

- Component CartItemComponent
- Header with ViewChild
- Module CartModule
- Highlight directive
- Buttons to add, remove items to cart, increase and decrease count of items in cart

### Modified

- CartListComponent: added MaterialUI
- ProductListComponent: added MaterialUI

## [0.0.1] - 2021-01-18

### Added

- New project (ng new).
- Created component FirstComponent
- Component ProductComponent
- Component CartListComponent
- Service ProductService
- Service CartService
