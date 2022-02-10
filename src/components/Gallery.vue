<template>
  <div id="app">
    <Header selected="gallery" />
    <main class="activity-gallery">
      <div class="content">
        <div class="items">
          <div
            v-cloak
            class="item"
            v-for="(item, $index) in list"
            :key="$index"
          >
            <a
              href="https://infinixmob.mez100.com.cn/minisite/new/detail"
              target="_blank"
            >
              <div class="card">
                <div class="image">
                  <img
                    class="lazy"
                    :data-src="item.image_path"
                    :alt="item.title"
                  />
                </div>
              </div>
            </a>
            <div class="info">
              <div class="vote-wrapper">
                <div class="vote" @click="vote(item)">
                  <span class="like"></span> <span v-text="item.likes"></span>
                </div>
              </div>
              <a
                href="https://infinixmob.mez100.com.cn/minisite/new/detail"
                target="_blank"
              >
                <h3 v-text="item.title"></h3>
              </a>
            </div>
          </div>
        </div>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import InfiniteLoading from "vue-infinite-loading";
import LazyLoad from "vanilla-lazyload";
import axios from "axios";
import vant from "vant";
export default {
  data() {
    return {
      list: [],
      page: 1,
      detailUrl: window.data.detailUrl,
    };
  },
  components: {
    Header,
    InfiniteLoading,
  },
  created() {
    this.getListData();
  },
  methods: {
    getListData() {
      axios
        .get(
          `https://infinixmob.mez100.com.cn/minisite?tx_sleekbeauty_sleekbeauty%5Baction%5D=best&tx_sleekbeauty_sleekbeauty%5Bcontroller%5D=Beauty&cHash=548da860d4efab4b2ffd337bb2651eea&p=${this.page}`
        )
        .then((res) => {
          this.list = res.data.data;
        });
    },

    infiniteHandler($state) {
      this.page++;
      axios
        .get(
          `https://infinixmob.mez100.com.cn/minisite?tx_sleekbeauty_sleekbeauty%5Baction%5D=best&tx_sleekbeauty_sleekbeauty%5Bcontroller%5D=Beauty&cHash=548da860d4efab4b2ffd337bb2651eea&p=${this.page}`
        )
        .then(
          (res) => {
            this.list.push(...res.data.data);
            $state.loaded();
          },
          (err) => {
            $state.complete();
          }
        );
    },

    lazy() {
      window.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
      });
    },

    vote(item) {
      vant.Toast.loading({
        duration: 0,
        forbidClick: true,
      });

      const { uid } = item;

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
          item.likes = res.data.data;
        })
        .finally(() => {
          vant.Toast.clear();
        });
    },
  },
  mounted() {
    this.lazy();
  },
  updated() {
    window.lazyLoadInstance.update();
  },
};
</script>

<style lang="scss" scoped>
.vote {
  span {
    font-size: 14px;
  }
}
</style>