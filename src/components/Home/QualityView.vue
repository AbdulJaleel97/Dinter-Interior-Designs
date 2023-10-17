<template>
  <div class="quality">
    <v-row>
      <v-col cols="12" lg="3">
        <div class="left text-end">
          <div class="item">
            <h4>Kitchen Design</h4>
            <p>
              Fulfilled direction use continually set him propriety continued.
            </p>
          </div>
          <div class="item left-middle">
            <h4>Home Design</h4>
            <p>
              Post no so what deal evil rent by real in. But her ready least set
              lived spite solid.
            </p>
          </div>
          <div class="item">
            <h4>Office Design</h4>
            <p>September how men saw tolerably two behavior arranging.</p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <div class="middle">
          <div class="img-holder text-center">
            <img src="@/assets/quality.jpg" alt="quality image" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="3">
        <div class="right text-start">
          <div class="item">
            <h4>Color Design</h4>
            <p>She offices for highest and replied one venture pasture.</p>
          </div>
          <div class="item right-middle">
            <h4>Light Decoration</h4>
            <p>
              Affronting imprudence does everything. Sex lasted dinner wanted
              indeed wished outlaw.
            </p>
          </div>
          <div class="item">
            <h4>Resturant Design</h4>
            <p>Offered chiefly farther of my no colonel shyness.</p>
          </div>
        </div></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quality {
  color: var(--bg-color);
  padding-top: 40px;
  h4 {
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 15px;
    line-height: 1em;
  }
  p {
    font-family: Rubik, "sans-serif";
    font-size: 16px;
    font-weight: 400;
    color: #13120d;
  }

  .left,
  .right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    height: 100%;
    .left-middle,
    .right-middle {
      padding: 50px 0;
      border-top: 1px solid var(--main-color);
      border-bottom: 1px solid var(--main-color);
    }
  }
  .right {
    @media (max-width: 1280px) {
      text-align: left;
    }
  }
  .left {
    @media (max-width: 1280px) {
      text-align: right;
    }
    @media (max-width: 991px) {
      text-align: left !important;
    }
  }
  .middle {
    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
