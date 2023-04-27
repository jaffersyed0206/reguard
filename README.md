## Application Setup
- clone the repository
- run ``npm install``

## Run application
- To run an application be sure to use ```npm run dev```

## Project Preferences
- Backfill [ALL GET REQUESTS: localhost = 3000]
    - claims => /claims/backfill
    - customers => /customers/backfill
    - purchases => /purchases/backfill

- Return all claims
    - GET => /claims
- Return users claims 
    - GET => /claims/user/:id
- Data counts
    - GET => /data
    
# Tests
- npx jest --detectOpenHandles

