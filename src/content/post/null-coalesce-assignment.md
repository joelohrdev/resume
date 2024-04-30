---
title: "Null Coalesce Assignment Operator"
publishDate: "25 April 2024"
description: "Laravel Snippet"
tags: ["laravel"]
---

Use the null coalesce assignment operator (??=) to assign a value to a variable if the variable is null.

```php
// Before (Using the null coalesce operator)
$user->name = $user->name ?? 'guest';

// After (Using the null coalesce assignment operator)
$user->name ??= 'guest';
```