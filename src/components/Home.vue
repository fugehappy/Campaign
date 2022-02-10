<template>
  <div id="app">
    <Header selected="home" />
    <main class="activity">
      <div class="kv">
        <div class="cont">
          <div class="links">
            <a
              class="link"
              rel="nofollow"
              aria-label="Join Now"
              @click="joinNow"
              ><span>Join Now</span></a
            >
          </div>
        </div>
      </div>
      <div class="sec1">
        <div class="content">
          <h2 v-text="$t('message.campaignTitle')"></h2>
          <p v-text="$t('message.campaignDesc')"></p>
          <div class="slider">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/4/1.jpg"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/4/2.jpg"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/4/3.jpg"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/4/4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sec2">
        <div class="content">
          <div class="headline">
            <h2 v-text="$t('message.participateTitle')"></h2>
            <p v-text="$t('message.participateDesc')"></p>
          </div>
          <div class="items">
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/1.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="info">
                <h3>Ahmed magdy</h3>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/2.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="info">
                <h3>Nancy salah</h3>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2/3.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="info">
                <h3>Rana Raes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sec3">
        <div class="content">
          <h2 v-text="$t('message.timelineTitle')"></h2>
          <div class="schedule">
            <div class="schedule-item">
              <div class="step-no">1</div>
              <div class="step-content">
                <div class="text" v-text="$t('message.timelineOne')"></div>
              </div>
              <div class="icon"></div>
            </div>
            <div class="schedule-item">
              <div class="step-no">2</div>
              <div class="step-content">
                <div class="text" v-text="$t('message.timelineTwo')"></div>
              </div>
              <div class="icon"></div>
            </div>
            <div class="schedule-item">
              <div class="step-no">3</div>
              <div class="step-content">
                <div class="text" v-text="$t('message.timelineThree')"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sec4">
        <div class="content">
          <h2 v-text="$t('message.awardTitle')"></h2>
          <div class="hd">
            <div class="f1"></div>
            <div class="info">
              <h3 v-text="$t('message.awardFP_H3')"></h3>
              <p v-text="$t('message.awardFP_P')"></p>
            </div>
          </div>
          <div class="items">
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <h3>Note 11 + XE 25</h3>
            </div>
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <h3>Note 11 Pro + XE 25</h3>
            </div>
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <h3>Note 11 S + XE 25</h3>
            </div>
            <div class="item">
              <div class="card">
                <div class="image">
                  <img
                    src="https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <h3>XE 25 + X Charger</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="sec5">
        <div class="content">
          <div class="headline">
            <h2 v-text="$t('message.guidelineTitle')"></h2>
            <p v-text="$t('message.guidelineDes')"></p>
          </div>
          <div class="items">
            <div class="item">
              <h4 v-text="$t('message.guideOne')"></h4>
              <p v-text="$t('message.guideOneT')"></p>
            </div>
            <div class="item">
              <h4 v-text="$t('message.guideTwo')"></h4>
              <p v-text="$t('message.guideTwoT')"></p>
            </div>
            <div class="item">
              <h4 v-text="$t('message.guideThree')"></h4>
              <p v-text="$t('message.guideThreeT')"></p>
            </div>
            <div class="item">
              <h4 v-text="$t('message.guideFour')"></h4>
              <p v-text="$t('message.guideFourT')"></p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="popup" v-cloak>
      <van-dialog
        v-model="showLoginDialog"
        overlay
        :show-confirm-button="false"
        :show-cancel-button="false"
        confirm-button-text="YES"
        cancel-button-text="NO"
      >
        <button
          class="modal-close"
          aria-label="Close"
          @click="showLoginDialog = false"
        ></button>
        <div class="info">
          <p>Please complete the login.</p>
        </div>
        <div class="action login-action">
          <div class="action login-action">
            <a class="facebook-login" @click="loginFaceBook">
              Login With Facebook
            </a>
            <a class="google-login" @click="loginGoogle"> Login With Google </a>
          </div>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      showLoginDialog: false,
      storageGaming: "",
      username: "",
      email: "",
      channel: "",
    };
  },
  components: {
    Header,
  },
  mounted: function () {
    this.init();
    window.i18n.locale = window.sessionStorage.getItem("language") || "en";
  },
  methods: {
    init() {
      if (Cookies.get("storage_gaming")) {
        const gameInfo = Cookies.get("storage_gaming");
        this.storageGaming = JSON.parse(gameInfo);
        this.username = this.storageGaming.username;
        this.email = this.storageGaming.email;
        this.channel = this.storageGaming.channel;
      }
      this.homeInit();
    },
    slider() {
      this.$nextTick(function () {
        if (!document.querySelector(".slider .swiper-container")) {
          return;
        }
        new Swiper(".slider .swiper-container", {
          slidesPerView: "auto",
          lazy: true,
          speed: 800,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          },
        });
      });
    },
    homeInit() {
      this.slider();
    },
    formInit() {
      this.handleEvent();
      this.checkRegister(true);
    },

    lazy() {
      window.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
      });
    },
    openFullVideo(url) {
      // this.showYutobe = true;

      if (url.indexOf("www.facebook.com") > -1) {
        this.playFbVideoUrl = url;
        var el = document.querySelector("#playFbVideo");
        el && el.click();
        return;
      }

      if (url) {
        this.videoUrl = url;
        this.videoModal = true;
      }
    },

    closeFullVideo() {
      this.videoModal = false;
      this.videoUrl = "";
    },

    playYutobe(url) {
      this.openFullVideo(url);
    },

    vote(item) {
      console.log(item);
      vant.Toast.loading({
        duration: 0,
        forbidClick: true,
      });

      const { uid } = item;

      $.ajax({
        type: "POST",
        url: this.voteUrl,
        data: {
          id: uid,
        },
        dataType: "json",
        success: function (response) {
          item.likes = response.data;
        },
        complete: function () {
          vant.Toast.clear();
        },
      });
    },

    joinNow() {
      if (this.storageGaming) {
        // self.checkRegister(false);
        if (this.channel === "Google") {
          this.loginGoogle();
        } else {
          this.loginFaceBook();
        }
      } else {
        this.showLoginDialog = true;
      }
    },

    closeSuccessDialog(flag) {
      this.showSuccessModal = false;

      if (flag) {
        var el = document.querySelector(".go-back a");
        el && el.click();
      }
    },

    uploaderAfterRead(file) {
      console.log(file);
    },

    onConfirmPop() {
      this.onClosePop();
    },

    loginFaceBook() {
      // $('#f_login').click();
      this.showLoginDialog = false;
    },

    loginGoogle() {
      // console.log('google');
      document.getElementById("g_login").click();
      // location.href = "form"
      this.showLoginDialog = false;
    },

    countDownFinish() {
      this.showCountDown = false;
    },

    selectLanguage(language) {
      vant.Toast.loading({
        duration: 2000,
        forbidClick: true,
      });
      window.i18n.locale = language;
      window.sessionStorage.setItem("language", language);
      $(".curr")[0].innerHTML = allLanguage[language];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>