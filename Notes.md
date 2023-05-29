Json server:
    - no need for a database
    - can request get/put/post/delete without a heavy server
    - the end-points are the keys of the json string ("products" is the end-point below)
        e.g {
            products: [
                {id:1, name: 'laptop'},
                {id:2, name: 'phone'}]
        }