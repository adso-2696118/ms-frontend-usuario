/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("colordialog", function (x) {
  function m() {
    h.getById(n).removeStyle("background-color");
    p.getContentElement("picker", "selectedColor").setValue("");
    y();
  }
  function z(a) {
    a = a.data.getTarget();
    var c;
    "td" == a.getName() && (c = a.getChild(0).getHtml()) && (y(), f = a, f.setAttribute("aria-selected", !0), f.addClass("cke_colordialog_selected"), p.getContentElement("picker", "selectedColor").setValue(c));
  }
  function y() {
    f && (f.removeClass("cke_colordialog_selected"), f.removeAttribute("aria-selected"), f = null);
  }
  function D(a) {
    a = a.replace(/^#/, "");
    for (var c = 0, b = []; 2 >= c; c++) b[c] = parseInt(a.substr(2 * c, 2), 16);
    return 165 <= .2126 * b[0] + .7152 * b[1] + .0722 * b[2];
  }
  function A(a) {
    !a.name && (a = new CKEDITOR.event(a));
    var c = !/mouse/.test(a.name),
      b = a.data.getTarget(),
      g;
    "td" == b.getName() && (g = b.getChild(0).getHtml()) && (q(a), c ? d = b : B = b, c && b.addClass(D(g) ? "cke_colordialog_focused_light" : "cke_colordialog_focused_dark"), r(g));
  }
  function q(a) {
    if (a = !/mouse/.test(a.name) && d) a.removeClass("cke_colordialog_focused_light"), a.removeClass("cke_colordialog_focused_dark");
    d || B || r(!1);
  }
  function r(a) {
    a ? (h.getById(t).setStyle("background-color", a), h.getById(u).setHtml(a)) : (h.getById(t).removeStyle("background-color"), h.getById(u).setHtml("\x26nbsp;"));
  }
  function E(a) {
    var c = a.data,
      b = c.getTarget(),
      g = c.getKeystroke(),
      e = "rtl" == x.lang.dir;
    switch (g) {
      case 38:
        if (a = b.getParent().getPrevious()) a = a.getChild([b.getIndex()]), a.focus();
        c.preventDefault();
        break;
      case 40:
        (a = b.getParent().getNext()) && (a = a.getChild([b.getIndex()])) && 1 == a.type && a.focus();
        c.preventDefault();
        break;
      case 32:
      case 13:
        z(a);
        c.preventDefault();
        break;
      case e ? 37 : 39:
        (a = b.getNext()) ? 1 == a.type && (a.focus(), c.preventDefault(!0)) : (a = b.getParent().getNext()) && (a = a.getChild([0])) && 1 == a.type && (a.focus(), c.preventDefault(!0));
        break;
      case e ? 39 : 37:
        if (a = b.getPrevious()) a.focus(), c.preventDefault(!0);else if (a = b.getParent().getPrevious()) a = a.getLast(), a.focus(), c.preventDefault(!0);
    }
  }
  var v = CKEDITOR.dom.element,
    h = CKEDITOR.document,
    e = x.lang.colordialog,
    p,
    f,
    C = {
      type: "html",
      html: "\x26nbsp;"
    },
    d,
    B,
    l = function (a) {
      return CKEDITOR.tools.getNextId() + "_" + a;
    },
    t = l("hicolor"),
    u = l("hicolortext"),
    n = l("selhicolor"),
    k;
  (function () {
    function a(a, d) {
      for (var w = a; w < a + 3; w++) {
        var f = new v(k.$.insertRow(-1));
        f.setAttribute("role", "row");
        for (var e = d; e < d + 3; e++) for (var g = 0; 6 > g; g++) c(f.$, "#" + b[e] + b[g] + b[w]);
      }
    }
    function c(a, c) {
      var b = new v(a.insertCell(-1));
      b.setAttribute("class", "ColorCell cke_colordialog_colorcell");
      b.setAttribute("tabIndex", -1);
      b.setAttribute("role", "gridcell");
      b.on("keydown", E);
      b.on("click", z);
      b.on("focus", A);
      b.on("blur", q);
      b.setStyle("background-color", c);
      var d = l("color_table_cell");
      b.setAttribute("aria-labelledby", d);
      b.append(CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + d + '" class\x3d"cke_voice_label"\x3e' + c + "\x3c/span\x3e", CKEDITOR.document));
    }
    k = CKEDITOR.dom.element.createFromHtml('\x3ctable tabIndex\x3d"-1" class\x3d"cke_colordialog_table" aria-label\x3d"' + e.options + '" role\x3d"grid" style\x3d"border-collapse:separate;" cellspacing\x3d"0"\x3e\x3ccaption class\x3d"cke_voice_label"\x3e' + e.options + '\x3c/caption\x3e\x3ctbody role\x3d"presentation"\x3e\x3c/tbody\x3e\x3c/table\x3e');
    k.on("mouseover", A);
    k.on("mouseout", q);
    var b = "00 33 66 99 cc ff".split(" ");
    a(0, 0);
    a(3, 0);
    a(0, 3);
    a(3, 3);
    var g = new v(k.$.insertRow(-1));
    g.setAttribute("role", "row");
    c(g.$, "#000000");
    for (var f = 0; 16 > f; f++) {
      var d = f.toString(16);
      c(g.$, "#" + d + d + d + d + d + d);
    }
    c(g.$, "#ffffff");
  })();
  CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(CKEDITOR.plugins.get("colordialog").path + "dialogs/colordialog.css"));
  return {
    title: e.title,
    minWidth: 360,
    minHeight: 220,
    onLoad: function () {
      p = this;
    },
    onHide: function () {
      m();
      d.removeClass("cke_colordialog_focused_light");
      d.removeClass("cke_colordialog_focused_dark");
      r(!1);
      d = null;
    },
    contents: [{
      id: "picker",
      label: e.title,
      accessKey: "I",
      elements: [{
        type: "hbox",
        padding: 0,
        widths: ["70%", "10%", "30%"],
        children: [{
          type: "html",
          html: "\x3cdiv\x3e\x3c/div\x3e",
          onLoad: function () {
            CKEDITOR.document.getById(this.domId).append(k);
          },
          focus: function () {
            (d || this.getElement().getElementsByTag("td").getItem(0)).focus();
          }
        }, C, {
          type: "vbox",
          padding: 0,
          widths: ["70%", "5%", "25%"],
          children: [{
            type: "html",
            html: "\x3cspan\x3e" + e.highlight + '\x3c/span\x3e\x3cdiv id\x3d"' + t + '" style\x3d"border: 1px solid; height: 74px; width: 74px;"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + u + '"\x3e\x26nbsp;\x3c/div\x3e\x3cspan\x3e' + e.selected + '\x3c/span\x3e\x3cdiv id\x3d"' + n + '" style\x3d"border: 1px solid; height: 20px; width: 74px;"\x3e\x3c/div\x3e'
          }, {
            type: "text",
            label: e.selected,
            labelStyle: "display:none",
            id: "selectedColor",
            style: "width: 76px;margin-top:4px",
            onChange: function () {
              try {
                h.getById(n).setStyle("background-color", this.getValue());
              } catch (a) {
                m();
              }
            }
          }, C, {
            type: "button",
            id: "clear",
            label: e.clear,
            onClick: m
          }]
        }]
      }]
    }]
  };
});