<template>
  <div class="allBlogs">
    <v-container>
      <h2 class="text-center header">Our Blogs</h2>
      <div class="content">
        <div
          class="parent"
          cols="12"
          md="4"
          v-for="blog in myBlogs"
          :key="blog.id"
          @click="
            this.$router.push({
              name: 'blog',
              params: {
                link: blog.link,
              },
            })
          "
        >
          <img :src="blog.srcOne" alt="Blog Img" />
          <div class="overlay"></div>
          <div class="text">
            <span>{{ blog.date }}</span>
            <h2>{{ blog.title }}</h2>
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
      myBlogs: this.$store.state.allBlogs,
    };
  },
};
</script>

<style lang="scss" scoped>
.allBlogs {
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    @media (max-width: 1280px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
    font-family: Butler, sans-serif;
    .parent {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
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
      .text {
        position: absolute;
        padding: 0 30px 30px;
        top: auto;
        bottom: 0;
        color: white;
        h2 {
          font-size: 24px;
          line-height: 1.2;
          font-weight: 300;
          margin-top: 10px;
        }
        span {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: linear-gradient(
          rgba(19, 18, 13, 0) 17%,
          rgba(19, 18, 13, 0.8)
        );
      }
    }
  }
}
</style>
