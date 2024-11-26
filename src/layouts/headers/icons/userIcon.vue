<script lang="ts" setup></script>

<template>
  <v-menu :close-on-content-click="true">
    <template #activator="{ props }">
      <v-icon v-bind="props" class="cursor-pointer"> mdi-account </v-icon>
    </template>

    <VCard color="white">
      <VList bg-color="white" class="py-0">
        <v-list-item
          @click="$HELPER.RouterAPI.redirect('APPLICATION')"
          class="cursor-pointer us-none font-xs font-weight-medium"
          :density="'compact'"
        >
          <template #prepend>
            <div class="mr-2">
              <VIcon>mdi-text-box</VIcon>
            </div>
          </template>
          {{ $WORDS.MENU.USER.APPLICATION }}
        </v-list-item>
        <v-list-item
          @click="$HELPER.RouterAPI.redirect('ANALYTIC')"
          class="cursor-pointer us-none font-xs font-weight-medium"
          :density="'compact'"
        >
          <template #prepend>
            <div class="mr-2">
              <VIcon>mdi-chart-bell-curve-cumulative</VIcon>
            </div>
          </template>
          {{ $WORDS.MENU.USER.ANALYTIC }}
        </v-list-item>
      </VList>
    </VCard>
  </v-menu>
</template>
