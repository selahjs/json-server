Json server:
    - no need for a database
    - can request get/put/post/delete without a heavy server
    - the end-points are the keys of the json string ("products" is the end-point below)
        e.g {
            products: [
                {id:1, name: 'laptop'},
                {id:2, name: 'phone'}]
        }
[filtering]:
    by id
    - http://localhost:3000/products/id
    by type
    - http://localhost:3000/products?category=electronics
    by nested type
    - http://localhost:3000/products?category=electronics&discount.type=shipping
[sorting]
    sorting is ascending by default 
    - http://localhost:3000/products?_sort=price

    sorting by descending
    - http://localhost:3000/products?_sort=price&_order=desc

    sorting by price first then category descending and ascending respectively
    - http://localhost:3000/products?_sort=price,category&_order=desc,asc

[pagination] similar with github api pagination
    default size is 10 items/page, we customize page size by "_limit=number" key work and page number 
    by "_page=number"
    - http://localhost:3000/products?_page=1&_limit=3  ..we  get 3 items per page

[Operators]
    - greater than and less than i.e. _gte(>) and _lte(<)
        * filtering by price range using _gte(>) and _lte(<)
        - http://localhost:3000/products?price_gte=2000&price_lte=4000
    - not-equal-to operator i.e. _ne
        - http://localhost:3000/products?id_ne=2  ...skips product with id = 2 
    - like operator i.e. _like
        - http://localhost:3000/products?category_like=^f ...  filters by category with starting with f
    - q operator for full text search of the intire json
        - http://localhost:3000/products?q=in   ...return prodcuts that contain the letter in

[relationships]
    - _embed = just like joining tables in sql
        http://localhost:3000/products?_embed=reviews ...return products with their corresponding reviw
        http://localhost:3000/products/1?_embed=reviews ... for single product with review

    - _expand = we can also do the same for parent properties i.e. reviews with product
        http://localhost:3000/reviews?_expand=product
        http://localhost:3000/reviews/1?_expand=product

[post,put,patch,delete]
    - put, patch and delete request will always contain the id of the item 
    
    -post / create
        http://localhost:3000
        body{
            {
                "id": newId,
                "title": "Product 1",
                "category": "electronics",
                "price": 4000,
                "description": "This is description about product 1"
            }
        }
    -put example
        - the put request needs the entire product object even when modifiying a single property
        http://localhost:3000/11 <--
        body{
            {
                "id": 11,
                "title": "updated content",
                "category": "updated content",
                "price": updated price,
                "description": "updated content"
            }
        }

    - patch example
        - no need for the entire product object when modifiying a single property
        http://localhost:3000/11 <--
        body{
            {
                "price": updated price,
            }
        }

    - delete example
        - no need for the entire product object when modifiying a single property
        http://localhost:3000/11 <--
[json-server-configuratinons]
    - modify port on the script with --port flag
        "serve-json": "json-server --watch db.json --port 4000"
    - adding custom routes by adding routes.json file and routes flag on the script
        "serve-json": "json-server --watch db.json --port 4000 --routes routes.json"

