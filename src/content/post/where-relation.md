---
title: "whereRelation"
publishDate: "30 April 2024"
description: "Laravel Snippet"
tags: ["laravel"]
---

```php
// Before ❌
User::whereHas('posts', function ($query) {
    $query->where('published', true);
})->get();

// After ✅
User::whereRelation('posts', 'published', true)->get();
```