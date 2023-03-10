<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// import { getUserInfo, login } from '@/api/user.old';
import apiUser from '@/api/user'

const { getUserInfo, login } = apiUser

export default {
  created() {
    // this.getData();
  },
  methods: {
    getData() {
      getUserInfo({
        id: 1,
      }).then(res => {
        console.log(res)
      })

      login({
        username: 'admin',
        password: 123456,
      }).then(res => {
        console.log(res)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
