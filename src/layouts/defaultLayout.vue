<script lang="ts" setup>
import defaultHeader from "./headers/defaultHeader.vue";
import defaultMessages from "./message/defaultMessages.vue";
</script>

<template>
  <v-responsive>
    <v-app>
      <default-header></default-header>

      <v-main>
        <slot name="main"></slot>
        <default-messages></default-messages>
      </v-main>
    </v-app>
  </v-responsive>
</template>
