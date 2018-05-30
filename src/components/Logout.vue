<template>
    
</template>
>
<script>
import { mapState, mapActions } from 'vuex'
import { USER_SIGNOUT} from '../vuex/store/user'
export default {
  mounted() {
      this.logout2()
  },
  methods: {
    ...mapActions([USER_SIGNOUT, "logout"]),
    logout2() {
      this.USER_SIGNOUT()
      this.logout()
      swal("您已成功退出登录！", "", "success")
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
