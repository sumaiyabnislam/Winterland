<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Product::query()
                ->orderBy('id')
                ->get()
                ->map(fn (Product $product) => $this->serializeProduct($product)),
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $product = Product::query()->where('slug', $slug)->firstOrFail();

        return response()->json([
            'data' => $this->serializeProduct($product),
        ]);
    }

    private function serializeProduct(Product $product): array
    {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'slug' => $product->slug,
            'category' => $product->category,
            'price' => (float) $product->price,
            'old_price' => $product->old_price ? (float) $product->old_price : null,
            'badge' => $product->badge,
            'image' => $product->image,
            'description' => $product->description,
        ];
    }
}
