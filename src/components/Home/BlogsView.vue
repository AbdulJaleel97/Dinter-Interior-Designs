<template>
  <div class="blogs">
    <h2 class="header">Our Lastest Blogs</h2>
    <v-container>
      <div class="content">
        <div
          class="parent"
          cols="12"
          md="4"
          v-for="blog in ourBlogs"
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
      ourBlogs: this.$store.state.blogs,
    };
  },
};
</script>

<style lang="scss" scoped>
.blogs {
  padding: 80px 0;
  max-width: 1400px;
  margin: auto;
  .header {
    width: 50%;
    margin: 0 auto 30px;
    font-size: 60px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    color: var(--bg-color);
    @media (max-width: 991px) {
      width: 100%;
      font-size: 35px;
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
