<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BannerAdvertisement extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'link',
        'is_active',
        'thumbnail',
        'type',
    ];
}
