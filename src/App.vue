<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- <PagePc/> -->
    <!-- <Form/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
export default {
  name: "app",
  components: {
    Header,
    Form,
  },
};
</script>

<style lang="scss">
// layout
$layout_width: 1200px;
$ml_layout_width: 980px;
$m_layout_width: 768px;
$s_layout_width: 640px;
$layout_width_480: 480px;
$layout_width_360: 360px;
$layout_width_large: 1440px;
$layout_width_medium: 1068px;
$layout_width_small: 734px;

//color
$white: #fff;
$black: #000;
$green: #95d600;
$imgPath: "https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/";
$fontPath: "https://infinixmob.mez100.com.cn/fileadmin/assets/fonts/DINPro";

// @import "partials/os/vuetify";
// @import "partials/os/material";

@font-face {
  font-family: "DINProBlack";
  src: url($fontPath + "/DINPro-Black.otf") format("truetype");
}

@font-face {
  font-family: "DINProBold";
  src: url($fontPath + "/DINPro-Bold.otf") format("truetype");
}

@font-face {
  font-family: "DINProMedium";
  src: url($fontPath + "/DINPro-Medium.otf") format("truetype");
}

@font-face {
  font-family: "DINProLight";
  src: url($fontPath + "/DINPro-Light.otf") format("truetype");
}

@font-face {
  font-family: "DINProRegular";
  src: url($fontPath + "/DINPro-Regular.otf") format("truetype");
}

@mixin libBgImage($url, $bz: false, $bz100: false) {
  background-image: url(#{$imgPath}#{$url});
  @if $bz {
    @if $bz100 {
      background-size: 100% 100%;
    } @else {
      background-size: cover;
    }
  }
}

@mixin media-width($breakpoint) {
  @media only screen and (max-width: $breakpoint) {
    @content;
  }
}

@mixin media-breakpoint-between($min, $max) {
  @media only screen and (min-width: $min) and (max-width: $max) {
    @content;
  }
}

@mixin media-retina-width($breakpoint: null) {
  @if $breakpoint {
    @media only screen and (max-width: $breakpoint) and (-webkit-min-device-pixel-ratio: 1.5),
      only screen and (max-width: $breakpoint) and (min-resolution: 1.5dppx),
      only screen and (max-width: $breakpoint) and (min-resolution: 144dpi) {
      @content;
    }
  } @else {
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
      only screen and (min-resolution: 1.5dppx),
      (-webkit-min-device-pixel-ratio: 1.5),
      (min-resolution: 144dpi) {
      @content;
    }
  }
}

@function calcPaddingBottomToPercent($w, $h) {
  @return percentage($h / $w);
}

@function pxToPercent($m, $n) {
  @return $n / $m;
}

@function calcRatioToScreen($h, $w, $unit: false) {
  @if $unit {
    @return $h / $w * 100vh;
  }

  @return $h / $w * 100vw;
}

.visuallyhidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
}

.activity {
  h2 {
    font-family: "DINProMedium";
    font-size: 0.6rem;
    line-height: pxToPercent(60, 70);
  }

  p {
    font-size: 0.24rem;
    line-height: pxToPercent(24, 34);
    color: #666;
  }

  .content {
    max-width: 12rem;
    margin: 0 auto;
  }
}

.kv {
  padding-left: 1rem;
  position: relative;
  display: flex;
  align-items: end;
  height: 10.74rem;
  @include libBgImage("bg.jpg", true);

  .title {
    font-family: "DINProMedium";
    font-size: 1rem;
    line-height: 1.2;
    color: #fff;
  }

  .links {
    text-align: center;
  }

  .link {
    display: inline-block;
    padding: 0.05rem 0.5rem;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 0.2rem;
    cursor: pointer;
    border: 1px solid #fff;
    text-transform: uppercase;
    margin-left: 1rem;
    margin-bottom: 2.5rem;
  }

  span {
    font-family: "DINProMedium";
    font-size: 0.6rem;
    color: #fff;
  }
}

.sec1 {
  background: #f4f4f4;

  .slider {
    margin-top: 0.6rem;
    border-radius: 0.3rem;
    overflow: hidden;
    font-size: 0;
  }

  .content {
    padding: 1.24rem 0 1rem;
    text-align: center;
  }

  h2 {
    margin-bottom: 0.3rem;
  }

  p {
    width: 58%;
    margin: 0 auto;
  }

  .slider {
    img {
      width: 100%;
    }
  }
}

