"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment);
}(function (e, a) {
  !function () {
    a.defineLocale("ca", {
      months: {
        standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
        isFormat: /D[oD]?(\s)+MMMM/
      },
      monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
      monthsParseExact: !0,
      weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
      weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
      weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "[el] D MMMM [de] YYYY",
        ll: "D MMM YYYY",
        LLL: "[el] D MMMM [de] YYYY [a les] H:mm",
        lll: "D MMM YYYY, H:mm",
        LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm",
        llll: "ddd D MMM YYYY, H:mm"
      },
      calendar: {
        sameDay: function sameDay() {
          return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        },
        nextDay: function nextDay() {
          return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        },
        nextWeek: function nextWeek() {
          return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        },
        lastDay: function lastDay() {
          return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        },
        lastWeek: function lastWeek() {
          return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "d'aquí %s",
        past: "fa %s",
        s: "uns segons",
        m: "un minut",
        mm: "%d minuts",
        h: "una hora",
        hh: "%d hores",
        d: "un dia",
        dd: "%d dies",
        M: "un mes",
        MM: "%d mesos",
        y: "un any",
        yy: "%d anys"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
      ordinal: function ordinal(e, a) {
        var d = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
        return "w" !== a && "W" !== a || (d = "a"), e + d;
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(), e.fullCalendar.datepickerLocale("ca", "ca", {
    closeText: "Tanca",
    prevText: "Anterior",
    nextText: "Següent",
    currentText: "Avui",
    monthNames: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
    monthNamesShort: ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
    dayNames: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
    dayNamesShort: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
    dayNamesMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
    weekHeader: "Set",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
  }), e.fullCalendar.locale("ca", {
    buttonText: {
      month: "Mes",
      week: "Setmana",
      day: "Dia",
      list: "Agenda"
    },
    allDayText: "Tot el dia",
    eventLimitText: "més",
    noEventsMessage: "No hi ha esdeveniments per mostrar"
  });
});