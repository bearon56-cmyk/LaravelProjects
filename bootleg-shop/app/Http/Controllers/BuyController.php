<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class BuyController extends Controller
{
    public function index(int $id){
        $response = Http::get("https://fakestoreapi.com/products");

        if($response->failed()){
            abort(502, 'Unable to fetch');
        };

        $product = $response->collect()->firstWhere('id', $id);
        return Inertia::render('BuyPage', [
            'product'=> $product
        ]);

    }
}