.sec2 {
  .content {
    padding: 1.24rem 0 1rem;
  }

  .headline {
    h2 {
      margin-bottom: 0.3rem;
    }

    p {
      width: 64%;
      margin: 0 auto;
    }
  }

  .items {
    --columns: 3;
    --gutter-width: 0.3rem;
    display: -ms-grid;
    display: grid;
    grid-gap: var(--gutter-width);
    grid-template-areas: "";
    grid-template-columns: repeat(var(--columns), 1fr);
    margin-top: 0.6rem;
  }

  .card {
    background-color: #fff;
    // padding-top: 100%;
    padding-top: calcPaddingBottomToPercent(360, 308);
    height: 0;
    position: relative;
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #f4f4f4;
    transition: transform 0.3s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      // opacity: 0;
      transition: opacity 0.15s;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .headline {
    text-align: center;
  }

  .info {
    padding: 0.24rem;
    background: #fafbfc;

    h3 {
      font-family: "DINProMedium";
      font-size: 0.24rem;
      color: #000;
      line-height: pxToPercent(24, 34);
    }

    p {
      font-family: "DINProLight";
      font-size: 0.16rem;
      line-height: pxToPercent(16, 20);
      color: #666;
    }
  }
}

.sec3 {
  padding: 0.8rem 0 1.2rem;
  background: #f4f4f4;

  h2 {
    text-align: center;
  }

  .schedule {
    display: flex;
    justify-content: space-around;
    margin-top: 0.6rem;
  }

  .schedule-item {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.24rem;
    color: #000;
  }

  .step-content {
    margin-left: 10px;
    padding-left: 12px;
    border-left: 1px solid #707070;
  }

  .step-no {
    font-family: "DINProLight";
    font-size: 0.8rem;
  }

  .text {
    font-family: "DINProMedium";
  }

  .date {
    font-family: DINProRegular;
    color: #666;
  }

  .icon {
    width: 0.48rem;
    height: 0.68rem;
    margin-left: 0.4rem;
    @include libBgImage("right.svg", true);
  }
}

.sec4 {
  padding-top: 0.8rem;

  .hd {
    display: flex;
    align-items: center;
    margin-top: 0.6rem;
    padding-bottom: 0.4rem;

    h3 {
      font-family: "DINProMedium";
      font-size: 0.36rem;
    }
    p {
      font-family: "DINProMedium";
    }
  }

  h2 {
    text-align: center;
  }

  .info {
    margin-left: 1rem;
  }

  .f1 {
    width: 5.32rem;
    height: 3.7rem;
    @include libBgImage("3/f1.jpg", true);
  }

  .items {
    --columns: 4;
    --gutter-width: 0.3rem;
    display: -ms-grid;
    display: grid;
    grid-gap: var(--gutter-width);
    grid-template-areas: "";
    grid-template-columns: repeat(var(--columns), 1fr);
    margin-top: 0.6rem;

    h3 {
      margin-top: 0.15rem;
      font-family: "DINProMedium";
      font-size: 0.24rem;
      line-height: pxToPercent(24, 34);
    }
  }

  .item {
    text-align: center;
  }

  .card {
    padding-top: 100%;
    height: 0;
    position: relative;
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    // background: #f4f4f4;
    transition: transform 0.3s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      // opacity: 0;
      transition: opacity 0.15s;
    }
  }
}

.sec5 {
  padding-top: 2rem;

  .headline {
    text-align: center;

    p {
      width: 66%;
      margin: 0 auto;
    }
  }

  .items {
    background: #f4f4f4;
    margin-top: 0.6rem;
    padding: 0.8rem 1.7rem 1.4rem;
  }

  .item {
    margin-top: 0.6rem;

    &:first-child {
      margin-top: 0.6rem;
    }
  }

  h2 {
    margin-bottom: 0.3rem;
  }

  h4 {
    font-family: "DINProBlack";
    font-size: 0.32rem;
  }
}

