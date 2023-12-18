/* eslint-disable */
import { ComponentCustomProperties } from 'vue';
import { IState, ActionDispatchCollect, GettersCollect } from './store';
import { Firestore } from 'firebase/firestore';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $firestore: Firestore;
  }
}
