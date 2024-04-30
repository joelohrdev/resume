---
title: "Nested Shorthand"
publishDate: "15 April 2024"
description: "Livewire Snippet"
tags: ["livewire"]
---

Now in Livewire 3

```php
// Beore ❌
<livewire:index-item :post="post" />

// After ✅
<livewire:index-item :$post />
```