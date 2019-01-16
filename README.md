## Jillian Magsaysay -- Personal Website API

### Prerequisites
Make sure to copy the `.env-template` to a new file `.env`
```
cp .env-template .env
```

### Installation
```
yarn

mkdir -p data/db
```
### Development

#### Running the API Server

Start the database
`yarn start:db`

Start the server
`yarn start`


##### Run the App in your browser

Go to http://localhost:5000/api/ You should see the message:
Connected to jillianmagsaysay-api!

The other endpoints should be accessible through their relevant controllers.


##### Add Some records to the database

Open the following Postman API collection:
https://www.getpostman.com/collections/fcb6a80af233c0c49e17


### Technologies
- Yarn
- Node
- Express
- Mongoose
- MongoDB