.activity-gallery {
  .content {
    max-width: 12rem;
    margin: 0 auto;
  }

  .items {
    --columns: 4;
    --gutter-width: 0.3rem;
    display: -ms-grid;
    display: grid;
    grid-gap: var(--gutter-width);
    grid-template-areas: "";
    grid-template-columns: repeat(var(--columns), 1fr);
    margin-top: 0.6rem;
  }

  .card {
    background-color: #fff;
    // padding-top: 100%;
    padding-top: calcPaddingBottomToPercent(280, 308);
    height: 0;
    position: relative;
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #f4f4f4;
    transition: transform 0.3s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      // opacity: 0;
      transition: opacity 0.15s;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  h3 {
    font-family: "DINProMedium";
    font-size: 0.18rem;
    line-height: 1.4;
    margin-top: 0.04rem;
  }

  .info {
    padding: 0.1rem 0.12rem;
    background: #fafbfc;
    a {
      color: #000;
    }
  }

  .vote-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #a3a3a3;

    .like {
      @include libBgImage("like.svg");
      display: inline-block;
      width: 20px;
      height: 14px;
      background-position: center;
      background-repeat: no-repeat;
      vertical-align: middle;
    }

    .vote {
      cursor: pointer;
      // span {
      //   @include libBgImage('like.svg');
      // }
      // .like {

      // }
    }
  }
}
@include media-width(768px) {
  .activity-gallery {
    padding: 0 0.3rem 0.35rem 0.3rem;
    .items {
      --columns: 2;
      --gutter-width: 0.15rem;
      margin-top: 0.8rem;
    }
    .info {
      padding: 0.05rem 0.06rem;
    }
    .vote-wrapper {
      font-size: 0.07rem;
    }
    h3 {
      font-size: 0.09rem;
      line-height: 1.2;
    }
  }
}

.activity-header {
  height: 60px;
  position: relative;
  z-index: 113;
  left: 0;
  top: 0;
  right: 0;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  background: #333;
  transition: height 0.3s ease;
  .curr:after {
    content: "";
    position: absolute;
    right: 20px;
    top: 47%;
    border-right: 1px solid hsla(0, 0%, 100%, 0.6);
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.6);
    height: 10px;
    width: 10px;
    margin-top: -7px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.head-logo {
  width: 140px;
  height: 100%;
}

.head-nav-list {
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 16px;
  color: hsla(0, 0%, 100%, 0.6);
}

.head-nav-list .nav-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 20px;
  transition: all 0.3s ease;

  a {
    color: #fff;
  }
}

.head-nav-list .nav-item.selected {
  color: #fff;
  font-weight: 700;
}

.head-nav-list .nav-item:hover {
  color: #fff;
}

.head-tool-item {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 140px;
  cursor: pointer;

  span {
    color: #fff;
    opacity: 0.6;
    width: 100%;
    text-align: center;
  }
}
.head-tool-item:hover {
  .tool-menu-list {
    display: block;
    background: #f4f4f4;
  }
}
.tool-menu-item {
  text-align: center;
}
.tool-menu-item:hover {
  background: #333;
  color: #fff;
}

.head-tool-item .tool-menu-list {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  // left: -6px;
  // background: hsla(0,0%,100%,.9);
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  line-height: 50px;
  color: #333;
}

.popup {
  .van-dialog {
    width: 360px;
    border-radius: 4px;
  }

  .van-dialog__content {
    text-align: center;
  }

  .info {
    padding: 70px 30px 50px;
  }

  .action {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 30px;

    button,
    a {
      height: 48px;
      background: #44d62c;
      border: none;
      border-radius: 2px;
      font-size: 16px;
      color: #fff;
      line-height: 48px;
      cursor: pointer;
      box-sizing: border-box;
      white-space: nowrap;
    }
    a:hover {
      background: #005b57;
    }

    button {
      width: 46%;
    }
  }

  .login-action {
    display: block;

    a {
      display: block;
      width: 100%;

      &:hover {
        color: #fff;
      }
    }
  }

  .download-action {
    a {
      width: 48%;
      margin: auto;
    }

    .action-download {
      border: 2px solid #d85628;
      background: #fff;
      color: #d85628;
    }
  }

  .facebook-login {
    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      @include libBgImage("facebook.svg");
      background-size: 100% 100%;
      vertical-align: middle;
    }
  }

  .google-login {
    margin-top: 20px;

    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      @include libBgImage("google.svg");
      background-size: 100% 100%;
      vertical-align: middle;
    }
  }

  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: 0;
    cursor: pointer;

    &:after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      @include libBgImage("close.svg");
      background-size: 100% 100%;
    }
  }
}

