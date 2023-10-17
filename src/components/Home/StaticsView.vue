<template>
  <div class="statics">
    <v-container>
      <div class="content">
        <v-row class="items">
          <v-col cols="12" sm="6" md="3">
            <h2>15</h2>
            <p>Year Of Experience</p>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <h2>40</h2>
            <p>Team members</p>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <h2>600+</h2>
            <p>Success Projects</p>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <h2>850+</h2>
            <p>Happy Customer</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.statics {
  padding: 50px 0;
  background-color: var(--bg-color);
  color: White;
  text-align: center;
  .items {
    > div:not(:last-child) {
      border-right: 1px solid #e8b6813d;
      @media (max-width: 960px) {
        &:nth-child(2) {
          border-right: none;
        }
      }
      @media (max-width: 600px) {
        & {
          border-right: none;
          margin-bottom: 20px;
        }
      }
    }
    h2 {
      font-size: 80px;
      color: var(--main-color);
      line-height: 1;
      font-weight: 300;
      margin-bottom: 18px;
    }
    p {
      font-size: 22px;
    }
    @media (max-width: 1280px) {
      h2 {
        font-size: 45px;
      }
      p {
        font-size: 20px;
      }
    }
  }
}
</style>
