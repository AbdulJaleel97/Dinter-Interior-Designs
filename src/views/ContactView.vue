<template>
  <div class="contact">
    <v-container>
      <div class="content">
        <div class="text">
          <h2>We'll Respond Promptly</h2>
          <div class="socials">
            <div>
              <v-icon>mdi-facebook</v-icon>
            </div>
            <div>
              <v-icon>mdi-linkedin</v-icon>
            </div>
            <div>
              <v-icon>mdi-twitter</v-icon>
            </div>
            <div>
              <v-icon>mdi-youtube</v-icon>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="item">
            <div class="icon">
              <img src="@/assets/contact/contact-1.svg" alt="contact" />
            </div>
            <div class="information">
              <h6>Egypt Address</h6>
              <p>803 Selby Lane Princeton, NJ 08540</p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/contact/contact-1.svg" alt="contact" />
            </div>
            <div class="information">
              <h6>New York</h6>
              <p>
                Chicago HQ Estica Cop. Macomb, MI 48042Open hours 7:00 – 19:00.
              </p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/contact/contact-2.svg" alt="contact" />
            </div>
            <div class="information">
              <h6>Reach us at</h6>
              <a>+201100800030</a>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/contact/contact-3.svg" alt="contact" />
            </div>
            <div class="information">
              <h6>Send us an email</h6>
              <a href="mailto:AbdulJaleelSaeed1997@gmail.com">info@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <h2 class="header text-center my-15">We're Here to Assist You</h2>
        <div>
          <div>
            <label for="firstName" class="d-block">First Name</label>
            <input id="firstName" type="text" />
          </div>
          <div>
            <label for="lastName" class="d-block">Last Name</label>
            <input id="lastName" type="text" />
          </div>
        </div>
        <div>
          <div>
            <label for="phone" class="d-block">Phone</label>
            <input id="phone" type="number" />
          </div>
          <div>
            <label for="email" class="d-block">Email</label>
            <input id="email" type="email" />
          </div>
        </div>
        <div>
          <label class="d-block" for="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <input class="submit" type="submit" />
      </div>
      <div class="bg-color"></div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  .content {
    display: flex;
    gap: 50px;
    padding: 80px 0;
    @media (max-width: 1280px) {
      flex-direction: column;
    }
    @media (max-width: 767px) {
      gap: 40px;
      padding: 30px 0;
    }

    .text {
      color: #fffbf3;
      flex: 0.4;
      h2 {
        font-family: Butler, sans-serif;
        font-size: 80px;
        line-height: 1;
        font-weight: 300;
        margin-bottom: 40px;
        @media (max-width: 767px) {
          font-size: 35px;
          margin-bottom: 20px;
        }
      }
      .socials {
        display: flex;
        gap: 30px;
        font-size: 24px;
        @media (max-width: 767px) {
          font-size: 18px;
        }
        i {
          cursor: pointer;
        }
      }
    }
    .info {
      flex: 0.6;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
      .item {
        color: var(--bg-color);
        background-color: #fdf4e8;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        border-radius: 10px;
        height: 140px;
        .icon {
          background-color: var(--main-color);
          padding: 10px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .information {
          flex: 1;
          h6 {
            font-size: 24px;
            font-weight: 300;
            font-family: Butler, sans-serif;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            font-weight: 400;
          }
          a {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .form {
    padding: 60px 0;
    width: 70%;
    margin: auto;
    @media (max-width: 767px) {
      width: 100%;
    }
    .header {
      font-size: 35px;
      font-family: Butler, sans-serif;
      font-weight: 300;
    }
    > div:not(:nth-child(4)) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      margin-bottom: 10px;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 0;
      }
      > div {
        flex: 1;
      }
    }
    input {
      background-color: #ffdeba;
      border: 1px solid #ffdeba;
      border-radius: 10px;
      margin-bottom: 20px;
      width: 100%;
      padding: 10px 20px;
      outline: none;
      font-weight: bold;
      letter-spacing: 1.1px;
      &:focus {
        background-color: var(--main-color);
      }
    }
    label {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    textarea {
      resize: none;
      height: 150px;
      width: 100%;
      background-color: #ffdeba;
      outline: none;
      border: 1px solid #ffdeba;
      border-radius: 10px;
      margin-top: 20px;
      padding: 10px 15px;
      font-weight: bold;
    }
    .submit {
      width: fit-content;
      background-color: transparent;
      border-radius: 50px;
      margin-top: 20px;
      padding: 15px 30px;
    }
  }
  .bg-color {
    z-index: -1;
    height: 600px;
    background-color: #303040;
    position: absolute;
    top: 0;
    bottom: 0%;
    left: 0%;
    right: 0%;
    @media (max-width: 1280px) {
      height: 800px;
    }
    @media (max-width: 767px) {
      height: 1000px;
    }
  }
}
</style>
