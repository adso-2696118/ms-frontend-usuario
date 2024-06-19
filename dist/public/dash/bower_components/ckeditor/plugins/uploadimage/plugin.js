/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function () {
  CKEDITOR.plugins.add("uploadimage", {
    requires: "uploadwidget",
    onLoad: function () {
      CKEDITOR.addCss(".cke_upload_uploading img{opacity: 0.3}");
    },
    init: function (d) {
      if (CKEDITOR.plugins.clipboard.isFileApiSupported) {
        var f = CKEDITOR.fileTools,
          h = f.getUploadUrl(d.config, "image");
        h ? (f.addUploadWidget(d, "uploadimage", {
          supportedTypes: /image\/(jpeg|png|gif|bmp)/,
          uploadUrl: h,
          fileToElement: function () {
            var a = new CKEDITOR.dom.element("img");
            a.setAttribute("src", k);
            return a;
          },
          parts: {
            img: "img"
          },
          onUploading: function (a) {
            this.parts.img.setAttribute("src", a.data);
          },
          onUploaded: function (a) {
            var b = this.parts.img.$;
            this.replaceWith('\x3cimg src\x3d"' + a.url + '" width\x3d"' + (a.responseData.width || b.naturalWidth) + '" height\x3d"' + (a.responseData.height || b.naturalHeight) + '"\x3e');
          }
        }), d.on("paste", function (a) {
          if (a.data.dataValue.match(/<img[\s\S]+data:/i)) {
            a = a.data;
            var b = document.implementation.createHTMLDocument(""),
              b = new CKEDITOR.dom.element(b.body),
              l,
              c,
              g;
            b.data("cke-editable", 1);
            b.appendHtml(a.dataValue);
            l = b.find("img");
            for (g = 0; g < l.count(); g++) {
              c = l.getItem(g);
              var e = c.getAttribute("src") && "data:" == c.getAttribute("src").substring(0, 5),
                k = null === c.data("cke-realelement");
              e && k && !c.data("cke-upload-id") && !c.isReadOnly(1) && (e = d.uploadRepository.create(c.getAttribute("src")), e.upload(h), f.markElement(c, "uploadimage", e.id), f.bindNotifications(d, e));
            }
            a.dataValue = b.getHtml();
          }
        })) : CKEDITOR.error("uploadimage-config");
      }
    }
  });
  var k = "data:image/gif;base64,R0lGODlhDgAOAIAAAAAAAP///yH5BAAAAAAALAAAAAAOAA4AAAIMhI+py+0Po5y02qsKADs\x3d";
})();