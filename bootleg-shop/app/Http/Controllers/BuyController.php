<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class BuyController extends Controller
{
    public function index(int $id){

        $product = Product::query()->find($id);
        return Inertia::render('BuyPage', [
            'product'=> $product
        ]);

    }
}
