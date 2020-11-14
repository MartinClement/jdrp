<template>
  <div id="login__wrapper">
    <form id="login_form">
      <div class="error_wrapper">
        <span v-for="(e,i) in errors" :key="i">{{ e.message }}</span>
      </div>
      <div class="form-group">
        <label for="login">Identifiant</label>
        <input id="login" type="text" ::value="login">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" :value="password">
      </div>
      <div class="form-group form-group--submit">
        <button type="submit" id="submit" @click.prevent="handleSubmit">Go !</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

// const api = axios.create({
//   baseURL: '',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

export default {
  name: 'LoginPage',
  data() {
    return {
      login: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    async handleSubmit() {
      const { login, password } = this;
      console.log(login, password);

      try {
        const res = await axios.post('https://127.0.0.1:8000/login-vue', {
          login,
          password,
        });

        console.log(res);

        // redirect to homepage
        this.$routes.push('/');
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  #login__wrapper {
    width: 300px;
    margin: 150px auto 0;

    #login_form {
      display: flex;
      flex-direction: column;
    }

    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      label,input {
        font-size: 14px;
        font-weight: 600;
      }

      label {
        text-align: left;
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
        // width: 100%;
        border: 2px solid #121212;
        border-radius: 6px;
      }

      button {
        padding: 10px;
        background-color: #fff;
        width: 100px;
        border: 2px solid #121212;
        border-radius: 6px;
        margin-left: auto;
      }
    }
  }
</style>
