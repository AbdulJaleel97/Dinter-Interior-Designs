<template>
  <div class="designers">
    <h2 class="designers-heading text-center">
      Creative Solution by <br />
      Professional Designers
    </h2>
    <div class="content">
      <v-row class="designers-parent">
        <v-col class="designers-text" cols="12" lg="6">
          <p>
            Is drew am hill from me. Valley by oh twenty direct me so. Departure
            defective arranging rapturous did believe him all had supported.
            Family months lasted simply set nature vulgar him. Picture for
            attempt joy excited ten carried manners talking how. Suspicion
            neglected the resolving agreement perceived at an.
          </p>
          <p>
            Demesne's new manners savings staying had. Under folly balls, death
            own point now men. Match way these she avoids seeing death. She
            drifts their fat off.
          </p>
          <div class="designers-footer d-flex justify-space-between">
            <div class="ceo d-flex flex-column">
              <img src="@/assets/ceo.svg" alt="img" />
              <span>CEO Of Dinter</span>
            </div>
            <div class="ratings">
              <span class="d-flex"
                ><span>Ratings</span>
                <img class="mx-3" src="@/assets/star.svg" alt="aaa" />
                <span>4.5</span></span
              >
              <div class="mt-1 mb-3">Trusted by clients from Dinter</div>
              <div class="ratings-imgs">
                <ul class="d-flex">
                  <li>
                    <img src="@/assets/ratings-1.jpg" alt="imgs" />
                  </li>
                  <li>
                    <img src="@/assets/ratings-3.jpg" alt="imgs" />
                  </li>
                  <li>
                    <img src="@/assets/ratings-2.jpg" alt="imgs" />
                  </li>
                  <li>
                    <img src="@/assets/ratings-4.jpg" alt="imgs" />
                  </li>
                  <li>
                    <img src="@/assets/ratings-1.jpg" alt="imgs" />
                  </li>
                  <li>
                    <div class="h-100 d-flex justify-center align-center">
                      5k+
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="designers-vid" cols="12" lg="6">
          <div class="vid">
            <img src="@/assets/designers-vid-img.jpg" alt="" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.designers {
  padding-top: 30px;
  @media (min-width: 1280px) {
    padding-top: 0;
  }
  .designers-heading {
    font-size: 60px;
    line-height: 1.2em;
    color: var(--bg-color);
    margin-bottom: 30px;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 34px;
    }
  }
  .content {
    .designers-parent {
      @media (max-width: 1280px) {
        & {
          flex-direction: column-reverse;
        }
      }
    }
    .designers-text {
      p {
        font-family: Rubik, "sans-serif";
        margin-bottom: 40px;
      }
      .designers-footer {
        @media (max-width: 576px) {
          & {
            flex-direction: column;
          }
        }

        .ratings {
          font-size: 20px;
          p {
            margin: 0;
          }
          .ratings-imgs {
            ul {
              &:first-child {
                margin-left: 16px;
              }
              li {
                width: 50px;
                margin-left: -16px;

                img {
                  width: 100%;
                  border-radius: 50%;
                }
              }
              &:last-child div {
                background-color: var(--bg-color);
                color: white;
                font-size: 17px;
                font-family: Rubik, sans-serif;
                border-radius: 50%;
              }
            }
          }
        }
        .ceo {
          width: 220px;
          @media (max-width: 576px) {
            margin-bottom: 20px;
          }
          img {
            max-width: 100%;
          }
        }
      }
    }
    .designers-vid {
      .vid {
        text-align: end;
        @media (max-width: 1280px) {
          & {
            text-align: center;
          }
        }
        img {
          border-radius: 24px;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
