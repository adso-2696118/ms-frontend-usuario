/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function () {
  function f(a) {
    return a.getName && !a.hasAttribute("data-cke-temp");
  }
  CKEDITOR.plugins.add("widgetselection", {
    init: function (a) {
      if (CKEDITOR.env.webkit) {
        var b = CKEDITOR.plugins.widgetselection;
        a.on("contentDom", function (a) {
          a = a.editor;
          var d = a.document,
            e = a.editable();
          e.attachListener(d, "keydown", function (a) {
            var c = a.data.$;
            65 == a.data.getKey() && (CKEDITOR.env.mac && c.metaKey || !CKEDITOR.env.mac && c.ctrlKey) && CKEDITOR.tools.setTimeout(function () {
              b.addFillers(e) || b.removeFillers(e);
            }, 0);
          }, null, null, -1);
          a.on("selectionCheck", function (a) {
            b.removeFillers(a.editor.editable());
          });
          a.on("paste", function (a) {
            a.data.dataValue = b.cleanPasteData(a.data.dataValue);
          });
          "selectall" in a.plugins && b.addSelectAllIntegration(a);
        });
      }
    }
  });
  CKEDITOR.plugins.widgetselection = {
    startFiller: null,
    endFiller: null,
    fillerAttribute: "data-cke-filler-webkit",
    fillerContent: "\x26nbsp;",
    fillerTagName: "div",
    addFillers: function (a) {
      var b = a.editor;
      if (!this.isWholeContentSelected(a) && 0 < a.getChildCount()) {
        var c = a.getFirst(f),
          d = a.getLast(f);
        c && c.type == CKEDITOR.NODE_ELEMENT && !c.isEditable() && (this.startFiller = this.createFiller(), a.append(this.startFiller, 1));
        d && d.type == CKEDITOR.NODE_ELEMENT && !d.isEditable() && (this.endFiller = this.createFiller(!0), a.append(this.endFiller, 0));
        if (this.hasFiller(a)) return b = b.createRange(), b.selectNodeContents(a), b.select(), !0;
      }
      return !1;
    },
    removeFillers: function (a) {
      if (this.hasFiller(a) && !this.isWholeContentSelected(a)) {
        var b = a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dstart]"),
          c = a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dend]");
        this.startFiller && b && this.startFiller.equals(b) ? this.removeFiller(this.startFiller, a) : this.startFiller = b;
        this.endFiller && c && this.endFiller.equals(c) ? this.removeFiller(this.endFiller, a) : this.endFiller = c;
      }
    },
    cleanPasteData: function (a) {
      a && a.length && (a = a.replace(this.createFillerRegex(), "").replace(this.createFillerRegex(!0), ""));
      return a;
    },
    isWholeContentSelected: function (a) {
      var b = a.editor.getSelection().getRanges()[0];
      return !b || b && b.collapsed ? !1 : (b = b.clone(), b.enlarge(CKEDITOR.ENLARGE_ELEMENT), !!(b && a && b.startContainer && b.endContainer && 0 === b.startOffset && b.endOffset === a.getChildCount() && b.startContainer.equals(a) && b.endContainer.equals(a)));
    },
    hasFiller: function (a) {
      return 0 < a.find(this.fillerTagName + "[" + this.fillerAttribute + "]").count();
    },
    createFiller: function (a) {
      var b = new CKEDITOR.dom.element(this.fillerTagName);
      b.setHtml(this.fillerContent);
      b.setAttribute(this.fillerAttribute, a ? "end" : "start");
      b.setAttribute("data-cke-temp", 1);
      b.setStyles({
        display: "block",
        width: 0,
        height: 0,
        padding: 0,
        border: 0,
        margin: 0,
        position: "absolute",
        top: 0,
        left: "-9999px",
        opacity: 0,
        overflow: "hidden"
      });
      return b;
    },
    removeFiller: function (a, b) {
      if (a) {
        var c = b.editor,
          d = b.editor.getSelection().getRanges()[0].startPath(),
          e = c.createRange(),
          g,
          f;
        d.contains(a) && (g = a.getHtml(), f = !0);
        d = "start" == a.getAttribute(this.fillerAttribute);
        a.remove();
        g && 0 < g.length && g != this.fillerContent ? (b.insertHtmlIntoRange(g, c.getSelection().getRanges()[0]), e.setStartAt(b.getChild(b.getChildCount() - 1), CKEDITOR.POSITION_BEFORE_END), c.getSelection().selectRanges([e])) : f && (d ? e.setStartAt(b.getFirst().getNext(), CKEDITOR.POSITION_AFTER_START) : e.setEndAt(b.getLast().getPrevious(), CKEDITOR.POSITION_BEFORE_END), b.editor.getSelection().selectRanges([e]));
      }
    },
    createFillerRegex: function (a) {
      var b = this.createFiller(a).getOuterHtml().replace(/style="[^"]*"/gi, 'style\x3d"[^"]*"').replace(/>[^<]*</gi, "\x3e[^\x3c]*\x3c");
      return new RegExp((a ? "" : "^") + b + (a ? "$" : ""));
    },
    addSelectAllIntegration: function (a) {
      var b = this;
      a.editable().attachListener(a, "beforeCommandExec", function (c) {
        var d = a.editable();
        "selectAll" == c.data.name && d && b.addFillers(d);
      }, null, null, 9999);
    }
  };
})();