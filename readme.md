This is a simple PHP+Lumen+JWT API with React Front end project. 

# Preparing and running

Clone repo:

```git clone https://github.com/TiagoGouvea/php-lumen-react-login```

## Setup backend

First you copy .envSample to .env and check all "DB_" values. 

After that you can migrate database, and seed with some sample data:

```
cd backend
php artisan migrate
php artisan db:seed
```

Check the users table to see fake users. All of then will have "tiago" password.

## Start backend

On backend folder start your php: 

```
php -S localhost:8000 -t public
```


## Setup frontend

Enter on frontend folder and install packages.
```
cd frontend
npm install
```

## Starting frontend

On frontend folder run:
``` 
npm start
```

Open your browser on [http://localhost:3000/dashboard](http://localhost:3000) to use it.


## What I haven't done
- Tests
- Use of redux or advanced state managment
- Setup docker