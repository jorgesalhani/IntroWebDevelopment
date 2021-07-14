# Question 1

Running a nodejs server with

* PUT: store user data to a datastore.json file
* GET: get user data by id
* DELETE: delete user data by id

## How to use

### Install dependencies
run 
```code
npm install
```

run 
```code
npm start
```

### Check normality
Create a collection using Insomnia (or Postman) and send the request:
 
GET to localhost (http://localhost:3000. 

If everything is running normally, you will see 

{
  "title": "Nasa Type Rocket Store",
  "version": "Dev"
}

### Update json database
Create another request using Insomnia (or Postman) and send the request:

PUT to endpoint /store with query id Naruto. In other words:

PUT to http://localhost:3000/store/Naruto

with JSON body:

{
	"name": "Naruto",
	"surname": "Morning Star"
}

If everything is running normally, you will see

{
  "id": "Naruto",
  "person": {
    "name": "Naruto",
    "surname": "Morning Star"
  }
}

PUT to endpoint /store with query id Finn. In other words:

PUT to http://localhost:3000/store/Finn

with JSON body:

{
	"name": "Finn",
	"surname": "Mertens"
}

If everything is running normally, you will see

{
  "id": "Finn",
  "person": {
    "name": "Finn",
    "surname": "Mertens"
  }
}

### Get registered users
Change the GET request to return the query id:

GET to endpoint /store with query id Naruto. In other words:

GET to http://localhost:3000/store/Naruto

If everything is running normally, you will see

[
  {
    "id": "Naruto",
    "person": {
      "name": "Naruto",
      "surname": "Morning Star"
    }
  }
]

On the other hand, if you request a query for Finn:

GET to http://localhost:3000/store/Finn

If everything is running normally, you will see

[
  {
    "id": "Finn",
    "person": {
      "name": "Finn",
      "surname": "Mertens"
    }
  }
]

On the other hand, if you request a query for Jake:

You will se a null list []

### Delete registered users
Create another request using Insomnia (or Postman) and send the request:

DELETE to endpoint /store with query id Naruto. In other words:

DELETE to http://localhost:3000/store/Naruto

Now, if you check the database with

GET to http://localhost:3000/store/Naruto

You will get a null list []

Only the query GET to http://localhost:3000/store/Finn

will return the registered user from database