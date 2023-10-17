<template>
  <div class="company">
    <div>
      <div v-for="company in compnies" :key="company.id">
        <div class="img-holder">
          <img :src="company.src" alt="Company" />
        </div>
      </div>
      <div v-for="company in compnies" :key="company.id">
        <div class="img-holder">
          <img :src="company.src" alt="Company" />
        </div>
      </div>
    </div>
    <div>
      <div v-for="company in compnies" :key="company.id">
        <div class="img-holder">
          <img :src="company.src" alt="Company" />
        </div>
      </div>
      <div v-for="company in compnies" :key="company.id">
        <div class="img-holder">
          <img :src="company.src" alt="Company" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compnies: [
        {
          id: 1,
          src: require("@/assets/companies/company-1.svg"),
        },
        {
          id: 2,
          src: require("@/assets/companies/company-2.svg"),
        },
        {
          id: 3,
          src: require("@/assets/companies/company-3.svg"),
        },
        {
          id: 4,
          src: require("@/assets/companies/company-4.svg"),
        },
        {
          id: 5,
          src: require("@/assets/companies/company-5.svg"),
        },
        {
          id: 6,
          src: require("@/assets/companies/company-6.svg"),
        },
        {
          id: 7,
          src: require("@/assets/companies/company-7.svg"),
        },
        {
          id: 8,
          src: require("@/assets/companies/company-8.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.company {
  padding: 80px 0;
  background-color: #fdf4e8;
  display: flex;
  width: 100%;
  overflow: hidden;
  > div {
    position: relative;
    width: 200%;
    overflow-x: hidden;
    animation: looping 32s linear infinite;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 1200px) {
      animation: looping 10s linear infinite;
    }
    > div {
      width: 50%;
    }
    .img-holder {
      display: flex;
    }
  }
}
@keyframes looping {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
