<template>
  <div id="app">
    <div class="main">
      <div class="join-form">
        <h2 v-text="$t('message.formTitle')"></h2>
        <div class="form-content" v-cloak>
          <form
            novalidate
            autocomplete="off"
            id="registration"
            onsubmit="return false;"
            action="<f:uri.action action='add' controller='New'/>"
            enctype="multipart/form-data"
            method="post"
          >
            <div class="personal">
              <div class="field-row required">
                <md-field>
                  <label for="username" v-text="$t('message.formName')"></label>
                  <md-input
                    v-model="username"
                    name="username"
                    id="username"
                    autocomplete="given-name"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formNameTip')"></p>
              </div>
              <div class="field-row required">
                <md-field>
                  <label for="age" v-text="$t('message.formAge')"></label>
                  <md-input
                    name="age"
                    id="age"
                    type="tel"
                    pattern="[0,9]"
                    novalidate
                    autocomplete="given-age"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formAgeTip')"></p>
              </div>
              <div class="field-row required">
                <md-field>
                  <label for="phone" v-text="$t('message.formNumber')"></label>
                  <md-input
                    v-model="phone"
                    type="tel"
                    pattern="[0,9]"
                    name="phone"
                    id="phone"
                    novalidate
                    autocomplete="given-phone"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formNumberTip')"></p>
              </div>
              <div class="field-row required">
                <md-field>
                  <label
                    for="email"
                    v-text="$t('message.formEmailAddress')"
                  ></label>
                  <md-input
                    v-model="email"
                    name="email"
                    id="email"
                    autocomplete="given-email"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formEmailAddressTip')"></p>
              </div>
              <div class="field-row required">
                <md-field>
                  <label for="city" v-text="$t('message.formCity')"></label>
                  <md-input
                    name="city"
                    id="city"
                    autocomplete="given-city"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formCityTip')"></p>
              </div>
            </div>
            <div class="game-info">
              <div class="game-field">
                <div class="uploader-field">
                  <h4 v-text="$t('message.formPicTitle')"></h4>
                  <div class="field-row">
                    <div class="uploader-column">
                      <van-uploader
                        v-model="fileList"
                        name="image"
                        :max-count="1"
                        :max-size="10 * 1024 * 1024"
                        :before-read="beforeFileRead"
                        @oversize="onOversize"
                      >
                        <i class="icon-upload"></i>
                        <span v-text="$t('message.formUpload')"></span>
                      </van-uploader>
                      <div class="tip" v-text="$t('message.formPicTip')"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field-row required">
                <md-field>
                  <label for="video" v-text="$t('message.formLink')"></label>
                  <md-input
                    name="video_path"
                    id="video"
                    autocomplete="given-video"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formLinkTip')"></p>
              </div>
              <div class="field-row required">
                <md-field>
                  <label
                    for="title"
                    v-text="$t('message.formActivity')"
                  ></label>
                  <md-input
                    name="title"
                    id="title"
                    autocomplete="given-describe"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formActivityTip')"></p>
              </div>
              <div class="field-row required">
                <md-field>
                  <label
                    for="describe"
                    v-text="$t('message.formTextInput')"
                  ></label>
                  <md-input
                    name="describe"
                    id="describe"
                    autocomplete="given-describe"
                  ></md-input>
                </md-field>
                <p class="tip" v-text="$t('message.formTextInputTip')"></p>
              </div>
            </div>
            <div class="form-footer">
              <div class="action-wrapper">
                <div class="action">
                  <button
                    class="btn"
                    type="submit"
                    @click="actionRegister($event)"
                    v-text="$t('message.formSubmit')"
                  ></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
          <a class="facebook-login" @click="loginFaceBook">
            Login With Facebook
          </a>
          <a class="google-login" @click="loginGoogle"> Login With Google </a>
        </div>
      </van-dialog>

      <van-dialog
        v-model="showSuccessModal"
        overlay
        :show-confirm-button="false"
        :show-cancel-button="false"
        confirm-button-text="YES"
        cancel-button-text="NO"
      >
        <button
          class="modal-close"
          aria-label="Close"
          @click="showSuccessModal = false"
        ></button>
        <div class="info">
          <p v-text="$t('message.formSuccessTitle')"></p>
          <p v-text="$t('message.formSuccessCont')"></p>
        </div>
        <div class="action download-action">
          <a
            class="action-yes"
            @click="showSuccessModal = false"
            v-text="$t('message.formSuccessConfirm')"
          >
          </a>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.min.css";
