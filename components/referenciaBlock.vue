<template lang="pug">
  .full-height(:class='{"loaded": loaded}')
    .left-side
      .textcenter
        p.bold.fs36.white.uppercase.mb90(@click='start()') referenciák
        .reference-wrapper
          p.reference-item.bold(v-for='(ref, i) in references' :class='{active: i === actual}' @click='stop(i)') {{ ref.name }}
    .right-side(:style='{backgroundImage: `url(/refimages/ref-${actual}.png)`}' :class='{ imgactive: imgactive }')
      .overlay
        .text
          p.white.bold.uppercase {{ references[actual].job }}
</template>

<script>
export default {
  data: () => ({
    references: [
      { name: 'Meló-Diák', job: 'Web- és mobilalkalmazás fejlesztése' },
      { name: 'Szomszédok', job: 'Webalkalmazás fejlesztése' },
      { name: 'Álláshely', job: 'Webalkalmazás fejlesztése' },
      { name: 'Starjobs', job: 'Webalkalmazás fejlesztése' }
    ],
    actual: 0,
    timer: undefined,
    loaded: false,
    imgactive: false
  }),
  methods: {
    start () {
      this.actual = 0
      this.timer = setInterval(() => {
        this.imgactive = false
        if (this.actual === this.references.length - 1) {
          this.actual = 0
        } else {
          this.actual += 1
        }
        setTimeout(() => {
          this.imgactive = true
        }, 1000)
      }, 10000)
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
        this.imgactive = true
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

.right-side {
  background-position: top;
  background-size: 100% auto;
  flex: 1;
  transition: background-position 1s, background-image 700ms;
  position: relative;
  &.imgactive {
    transition: background-position 15s, background-image 700ms;
    background-position: top -500px center;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(28, 25, 32, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    p {
      font-size: 64px;
    }
  }
}

.salmon {
  color: #ff5851;
}

@media screen and (max-width: 800px) {
  .full-height {
    display: block;
  }
  .left-side {
    padding: 40px 20px;
    width: 100%;
    height: 40vh;
    .textcenter {
      width: 100%;
    }
    .reference-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    p.bold.fs36.white.uppercase.mb90 {
      margin-bottom: 40px;
    }
    p.reference-item.bold {
      margin: 0 0 12px;
      padding: 0 12px;
    }
  }
  .right-side {
    height: 60vh;
    .overlay p {
      font-size: 24px;
    }
  }
}
</style>