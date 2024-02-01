<script lang="ts" setup>
import { ref } from 'nativescript-vue';
import Pager from './Pager.vue';
import { Color, CoreTypes, GridLayout } from '@nativescript/core';

const progress = ref(0);
const updateProgress = (newProgress: number) => {
  progress.value = newProgress;
};
let grid: GridLayout;
const loadedPage = (args) => {
  if (!grid) {
    grid = args.object as GridLayout;
    animateBgColor();
  }
};
const animateBgColor = () => {
  grid
    .animate({
      backgroundColor: new Color('#42b883cc'),
      duration: 2000,
      curve: CoreTypes.AnimationCurve.easeInOut,
    })
    .then(() => {
      grid
        .animate({
          backgroundColor: new Color('#35495ea9'),
          duration: 2000,
          curve: CoreTypes.AnimationCurve.easeInOut,
        })
        .then(() => {
          animateBgColor();
        });
    });
};
</script>

<template>
  <Frame>
    <Page actionBarHidden="true">
      <GridLayout rows="*" @loaded="loadedPage">
        <Pager @updateIndex="updateProgress" />
      </GridLayout>
    </Page>
  </Frame>
</template>