import vant from "vant";
import Cookies from "js-cookie";
import axios from "axios";
import qs from "qs";
import Compressor from "compressorjs";
export default {
  data() {
    return {
      username: "",
      phone: "",
      email: "",
      fileList: [],
      showLoginDialog: false,
      showSuccessModal: false,
    };
  },

  created() {
    if (Cookies.get("storage_gaming")) {
      const gameInfo = Cookies.get("storage_gaming");
      this.storageGaming = JSON.parse(gameInfo);
      this.username = this.storageGaming.username;
      this.email = this.storageGaming.email;
    }
  },

  mounted() {
    this.formInit();
  },

  methods: {
    beforeFileRead(file) {
      if (["image/jpeg", "image/jpg", "image/png"].indexOf(file.type) == -1) {
        vant.Toast(this.i18n.upload_image_format);
        return false;
      }

      // return true;

      return new Promise((resolve) => {
        // compressorjs 默认开启 checkOrientation 选项
        // 会将图片修正为正确方向
        new Compressor(file, {
          quality: 0.8,
          maxWidth: 1000,
          maxHeight: 1000,
          success: resolve,
          error(err) {
            console.log(err.message);
          },
        });
      });
    },

    onOversize(file) {
      vant.Toast(this.i18n.upload_image_size);
    },

    loginFaceBook() {
      // $('#f_login').click();
      this.showLoginDialog = false;
    },

    loginGoogle() {
      // console.log('google');
      document.getElementById("g_login").click();
      this.showLoginDialog = false;
    },

    formInit() {
      this.handleEvent();
      // this.checkRegister(true);
    },

    handleEvent() {
      $("#registration .field-row.required input[type=text]").on(
        "blur",
        function () {
          var el = $(this);
          if (!$.trim(el.val())) {
            el.parents(".field-row").addClass("err");
          }
        }
      );

      $("#registration .field-row.required input[type=text]").on(
        "keyup",
        function () {
          var el = $(this);
          if ($.trim(el.val())) {
            el.parents(".field-row").removeClass("err");
          }
        }
      );

      // age
      $("#registration input[name=age]").on("blur", function () {
        var el = $(this);
        if (!/^[1-9]\d*$/.test(el.val())) {
          el.parents(".field-row").addClass("err");
        }
      });

      $("#registration input[name=age]").on("keyup", function () {
        var el = $(this);
        if ($.trim(el.val())) {
          el.parents(".field-row").removeClass("err");
        }
      });

      // phone
      $("#registration input[name=phone]").on("blur", function () {
        var el = $(this);
        var val = el.val();
        if (!$.trim(val) || val.length < 6) {
          el.parents(".field-row").addClass("err");
        }
      });

      $("#registration input[name=phone]").on("keyup", function () {
        var el = $(this);
        if ($.trim(el.val())) {
          el.parents(".field-row").removeClass("err");
        }
      });

      // email
      $("#registration input[name=email]").on("blur", function () {
        var el = $(this);
        if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(el.val())) {
          el.parents(".field-row").addClass("err");
        }
      });

      $("#registration input[name=email]").on("keyup", function () {
        var el = $(this);
        if ($.trim(el.val())) {
          el.parents(".field-row").removeClass("err");
        }
      });
    },

    validation() {
      var flag = true;

      $("#registration input[type=text], #registration input[type=tel]").each(
        function () {
          $(this).trigger("blur");
        }
      );

      if (!this.fileList.length) {
        $(".uploader-field .field-row").addClass("err");
      } else {
        $(".uploader-field .field-row").removeClass("err");
      }

      if ($(".field-row.err").length) {
        flag = false;
      }

      return flag;
    },

    actionRegister(e) {
      e.preventDefault();
      var self = this;
      var file = [];
      let gameInfo = Cookies.get("storage_gaming");
      if (gameInfo) {
        // self.checkRegister(false);

        if (!this.validation()) {
          return;
        }

        this.fileList.map(function (item) {
          file.push({
            content: item.content,
          });
        });

        var fields = {
          // cid: this.countryCode,// 国家手机区码
          cid: "86", // 国家手机区码
          // channel: this.channel,
          channel: "google",
          image: file[0].content,
        };

        $(
          "#registration input[type=text], #registration input[type=tel], #registration input[type=radio]:checked"
        ).each(function (item) {
          var el = $(this);
          fields[el.attr("name")] = el.val();
        });

        // fields.phone = this.countryCode + fields.phone;

        if (this.formUploading) {
          return;
        }

        vant.Toast.loading({
          duration: 0,
          message: "Uploading...",
          forbidClick: true,
        });
        axios({
          url: "https://infinixmob.mez100.com.cn/minisite?tx_sleekbeauty_sleekbeauty%5Baction%5D=add&tx_sleekbeauty_sleekbeauty%5Bcontroller%5D=Beauty&cHash=3241e4de3c0f2958e98051ef20566bcd",
          method: "post",
          data: fields,
          transformRequest: [
            function (data) {
              // var MyForm = new FormData();
              // MyForm.append(fields);
              fields = qs.stringify(fields);
              return fields;
            },
          ],
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then(
            (response) => {
              if (response.data.data == "success") {
                self.showSuccessModal = true;
                self.formUploading = false;
                vant.Toast.clear();
              } else {
                self.formUploading = false;
                vant.Toast.clear();
                vant.Toast({
                  duration: 3000,
                  message: response.msg,
                  forbidClick: true,
                });
              }
            },
            (err) => {
              self.formUploading = false;
              vant.Toast.clear();
            }
          )
          .finally(() => {
            self.formUploading = false;
            vant.Toast.clear();
          });
      } else {
        self.showLoginDialog = true;
      }
      // if (storageGaming) {
      //     self.checkRegister(false);
      // } else {
      //     self.showLoginDialog = true;
      // }
    },

    // checkRegister(flag) {
    //   var self = this;
    //   var url = $("#checkUrl").attr("url");
    //   var aLink = document.querySelector("#join");

    //   // if (flag && !this.channel) {
    //   //     this.showLoginDialog = true;
    //   //     Cookies.remove('storage_gaming');
    //   //     return;
    //   // }

    //   vant.Toast.loading({
    //     duration: 0,
    //     forbidClick: true,
    //   });
    //   axios({
    //     url: "https://infinixmob.mez100.com.cn/minisite?tx_sleekbeauty_sleekbeauty%5Baction%5D=check&tx_sleekbeauty_sleekbeauty%5Bcontroller%5D=New&cHash=37ed53818a53466bec086502d73359f3",
    //     method: "post",
    //     data: {
    //       username: this.username,
    //       email: this.email
    //     },
    //     transformRequest: [
    //       function (data) {
    //         var MyForm = new FormData();
    //         MyForm.append('username', this.username);
    //         MyForm.append('email', this.email);
    //         return MyForm;
    //       },
    //     ],
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   })
    //     .then((res) => {
    //       item.likes = res.data.data;
    //     })
    //     .finally(() => {
    //       vant.Toast.clear();
    //     });
    //   $.ajax({
    //     type: "POST",
    //     url: url,
    //     data: {
    //       username: this.username,
    //       email: this.email,
    //     },
    //     dataType: "json",
    //     success: function (response) {
    //       console.log("验证成功");
    //       if (response.data == "true") {
    //         self.showSuccessModal = true;
    //       } else {
    //         !flag && aLink && aLink.click();
    //       }
    //     },
    //     complete: function () {
    //       vant.Toast.clear();
    //     },
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: #f4f4f4;
}

.join-form h2 {
  color: #000;
}

.form-content {
  background: #fff;
}

.md-field {
  border-bottom: 1px solid #000;
  color: #000;
}
.action-yes {
  margin: auto;
}

// @include media-width(768px) {
//   .form-content {
//     background: #fff;
//   }
// }
</style>