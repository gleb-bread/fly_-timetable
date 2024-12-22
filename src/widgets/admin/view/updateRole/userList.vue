<script lang="ts" setup>
import { useUsersStore } from "@/app/stores/users";
import { useRolesStore } from "@/app/stores/roles";
import { computed } from "vue";

const usersStore = useUsersStore();
const rolesStore = useRolesStore();

const getUsers = computed(() => usersStore.state.getUsers);

const rights = computed(() => rolesStore.state.getRoles);

const getRolesByUser = computed(() => (id: number) => {
  return Object.values(rights.value).filter((right) => right.user.id === id);
});

const setSelectUser = function (id: number) {
  rolesStore.components.setSelectUser(id);
};
</script>

<template>
  <VNavigationDrawer>
    <template v-for="user in getUsers">
      <v-list-item @click.stop="setSelectUser(user.id)" :title="user.email">
        <template #subtitle>
          <div v-for="right in getRolesByUser(user.id)">
            {{ right.role.title }}
          </div>
        </template>
      </v-list-item>
    </template>
  </VNavigationDrawer>
</template>
