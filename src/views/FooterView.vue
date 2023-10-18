<template>
  <div class="footer position-relative">
    <v-container>
      <div class="content">
        <div class="logo">
          <img src="@/assets/footer/footer-logo.svg" alt="FooterLogo" />
        </div>
        <div class="links">
          <ul>
            <li><a>Home 1</a></li>
            <li><a>Home 2</a></li>
            <li>
              <router-link to="/projects">Projects</router-link>
            </li>
            <li>
              <router-link to="/blogs">Blog</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <h2>Contact Details</h2>
          <ul>
            <li>
              <div>
                <v-icon>mdi-mail</v-icon>
              </div>
              <div>Hello@example.com</div>
            </li>
            <li>
              <div>
                <v-icon>mdi-map-marker</v-icon>
              </div>
              <div>Burj Khalifa Room 1408 - Dubai - UAE</div>
            </li>
            <li>
              <div>
                <v-icon>mdi-phone</v-icon>
              </div>
              <div>+(99) 123-456-789</div>
            </li>
          </ul>
        </div>
        <div class="letter">
          <h2 style="font-weight: 600">Newsletter</h2>
          <div class="form">
            <input type="email" placeholder="Enter your Email" />
            <input type="submit" value="Submit" />
          </div>
          <div class="socials">
            <div>
              <a href="https://www.linkedin.com/in/abduljaleel97/">
                <v-icon>mdi-linkedin</v-icon>
              </a>
            </div>
            <div>
              <a href="https://github.com/AbdulJaleel97">
                <v-icon>mdi-github</v-icon>
              </a>
            </div>
            <div>
              <a href="https://abduljaleel-portfolio.netlify.app/">
                <v-icon>mdi-link</v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="rights">
        Design By
        <a class="me" href="https://abduljaleel-portfolio.netlify.app/"
          >AbdulJaleel</a
        >, Powered By <a href="https://webflow.com/">Webflow</a>
      </div>
    </v-container>
    <div class="left position-absolute">
      <img src="@/assets/footer/footer-2.svg" alt="FooterImg" />
    </div>
    <div class="right position-absolute">
      <img src="@/assets/footer/footer-1.svg" alt="FooterImg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 80px;
  background-color: var(--main-color);
  color: var(--bg-color);
  @media (max-width: 1199px) {
    padding-top: 40px;
  }
  .content {
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 100px;
    padding-bottom: 30px;
    position: relative;
    z-index: 1;
    @media (max-width: 1199px) {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    > div {
      flex: 1;
    }
    h2 {
      font-size: 20px;
      font-family: Butler, sans-serif;
      font-weight: 300;
      margin-bottom: 20px;
    }
    .links {
      li {
        margin-bottom: 10px;
        a {
          cursor: pointer;
          transition: 0.3s;
          font-weight: 400;
          &:hover {
            color: white;
          }
        }
      }
    }
    .contact {
      li {
        display: flex;
        gap: 6px;
        margin-bottom: 20px;
        font-weight: 400;
      }
    }
    .letter {
      .form {
        display: flex;
        background-color: #ffdeba;
        border-radius: 10px;
        padding: 7px 7px 7px 15px;
        input[type="submit"] {
          padding: 10px;
          background-color: var(--bg-color);
          color: white;
          font-weight: 400;
          border-radius: 10px;
        }
        input[type="email"] {
          border: none;
          outline: none;
          box-shadow: none;
          flex: 1;
          &::placeholder {
            color: var(--bg-color);
          }
        }
      }
      .socials {
        display: flex;
        margin-top: 15px;
        > div {
          margin-right: 15px;
          a {
            color: var(--bg-color);
          }
        }
      }
    }
  }
  .rights {
    text-align: center;
    padding: 30px 0 10px;
    border-top: 1px solid rgba(19, 18, 13, 0.1);
    font-weight: 400;
    a {
      text-decoration: underline;
      color: var(--bg-color);
      font-weight: 400;
    }
  }
  .left,
  .right {
    bottom: 0;
    opacity: 0.3;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
  .router-link-exact-active {
    color: white;
  }
}
</style>
