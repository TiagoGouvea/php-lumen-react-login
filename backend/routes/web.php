<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------

As an Anonymous User:
/               GET             returns in JSON the api version 1.0.0
/auth/verify    GET/POST        returns error message in JSON and appropriate status code.
/users/me       GET returns     error message in JSON and appropriate status code.

As an Authenticated User:
/               GET             returns in JSON the api version 1.0.0
/auth/verify    GET/POST        expects JWT in header, returns a message of true and a status code of 200
/users/me       GET             expects JWT in header, if JWT is valid returns user’s information in JSON with status code 200

*/

// Root route
// / - GET - returns in JSON the api version 1.0.0
$router->get('/', function () use ($router) {
    return response()->json(['version' => '1.0.0']);
});

// Auth route
// /auth/verify - GET/POST - returns error message in JSON and appropriate status code.
$router->post('auth/verify', ['uses' => 'AuthController@verify']);

// Protected routes
$router->group(
    ['middleware' => 'jwt.auth'],
    function () use ($router) {
        // /auth/verify - GET/POST
        // Anonymous User - returns error message in JSON and appropriate status code.
        // Authenticated User - returns error message in JSON and appropriate status code.
        $router->get('auth/verify', ['uses' => 'AuthController@verifyGet']);

        // /users/me - GET
        // Anonymous User -  message in JSON and appropriate status code.
        // Authenticated User - expects JWT in header, if JWT is valid returns user’s information in JSON with status code 200
        $router->get('users/me', ['uses' => 'UserController@me']);
    }
);