@include media-width(768px) {
  .activity-header {
    padding: 0 15px;
    .curr:after {
      right: 2px;
    }
  }
  .head-logo {
    width: 140px;
    height: 100%;
    display: none;
  }
  .head-nav-list {
    width: 150px;
  }
  .head-tool-item {
    width: 100px;
    .tool-menu-list {
      line-height: 40px;
    }
  }
  .activity {
    h2 {
      font-size: 0.3rem;
    }

    p {
      font-size: 0.12rem;
    }

    .content {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
    }
  }

  .kv {
    height: 6.4rem;
    @include libBgImage("mb_bg.jpg");
    align-items: center;
    justify-content: center;
    padding-left: 0;

    .title {
      font-size: 0.5rem;
    }

    .link {
      padding: 0.1rem 0.32rem;
      line-height: 1.1;
      margin: auto;
    }

    span {
      font-size: 0.3rem;
    }
  }

  .sec1 {
    .content {
      padding-bottom: 0.56rem;
      padding-top: 0.68rem;
    }
    p {
      width: 70%;
    }
    .slider {
      margin-top: 0.4rem;
      border-radius: 0.1rem;
      overflow: hidden;
    }
    .f1 {
      height: 3.68rem;
      margin-top: 0.3rem;
      @include libBgImage("mb_f1.jpg");
    }

    h2 {
      margin-bottom: 0.15rem;
    }
  }

  .sec2 {
    .content {
      padding-top: 0.54rem;
      padding-bottom: 0.61rem;
    }
    .items {
      --columns: 2;
      --gutter-width: 0.15rem;
      grid-gap: var(--gutter-width);
      margin-top: 0.4rem;
    }
    h2 {
      margin-bottom: 0.15rem;
    }
    .info {
      padding: 0.14rem;
      h3 {
        font-size: 0.12rem;
      }
      p {
        font-size: 0.08rem;
      }
    }
  }

  .sec3 {
    padding-top: 0.46rem;
    padding-bottom: 0.42rem;
    .schedule {
      margin: 0.4rem -0.1rem 0 -0.1rem;
    }
    .step-no {
      font-size: 0.32rem;
    }
    .step-content {
      font-size: 0.08rem;
    }
    .icon {
      display: none;
    }
  }

  .sec4 {
    .hd {
      padding-bottom: 0.55rem;
      margin-top: 0.4rem;
      display: block;
      h3 {
        font-size: 0.18rem;
      }
    }
    .f1 {
      margin: auto;
      width: 2.66rem;
      height: 1.65rem;
    }
    .info {
      margin: auto;
      margin-top: 0.07rem;
      font-size: 0.12rem;
      text-align: center;
      // h3 {
      //   font-family: DINProMedium;
      // }
      // p {
      //   font-family: DINProMedium;
      // }
    }
    .items {
      --columns: 2;
      --gutter-width: 0.35rem;
      grid-gap: var(--gutter-width);
      margin-top: 0;
      h3 {
        font-size: 0.12rem;
        margin-top: 0.007rem;
        font-family: DINProMedium;
      }
    }
  }

  .sec5 {
    padding-top: 1.05rem;
    h2 {
      margin-bottom: 0.15rem;
    }
    .content {
      padding: 0;
    }
    .headline {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
      p {
        width: 82%;
      }
    }
    .items {
      margin-top: 0.5rem;
      padding: 0.1rem 0.3rem 0.85rem 0.3rem;
    }
    .item {
      margin-top: 0.3rem;
    }
    h4 {
      font-size: 0.16rem;
    }
  }

  .popup {
    .van-dialog {
      width: 90%;
      max-width: 360px;
    }

    .info {
      padding-left: 12px;
      padding-right: 12px;
    }

    .download-action {
      a {
        font-size: 12px;
      }
    }
  }
}

/*============== form ===========*/
.form-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 160px;
  background: #222;
}
// .action {
//   .download-action {
//     .action-yes {
//       margin: auto;
//     }
//     .action-yes:hover {
//       background: #005b57;
//     }
//   }
// }

