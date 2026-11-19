<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

#[Signature('products:import')]
#[Description('Command description')]
class ImportProducts extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $response = Http::get('https://fakestoreapi.com/products');



        foreach ($response->json() as $item) {
            Product::query()->updateOrCreate(
                ['external_id' => $item['id']],
                [
                    'title'       => $item['title'],
                    'price'       => $item['price'],
                    'description' => $item['description'],
                    'category'    => $item['category'],
                    'image'       => $item['image'],
                ]
            );
        }

    }
}
