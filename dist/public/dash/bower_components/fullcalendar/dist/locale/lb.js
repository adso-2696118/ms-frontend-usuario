"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment);
}(function (e, n) {
  !function () {
    function e(e, n, t, r) {
      var a = {
        m: ["eng Minutt", "enger Minutt"],
        h: ["eng Stonn", "enger Stonn"],
        d: ["een Dag", "engem Dag"],
        M: ["ee Mount", "engem Mount"],
        y: ["ee Joer", "engem Joer"]
      };
      return n ? a[t][0] : a[t][1];
    }
    function t(e) {
      return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
    }
    function r(e) {
      return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
    }
    function a(e) {
      if (e = parseInt(e, 10), isNaN(e)) return !1;
      if (e < 0) return !0;
      if (e < 10) return 4 <= e && e <= 7;
      if (e < 100) {
        var n = e % 10,
          t = e / 10;
        return a(0 === n ? t : n);
      }
      if (e < 1e4) {
        for (; e >= 10;) e /= 10;
        return a(e);
      }
      return e /= 1e3, a(e);
    }
    n.defineLocale("lb", {
      months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
      weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm [Auer]",
        LTS: "H:mm:ss [Auer]",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm [Auer]",
        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
      },
      calendar: {
        sameDay: "[Haut um] LT",
        sameElse: "L",
        nextDay: "[Muer um] LT",
        nextWeek: "dddd [um] LT",
        lastDay: "[Gëschter um] LT",
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 2:
            case 4:
              return "[Leschten] dddd [um] LT";
            default:
              return "[Leschte] dddd [um] LT";
          }
        }
      },
      relativeTime: {
        future: t,
        past: r,
        s: "e puer Sekonnen",
        m: e,
        mm: "%d Minutten",
        h: e,
        hh: "%d Stonnen",
        d: e,
        dd: "%d Deeg",
        M: e,
        MM: "%d Méint",
        y: e,
        yy: "%d Joer"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(), e.fullCalendar.datepickerLocale("lb", "lb", {
    closeText: "Fäerdeg",
    prevText: "Zréck",
    nextText: "Weider",
    currentText: "Haut",
    monthNames: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mäe", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    dayNames: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
    dayNamesShort: ["Son", "Méi", "Dën", "Mët", "Don", "Fre", "Sam"],
    dayNamesMin: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"],
    weekHeader: "W",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
  }), e.fullCalendar.locale("lb", {
    buttonText: {
      month: "Mount",
      week: "Woch",
      day: "Dag",
      list: "Terminiwwersiicht"
    },
    allDayText: "Ganzen Dag",
    eventLimitText: "méi",
    noEventsMessage: "Nee Evenementer ze affichéieren"
  });
});