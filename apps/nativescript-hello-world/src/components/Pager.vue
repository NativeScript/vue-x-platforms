<script lang="ts" setup>
import { Pager, PagerItem } from '@nativescript-community/ui-pager';
import { registerElement, ref } from 'nativescript-vue';
import {
  CoreTypes,
  GridLayout,
  Label,
  LoadEventData,
  Screen,
} from '@nativescript/core';

registerElement('Pager', () => Pager);
registerElement('PagerItem', () => PagerItem);

let currentIndex = ref(0);
const emits = defineEmits(['updateIndex']);

const onPagerLoaded = (args: LoadEventData) => {
  const pager = args.object as Pager;
  pager.on('scroll', (args: any) => {
    currentIndex.value = args['currentPosition'];
    emits('updateIndex', currentIndex.value);
  });
};
const showLove = () => {
  if (heartArea) {
    const newHeart = new Label();
    newHeart.iosOverflowSafeArea = false;
    newHeart.text = '❤️';
    newHeart.fontSize = __VISIONOS__ ? 100 : 40;
    newHeart.opacity = 0;
    newHeart.translateX = Screen.mainScreen.widthDIPs / 2;
    newHeart.translateY = 500;
    heartArea.addChild(newHeart);
    heartArea.requestLayout();
    setTimeout(() => {
      animateHeart(newHeart);
    });
  }
};
const animateHeart = (heartLabel: Label) => {
  if (heartLabel) {
    heartLabel
      .animate({
        translate: { x: Screen.mainScreen.widthDIPs / 2, y: Math.floor(Math.random() * -300) },
        opacity: 1,
        duration: 1000,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .then(() => {
        heartLabel.animate({
          translate: {
            x: Math.random() * (200 - -200) + -200,
            y: Math.random() * (-300 - -600) + -600,
          },
          opacity: 0,
          duration: 4000,
          curve: CoreTypes.AnimationCurve.easeInOut,
        });
      });
  }
};
let heartArea: GridLayout;
const loadedHeartArea = (args) => {
  heartArea = args.object as GridLayout;
};
</script>
<template>
  <Pager @loaded="onPagerLoaded" height="100%">
    <PagerItem>
      <StackLayout class="align-middle px-6">
        <Label
          class="bg-[#42b883cc] rounded-xl font-bold text-center text-[#35495e] p-4 vision:text-8xl ios:text-2xl  android:text-2xl"
          >NativeScript ❤️ Vue</Label
        >
      </StackLayout>
    </PagerItem>
    <PagerItem>
      <StackLayout>
        <Label
          textWrap="true"
          class="font-bold text-[#35495e] mt-16 ml-2 vision:text-6xl ios:text-4xl  android:text-4xl"
        >
          <!-- Hello Vue from NativeScript -->
          Dreaming...
        </Label>
      </StackLayout>
    </PagerItem>
    <PagerItem>
      <GridLayout class="align-top">
        <Label
          class="font-bold text-[#35495e] mt-[250] ml-4 vision:text-6xl ios:text-4xl android:text-4xl"
          >About Our...</Label
        >
      </GridLayout>
    </PagerItem>
    <PagerItem>
      <GridLayout class="w-full h-full">
        <GridLayout
          class="w-full h-full"
          @loaded="loadedHeartArea"
          iosOverflowSafeArea="true"
        >
          <!-- show love area! -->
        </GridLayout>
        <GridLayout
          rows="*,auto,*"
          class="w-full h-full"
          iosOverflowSafeArea="true"
        >
          <GridLayout row="1" class="align-middle px-4" @tap="showLove">
            <Label
              class="bg-[#42b883cc] rounded-xl font-bold text-[#35495e] mt-8 text-center p-4 vision:text-6xl ios:text-3xl  android:text-3xl"
              >Vue Valentine? ❤️</Label
            >
          </GridLayout>
        </GridLayout>
      </GridLayout>
    </PagerItem>
  </Pager>
</template>
