<script lang="ts" setup>
import { useRoleStore } from "@/app/stores/role";
import { useUsersStore } from "@/app/stores/users";
import { useRolesStore } from "@/app/stores/roles";
import updateRoleContent from "./updateRole/updateRoleContent.vue";

const roleStore = useRoleStore();
const usersStore = useUsersStore();
const rolesStore = useRolesStore();

roleStore.state.__init__();
usersStore.state.__init__();
rolesStore.state.__init__();
</script>

<template>
  <updateRoleContent />
</template>
