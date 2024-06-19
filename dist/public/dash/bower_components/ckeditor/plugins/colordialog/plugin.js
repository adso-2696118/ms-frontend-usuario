/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.colordialog = {
  requires: "dialog",
  lang: "af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",
  init: function (b) {
    var c = new CKEDITOR.dialogCommand("colordialog");
    c.editorFocus = !1;
    b.addCommand("colordialog", c);
    CKEDITOR.dialog.add("colordialog", this.path + "dialogs/colordialog.js");
    b.getColorFromDialog = function (c, f) {
      var d = function (a) {
          this.removeListener("ok", d);
          this.removeListener("cancel", d);
          a = "ok" == a.name ? this.getValueOf("picker", "selectedColor") : null;
          c.call(f, a);
        },
        e = function (a) {
          a.on("ok", d);
          a.on("cancel", d);
        };
      b.execCommand("colordialog");
      if (b._.storedDialogs && b._.storedDialogs.colordialog) e(b._.storedDialogs.colordialog);else CKEDITOR.on("dialogDefinition", function (a) {
        if ("colordialog" == a.data.name) {
          var b = a.data.definition;
          a.removeListener();
          b.onLoad = CKEDITOR.tools.override(b.onLoad, function (a) {
            return function () {
              e(this);
              b.onLoad = a;
              "function" == typeof a && a.call(this);
            };
          });
        }
      });
    };
  }
};
CKEDITOR.plugins.add("colordialog", CKEDITOR.plugins.colordialog);