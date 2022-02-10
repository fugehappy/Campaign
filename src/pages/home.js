import Vue from 'vue'
import App from '@/components/Home.vue'
import VueI18n from 'vue-i18n'
import '@/assets/script/login.js'
import {
  Dialog,
  Uploader,
  Toast,
} from 'vant';
import {
  MdField,
  MdRadio,
  MdCheckbox,
  MdRipple,
  MdButton,
  MdMenu,
  MdList,
} from 'vue-material/dist/components'

// import 'vue-material/dist/theme/default.css'

Vue.use(VueI18n)
// Vue.use(vant.Lazyload);
Vue.use(Dialog);
Vue.use(Uploader);
Vue.use(Toast);

Vue.use(MdField);
Vue.use(MdRadio);
Vue.use(MdCheckbox);
Vue.use(MdRipple);
Vue.use(MdButton);
Vue.use(MdMenu);
Vue.use(MdList);

const messages = {
  en: {
    message: {
      // 主页
      hello: "hello world",
      campaignTitle: "Capture Your Beautiful Details",
      campaignDesc: "Despite our differences, there's always a beautiful detail that brings us together. Be part of Infinix Challenge and tell us about your beautiful details.",
      participateTitle: "Best Details",
      participateDesc: "Here are the best details we received so far from you. We're waiting for more beautiful details!",
      timelineTitle: "Challenge Schedule",
      timelineOne: "Filtering Participants",
      timelineTwo: "Announcing Winners",
      timelineThree: "Awards Giveaway",
      awardTitle: "Awards",
      awardFP_H3: "Family Pack",
      awardFP_P: "(X2 Laptops + Note 11 + XE 25 + Bag)",
      guidelineTitle: "Challenge Steps",
      guidelineDes: "Make sure you follow these rules, so you can participate in our challenge and have a chance to win an award from Infinix!",
      guideOne: "Step 1",
      guideOneT: "Shoot a video or a photo with your friends or family explaining the beautiful details you love about them or tell us about a beautiful detail in your day.",
      guideTwo: "Step 2",
      guideTwoT: "Upload it on the challenge's website.",
      guideThree: "Step 3",
      guideThreeT: "Share it on your personal page with the hashtag #CaptureYourBeautifulDetails",
      guideFour: "Step 4",
      guideFourT: "Mention 10 of your friends and challenge them to participate.",

      // form表单页
      formTitle: "Join Our Campaign",
      formName: "Your Name",
      formNameTip: "*This field fill in.",
      formAge: "Your Age",
      formAgeTip: "*This field fill in. e.g. 20",
      formNumber: "Phone Number",
      formNumberTip: "*Please confirm the number that we can contact with you if you are selected",
      formEmailAddress: "Email Address",
      formEmailAddressTip: "*This field fill in example@domain.com.",
      formCity: "City",
      formCityTip: "*This field fill in.",
      formPicTitle: "Best Record",
      formUpload: "Click to Upload",
      formLink: "Video link upload",
      formActivity: "Activity",
      formActivityTip: "*This field fill in.",
      formTextInput: "Text Input",
      formTextInputTip: "*This field fill in.",
      formSubmit: "Submit",
    }
  },
  ar: {
    message: {
      hello: 'こんにちは、世界',
      campaignTitle: 'متفوتش تفصيلة حلوة',
      campaignDesc: "برغم اختلاف تفاصيل حياتنا، في حاجة حلوة دايما بتجمعنا مع بعض .. شارك في تحدي إنفينيكس وقولنا على تفاصيلك الحلوة.",
      participateTitle: "أحلى التفاصيل",
      participateDesc: "دي أحلى التفاصيل اللي وصلتنا منكم لحد دلوقتي. مستنيين منكم مشاركات أكتر وأحلى!",
      timelineTitle: "مراحل التحدي",
      timelineOne: "تصفية المشاركين",
      timelineTwo: "إعلان الفائزين",
      timelineThree: "توزيع الهدايا",
      awardTitle: "الهدايا",
      awardFP_H3: "هدية العيلة",
      awardFP_P: "(٢ لابتوب + Note 11 + XE 25 + شنطة)",
      guidelineTitle: "خطوات التحدي",
      guidelineDes: "خلي بالك من القواعد دي عشان تشارك في التحديوتكسب هدية إنفينيكس!",
      guideOne: "خطوة ١",
      guideOneT: "اتصور مع صحابك أو عيلتك وقولنا ايه التفاصيل اللي بتحبها فيهم أو احكيلنا تفصيلة حلوة حصلت في يومك.",
      guideTwo: "خطوة ٢",
      guideTwoT: "ارفع الفيديو أو الصورة على موقع التحدي.",
      guideThree: "خطوة ٣",
      guideThreeT: "اعمل شير على صفحتك مع هاشتاج #متفوتش_تفصيلة_حلوة",
      guideFour: "خطوة ٤",
      guideFourT: "اعمل منشن ل١٠ من صحابك يشاركوا في التحدي."
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

window.i18n = i18n

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