.md-field {
  min-height: 40px;

  label {
    left: 10px;
    color: #999;
  }

  &.md-theme-default {
    &:after {
      background-color: #fff;
    }

    &:before {
      background-color: #fff;
    }
  }
}

.md-select-menu {
  &.md-theme-default {
    background: #fff;

    .md-selected {
      background: rgba(0, 0, 0, 0.12);
    }
  }
}

.md-select {
  .md-theme-default {
    svg {
      fill: #fff;
    }
  }
}

.md-icon-button {
  box-sizing: border-box;
}

.md-radio {
  &.md-theme-default {
    .md-radio-container {
      border-color: #fff;
    }

    &.md-checked {
      .md-radio-container {
        border-color: #d85628;

        &:after {
          background: #d85628;
        }
      }
    }
  }
}

.md-checkbox {
  &.md-theme-default {
    .md-checkbox-container {
      border-color: #fff;

      &:after {
        border-color: #d85628;
      }
    }
  }
}

.van-uploader__input-wrapper {
  width: 260px;
  height: 260px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;

  i {
    font-style: normal;
  }
}

.van-uploader__preview-image {
  width: 130px;
  height: 130px;
  overflow: hidden;
  background: #eee;
}

.field-column {
  display: flex;
  justify-content: space-between;

  .column {
    display: flex;
    width: calc(50% - 10px);
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .column-4 {
    width: 25%;
  }

  .column-8 {
    width: calc(75% - 20px);
  }
}

.sms-field {
  width: calc(100% - 160px);
}

.tip {
  position: relative;
  top: -15px;
  font-size: 14px;
  color: #d85628;
}

.btn-send {
  position: relative;
  top: 20px;
  width: 26%;
  height: 40px;
  background: #d85628;
  font-size: 16px;
  text-align: center;
  color: #fff;
  line-height: 40px;
  cursor: pointer;

  &.disabled {
    cursor: default;
    opacity: 0.6;
  }
}

.join-form {
  padding-top: 140px;

  h2 {
    margin-bottom: 90px;
    font-family: "DINProBold";
    font-size: 60px;
    text-align: center;
  }
}

.game-info {
  // margin-top: 140px;

  h4 {
    font-size: 18px;
  }
}

.game-time {
  margin-top: 100px;

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .item {
    width: 50%;
  }
}

.uploader-column {
  display: flex;
  margin-top: 14px;

  .tip {
    top: 0;
    max-width: 250px;
    margin-left: 34px;
  }

  .icon-upload {
    display: inline-block;
    width: 22px;
    height: 22px;
    @include libBgImage("icon_upload.svg", true, true);
  }
}

.form-footer {
  margin-top: 100px;
  text-align: center;

  .btn {
    min-width: 228px;
    height: 50px;
    padding: 0 20px;
    background: #44d62c;
    border-radius: 2px;
    font-family: "DINProBold";
    font-size: 24px;
    border: none;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
  }
  .btn:hover {
    background: #005b57;
  }

  .tip {
    top: 10px;
  }
}

.game-time {
  .tip {
    top: 0;
  }
}

.terms-wrapper {
  max-width: 600px;
  margin: 50px auto 0;
  padding: 0 20px;

  a {
    color: #d85628;
  }

  .md-checkbox {
    position: relative;
    top: 4px;
    margin: 0 10px 4px 0;
  }
}

.field-row,
.column {
  &:not(.err) {
    .tip {
      display: none;
    }
  }
}

.social-logo {
  img {
    width: 40px;
  }
}

.social-media {
  margin-top: 70px;

  h4 {
    margin-top: 15px;
    font-family: "DINProBold";
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
}

.go-back {
  padding-top: 30px;
  text-align: left;

  a {
    color: #fff;

    &:before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 4px;
      vertical-align: -0.2em;
      @include libBgImage("back.svg", true, true);
    }
  }
}

.count-down,
.count-wrapper,
.van-count-down {
  display: inline;
}

.van-count-down {
  color: #fff;
}

[v-cloak] {
  display: none;
}

@include media-width(768px) {
  .join-form {
    padding-top: 15px;

    h2 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .form-content {
    padding: 0;
    // background: #000;
  }

  .field-column {
    display: block;

    .column {
      width: 100%;
    }
  }

  .md-field {
    margin-bottom: 15px;

    label {
      font-size: 14px;
    }
  }

  .sms-field {
    width: calc(100% - 120px);
  }

  .btn-send {
    width: 100px;
    font-size: 14px;
  }

  .personal {
    padding: 10px 20px 20px;
    // background: #222;
  }

  .game-info {
    margin-top: 0;

    h4 {
      font-size: 13px;
    }
  }

  .game-field {
    margin-top: 20px;
    padding: 20px 20px 40px;
    // background: #222;
  }

  .game-time {
    margin-top: 20px;
    padding: 40px 20px 30px;
    // background: #222;

    .list {
      margin-top: 20px;
    }
  }

  .van-uploader__input-wrapper {
    width: 106px;
    height: 106px;
  }

  .uploader-field {
    margin-top: 40px;
  }

  .uploader-column {
    .tip {
      margin-left: 20px;
      font-size: 12px;
    }
  }

  .game-time {
    .item {
      width: 100%;
    }
  }

  .form-footer {
    margin-top: 0;

    .btn {
      width: 100%;
      height: 40px;
      font-size: 13px;
    }
  }

  .action-wrapper {
    padding: 30px 20px 20px;
    // background: #222;
  }

  .terms-wrapper {
    max-width: 100%;
    margin-top: 30px;
    padding: 0;
    font-size: 12px;
    text-align: left;
  }

  .social-media {
    display: flex;
    align-items: center;
    text-align: left;
    margin-top: 20px;
    padding: 20px;
    // background: #222;

    h4 {
      margin-top: 0;
    }
  }

  .social-logo {
    margin-right: 20px;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .go-back {
    padding: 20px 20px 40px;
    // background: #222;
  }

  .tip {
    top: -10px;
  }

  .popup {
    .van-dialog__content {
      direction: rtl;
    }
  }
}

.yutobe-iframe {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .play-yutobe {
    width: 960px;
    height: 540px;
    outline: none;
    border: none;
  }

  @include media-width(768px) {
    .play-yutobe {
      width: 100vw;
      height: 56.25vw;
    }
  }
}

.fullscreen-video {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: #000;
  display: none;

  &.active {
    display: block;
  }

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 1280px;
    min-width: 320px;
    max-height: 90vh;
    transform: translate(-50%, -50%);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
}

#fullscreen-close {
  position: absolute;
  right: 24px;
  top: 24px;
  width: 48px;
  height: 48px;
  background: #f6f4f5;
  color: #211d1e;
  line-height: 48px;
  border-radius: 24px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transform: scale(0.9, 0.9);
  transition: transform 0.2s ease;
  z-index: 100;
  cursor: pointer;

  span {
    display: block;
    position: relative;
    font-size: 20px;
    top: -0.025em;
    font-family: "iconfont";

    &:before {
      content: "\e60a";
    }
  }

  video {
    object-fit: contain;
  }
}

.has-modal-full-viewport {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.van-overflow-hidden {
  overflow-y: auto !important;
}

.van-toast--unclickable {
  overflow-y: auto !important;
  pointer-events: none;
}

//播放页play
.activity-detail {
  .content {
    max-width: 960px;
    margin: 0 auto;
    padding: 100px 20px;
    p {
      margin-bottom: 0.4rem;
    }
  }
  .fb-img {
    width: 100%;
  }
  .opt {
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
  }
  .vote {
    cursor: pointer;
    font-size: 24px;
    vertical-align: middle;
    margin-right: 0.5rem;
    .like {
      background-image: url("https://infinixmob.mez100.com.cn/fileadmin/assets/activity/20220123/images/like.svg");
      display: inline-block;
      width: 28px;
      height: 28px;
      background-position: 50%;
      background-repeat: no-repeat;
      vertical-align: middle;
      background-size: 100%;
    }
  }
  h3 {
    font-size: 24px;
    font-family: DINProBold;
  }
  p {
    font-size: 18px;
  }
  .ssk {
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .ssk:before {
    color: #fff;
  }
}

[v-cloak] {
  display: none;
}

@include media-width(768px) {
  h3 {
    line-height: 1.2;
  }
}
</style>
