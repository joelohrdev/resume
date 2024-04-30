---
title: "Keep list methods list components"
publishDate: "13 April 2024"
description: "Livewire Snippet"
tags: ["livewire"]
---

```php
@foreach($posts as $post)
    <livewire:post-item :$post :key="$post->id" />
@endforeach
```

Keep 'list manipulation' methods like 'add' and 'delete' inside the parent component, and keep 'item manipulation' methods inside 
the nested child components.

```php
// Parent Component
class PostIndex extends Component
{
    public function add($id) {...}
    public function delete($id) {...}
}

// Child Component
class PostIndexItem extends Component
{
    public Post $post;
    public function update() {...}
}
```

If you need an item to delete itself, call delete() on the parent from the child and pass the id.

```php
<button wire:click="$parent.delete({{ $post->id }})">Delete</button>
```