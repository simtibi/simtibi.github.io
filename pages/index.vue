<template lang="pug">
  div
    .main-page.relative
      .hero
        div.mb145
          nameAnimated
        .skills(:class='{"active": active}')
          p.bold.white.fs20.mb38.lh1 FRONTEND DEVELOPER
          p.bold.white.fs20.mb38.lh1 CROSS-PLATFORM APP DEVELOPER
          p.bold.white.fs20.lh1 VUEJS ENTHUSIAST
      img.scroll-down.active(src="~/assets/img/scroll-down.svg", @click='scrollDown()' v-if='active')
    
    #references
      referenciaBlock(v-if='showRef')

</template>

<script>
import nameAnimated from '~/components/nameAnimated'
import referenciaBlock from '~/components/referenciaBlock'
export default {
  components: {
    nameAnimated,
    referenciaBlock
  },
  data: () => ({
    active: false,
    showRef: false
  }),
  methods: {
    scrollDown () {
      this.showRef = true
      setTimeout(() => {
        document.querySelector('#references')
          .scrollIntoView({
              behavior: 'smooth'
            })
      }, 300)
    }
  },
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
  @keyframes blink {
    0% {opacity: 0;}
    50% {opacity: 1.0;}
    100% {opacity: 0;}
  }
  .scroll-down {
    position: absolute;
    bottom: 25px;
    opacity: 0;
    cursor: pointer;
    &.active {
      opacity: 1;
      animation: blink 4s ease-in-out 0ms infinite normal forwards;
    }
  }
  .main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 90px;
    background: #1C1A20;
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