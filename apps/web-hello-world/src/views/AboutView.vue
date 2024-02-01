<template>
  <div class="about">
    <Logo3D/>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
</style>

<script setup lang="ts">
import Logo3D from '../app/components/Logo3D.vue';
</script>
