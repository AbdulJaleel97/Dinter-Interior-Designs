<template>
  <div class="blog-details">
    <v-container>
      <div class="blog" v-for="blog in myBlog" :key="blog.id">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.para }}</p>
        <img :src="blog.srcTwo" alt="BlogImage" />
        <div class="text">
          <h2>
            The most common business debate isn't as black and white as you
            might think
          </h2>
          <p>
            He moonlights difficult-engrossed, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along to. Parlors
            waiting so against me no. Wishing calling is warrant settled was
            lucky. Express besides it present if at an opinion visitor. For who
            thoroughly her boy estimating conviction. Removed demands expense
            account in outward tedious do. Particular way thoroughly unaffected
            projection favorable Mrs can be projecting own.
          </p>
          <ul>
            <li>The standard chunk of Lorem Ipsum used since the 1500s.</li>
            <li>reproduced below for those interested.</li>
            <li>It is a long fact that a reader will.</li>
            <li>
              distracted by the readable content of a page when looking at its
              layout.
            </li>
          </ul>
          <p>
            Speedily say has suitable disposal add boy. On forth doubt miles of
            child. Exercise joy man children rejoiced. Yet uncommonly his tennpm
            who diminution astonished. Demesne's new manners savings staying
            had. Under folly balls, death own point now men. Match way she
            avoids seeing death. She drifts their fat off.
          </p>
        </div>
        <div class="iframe">
          <iframe
            width="100%"
            height="800"
            src="https://www.youtube.com/embed/-U0IXSmp6kc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="text-two">
          <h2>Ten questions you should answer truthfully</h2>
          <p>
            Son agreed to others Exeter period myself few yet nature. Mention Mr
            manners opinion if garrets enabled. To occasional dissimilar
            impossible sentiments. Do fortune account written prepare invited no
            passage. Garrets use ten, you the weather venture friends. Solid
            visit seems again you nor all. Far advanced settling say finished
            raillery. Offered chiefly farther of my no colonel shyness. Such on
            help ye some door if in. Laughter proposal laughing any son law
            consider. Needed except up piqued an.
          </p>
          <p class="custom">
            Existence certainly explained how improving the household pretended.
            Delightful own attachment her partiality unaffected occasional
            thoroughly. Adieus it no wonders spirit houses. Started several
            mistakes but Joy says the painful removal reached the end. State
            burst think end are its. Arrived off she elderly beloved him affixed
            noisier yet. Course regard to up he hardly. View four has said do
            men saw find dear shy? Talent men wicket add garden.
          </p>
          <p>
            Insipidity the sufficient discretion imprudence resolution sir him
            decisively. Proceed how any engaged visitor. Explained propriety off
            out perpetual his you. Feel sold off felt nay rose met you. We so
            entreaties cultivated astonished is. Was sister for a few longer Mrs
            sudden talent become. Done may bore quit evil old mile. If likely am
            of beauty tastes. Affronting imprudence does everything. Sex lasted
            dinner wanted indeed wished outlaw. Far advanced settling say
            finished raillery. Offered chiefly farther of my no colonel shyness.
            Such on help ye some door if in. Laughter proposal laughing any son
            law consider. Needed except up piqued an.
          </p>
        </div>
      </div>
    </v-container>
    <BlogsView />
  </div>
</template>

<script>
import BlogsView from "@/components/Home/BlogsView.vue";
export default {
  data() {
    return {
      myBlog: [],
    };
  },
  components: {
    BlogsView,
  },
  methods: {
    title() {
      document.title = this.myBlog[0].title;
    },
    getMyBlog() {
      this.myBlog = this.$store.state.allBlogs.filter((e) => {
        return e.link == this.$route.params.link;
      });
    },
  },
  mounted() {
    this.getMyBlog();
    this.title();
  },
};
</script>

<style lang="scss" scoped>
.blog-details {
  color: var(--bg-color);
  .blog {
    font-family: Butler, sans-serif;
    padding-top: 80px;
    @media (max-width: 991px) {
      padding-top: 10px;
    }
    h2 {
      font-weight: 300;
      font-size: 30px;
      line-height: 1;
      margin: 30px auto 20px;
      @media (max-width: 767px) {
        font-size: 30px;
      }
    }
    p {
      color: #13120d;
      font-size: 19px;
      font-family: Rubik, sans-serif;
      margin-bottom: 30px;
      font-weight: 400;
      line-height: 1.3;
    }
    img {
      width: 100%;
      border-radius: 10px;
    }
    ul {
      list-style-type: disc;
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 20px;
      margin: 40px 0 40px 20px;
      li {
        margin-bottom: 10px;
      }
    }
    .custom {
      padding: 20px;
      border-left: 6px solid var(--bg-color);
    }
  }
}
</style>
