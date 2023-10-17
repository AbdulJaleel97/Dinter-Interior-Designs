<template>
  <div class="work">
    <v-container>
      <div class="header">
        <h2>We have very simple work process</h2>
      </div>
      <div class="main-items d-flex">
        <div class="item" v-for="item in work" :key="item.id">
          <div class="img-holder">
            <img :src="item.img" alt="img" />
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div class="lambs">
        <img src="@/assets/work-lambs.svg" alt="img" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: [
        {
          id: 1,
          img: require("@/assets/work-1.svg"),
          title: "We Visit Your Place",
          description:
            "Departure defective arranging rapturous did believe him all had supported.",
        },
        {
          id: 2,
          img: require("@/assets/work-2.svg"),
          title: "Planning Design",
          description:
            "Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly.",
        },
        {
          id: 3,
          img: require("@/assets/work-3.svg"),
          title: "Start Working",
          description:
            "Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.work {
  margin-top: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: var(--bg-color);
  color: #fffbf3;
  position: relative;
  .header {
    width: 50%;
    margin-bottom: 60px;
    h2 {
      font-weight: 300;
      font-size: 50px;
      line-height: 1;
    }
    @media (max-width: 960px) {
      & {
        width: 90%;
      }
    }
    @media (max-width: 576px) {
      & {
        h2 {
          font-size: 30px;
        }
      }
    }
  }
  .main-items {
    gap: 150px;
    @media (max-width: 960px) {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }
    .item {
      z-index: 1;
      .img-holder {
        background-color: var(--main-color);
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-bottom: 30px;
        @media (max-width: 960px) {
          & {
            margin: 0 auto 15px;
            width: 80px;
            height: 80px;
            img {
              max-width: 50%;
            }
          }
        }
      }
      h2 {
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      p {
        font-family: Rubik, "sans-serif";
      }
    }
  }
  .lambs {
    position: absolute;
    top: -30%;
    right: 40px;
    width: 210px;
    opacity: 0.3;
    img {
      max-width: 100%;
    }
    @media (max-width: 960px) {
      & {
        width: 150px;
        top: -13%;
      }
    }
  }
}
</style>
