<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        $response = Http::get("https://fakestoreapi.com/products");

        if($response->failed()){
            abort(502, 'Unable to fetch');
        };

        $products = $response->json();
        return Inertia::render('Dashboard', [
            'products' => $products
        ]);
    }
}
