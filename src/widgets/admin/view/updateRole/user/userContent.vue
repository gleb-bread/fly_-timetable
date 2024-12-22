<script lang="ts" setup>
import { useUsersStore } from "@/app/stores/users";
import { useRolesStore } from "@/app/stores/roles";
import defaultTextWithLabel from "@/widgets/text/defaultTextWithLabel.vue";
import { useRoleStore } from "@/app/stores/role";
import { computed } from "vue";
import * as Models from "@/entities/models";

const usersStore = useUsersStore();
const rolesStore = useRolesStore();
const roleStore = useRoleStore();

const getUser = computed(
  () => usersStore.state.getUsers[rolesStore.components.getSelectUser ?? 0]
);

const rights = computed(() => rolesStore.state.getRoles);

const roles = computed(() =>
  Object.values(roleStore.state.getRoles).filter(
    (role) => !getRolesByUser.value.find((right) => right.role_id == role.id)
  )
);

const getRolesByUser = computed(() =>
  Object.values(rights.value).filter(
    (right) => right.user.id === getUser.value?.id
  )
);

const deleteRole = function (role: Models.UserRole) {
  rolesStore.state.Delete(role);
};

const addRole = function (roleId: number) {
  rolesStore.state.create({
    role_id: roleId,
    user_id: getUser?.value?.id ?? 0,
  });
};
</script>

<template>
  <vContainer>
    <defaultTextWithLabel>
      <template #label> Имя </template>
      {{ getUser?.name ?? "-" }}
    </defaultTextWithLabel>
    <br />
    <defaultTextWithLabel>
      <template #label> Фамилия </template>
      {{ getUser?.second_name ?? "-" }}
    </defaultTextWithLabel>
    <br />
    <defaultTextWithLabel>
      <template #label> Email </template>
      {{ getUser?.email ?? "-" }}
    </defaultTextWithLabel>
  </vContainer>
  <VNavigationDrawer location="right">
    <v-list-item
      v-for="role in getRolesByUser"
      :title="role.role.title"
      :append-icon="role.role.name === 'admin' ? undefined : 'mdi-close'"
      @click.stop="deleteRole(role)"
      :key="role.id + role.user_assigment_id + role.role_id"
    >
    </v-list-item>

    <v-list-item>
      <div class="d-flex justify-center">
        <v-menu :close-on-content-click="true">
          <template #activator="{ props }">
            <v-btn icon="mdi-plus" v-bind="props" :elevation="0"></v-btn>
          </template>
          <VCard>
            <VList>
              <v-list-item
                classs="cursor-pointer"
                @click.stop="addRole(role.id)"
                v-for="role in roles"
                :title="role.title"
              >
              </v-list-item>
            </VList>
          </VCard>
        </v-menu>
      </div>
    </v-list-item>
  </VNavigationDrawer>
</template>
