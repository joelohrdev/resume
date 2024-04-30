---
title: "Livewire Pull Method"
publishDate: "22 April 2024"
description: "Livewire Snippet"
tags: ["livewire"]
---

Returns and resets a livewire property in one:

```php
public $title = '';

public function add($id)
{
    Post::create([
        'title' => $this->title;
    ]);

    $this->reset('title');
}
```

Now becomes:

```php
public $title = '';

public function add($id)
{
    Post::create([
        'title' => $this->pull('title');
    ])
}
```