<template>
  <div class="navbar-main anime__animated animate__backInLeft">
    <v-container>
      <v-row class="align-center">
        <v-col class="text-start" cols="6" lg="3">
          <router-link to="/"
            ><img
              v-if="$route.name === 'home' || $route.name === 'contact'"
              src="@/assets/logo.svg"
              alt=""
            />
            <img
              v-if="$route.name !== 'home' && $route.name !== 'contact'"
              src="@/assets/logo-2.svg"
              alt=""
            />
          </router-link>
        </v-col>
        <v-col cols="6" class="d-none d-lg-block">
          <div class="nav-links">
            <ul class="d-flex justify-center align-items-center">
              <li class="mx-4">
                <router-link
                  ref="el"
                  :class="{
                    active: $route.name !== 'home' && $route.name !== 'contact',
                  }"
                  to="/"
                  >Home</router-link
                >
              </li>
              <li class="mx-4">
                <router-link
                  ref="el"
                  :class="{
                    active: $route.name !== 'home' && $route.name !== 'contact',
                  }"
                  to="/projects"
                  >Projects</router-link
                >
              </li>
              <li class="mx-4">
                <router-link
                  ref="el"
                  :class="{
                    active: $route.name !== 'home' && $route.name !== 'contact',
                  }"
                  to="/blogs"
                  >Blogs</router-link
                >
              </li>
              <li class="mx-4">
                <router-link
                  ref="el"
                  :class="{
                    active: $route.name !== 'home' && $route.name !== 'contact',
                  }"
                  to="/contact"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </div>
        </v-col>
        <v-col class="menu d-flex justify-end align-center" cols="6" lg="3">
          <router-link to="/contact"
            ><button class="contact-btn mr-4">
              <router-link
                ref="el"
                :class="{
                  active: $route.name !== 'home' && $route.name !== 'contact',
                }"
                to="/contact"
                >Contact Us</router-link
              >
            </button>
          </router-link>
          <div class="menu-icon d-block d-lg-none">
            <v-icon ref="menuIcon" @click="showMenu()">mdi-menu</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="menu-links" ref="menuParent">
      <div ref="overLay" class="overlay" @click="removeMenu()"></div>
      <div ref="links" class="links">
        <div class="logo d-flex justify-space-between align-center">
          <router-link to="/">
            <img @click="removeMenu()" src="@/assets/logo.svg" alt="Logo" />
          </router-link>
          <div class="close" @click="removeMenu()">
            <v-icon>mdi-window-close</v-icon>
          </div>
        </div>
        <ul>
          <li @click="removeMenu()">
            <router-link class="anime__animated" to="/">Home</router-link>
          </li>
          <li @click="removeMenu()">
            <router-link class="anime__animated" to="/projects"
              >Projects</router-link
            >
          </li>
          <li @click="removeMenu()">
            <router-link class="anime__animated" to="/blogs">Blogs</router-link>
          </li>
          <li @click="removeMenu()">
            <router-link class="anime__animated" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
        <div class="socials">
          <div>
            <a href="https://github.com/AbdulJaleel97" target="_blank">
              <v-icon>mdi-github</v-icon>
            </a>
          </div>
          <div>
            <a href="mailto:AbdulJaleelSaeed1997@gmail.com" target="_blank">
              <v-icon>mdi-email</v-icon>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/abduljaleel97/"
              target="_blank"
            >
              <v-icon>mdi-linkedin</v-icon>
            </a>
          </div>
          <div>
            <a
              href="https://abduljaleel-portfolio.netlify.app/"
              target="_blank"
            >
              <v-icon>mdi-link</v-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMenu() {
      this.$refs.overLay.classList.add("show");
      this.$refs.links.classList.add("show");
    },
    removeMenu() {
      this.$refs.overLay.classList.remove("show");
      this.$refs.links.classList.remove("show");
    },
    updateNavbar() {
      this.$nextTick(() => {
        this.$el.classList.remove("active");
        if (this.$route.name !== "home") {
          this.$el.classList.add("active");
        }
      });
    },
  },
  watch: {
    $route: function () {
      this.updateNavbar();
    },
  },
  mounted() {
    this.updateNavbar();
  },
};
</script>

<style lang="scss" scoped>
.navbar-main {
  background-color: transparent;
  height: 74px;
  .nav-links {
    ul {
      li {
        a {
          color: white;
          &.active {
            color: var(--bg-color);
            font-weight: bolder;
          }
          &.router-link-exact-active {
            color: #e8b681;
          }
        }
      }
    }
  }
  .menu-links {
    .overlay {
      position: relative;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.603);
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.3s;
      &.show {
        position: fixed;
        opacity: 1;
        z-index: 999;
      }
    }
    .links {
      position: fixed;
      z-index: 99999;
      left: 0;
      top: 0;
      background: var(--main-color);
      height: 100%;
      width: 25%;
      transform: translateX(-103%);
      transition: 0.3s;
      @media (max-width: 767px) {
        width: 60%;
      }
      &.show {
        transform: translateX(0);
      }
      .logo {
        background-color: var(--bg-color);
        padding: 10px;
        .close {
          cursor: pointer;
          color: white;
        }
      }
      ul {
        padding: 10px;
        margin-top: 10px;
        li {
          margin-bottom: 25px;
          a {
            font-size: 25px;
            color: black;
            font-weight: 300;
          }
        }
      }
      a {
        color: white;
      }
      .socials {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
        padding: 15px;
        width: 100%;
        a {
          color: var(--bg-color);
        }
      }
    }
  }

  .menu {
    .contact-btn {
      z-index: 1;
      position: relative;
      font-size: inherit;
      font-family: inherit;
      outline: none;
      border: none;
      overflow: hidden;
      cursor: pointer;
      border: 1px solid var(--main-color);
      padding: 10px 30px;
      border-radius: 50px;
      @media (max-width: 576px) {
        & {
          display: none;
        }
      }
      a {
        color: white;
        &.active {
          color: var(--bg-color) !important;
          font-weight: bolder;
        }
      }
      &::after {
        content: "";
        z-index: -1;
        background-color: hsl(0deg 0% 100% / 30%);
        position: absolute;
        top: -50%;
        bottom: -50%;
        width: 1.25em;
        transform: translate3d(-680%, 0, 0) rotate(35deg);
      }
      &:hover::after {
        transition: transform 0.45s ease-in-out;
        transform: translate3d(200%, 0, 0) rotate(35deg);
      }
    }
    .menu-icon {
      i {
        color: var(--main-color);
        font-size: 30px;
      }
    }
  }
}
</style>
