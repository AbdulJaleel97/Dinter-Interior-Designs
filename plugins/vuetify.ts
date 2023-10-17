import Vuetify from "vue";
import ProjectView from "@/views/ProjectsView.vue";
export default new Vuetify({
  theme: {
    /**/
  },
  icons: {
    values: {
      custom: {
        // name of our custom icon
        component: ProjectView, // our custom component
      },
    },
  },
});
