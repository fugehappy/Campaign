<template>
  <div class="activity-header">
    <div class="head-logo"></div>
    <div class="head-nav-list">
      <div :class="selected == 'home' ? 'nav-item selected' : 'nav-item'">
        <a href="https://infinixmob.mez100.com.cn/minisite/new/home">Home</a>
      </div>
      <div :class="selected == 'gallery' ? 'nav-item selected' : 'nav-item'">
        <a href="https://infinixmob.mez100.com.cn/minisite/new/gallery"
          >Gallery</a
        >
      </div>
    </div>
    <div class="head-tools">
      <div class="head-tool-item">
        <span class="curr">{{ this.selectedLanguage }}</span>
        <div class="tool-menu-list">
          <div class="tool-menu-item" @click="selectLanguage('en')">
            <a>ENGLISH</a>
          </div>
          <div class="tool-menu-item" @click="selectLanguage('ar')">
            <a>ARABIC</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vant from "vant";
const allLanguage = {
  en: "ENGLISH",
  ar: "ARABIC",
};
export default {
  // 根据home、gallery传过来的东西来判断导航栏高亮
  props: ["selected"],
  data() {
    return {
      selectedLanguage: "ENGLISH",
    };
  },

  methods: {
    selectLanguage(language) {
      vant.Toast.loading({
        duration: 2000,
        forbidClick: true,
      });
      this.$i18n.locale = language;
      this.selectedLanguage = allLanguage[language];
      window.sessionStorage.setItem("language", language);
    },
  },
  mounted() {
    if (window.sessionStorage.getItem("language")) {
      this.$i18n.locale = window.sessionStorage.getItem("language") || "en";
      this.selectedLanguage =
        allLanguage[window.sessionStorage.getItem("language")] || "ENGLISH";
    }
  },
};
</script>

<style lang="scss" scoped>
.head-tool-item {
  span {
    font-size: 16px;
  }
}
.tool-menu-item {
  font-size: 16px;
}
</style>
