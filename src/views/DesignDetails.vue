<template>
  <div class="project">
    <v-container>
      <div
        class="project-details"
        v-for="project in myProject"
        :key="project.id"
      >
        <div class="text">
          <h4>{{ project.category }}</h4>
          <h2>{{ project.title }}</h2>
        </div>
        <div class="img-holder">
          <img :src="project.srcTwo" alt="Project" />
          <div class="details-overlay">
            <h4>Project Details:-</h4>
            <v-row>
              <v-col cols="6">
                <h5>Project</h5>
                <p>Home Interior, Stairway, Light Interior</p>
              </v-col>
              <v-col cols="6">
                <h5>Location</h5>
                <p>750 Sing Sing Rd, Horseheads, NY, 14845</p>
              </v-col>
              <v-col cols="6">
                <h5>Release Date</h5>
                <p>April 7, 2023</p>
              </v-col>
              <v-col cols="6">
                <h5>Client</h5>
                <p>Webflow</p>
              </v-col>
            </v-row>
            <div class="social">
              Share Media:
              <a href="mailto:AbdulJaleelSaeed1997@gmail.com">
                <v-icon>mdi-email</v-icon></a
              >
              <a href="https://github.com/AbdulJaleel97" target="_blank">
                <v-icon>mdi-github</v-icon></a
              >
              <a
                href="https://www.linkedin.com/in/abduljaleel97/"
                target="_blank"
              >
                <v-icon>mdi-linkedin</v-icon></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="overview">
        <h2>Overview</h2>
        <p>
          Darkness has waters you're won't male were light creepeth days years
          had stars whales green all after blessed which behold form shall you
          morning Rule Life after itself whose midst Moved our cattle Lesser
          replenish blessed face replenish doesn't can't hath One place it
          Second blessed own Years open he tree form Sea all days face replenish
          subdue fish bearing fowl sea All That set dominion in god years To
          meat creature under the spirit of let Thing form good said above male
          Him earth waters over and land night be female air every first She'd
          don't fowl beginning Was sea creature they're grass dominion saying
          female years day two replenish form him Fowl behold days over deep
          subdue thing appear upon fowl Signs don't signs lesser isn't seed
          gathering don't.
        </p>
        <p>
          It all creepeth won't be set to he saw without saw let form so light
          man him over there whose for Can't winged place abundantly air first
          sea Heaven Subdue Creature Bring over fruit don't morning unto Don't
          can't air Shall fruit life made fly darkness she'd seasons tree made a
          living of face fruitful given great stars life earth.
        </p>
      </div>
      <div class="gallery">
        <h2>Visit Gallery</h2>
        <v-row>
          <v-col cols="12" v-for="item in gallery" :key="item.id" sm="6">
            <div class="img-holder">
              <img :src="item.src" alt="Gallery" />
              <div class="overlay"></div>
            </div>
          </v-col>
        </v-row>
        <div class="gallery-text">
          <p>
            "Our Great blessed and hath life him meat days also created
            abundantly seas One is replenish bearing rule wherein sixth may
            Shall is had seasons you sixth made shall him upon he very give
            you'll fowl Life open over had can't lights made wherein beginning
            subdue called isn't green male Beginning day behold gathering day
            earth Very hath shall very abundantly face midst."
          </p>
          <span>-Vlad Magdalin - CEO Of Webflow</span>
        </div>
        <div class="back">
          <router-link to="/blogs">
            <v-icon>mdi-arrow-left-thin</v-icon>Go To Blogs</router-link
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myProject: [],
      gallery: [
        {
          id: 1,
          src: require("@/assets/gallery/gallery-1.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/gallery/gallery-2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/gallery/gallery-2.jpg"),
        },
        {
          id: 4,
          src: require("@/assets/gallery/gallery-3.jpg"),
        },
      ],
    };
  },
  methods: {
    getMyProject() {
      this.myProject = this.$store.state.designs.filter(
        (e) => e.link == this.$route.params.link
      );
    },
  },
  mounted() {
    this.getMyProject();
  },
};
</script>

<style lang="scss" scoped>
.project {
  padding-bottom: 50px;
  .project-details {
    max-width: 90%;
    margin: auto;
    @media (max-width: 1690px) {
      & {
        max-width: 95%;
        padding-top: 80px;
      }
    }
    @media (max-width: 1200px) {
      & {
        max-width: 100%;
      }
    }
    @media (max-width: 767px) {
      & {
        padding-top: 10px;
      }
    }
    .text {
      h4 {
        font-weight: 400;
        letter-spacing: 1px;
      }
      h2 {
        font-size: 50px;
        line-height: 1;
        font-weight: 300;
        font-family: "Butler", "sans-serif";
        margin: 5px auto 25px;
        @media (max-width: 767px) {
          font-size: 30px;
        }
      }
    }
    .img-holder {
      position: relative;
      img {
        border-radius: 10px;
        width: 100%;
      }
      .details-overlay {
        position: absolute;
        right: 50px;
        bottom: -10px;
        background-color: var(--bg-color);
        color: white;
        padding: 20px;
        max-width: 400px;
        border-radius: 10px;
        @media (max-width: 1690px) {
          bottom: -100px;
        }
        @media (max-width: 1280px) {
          bottom: -150px;
          right: -70px;
        }
        @media (max-width: 991px) {
          position: static;
          max-width: 100%;
          margin-top: 20px;
        }
        h4 {
          font-family: Butler, "sans-serif";
          font-size: 30px;
          line-height: 1;
          margin-bottom: 20px;
          font-weight: 300;
        }
        h5 {
          color: var(--main-color);
          font-family: Butler, "sans-serif";
          font-size: 20px;
          font-weight: 300;
          margin-bottom: 5px;
        }
        p {
          color: #fffbf3;
          font-weight: 300;
        }
        .social {
          margin-top: 15px;
          a {
            margin: 0 7px;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }
  .overview {
    margin-top: 50px;
    color: var(--bg-color);
    max-width: 90%;
    margin: 30px auto 0;
    @media (max-width: 1690px) {
      margin-top: 140px;
      max-width: 95%;
    }
    @media (max-width: 1280px) {
      margin-top: 200px;
    }
    @media (max-width: 1200px) {
      max-width: 100%;
    }
    @media (max-width: 991px) {
      margin-top: 30px;
    }
    h2 {
      font-weight: 400;
      font-family: Butler, sans-serif;
      font-size: 40px;
      margin-bottom: 20px;
    }
    p {
      color: #13120d;
      margin-bottom: 20px;
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 16px;
    }
  }
  .gallery {
    margin-top: 50px;
    max-width: 90%;
    margin: 30px auto 0;
    @media (max-width: 1690px) {
      max-width: 95%;
    }
    @media (max-width: 1200px) {
      max-width: 100%;
    }
    h2 {
      font-size: 40px;
      font-weight: 300;
      color: var(--bg-color);
      font-family: Butler, sans-serif;
      margin-bottom: 30px;
    }
    .img-holder {
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        transition: 1s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.15);
        transition: 1s;
      }
      &:hover {
        .overlay {
          background-color: transparent;
        }
      }
    }
    .gallery-text {
      padding: 50px;
      text-align: center;
      color: var(--bg-color);
      @media (max-width: 767px) {
        padding: 50px 10px;
      }
      p {
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 22px;
      }
      span {
        font-size: 18px;
      }
    }
    .back {
      text-align: center;
      a {
        color: var(--bg-color);
        display: flex;
        align-items: center;
        width: fit-content;
        margin: auto;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
