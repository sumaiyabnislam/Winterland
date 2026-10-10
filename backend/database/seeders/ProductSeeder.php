<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Camel casual slip-on shoes for men',
                'category' => 'Footwear',
                'price' => 4995,
                'old_price' => null,
                'badge' => 'GRAND KHILADI SALE',
                'image' => 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85',
                'description' => 'Relaxed everyday slip-ons built for comfort and easy movement.',
            ],
            [
                'name' => 'Camel boots for men',
                'category' => 'Footwear',
                'price' => 5996,
                'old_price' => 7995,
                'badge' => 'GRAND KHILADI SALE',
                'image' => 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85',
                'description' => 'Rugged boots with a classic profile for daily exploration.',
            ],
            [
                'name' => 'Camel nubuck outdoor sandals',
                'category' => 'Footwear',
                'price' => 4995,
                'old_price' => null,
                'badge' => 'EXCLUSIVE',
                'image' => 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',
                'description' => 'Breathable outdoor sandals designed for all-day traction.',
            ],
            [
                'name' => 'Grey sneakers for men',
                'category' => 'Footwear',
                'price' => 5246,
                'old_price' => 6995,
                'badge' => 'GRAND KHILADI SALE',
                'image' => 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85',
                'description' => 'Minimal, durable sneakers made for daily wear and movement.',
            ],
            [
                'name' => 'Snaype sandal for men',
                'category' => 'Footwear',
                'price' => 4995,
                'old_price' => null,
                'badge' => 'EXCLUSIVE',
                'image' => 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85',
                'description' => 'An elevated sandal silhouette for quick errands and travel days.',
            ],
            [
                'name' => 'Leather trail shoes in tan',
                'category' => 'Footwear',
                'price' => 4295,
                'old_price' => null,
                'badge' => 'GRAND KHILADI SALE',
                'image' => 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
                'description' => 'Trail-ready leather shoes with comfort built into every step.',
            ],
            [
                'name' => 'Rugged ankle boots',
                'category' => 'Footwear',
                'price' => 6495,
                'old_price' => 7995,
                'badge' => 'EXCLUSIVE',
                'image' => 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',
                'description' => 'A rugged ankle boot with good grip and support for rough terrain.',
            ],
            [
                'name' => 'Everyday outdoor sneakers',
                'category' => 'Footwear',
                'price' => 3795,
                'old_price' => null,
                'badge' => 'GRAND KHILADI SALE',
                'image' => 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85',
                'description' => 'Comfort-forward sneakers created for daily outdoor motion.',
            ],
        ];

        foreach ($products as $product) {
            Product::query()->firstOrCreate(
                ['slug' => str($product['name'])->slug()->toString()],
                $product,
            );
        }
    }
}
