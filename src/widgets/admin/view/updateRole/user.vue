<script lang="ts" setup>
import { useRolesStore } from "@/app/stores/roles";
import { computed } from "vue";
import userContent from "./user/userContent.vue";
import defaultText from "@/widgets/text/defaultText.vue";

const rolesStore = useRolesStore();

const getSelectUser = computed(() => rolesStore.components.getSelectUser);
</script>

<template>
  <userContent v-if="getSelectUser"></userContent>
  <template v-else>
    <vContainer>
      <defaultText class="font-xxl">Выберите пользователя слева</defaultText>
    </vContainer>
  </template>
</template>
