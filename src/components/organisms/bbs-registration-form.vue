<template>
  <div class="bbs-form">
    <form action="/register" name="register-form" method="POST" @submit.prevent="user.addUser">
      <bbs-first-name v-model="user.userForm.firstName"/>
      <bbs-middle-name v-model="user.userForm.middleName"/>
      <bbs-last-name v-model="user.userForm.lastName"/>
      <bbs-username v-model="user.userForm.username"/>
      <bbs-password v-model="user.userForm.password"/>
      <bbs-button button-type="submit" button-name="add-user"> Register </bbs-button>
    </form>

    <bbs-button button-type="submit" button-name="register-user" @click="store.status = false">
      Log in
    </bbs-button>
  </div>
</template>

<script setup lang="ts">
import BbsFirstName from '../molecules/bbs-firstName-input.vue'
import BbsMiddleName from '../molecules/bbs-middleName-input.vue'
import BbsLastName from '../molecules/bbs-lastName-input.vue'
import BbsUsername from '../molecules/bbs-username-input.vue'
import BbsPassword from '../molecules/bbs-password-input.vue'
import BbsButton from '../atoms/bbs-button.vue'
import { useRouter } from '@/composables/useRouter'
import { useUser } from '@/composables/useUser'

const store = useRouter()
const user = useUser()
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
