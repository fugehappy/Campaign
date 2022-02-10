<template>
  <div id="app">
    <main class="activity-detail">
      <div class="content">
        <h3>{{ detail.title }}</h3>
        <p>{{ detail.describe }}</p>
        <div
          v-if="detail.videoURL"
          class="fb-video"
          :data-href="detail.videoURL"
          data-width="auto"
          data-allowfullscreen="true"
        ></div>
        <img v-else class="fb-img" :src="detail.videoURL" :alt="detail.title" />
        <div class="opt">
          <div class="vote" @click="detailVote">
            <span class="like"></span>
            <span v-text="detail.likes"></span>
          </div>
          <div class="ssk-group">
            <a class="ssk ssk-facebook"></a>
            <a class="ssk ssk-twitter"></a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import vant from "vant";
import axios from "axios";
export default {
  data() {
    return {
      detail: window.data.detail,
    };
  },

  methods: {
    detailVote() {
      var self = this;
      vant.Toast.loading({
        duration: 0,
        forbidClick: true,
      });
      const { uid } = window.data.detail;
      axios({
        url: "https://infinixmob.mez100.com.cn/minisite?tx_sleekbeauty_sleekbeauty%5Baction%5D=like&tx_sleekbeauty_sleekbeauty%5Bcontroller%5D=Beauty&cHash=e8fb15c2ddd0cb8cbc9d1e6f1b758639",
        method: "post",
        data: { id: uid },
        transformRequest: [
          function (data) {
            var MyForm = new FormData();
            MyForm.append("id", uid);
            return MyForm;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => {
          this.detail.likes = res.data.data;
        })
        .finally(() => {
          vant.Toast.clear();
        });
    },
  },
};
</script>

<style>
</style>