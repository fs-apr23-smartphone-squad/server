# Commands

- npm run dev - run migrations -> seeds -> nodemon
- npm run fix-style - run linter with auto fix
- npm run db-cn - connect a database

# Links

[API](https://api.smartphonesquad.shop/products)

- To get file from static server write path to file "/img/category-accessories.png"
- To get phones from API write "/products"

## Endpoints

### GET /products

This endpoint retrieves a list of products based on optional query parameters. It allows filtering, sorting, and paginating the products based on criteria such as limit, offset, sortBy, sortOrder, and group.

_https://api.smartphonesquad.shop/products_

### GET /products/new

This endpoint retrieves a list of newly added products. It returns a JSON array containing information about each new product, such as name, price, and category.

_https://api.smartphonesquad.shop/products/new_

### GET /products/discount

This endpoint retrieves a list of discounted products. It returns a JSON array containing information about each discounted product, such as name, price, and category.

_https://api.smartphonesquad.shop/products/discount_

---

### GET /phones/:id

This endpoint retrieves information about a single phone based on the given id parameter, which represents the ID of the phone. It returns a JSON object containing detailed information about the phone.

_https://api.smartphonesquad.shop/phones/apple-iphone-7-plus-32gb-rosegold_

### GET /phones/:id/recommended

This endpoint retrieves a list of recommended phones based on the given id parameter, which represents the ID of a specific phone. It returns a JSON array containing information about each recommended phone, such as name, price, and category.

_https://api.smartphonesquad.shop/phones/apple-iphone-7-plus-32gb-rosegold/recommended_

---

### GET /tablets/:id

This endpoint retrieves information about a single tablet based on the given id parameter, which represents the ID of the tablet. It returns a JSON object containing detailed information about the tablet.

_https://api.smartphonesquad.shop/tablets/apple-ipad-10-2-2020-128gb-silver_

### GET /tablets/:id/recommended

This endpoint retrieves a list of recommended tablets based on the given id parameter, which represents the ID of a specific tablet. It returns a JSON array containing information about each recommended tablet, such as name, price, and category.

_https://api.smartphonesquad.shop/tablets/apple-ipad-10-2-2020-128gb-silver/recommended_

---

### GET /accessories/:id

This endpoint retrieves information about a single accessory based on the given id parameter, which represents the ID of the accessory. It returns a JSON object containing detailed information about the accessory.

_https://api.smartphonesquad.shop/accessories/apple-watch-series-3-38mm-space-gray_

### GET /accessories/:id/recommended

This endpoint retrieves a list of recommended accessories based on the given id parameter, which represents the ID of a specific accessory. It returns a JSON array containing information about each recommended accessory, such as name, price, and category.

_https://api.smartphonesquad.shop/accessories/apple-watch-series-3-38mm-space-gray/recommended_
