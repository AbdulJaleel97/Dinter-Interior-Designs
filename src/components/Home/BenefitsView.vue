<template>
  <div class="benefits">
    <v-row>
      <v-col v-for="benefit in benefits" :key="benefit.id" cols="12" md="4">
        <img :src="benefit.img" alt="a" />
        <h4>{{ benefit.title }}</h4>
        <p>{{ benefit.description }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          id: 1,
          img: require("@/assets/benefits-1.svg"),
          title: "Modern Design",
          description:
            "Perceived end knowledge certainly day sweetness why cordially.",
        },
        {
          id: 2,
          img: require("@/assets/benefits-2.svg"),
          title: "Reasonable Prices",
          description:
            "Luckily cheered colonel I do we attack highest enabled. Tried law yet style child.",
        },
        {
          id: 3,
          img: require("@/assets/benefits-3.svg"),
          title: "Professional Team",
          description:
            "Departure defective arranging rapturous did believe him all had supported.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.benefits {
  margin-bottom: 40px;
  h4 {
    font-family: Butler, "sans-serif";
    font-size: 30px;
    font-weight: 300;
    color: var(--bg-color);
    margin: 15px 0 10px 0;
  }
  p {
    font-family: Rubik, "sans-serif";
    color: var(--bg-color);
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
