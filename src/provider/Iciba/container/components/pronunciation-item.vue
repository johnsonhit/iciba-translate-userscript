<template>
  <div class="pronunciation-item flex items-center">
    <div
      class="ipa-type-name text-grey-600 mr-1 text-12"
      v-if="type"
      :textContent.prop="type"
    />
    <div
      v-if="ipa !== '[]'"
      class="ipa text-grey-700 text-12 mr-1"
    >
      {{ ipa }}
    </div>
    <div
      class="play-sound flex flex-center"
      @click="handlePlay"
    >
      <i-icon :svg="icon.play" />
    </div>
  </div>
</template>

<script lang="ts" src="./pronunciation-item.ts"></script>
<style lang="sass" src="./pronunciation-item.sass" scoped></style>
