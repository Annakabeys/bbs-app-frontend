<template>
  <div class="bbs-form">
    <form :action="getFormAction()" name="login-form" method="POST" @submit.prevent="user.loginUser">
      <bbs-username v-model="user.loginForm.username" />
      <bbs-password v-model="user.loginForm.password" />
      <bbs-button type="submit" button-name="login-user">Log in</bbs-button>
    </form>
    <bbs-button type="button" button-name="register-user" @click="store.status = true">
      Register
    </bbs-button>
  </div>
</template>

<script setup lang="ts">
import BbsUsername from '../molecules/bbs-username-input.vue'
import BbsPassword from '../molecules/bbs-password-input.vue'
import BbsButton from '../atoms/bbs-button.vue'
import { useRouter } from '@/composables/useRouter'
import { useUser } from '@/composables/useUser'

const store = useRouter()
const user = useUser()

const getFormAction = () => {
  return '/home';
};
</script>

<style scoped>
.bbs-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid black;
  border-radius: 5px;
}

.bbs-form input {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.bbs-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.bbs-form button:hover {
  background-color: #0056b3;
}
</style>
