<template>
  <div class="designs">
    <v-container>
      <div class="text">
        <h2>Explore our interior designs</h2>
        <p>
          I Meant to ball it if up doubt a small purse. Required his you put the
          outlived answered position. A pleasure exertion if believed provided
          to.
        </p>
      </div>
      <div class="my-swiper">
        <div class="navigations">
          <button class="prevEle">
            <v-icon>mdi-chevron-left</v-icon>
          </button>
          <button class="nextEle">
            <v-icon>mdi-chevron-right</v-icon>
          </button>
        </div>
        <Swiper
          class="swiper"
          :modules="modules"
          :slides-per-view="1"
          :loop="true"
          :navigation="{ nextEl: '.nextEle', prevEl: '.prevEle' }"
        >
          <SwiperSlide v-for="item in myDesigns" :key="item.id">
            <div
              class="item"
              @click="
                this.$router.push({
                  name: 'project',
                  params: {
                    link: item.link,
                  },
                })
              "
            >
              <img :src="item.src" alt="Img" />
              <div class="overlay"></div>
              <div class="img-text">
                <h2>
                  {{ item.title }}
                </h2>
                <p>{{ item.category }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      myDesigns: this.$store.state.designs,
      modules: [Navigation],
    };
  },
  methods: {
    // Handle Resizing
    handleResize() {
      this.width = window.innerWidth;
    },
    // Embed the Vid
    // // Zooming On Product Image
    // zooming() {
    //   const imgParent = document.getElementById("main");
    //   const myImg = document.querySelector("#view");
    //   imgParent.addEventListener("mousemove", onZoom);
    //   imgParent.addEventListener("mouseover", onZoom);
    //   imgParent.addEventListener("mouseleave", offZoom);
    //   function onZoom(e) {
    //     const x = e.clientX - e.target.offsetLeft;
    //     const y = e.clientY - e.target.offsetTop;
    //     myImg.style.opacity = "1";
    //     myImg.style.willChange = "transform";
    //     myImg.style.transfrom = `translate3d(-${x}vh, -${y}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);`;
    //     myImg.style.transfromStyle = "preserve-3d";
    //   }
    //   function offZoom() {
    //     myImg.style.opacity = "0";
    //     myImg.style.willChange = "transform";
    //     myImg.style.transformOrigin = `center center`;
    //     myImg.style.transfromStyle = "preserve-3d";
    //   }
    // },
    // movingEle() {
    //   let myEle = document.getElementById("view");
    //   let parent = document.getElementById("main");
    //   parent.addEventListener("mousemove", (e) => {
    //     onMove(e, myEle);
    //   });
    //   function onMove(event) {
    //     // Mouse Position
    //     let x = event.clientX;
    //     let y = event.clientY;
    //     // Get the middle
    //     let middleX = parent.offsetWidth;
    //     let middleY = parent.offsetHeight;
    //     // Get Offset from the middle
    //     let offsetX = (x - middleX - 200) / 10;
    //     let offsetY = (y - middleY - 200) / 10;
    //     console.log(offsetX, offsetY);
    //     myEle.style.willChange = "transform";
    //     myEle.style.transform = `translate3d(${offsetX}vh, ${offsetY}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    //     myEle.style.transformStyle = "preserve-3d";
    //     myEle.style.opacity = "1";
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.designs {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 130px;
  .text {
    width: 50%;
    margin: 0 auto 50px;
    h2 {
      font-weight: 300;
      font-size: 60px;
      line-height: 1;
      margin-bottom: 20px;
    }
    p {
      font-family: Rubik, "sans-serif";
    }
    @media (max-width: 960px) {
      & {
        width: 100%;
        h2 {
          font-size: 38px;
        }
      }
    }
  }
  .my-swiper {
    position: relative;
    max-width: 900px;
    margin: auto;
    .navigations {
      position: absolute;
      top: 50%;
      left: -10%;
      width: 120%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--bg-color);
      button {
        border: 1px solid var(--main-color);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 1199px) {
        bottom: -100px;
        top: auto;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        gap: 20px;
      }
    }
    .swiper {
      border-radius: 10px;
      .item {
        position: relative;
        margin: auto;
        .overlay {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            rgba(19, 18, 13, 0) 30%,
            #13120d 99%
          );
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
        }
        img {
          max-width: 100%;
        }
      }
      .img-text {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
        margin-bottom: 50px;
        h2 {
          font-size: 32px;
          font-weight: 300;
          margin-bottom: 15px;
        }
        p {
          font-size: 18px;
        }
        @media (max-width: 767px) {
          & {
            margin-bottom: 20px;
            h2 {
              font-size: 24px;
              margin-bottom: 5px;
            }
            p {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
