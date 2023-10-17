<template>
  <div class="home">
    <LandingHome />
    <v-container>
      <DesignersView />
      <BenefitsView />
      <QualityView />
    </v-container>
    <WorkView />
    <DesignsView />
    <StaticsView />
    <TestimonialsView />
    <CompaniesView />
    <BlogsView />
  </div>
</template>

<script>
import LandingHome from "@/components/Home/LandingHome.vue";
import DesignersView from "@/components/Home/DesignersView.vue";
import BenefitsView from "@/components/Home/BenefitsView.vue";
import QualityView from "@/components/Home/QualityView.vue";
import WorkView from "@/components/Home/WorkView.vue";
import DesignsView from "@/components/Home/DesignsView.vue";
import StaticsView from "@/components/Home/StaticsView.vue";
import TestimonialsView from "@/components/Home/TestimonialsView.vue";
import CompaniesView from "@/components/Home/CompaniesView.vue";
import BlogsView from "@/components/Home/BlogsView.vue";
export default {
  components: {
    LandingHome,
    DesignersView,
    BenefitsView,
    QualityView,
    WorkView,
    DesignsView,
    StaticsView,
    TestimonialsView,
    CompaniesView,
    BlogsView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-family: "Butler", sans-serif;
}
</style>
