<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;
    protected $fillable = ['name', 'slug', 'thumbnail', 'content', 'category_id', 'author_id', 'is_features'];
}
