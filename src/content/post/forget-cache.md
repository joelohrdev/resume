---
title: "Forget Cache on Create/Update"
publishDate: "28 April 2024"
description: "Laravel Snippet"
tags: ["laravel"]
---

Forget/Refresh cache whenever a record is created/updated.

```php
use Illuminate\Support\Facades\Cache;

class Post extends Model
{
    protected static function booted()
    {
        static::saved(function () {
            Cache::forget('posts');
        });
    }
}
```