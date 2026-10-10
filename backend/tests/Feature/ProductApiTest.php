<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_products_endpoint_returns_product_collection(): void
    {
        Product::create([
            'name' => 'Camel boots for men',
            'category' => 'Footwear',
            'price' => 5996,
            'old_price' => 7995,
            'badge' => 'GRAND KHILADI SALE',
            'image' => 'https://example.com/boots.jpg',
            'description' => 'A rugged boot for all-day comfort.',
        ]);

        $response = $this->get('/api/products');

        $response->assertOk();
        $response->assertJsonStructure([
            'data' => [
                '*' => [
                    'id',
                    'name',
                    'price',
                    'old_price',
                    'badge',
                    'image',
                    'category',
                    'slug',
                ],
            ],
        ]);
    }

    public function test_product_detail_endpoint_returns_single_product(): void
    {
        $product = Product::create([
            'name' => 'Trail-ready sandal',
            'category' => 'Footwear',
            'price' => 4295,
            'old_price' => null,
            'badge' => 'EXCLUSIVE',
            'image' => 'https://example.com/sandal.jpg',
            'description' => 'Trail-ready sandal with premium grip.',
        ]);

        $response = $this->get('/api/products/' . $product->slug);

        $response->assertOk();
        $response->assertJsonPath('data.name', $product->name);
    }
}
