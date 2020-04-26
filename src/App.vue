<template>
  <div id="app" style="height: 100vh;">
    <router-view/>
    <v-alert
      :value="isOpenErr"
      type="error"
      color="red"
      style="position:fixed; bottom: 0px; width: 100vh; z-index: 99;"
    >
      权限认证失败!
    </v-alert>
  </div>
</template>
<script>
  import axios from '@/api/request';

  export default {
    data() {
      return {
        isOpenErr: false,
      };
    },
    mounted() {
      const { token } = this.$route.query;
      // const token = 'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1OTA0NzIyODksInN1YiI6IjVjYmZiZjU3ZTFmYzQwZjI5Y2UzNWQ0MGQxNzg3MGUwLG93bF9qdW5pb3JfdXNlcixvd2xfYWRtaW5fd2ViIiwicm9sZUxpc3QiOiJbe1wiaWRcIjpcIjI0ZmJkNDJmMDI2NDQ0NjhiODlmZWM5ZGE4MDQyNTg1XCIsXCJuYW1lXCI6XCJvd2xfanVuaW9yX3VzZXJcIn0se1wiaWRcIjpcIjAyNDE2ZjA3NGU2NTQ1MzJiMzViM2IwNDlhYmUyZTRhXCIsXCJuYW1lXCI6XCJvd2xfYWRtaW5fd2ViXCJ9XSIsInVzZXJJZCI6IjVjYmZiZjU3ZTFmYzQwZjI5Y2UzNWQ0MGQxNzg3MGUwIn0.E7l2d4wobYhPo4WkRUgVMl5RjQH6oenrfixWRGB9k2JfFXizFEr1Ft87IWourYxzvSj8JhEmvpr000Om-hvFqA';
      if (token) {
        this.isOpenErr = false;
        axios.defaults.headers.common.Authorization = token;
        this.$router.push({ name: 'OwlMap' });
      } else {
        this.isOpenErr = true;
      }
    },
};
</script>
