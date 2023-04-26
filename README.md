## Application Setup
- clone the repository
- run ``npm install``
 
 ## Architecture Structure
- **src**: Root directory for all functionality of the application
    - ***backfill***: data backfill processes, this folder contains the csv file and also the functions that allow for the data migration.
    - ***database***: Database initializations for the project at hand and all the table connections associated with the project.
    - ***products***: Products related functions and models (CRUD and Models)
    - ***purchases***: Purchases related functions and models (CRUD and Models)
    - ***users***: Users related functions and models (CRUD and Models)
    - ***index.ts***: Primary file to run the express application.

## Terminal Commands
- ```npm run build```: Build project
- ```npm run start```: Start project in a production related environment
- ```npm run dev```: Run development server

 ## API Details
- Main URL: http://localhost:3000/

 ## Task #1: Data Backfill
- API: [GET] ```/products/data/backfill```
- Response: Array of products

 ## Task #2: Build a Web Server
- **Create & manage users**
    - Create User
        - API: [POST] */users*
        - Response: User object
        - Request Object:
            - ```first_name```: string
            - ```last_name```: string
            - ```email```: string
            - ```gender```: string

    - Get User
        - API: [GET] */users/{id}*
        - Response: User Object
        - Request parameter
            - ```id```: string appended to end of the url, replace *{id}* with the users ```id```

    - Update User
        - API: [PATCH] */users/{id}*
        - Response: User Object
        - Request parameter
            - ```id```: string appended to end of the url, replace *{id}* with the users ```id```
        - Request Object:
            - An object that contains any of the following keys
                - ```first_name```: string
                - ```last_name```: string
                - ```email```: string
                - ```gender```: string

    - Delete User
        - API: [DELETE] */users/{id}*
        - Response: **200** STATUS

- **Record & manage purchases**
    - Create Purchase
        - API: [POST] */purchases*
        - Response: Purchase object
        - Response has a possible 400 if either the user or product does not exist
        - Request Object
            - ```user_id```: number
            - ```product_id```: number

    - Get Purchase
        - API: [GET] */purchases/{id}*
        - Response: Purchase Object
        - Request parameter
            - ```id```: string appended to end of the url, replace *{id}* with the purchases ```id```
        

    - Update Purchase
        - API: [PATCH] */purchases/{id}*
        - Response: Purchase Object
        - Request parameter
            - ```id```: string appended to end of the url, replace *{id}* with the purchases ```id```
        - An object that contains any of the following keys
            - ```user_id```: number
            - ```product_id```: number

    - Delete Purchase
        - API: [DELETE] */purchases/{id}*
        - Response: **200** STATUS
        - Request parameter
            - ```id```: string appended to end of the url, replace *{id}* with the purchases ```id```

- **Show a customer their purchases**
    - Fetch all purchases for a given customer
        - API: [GET] */purchases/user/{id}*
        - Response: Array of purchases attached with the products
        - Request parameter
            - ```id```: string appended to end of the url, replace *{id}* with the users ```id``` 

- **Analytics**
    - Get most valuable customer
        - API: [GET] */purchases/analytic/most_valuable_customer*
        - Response: User Object

    - Get most valuable product
        - API: [GET] */purchases/analytic/most_popular_product*
        - Response: Products Object

## Interview Steps
- Start data backfill: API: [GET] ```/products/data/backfill```

- Create a user by following the procedure in [Task #2 Web Server](#task-2-build-a-web-server) under the **Create User** sub header

- Create a purchase by following the procedure in [Task # 2 Web Server](#task-2-build-a-web-server) under the **Create Purchase** sub header under the *Record & manage purchases* sub header. ***NOTE HERE*** PLEASE INPUT ALREADY EXISTING IDS in the ```user_id``` and ```product_id```

- Create multiple purchases with multiple products with multiple users

- Fetch users purchases by running [GET] */purchases/user/{id}*

- Fetch most valuable product by running [GET] */purchases/analytic/most_popular_product*

- Fetch most valuable customer by running [GET] */purchases/analytic/most_valuable_customer*

## Future Enhancements
- Allowing item verification in DB when associating JOIN statement in queries
- Some queries do not execute correctly which leads me to believe to refactor the code and spend time on supabase platform for increasing any type of resources that can lead to faster queries


## Contact 
please feel free to let me know if you would like to run the project down together or have any questions




