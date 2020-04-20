<template lang="pug">
  .main-page
    .hero
      div.mb145
        nameAnimated
      .skills(:class='{"active": active}')
        p.bold.white.fs20.mb38.lh1 FRONTEND DEVELOPER
        p.bold.white.fs20.mb38.lh1 CROSS-PLATFORM APP DEVELOPER
        p.bold.white.fs20.lh1 VUEJS ENTHUSIAST
</template>

<script>
import nameAnimated from '~/components/nameAnimated'
export default {
  components: {
    nameAnimated
  },
  data: () => ({
    active: false
  }),
  mounted () {
    if (!this.$isServer) {
      setTimeout(() => {
        this.active = true
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 90px;
  }
  .hero {
    max-width: 1150px;
    width: 100%;
  }
  .skills {
    padding-left: 40px;
    opacity: 0;
    transition: opacity 700ms ease-in-out 3s;
    &.active {
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    .main-page {
      padding: 0 50px;
    }
    div.mb145 {
      margin-bottom: 110px;
    }
  }
  @media screen and (max-width: 610px) {
    .main-page {
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 420px) {
    .skills {
      padding-left: 0;
    }
    div.mb145 {
      margin-bottom: 70px;
    }
  }
</style>