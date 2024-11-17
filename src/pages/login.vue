<script lang="ts" setup>
import passwordField from "@/widgets/fields/outlined/passwordField.vue";
import { useUserStore } from "@/app/stores/user";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const email = computed({
  get() {
    return userStore.state.getUserLogin.email;
  },
  set(v: string) {
    userStore.state.getUserLogin.email = v;
  },
});

const password = computed({
  get() {
    return userStore.state.getUserLogin.password;
  },
  set(v: string) {
    userStore.state.getUserLogin.password = v;
  },
});

const login = function () {
  userStore.state.UserLogin(router);
};
</script>

<template>
  <v-container class="pt-16">
    <div class="text-center w-100 d-flex flex-column align-center">
      <h1 class="text-h4 text-center mb-5">
        {{ $WORDS.REG.TITLELOGIN }}
      </h1>
      <div class="w-50">
        <outlined-text-field
          v-model:model-value="email"
          :label="$WORDS.REG.EMIAL"
        >
        </outlined-text-field>
        <password-field
          v-model:model-value="password"
          :label="$WORDS.REG.PASSWORD"
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
      </div>
    </div>
  </v-container>
</template>
