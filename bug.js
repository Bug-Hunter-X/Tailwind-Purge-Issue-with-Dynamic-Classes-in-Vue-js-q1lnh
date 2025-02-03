```javascript
// Example showing the issue with Tailwind's purge feature not removing unused styles when using dynamic classes.

<template>
  <div :class="dynamicClass"></div>
</template>

<script>
export default {
data() {
    return {
      dynamicClass: 'bg-red-500'
    };
  },
};
</script>
```