!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(5),n(6),n(7),t.exports=n(8)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=(n.n(o),n(3)),a=(n.n(r),n(4));n.n(a)},function(t,e){$(document).ready(function(){$(".gjs-pn-panels").append($("#sidebar-bottom-buttons")),window.editor.on("run:open-sm",function(t){$("#gjs-sm-advanced .gjs-sm-properties").append($(".gjs-clm-tags"))})})},function(t,e){$(document).ready(function(){function t(){var t=window.editor;n();var o=t.getWrapper().find("[phpb-content-container]")[0].clone(),r=function t(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];var a={};a.current_block={};a.blocks={};var i=o;var s=r;void 0!==n.attributes["block-id"]&&("false"===n.attributes["is-html"]?(i=!0,s=!1):o&&"true"===n.attributes["is-html"]&&(s=!0));n.get("components").forEach(function(e){var n=t(e,i,s);for(var o in n.current_block)a.current_block[o]=n.current_block[o];for(var r in n.blocks)a.blocks[r]=n.blocks[r]});if(void 0!==n.attributes["block-id"])if(o&&"true"===n.attributes["is-html"]&&!1===r)a.current_block[n.attributes["block-id"]]=n.toHTML();else if("false"===n.attributes["is-html"]){var c="ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+e++).toUpperCase();n.replaceWith({tagName:"phpb-block",attributes:{slug:n.attributes["block-slug"],id:c}}),a.blocks[c]=a.current_block,a.current_block={}}return a}(o).blocks,a=function(t){var e="";t.get("components").forEach(function(t){return e+=t.toHTML()});var n=$("<container>"+e+"</container>");return n.find("phpb-block").each(function(){$(this).replaceWith('[block slug="'+$(this).attr("slug")+'" id="'+$(this).attr("id")+'"]')}),n.html()}(o),i=t.getCss(),s=t.getStyle(),c=[];o.get("components").forEach(function(t){return c.push(t.toJSON())}),$.ajax({type:"POST",url:$("#save-page").data("url"),data:{data:{html:a,css:i,components:JSON.stringify(c),blocks:JSON.stringify(r),style:JSON.stringify(s)}},success:function(){n(),window.toastr.success(window.translations["toastr-changes-saved"])},error:function(){n(),window.toastr.error(window.translations["toastr-saving-failed"])}})}$("#save-page").click(function(){t()}),$(document).bind("keydown",function(e){if(e.ctrlKey&&83===e.which)return t(),e.preventDefault(),!1});var e=0;function n(){var t=$("#save-page");t.blur(),t.hasClass("waiting")?(t.attr("disabled",!1),t.removeClass("waiting"),t.find(".spinner-border").addClass("d-none")):(t.attr("disabled",!0),t.addClass("waiting"),t.find(".spinner-border").removeClass("d-none"))}})},function(t,e){!function(){function t(e){if("phpb-block"===e.attributes.tagName){var n=e.parent(),o=e.clone(),r=void 0;n.components().each(function(t){t.cid===e.cid&&(1===e.components().length?(r=e.components().models[0].clone(),e.replaceWith(r)):(r=e.replaceWith({tagName:"div"}),o.components().each(function(t){r.append(t.clone())})))}),e.remove(),function(t,e){var n=t.attributes.attributes;for(var o in n)n.hasOwnProperty(o)&&(e.attributes[o]=n[o])}(o,r),t(r)}else e.components().each(function(e){t(e)})}function e(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n(t),void 0!==t.attributes.attributes["phpb-content-container"])t.set({droppable:!0,hoverable:!0});else if(void 0!==t.attributes["block-slug"]){var a={removable:!0,draggable:!0,copyable:!0,selectable:!0,hoverable:!0,stylable:!0};"false"===t.attributes["is-html"]?o=!0:(o&&(a.removable=!1,a.copyable=!1,a.draggable=!1,o=!1),r=!0),t.set(a)}r&&function(t){var e=t.get("tagName");["div","span","h1","h2","h3","h4","h5","h6","h7","p","a","img","button","small","b","strong","i","em","ul","li","th","td"].includes(e)&&t.set({hoverable:!0,selectable:!0,editable:!0,stylable:!0})}(t),function(t){"phpb-editable"in t.attributes.attributes&&t.set({hoverable:!0,selectable:!0,editable:!0,stylable:!0})}(t),t.get("components").each(function(t){return e(t,o,r)})}function n(t){t.set({removable:!1,draggable:!1,droppable:!1,badgable:!1,stylable:!1,highlightable:!1,copyable:!1,resizable:!1,editable:!1,layerable:!1,selectable:!1,hoverable:!1})}window.editor.on("load",function(o){!function t(e){if("phpb-content-container"in e.attributes.attributes)return;n(e);e.get("components").each(function(e){return t(e)})}(o.getWrapper());var r=o.getWrapper().find("[phpb-content-container]")[0];r.set("custom-name",window.translations["page-content"]),r.components(window.pageComponents),function t(e){var n=e;if("phpb-block"===e.get("tagName")){var o=e.attributes.attributes.id;void 0!==window.dynamicBlocks[o]&&(n=e.replaceWith(window.dynamicBlocks[o]))}n.get("components").each(function(e){return t(e)})}(r),t(r),e(r)}),window.editor.on("component:selected",function(t){document.querySelector(".gjs-toolbar").classList.add("d-none"),(t.attributes.draggable||t.attributes.removable)&&document.querySelector(".gjs-toolbar").classList.remove("d-none")}),window.editor.on("block:drag:stop",function(n){if(n){var o=n.parent();t(n),e(o)}})}()},function(t,e){},function(t,e){},function(t,e){},function(t,e){}]);