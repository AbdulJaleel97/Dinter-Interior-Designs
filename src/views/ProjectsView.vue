<template>
  <div class="projects">
    <v-container>
      <h2 class="text-center header">Our Portfolio of Successful Projects</h2>
      <div class="content">
        <div class="item" v-for="project in projects" :key="project.id" @click="
          this.$router.push({
            name: 'project',
            params: {
              link: project.link,
            },
          })
          ">
          <img :src="project.src" alt="Project Image" />
          <div class="overlay">
          </div>
          <div class="text">
            <h2>{{ project.title }}</h2>
            <p>{{ project.category }}</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: this.$store.state.designs,
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 80px;
  padding-bottom: 50px;

  @media (max-width: 991px) {
    padding-top: 30px;
  }

  .header {
    width: 80%;
    margin: auto;
    font-size: 80px;
    line-height: 1;
    font-weight: 300;
    font-family: Butler, sans-serif;
    color: var(--bg-color);
    padding-bottom: 40px;

    @media (max-width: 991px) {
      font-size: 40px;
      width: 100%;
    }
  }

  .content {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }

    .item {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      height: 450px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 1s;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }

      .text {
        position: absolute;
        padding: 0 30px 30px;
        top: auto;
        bottom: 0;
        color: white;
        text-align: center;
        width: 100%;

        h2 {
          font-size: 24px;
          line-height: 1.2;
          font-weight: 300;
          margin-top: 10px;
        }
      }

      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: linear-gradient(rgba(19, 18, 13, 0) 17%,
            rgba(19, 18, 13, 0.8));
      }
    }
  }
}</style>
