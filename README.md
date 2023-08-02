# Commands

- npm run dev - run migrations -> seeds -> nodemon
- npm run fix-style - run linter with auto fix
- npm run db-cn - connect a database

# Links

[API](https://api.smartphonesquad.shop/products)

- To get file from static server write path to file "/img/category-accessories.png"
- To get phones from API write "/products"

## Endpoints

- GET /products
  * <mark>**ids**</mark>:
  A comma-separated string representing the IDs of the products to fetch. If provided, only products with matching IDs will be returned.
    * _example_: https://api.smartphonesquad.shop/products<mark>?ids=2,4,6,70</mark>

  * <mark>**limit**</mark>:
  A number representing the maximum number of products to return. The default value is 64 if not provided.
    * _example_: https://api.smartphonesquad.shop/products<mark>?limit=10</mark>

  * <mark>**offset**</mark>:
  A number representing the offset from where to start fetching products. The default value is 0 if not provided.
    * _example_: https://api.smartphonesquad.shop/products<mark>?offset=20</mark>

  * <mark>**sortBy**</mark>:
  A string representing the field by which the products should be sorted. The available options are 'year' and 'price'. The default value is 'year' if not provided.
    * _example_: https://api.smartphonesquad.shop/products<mark>?sortBy=year</mark>
    * _example_: https://api.smartphonesquad.shop/products<mark>?sortBy=price</mark>

  * <mark>**sortOrder**</mark>:
  A string representing the order in which the products should be sorted. The available options are 'ASC' (ascending) and 'DESC' (descending). The default value is 'ASC' if not provided.
    * _example_: https://api.smartphonesquad.shop/products<mark>?sortBy=year&sortOrder=ASC</mark>
    * _example_: https://api.smartphonesquad.shop/products<mark>?sortBy=price&sortOrder=DESC</mark>

  * other possible <mark>**sorting combinations**</mark> using <mark>**&**</mark>:

    * /products?limit=6&offset=2&sortBy=year&sortOrder=DESC
    * /products?ids=10,34,55,65&limit=6&offset=0&sortBy=year&sortOrder=DESC
    * /products?limit=10&offset=0&sortBy=price&sortOrder=ASC
