<?php
/**
 * Created by PhpStorm.
 * User: tiagogouvea
 * Date: 25/07/18
 * Time: 09:54
 */

namespace App\Http\Middleware;
class CorsMiddleware
{
    /**
     * Handle OPTIONS and request to return 200 when needed
     * @param $request
     * @param $next
     * @return \Illuminate\Http\JsonResponse
     */
    public function handle($request, $next)
    {
        $headers = [
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Max-Age' => '86400',
            'Access-Control-Allow-Headers' => 'Content-Type, Authorization, X-Requested-With,  token'
        ];

        if ($request->isMethod('OPTIONS')) {
            return response()->json('{"method":"OPTIONS"}', 200, $headers);
        }

        $response = $next($request);
        foreach ($headers as $key => $value) {
            $response->header($key, $value);
        }

        return $response;
    }
}