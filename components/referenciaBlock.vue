<template lang="pug">
  .full-height(:class='{"loaded": loaded}')
    .left-side
      .textcenter
        p.bold.fs36.white.uppercase.mb90(@click='start()') referenciák
        
        p.reference-item.bold(v-for='(ref, i) in references' :class='{active: i === actual}' @click='stop(i)') {{ ref }}

</template>

<script>
export default {
  data: () => ({
    references: ['Meló-Diák', 'Szomszédok', 'Álláshely', 'Starjobs'],
    actual: 0,
    timer: undefined,
    loaded: false
  }),
  methods: {
    start () {
      this.actual = 0
      this.timer = setInterval(() => {
        if (this.actual === this.references.length - 1) {
          this.actual = 0
        } else {
          this.actual += 1
        }
      }, 3000)
    },
    stop (i) {
      clearInterval(this.timer)
      if (i) {
        this.actual = i
      } else {
        this.actual = 0
      }
    }
  },
  mounted () {
    if (!this.$isServer) {
      setTimeout(() => {
        this.loaded = true
        this.start()
      }, 1000)
    }
  },
  destroyed () {
    this.stop()
  }
}
</script>

<style lang="scss" scoped>
.textcenter {
  opacity: 0;
  transition: all 700ms ease-in-out;
}
.loaded {
  .textcenter {
    opacity: 1;
  }
}
.full-height {
  display: flex;
  background: #fff;
  flex-direction: row;
  min-height: 100vh;
  height: 100%;
}
.left-side {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1C1A20;
  width: calc(100% / 3);
}
.reference-item {
  color: #fff;
  margin-bottom: 24px;
  opacity: .5;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  font-size: 18px;
  &.active,
  &:hover {
    opacity: 1;
  }
}

@media screen and (max-width: 800px) {
  .full-height {
    display: block;
  }
  .left-side {
    padding: 40px 20px;
    width: 100%;
  }
}
</style>