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
     This endpoint retrieves the list of all products.
     
     http://api.smartphonesquad.shop/products

### GET /products/new
    This endpoint retrieves the list of new products sorted by the year in descending order.
    
    http://api.smartphonesquad.shop/products/new

### GET /products/discount
    This endpoint retrieves the list of products sorted by the discount value (the difference between fullPrice and price) in descending order.
    
    http://api.smartphonesquad.shop/products/discount

### GET /products/:phoneId
    This endpoint retrieves detailed information about a specific product with the given phoneId.
    (Here, "apple-iphone-7-32gb-black" is the phoneId of the product to retrieve)
    
    http://api.smartphonesquad.shop/products/apple-iphone-7-32gb-black