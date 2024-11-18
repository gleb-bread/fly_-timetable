<script lang="ts" setup>
import passwordField from "@/widgets/fields/outlined/passwordField.vue";
import { useUserStore } from "@/app/stores/user";
import { computed } from "vue";
import { useRouter } from "vue-router";
import textField from "@/widgets/fields/outlined/textField.vue";
import { ref } from "vue";
import { Helper } from "@/shared/helpers";

const router = useRouter();
const userStore = useUserStore();

const form = ref<HTMLFormElement | null>(null);

const email = computed({
  get() {
    return userStore.state.getUserLogin.email;
  },
  set(v: string) {
    delete userStore.components.getErrorsLogin.email;
    delete userStore.components.getErrorsLogin.result;
    userStore.state.getUserLogin.email = v;
  },
});

const password = computed({
  get() {
    return userStore.state.getUserLogin.password;
  },
  set(v: string) {
    delete userStore.components.getErrorsLogin.password;
    delete userStore.components.getErrorsLogin.result;
    userStore.state.getUserLogin.password = v;
  },
});

const EmailError = computed(() => {
  return [() => userStore.components.getErrorsLogin.email ?? true];
});

const PasswordError = computed(() => {
  return [() => userStore.components.getErrorsLogin.password ?? true];
});

const ResultError = computed(() => {
  return [() => userStore.components.getErrorsLogin.result ?? true];
});

const login = async function () {
  await userStore.state.UserLogin(router);
  await form.value?.validate();
};
</script>

<template>
  <v-container class="pt-16">
    <div class="text-center w-100 d-flex flex-column align-center">
      <h1 class="text-h4 text-center mb-5">
        {{ $WORDS.REG.TITLELOGIN }}
      </h1>

      <div class="w-50">
        <v-form @submit.prevent ref="form">
          <text-field
            v-model:model-value="email"
            :label="$WORDS.REG.EMIAL"
            class="mb-2"
            :rules="EmailError"
            :prepend-icon="'mdi-account-outline'"
          >
          </text-field>
          <password-field
            :rules="Helper.RulesAPI.combineRules(PasswordError, ResultError)"
            v-model:model-value="password"
            :label="$WORDS.REG.PASSWORD"
            class="mb-2"
          >
          </password-field>
          <div class="d-flex justify-center">
            <div class="w-50 d-flex flex-column align-center">
              <default-btn @click.stop="login" class="w-100">{{
                $WORDS.REG.BTNLOGIN
              }}</default-btn>
              {{ $WORDS.REG.TITLEOR }}
              <outlined-btn
                @click.stop="$HELPER.RouterAPI.redirect($router, 'REG')"
                class="w-100"
              >
                {{ $WORDS.REG.BTNREG }}
              </outlined-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </v-container>
</template>
