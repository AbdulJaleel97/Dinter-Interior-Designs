<template>
  <div class="testimonials">
    <h2>Express Of Our Happy Customers</h2>
    <div class="content">
      <v-row class="flex-parent">
        <v-col class="first" cols="12">
          <div class="slider">
            <swiper
              :slidesPerView="1"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :navigation="{ nextEl: '.DoNext', prevEl: '.DoPrev' }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="client in clients" :key="client.id"
                ><div class="item">
                  <img
                    class="mb-3"
                    src="@/assets/testimonials/stars.svg"
                    alt="Stars"
                  />
                  <p>{{ client.text }}</p>
                  <div class="info d-flex mt-5">
                    <img
                      class="mr-4"
                      style="border-radius: 50%; width: 50px"
                      :src="client.src"
                      alt="Reviewer"
                    />
                    <div class="text">
                      <h2>{{ client.name }}</h2>
                      <span>{{ client.location }}</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="navigations">
              <button class="DoPrev"><v-icon>mdi-chevron-left</v-icon></button>
              <button class="DoNext"><v-icon>mdi-chevron-right</v-icon></button>
            </div>
          </div>
        </v-col>
        <v-col class="second" cols="12"
          ><v-parallax :src="require('@/assets/testimonials.jpg')"></v-parallax
        ></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Navigation],
      clients: [
        {
          id: 1,
          text: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.",
          src: require("@/assets/testimonials/review-1.jpg"),
          name: "Lori Stevens",
          location: "New York",
        },
        {
          id: 2,
          text: "Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution.",
          src: require("@/assets/testimonials/review-2.jpg"),
          name: "Joan Wallace",
          location: "USA",
        },
        {
          id: 3,
          text: "Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwood see frankness objection abilities. As hastened produced.",
          src: require("@/assets/testimonials/review-3.jpg"),
          name: "Heath Ledger",
          location: "Gotham City",
        },
        {
          id: 4,
          text: "He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty assistance joy. Unaffected at ye of compliment alteration Dashwood see.",
          src: require("@/assets/testimonials/review-4.jpg"),
          name: "Bryan Knight",
          location: "Canada",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 80px 0;
  color: var(--bg-color);
  > h2 {
    text-align: center;
    font-weight: 400;
    font-size: 60px;
    line-height: 1;
    width: 50%;
    margin: 0 auto 40px;
    @media (max-width: 767px) {
      width: 100%;
      font-size: 35px;
    }
  }
  .content {
    max-width: 70%;
    margin: auto;
    @media (max-width: 1200px) {
      max-width: 90%;
    }
    > div {
      @media (max-width: 1200px) {
        flex-direction: column-reverse;
      }
      @media (min-width: 1200px) {
        & {
          > div {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
      }
    }
    .first {
      position: relative;
      .slider {
        position: absolute;
        width: 100%;
        top: 50%;
        z-index: 1;
        transform: translateY(-50%);
        right: -180px;
        @media (max-width: 1200px) {
          position: relative;
          right: auto;
          left: auto;
          bottom: auto;
          top: auto;
          transform: translateY(0);
        }
        .mySwiper {
          background: var(--main-color);
          border-radius: 10px;
          .item {
            padding: 50px;
            background-color: var(--main-color);
            height: 100%;
            @media (max-width: 1690px) {
              padding: 30px 50px;
            }
            p {
              font-size: 22px;
              font-family: Rubik, sans-serif;
              font-weight: 400;
              @media (max-width: 1690px) {
                font-size: 19px;
              }
            }
            .text {
              font-family: Rubik, sans-serif;
              h2 {
                font-size: 16px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .navigations {
        margin-top: 20px;
        button {
          border: 1px solid var(--main-color);
          margin-right: 15px;
          border-radius: 50%;
          padding: 6px;
        }
      }
    }
    .second {
      > div {
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }
}
</style>
