---
title: "Test Lazy Components"
publishDate: "12 April 2024"
description: "Livewire Snippet"
tags: ["livewire","Testing"]
---

```php
public function testCanSeeAllPosts()
{
    Livewire::withoutLazyLoading()
        ->test(ShowPosts::class)
        ->assertSee(...);
}
```