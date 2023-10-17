<template>
  <div class="landing-home">
    <v-container>
      <div class="first-text">
        <h1>CREATE A HOME THAT</h1>
        <div class="rotate-img">
          <img class="first" src="@/assets/first-img.svg" alt="img" />
          <img class="second" src="@/assets/first-round.svg" alt="img" />
        </div>
      </div>
      <div class="second-text">
        <div class="shambles">
          <img src="@/assets/shambles-1.jpg" alt="img" />
        </div>
        <h1>DEFINE WHO YOU ARE</h1>
      </div>
      <div class="main-img">
        <img class="w-100 rounded-xl" src="@/assets/home-img.jpg" alt="img" />
      </div>
      <div class="bg-color"></div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing-home {
  color: white;
  padding-top: 70px;
  padding-bottom: 70px;
  @media (max-width: 767px) {
    padding-bottom: 0;
    padding-top: 30px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 50px;
  }
  .bg-color {
    z-index: -1;
    height: 764px;
    background-color: #303040;
    position: absolute;
    top: 0;
    bottom: 0%;
    left: 0%;
    right: 0%;
    @media (max-width: 767px) {
      height: 300px;
    }
  }
  .first-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 1280px) {
      gap: 20px;
    }
    h1 {
      font-size: 130px;
      font-weight: 300;
      line-height: 1.2em;
      @media (max-width: 1280px) {
        font-size: 60px;
      }
      @media (max-width: 767px) {
        font-size: 35px;
      }
    }
    .rotate-img {
      position: relative;
      @media (max-width: 767px) {
        display: none;
      }
      .first {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -64%);
        z-index: 5;
      }
      .second {
        background-color: #fffbf3;
        border-radius: 50%;
        animation: rotate-imgs linear 40s infinite;
        @keyframes rotate-imgs {
          0% {
            transform: rotate(360deg);
          }
        }
      }
      @media (max-width: 1280px) {
        & {
          width: 100px;
          .first,
          .second {
            max-width: 100%;
          }
          .first {
            width: 30px;
          }
        }
      }
    }
  }
  .second-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 1280px) {
      & {
        gap: 20px;
      }
    }
    h1 {
      font-size: 130px;
      font-weight: 300;
      line-height: 1.2em;
      @media (max-width: 1280px) {
        font-size: 60px;
      }
      @media (max-width: 767px) {
        font-size: 35px;
      }
    }
    .shambles {
      border-radius: 60px;
      @media (max-width: 1280px) {
        width: 220px;
      }
      @media (max-width: 767px) {
        display: none;
      }
      img {
        border-radius: 60px;
        max-width: 100%;
      }
    }
  }
  .main-img {
    margin-top: 48px;
    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }
}
</style>
