"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment);
}(function (e, t) {
  !function () {
    function e(e) {
      return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
    }
    t.defineLocale("el", {
      monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
      monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
      months: function months(e, t) {
        return e ? /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
      },
      monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
      weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
      weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
      weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
      meridiem: function meridiem(e, t, n) {
        return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ";
      },
      isPM: function isPM(e) {
        return "μ" === (e + "").toLowerCase()[0];
      },
      meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendarEl: {
        sameDay: "[Σήμερα {}] LT",
        nextDay: "[Αύριο {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[Χθες {}] LT",
        lastWeek: function lastWeek() {
          switch (this.day()) {
            case 6:
              return "[το προηγούμενο] dddd [{}] LT";
            default:
              return "[την προηγούμενη] dddd [{}] LT";
          }
        },
        sameElse: "L"
      },
      calendar: function calendar(t, n) {
        var a = this._calendarEl[t],
          i = n && n.hours();
        return e(a) && (a = a.apply(n)), a.replace("{}", i % 12 == 1 ? "στη" : "στις");
      },
      relativeTime: {
        future: "σε %s",
        past: "%s πριν",
        s: "λίγα δευτερόλεπτα",
        m: "ένα λεπτό",
        mm: "%d λεπτά",
        h: "μία ώρα",
        hh: "%d ώρες",
        d: "μία μέρα",
        dd: "%d μέρες",
        M: "ένας μήνας",
        MM: "%d μήνες",
        y: "ένας χρόνος",
        yy: "%d χρόνια"
      },
      dayOfMonthOrdinalParse: /\d{1,2}η/,
      ordinal: "%dη",
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(), e.fullCalendar.datepickerLocale("el", "el", {
    closeText: "Κλείσιμο",
    prevText: "Προηγούμενος",
    nextText: "Επόμενος",
    currentText: "Σήμερα",
    monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
    monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
    dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
    dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
    dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
    weekHeader: "Εβδ",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
  }), e.fullCalendar.locale("el", {
    buttonText: {
      month: "Μήνας",
      week: "Εβδομάδα",
      day: "Ημέρα",
      list: "Ατζέντα"
    },
    allDayText: "Ολοήμερο",
    eventLimitText: "περισσότερα",
    noEventsMessage: "Δεν υπάρχουν γεγονότα για να εμφανιστεί"
  });
});