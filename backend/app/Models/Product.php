<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'category',
        'price',
        'old_price',
        'badge',
        'image',
        'description',
    ];

    protected static function booted(): void
    {
        static::creating(function (self $product): void {
            $product->slug ??= Str::slug($product->name);
        });
    }
}
