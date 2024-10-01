import { reactive } from "vue";
import { LANGUAGES } from "@/constants/languages.js";
export const store = reactive({
  logoName:'findmena.com',
  logoName1:"find",
  logoName2:"mena",
  user: null,
  currentLanguage:null,
  languageList: [
    {
      id: 1,
      identification: LANGUAGES.EN,
      shortName: "EN",
      languageName: "English",
    },
    {
      id: 2,
      identification: LANGUAGES.AR,
      languageName: "Arabic",
      shortName: "AR",
    },
  ],
  setUser(value){
    this.set('user',value)
  },
  getUser(){
    return {
      firstName:"Andrews",
      lastName:"Sharvin",
      _id:"64db5b9a711fff15a45211eb"
    }
    // return JSON.parse(this.get('user'));
  },
  removeUser(){
    this.remove('user')
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
  get(key, defaultValue = null) {
    let value = localStorage.getItem(key);
    if (value === undefined || value === null) {
      value = false;
    }
    return value;
  },
  getLocalLanguage() {
    return this.get("language") ? this.get("language") : "en_US";
  },
  setLocalLanguage(value) {
    this.set("language", value);
    this.currentLanguage=value;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
});
