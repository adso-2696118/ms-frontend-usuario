/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.skin.name = "moono";
CKEDITOR.skin.ua_editor = "ie,iequirks,ie7,ie8,gecko";
CKEDITOR.skin.ua_dialog = "ie,iequirks,ie7,ie8";
CKEDITOR.skin.chameleon = function () {
  var b = function () {
      return function (b, e) {
        for (var a = b.match(/[^#]./g), c = 0; 3 > c; c++) {
          var f = c,
            d;
          d = parseInt(a[c], 16);
          d = ("0" + (0 > e ? 0 | d * (1 + e) : 0 | d + (255 - d) * e).toString(16)).slice(-2);
          a[f] = d;
        }
        return "#" + a.join("");
      };
    }(),
    c = function () {
      var b = new CKEDITOR.template("background:#{to};background-image:linear-gradient(to bottom,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType\x3d0,startColorstr\x3d'{from}',endColorstr\x3d'{to}');");
      return function (c, a) {
        return b.output({
          from: c,
          to: a
        });
      };
    }(),
    f = {
      editor: new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
      panel: new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")
    };
  return function (g, e) {
    var a = g.uiColor,
      a = {
        id: "." + g.id,
        defaultBorder: b(a, -.1),
        defaultGradient: c(b(a, .9), a),
        lightGradient: c(b(a, 1), b(a, .7)),
        mediumGradient: c(b(a, .8), b(a, .5)),
        ckeButtonOn: c(b(a, .6), b(a, .7)),
        ckeResizer: b(a, -.4),
        ckeToolbarSeparator: b(a, .5),
        ckeColorauto: b(a, .8),
        dialogBody: b(a, .7),
        dialogTabSelected: c("#FFFFFF", "#FFFFFF"),
        dialogTabSelectedBorder: "#FFF",
        elementsPathColor: b(a, -.6),
        elementsPathBg: a,
        menubuttonIcon: b(a, .5),
        menubuttonIconHover: b(a, .3)
      };
    return f[e].output(a).replace(/\[/g, "{").replace(/\]/g, "}");
  };
}();