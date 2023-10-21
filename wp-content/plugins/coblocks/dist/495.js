"use strict";(self.webpackChunkcoblocks=self.webpackChunkcoblocks||[]).push([[495],{2495:(e,t,l)=>{l.r(t),l.d(t,{default:()=>R});var o=l(7462),n=l(9307),c=l(4184),a=l.n(c),i=l(5736);const s=[{
/* translators: visual style option */
label:(0,i.__)("Dark","coblocks"),value:"dark"},{
/* translators: visual style option */
label:(0,i.__)("Light","coblocks"),value:"light"},{
/* translators: visual style option */
label:(0,i.__)("None","coblocks"),value:"none"}];var r=l(5697),u=l.n(r);const b=[{label:(0,i.__)("None","coblocks"),value:"none"},{label:(0,i.__)("Media file","coblocks"),value:"media"},{label:(0,i.__)("Attachment page","coblocks"),value:"attachment"},{label:(0,i.__)("Custom URL","coblocks"),value:"custom"}];var m=l(5609);class p extends n.Component{constructor(){super(...arguments),this.setNewTab=this.setNewTab.bind(this),this.setLinkRel=this.setLinkRel.bind(this),this.setLinkTo=this.setLinkTo.bind(this)}componentDidUpdate(e){const{attributes:t,setAttributes:l}=this.props,{lightbox:o}=t;"none"!==e.attributes.linkTo&&o&&l({linkTo:"none"})}setLinkTo(e){const{setAttributes:t}=this.props;t({linkTo:e})}setLinkRel(e){const{setAttributes:t}=this.props;t({rel:e})}setNewTab(e){const{attributes:t,setAttributes:l}=this.props,{rel:o}=t,n=e?"_blank":void 0;let c=o;n&&!o?c="noreferrer noopener":n||"noreferrer noopener"!==o||(c=void 0),l({rel:c,target:n})}render(){const{attributes:e,setAttributes:t}=this.props,{lightbox:l,linkTo:o,target:c,rel:a}=e;return(0,n.createElement)(n.Fragment,null,!l&&(0,n.createElement)(m.PanelBody,{initialOpen:!1,title:(0,i.__)("Link settings","coblocks")},(0,n.createElement)(m.SelectControl,{label:(0,i.__)("Link to","coblocks"),onChange:this.setLinkTo,options:b,value:o}),"none"!==o&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(m.ToggleControl,{checked:"_blank"===c,label:(0,i.__)("Open in new tab","coblocks"),onChange:this.setNewTab}),(0,n.createElement)(m.TextControl
/* translators: html attribute that specifies the relationship between two pages */,{label:(0,i.__)("Link rel","coblocks"),onChange:e=>t({rel:e}),value:a}))))}}p.propTypes={attributes:u().object,setAttributes:u().func};const _=p;var g=l(5629);const k=[{
/* translators: abbreviation for small size */
label:(0,i.__)("S","coblocks"),tooltip:(0,i.__)("Small","coblocks"),value:"small"},{
/* translators: abbreviation for medium size */
label:(0,i.__)("M","coblocks"),tooltip:(0,i.__)("Medium","coblocks"),value:"medium"},{
/* translators: abbreviation for large size */
label:(0,i.__)("L","coblocks"),tooltip:(0,i.__)("Large","coblocks"),value:"large"}],d=e=>{const{attributes:t,setAttributes:l}=e,{align:o,gutter:c,gutterCustom:a}=t,s="full"===o?10:5;return(0,n.useEffect)((()=>{a>s&&l({gutterCustom:s})}),[a,s]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g.Z,{currentOption:c,label:(0,i.__)("Gutter","coblocks"),onChange:e=>l({gutter:e}),options:k,showCustomOption:!0}),"custom"===c&&(0,n.createElement)(m.RangeControl,{initialValue:0,max:s,min:0,onChange:e=>l({gutterCustom:e.toString()}),step:.1,value:parseFloat(a)||0,withInputField:!0}))},h=d;d.propTypes={attributes:u().object,setAttributes:u().func};var E=l(2175);const v=e=>{const{attributes:t,setAttributes:l,enableGutter:o,enableCaptions:c}=e,{shadow:a,captions:r,captionStyle:u,lightbox:b}=t,p=[{value:"sm",
/* translators: abbreviation for small size */
label:(0,i.__)("S","coblocks"),tooltip:(0,i.__)("Small","coblocks")},{value:"md",
/* translators: abbreviation for medium size */
label:(0,i.__)("M","coblocks"),tooltip:(0,i.__)("Medium","coblocks")},{value:"lg",
/* translators: abbreviation for large size */
label:(0,i.__)("L","coblocks"),tooltip:(0,i.__)("Large","coblocks")}];return(0,n.createElement)(E.InspectorControls,null,(0,n.createElement)(m.PanelBody,{title:(0,i.__)("Collage settings","coblocks")},o&&(0,n.createElement)(h,e),!o&&(0,n.createElement)(g.Z,{currentOption:a,label:(0,i.__)("Shadow","coblocks"),onChange:e=>{l({shadow:e})},options:p,showNoneOption:!0}),(0,n.createElement)(m.ToggleControl,{checked:!!b,help:e=>e?(0,i.__)("Image lightbox is enabled.","coblocks"):(0,i.__)("Toggle to enable the image lightbox.","coblocks"),label:(0,i.__)("Lightbox","coblocks"),onChange:()=>l({lightbox:!b})}),c&&(0,n.createElement)(m.ToggleControl,{checked:!!r,help:e=>e?(0,i.__)("Showing captions for each media item.","coblocks"):(0,i.__)("Toggle to show media captions.","coblocks"),label:(0,i.__)("Captions","coblocks"),onChange:()=>l({captions:!r})}),r&&(0,n.createElement)(m.SelectControl,{label:(0,i.__)("Caption style","coblocks"),onChange:e=>{l({captionStyle:e})},options:s,value:u})),(0,n.createElement)(_,e))};var f=l(2819),C=l.n(f),w=l(7635),y=l(9818);const T=e=>{let{hoveredFilter:t}=e;if(!t)return null;const l=C().cloneDeep((0,y.select)("core/block-editor").getSelectedBlock());return l.attributes.filter=t,(0,n.createElement)("div",{className:"block-editor-block-switcher__popover__preview__parent"},(0,n.createElement)("div",{className:"block-editor-block-switcher__popover__preview__container"},(0,n.createElement)(m.Popover,{className:"block-editor-block-switcher__preview__popover coblocks-image-filter-popover",focusOnMount:!1,position:"bottom right"},(0,n.createElement)("div",{className:"block-editor-block-switcher__preview coblocks__preview"},(0,n.createElement)("div",{className:"block-editor-block-switcher__preview-title"},(0,i.__)("Preview filter","coblocks")),(0,n.createElement)(E.BlockPreview,{autoHeight:!0,blocks:{...l}})))))},N=e=>{const[t,l]=(0,n.useState)(null),o=e=>{l(e)},{attributes:c,setAttributes:s}=e,{filter:r}=c,u=[{icon:(0,n.createElement)(m.Icon,{icon:w.mJk}),isActive:"none"===r,onClick:()=>{s({filter:"none"})},slug:"none",
/* translators: image style */
title:(0,i.__)("Original","coblocks")},{icon:(0,n.createElement)(m.Icon,{icon:w.NC1}),isActive:"grayscale"===r,onClick:()=>{s({filter:"grayscale"})},slug:"grayscale",
/* translators: image style */
title:(0,i.__)("Grayscale filter","coblocks")},{icon:(0,n.createElement)(m.Icon,{icon:w.amg}),isActive:"sepia"===r,onClick:()=>{s({filter:"sepia"})},slug:"sepia",
/* translators: image style */
title:(0,i.__)("Sepia filter","coblocks")},{icon:(0,n.createElement)(m.Icon,{icon:w.swD}),isActive:"saturation"===r,onClick:()=>{s({filter:"saturation"})},slug:"saturation",
/* translators: image style */
title:(0,i.__)("Saturation filter","coblocks")},{icon:(0,n.createElement)(m.Icon,{icon:w.tu4}),isActive:"dim"===r,onClick:()=>{s({filter:"dim"})},slug:"dim",
/* translators: image style */
title:(0,i.__)("Dim filter","coblocks")},{icon:(0,n.createElement)(m.Icon,{icon:w.jZD}),isActive:"vintage"===r,onClick:()=>{s({filter:"vintage"})},slug:"vintage",
/* translators: image style */
title:(0,i.__)("Vintage filter","coblocks")}];return(0,n.createElement)(m.ToolbarGroup,null,(0,n.createElement)(m.DropdownMenu,{className:a()("components-coblocks-media-filter","none"!==r?"has-filter":""),icon:(0,n.createElement)(m.Icon,{icon:w.AF8}),label:(0,i.__)("Apply filter","coblocks"),noIcons:!0,popoverProps:{className:"components-coblocks-dropdown"}},(()=>(0,n.createElement)(m.MenuGroup,null,(0,n.createElement)(T,{hoveredFilter:t}),u.map((e=>(0,n.createElement)(m.MenuItem,{icon:e.icon,isSelected:r===e.slug,key:`coblocks-image-filter-${e.slug}`,label:e.title,onClick:e.onClick,onMouseEnter:()=>o(e.slug),onMouseLeave:()=>o(null),role:"menuitemradio"},e.title)))))))},S=N;N.propTypes={attributes:u().object,setAttributes:u().func};const I=e=>{const{attributes:t}=e,{images:l}=t,o=!!l.filter((e=>void 0!==e.id)).length;return(0,n.createElement)(E.BlockControls,null,o&&(0,n.createElement)(S,e))};var L=l(2547),A=l(3264),x=l(2238);const D=e=>{const{noticeOperations:t,onSelect:l,label:o}=e;return(0,n.createElement)(m.DropZone,{label:o,onFilesDrop:e=>{(0,x.mediaUpload)({allowedTypes:L.o2,filesList:e,onError:t.createErrorNotice,onFileChange:e=>l(e)})}})};D.propTypes={label:u().string,noticeOperations:u().object,onSelect:u().func};const F=D;var M=l(4333),B=l(1313),O=l(7231);const R=(0,M.compose)([m.withNotices])((e=>{const{attributes:t,className:l,isSelected:c,noticeUI:s,setAttributes:r}=e,[u,b]=(0,n.useState)(null),[p,_]=(0,n.useState)(null),[g,k]=(0,n.useState)(!1),d=(0,M.usePrevious)(l),h=(0,M.usePrevious)(c);(0,n.useEffect)((()=>{l!==d&&(l.includes("is-style-layered")?(_(t.gutter),r({gutter:"small"})):(_(null),r({shadow:"none",gutter:p||t.gutter})))}),[l,d]),(0,n.useEffect)((()=>{c!==h&&!1===c&&b(null)}),[c,h]);const f=e=>t.images.find((t=>parseInt(t.index)===parseInt(e))),C=t=>{const{noticeOperations:l}=e;l.removeAllNotices(),l.createErrorNotice(t)},w=(e,l)=>{const o=[...t.images.filter((e=>parseInt(e.index)!==parseInt(l))),{...L.oj(e),index:l}];r({images:o})},y=(e,l)=>{const o=f(e),n=[...t.images.filter((t=>parseInt(t.index)!==parseInt(e))),Object.assign({},o,l)];r({images:n})},T=()=>{k(!0)},N=e=>{const o=f(e),s=c&&u===o.index,p=!l.includes("is-style-layered"),_=(0,n.createElement)(m.DropZone,{label:(0,i.__)("Drop image to replace","coblocks"),onFilesDrop:t=>((e,t)=>{(0,x.mediaUpload)({allowedTypes:["image"],filesList:e,onFileChange:e=>{let[l]=e;return w(l,t)},onError:C})})(t,e)});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("a",{onClick:()=>(e=>{u!==e&&b(e)})(o.index),role:"button",tabIndex:"0"},(0,n.createElement)("figure",{className:a()({"wp-block-coblocks-gallery-collage__figure":!0,"is-transient":(0,B.isBlobURL)(o.url),"is-selected":s,[`shadow-${t.shadow}`]:t.shadow})},s&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(m.ButtonGroup,{className:"block-library-gallery-item__inline-menu is-right is-visible"},(0,n.createElement)(E.MediaUploadCheck,null,(0,n.createElement)(E.MediaUpload,{allowedTypes:["image"],onSelect:t=>w(t,e),render:e=>{let{open:t}=e;return(0,n.createElement)(m.Button,{className:"coblocks-gallery-item__button-replace",label:(0,i.__)("Replace Image","coblocks"),onClick:t},(0,i.__)("Replace","coblocks"))},value:o.url})),(0,n.createElement)(m.Button,{disabled:!s,icon:O.Z,label:(0,i.__)("Remove image","coblocks"),onClick:()=>(e=>{const l=[...t.images.filter((t=>parseInt(t.index)!==parseInt(e)))];r({images:l})})(e)}))),u===o.index&&"custom"===t.linkTo&&(0,n.createElement)("form",{className:"components-coblocks-gallery-item__image-link",onSubmit:e=>e.preventDefault()},(0,n.createElement)(m.Dashicon,{icon:"admin-links"}),(0,n.createElement)(E.URLInput,{onChange:t=>y(e,{imgLink:t}),value:o.imgLink}),(0,n.createElement)(m.Button,{icon:g?"saved":"editor-break",label:g?(0,i.__)("Saving","coblocks"):(0,i.__)("Apply","coblocks"),onClick:T,type:"submit"})),_,(0,B.isBlobURL)(o.url)&&(0,n.createElement)(m.Spinner,null),(0,n.createElement)("img",{alt:o.alt,src:o.url}),p&&t.captions&&(o.caption||s)&&(0,n.createElement)(E.RichText,{className:"coblocks-gallery--caption",inlineToolbar:!0,isSelected:s,onChange:t=>y(e,{caption:t}),placeholder:(0,i.__)("Write caption…","coblocks"),tagName:"figcaption",value:o.caption}))))},S=l=>{const c=!!f(l),i=a()("wp-block-coblocks-gallery-collage__figure",{[`shadow-${t.shadow}`]:t.shadow});return(0,n.createElement)(E.MediaPlaceholder,{accept:"image/*",addToGallery:!0,allowedTypes:["image"],className:i,disableDropZone:!0,disableMediaButtons:c,icon:!1,labels:{title:" ",instructions:" "},multiple:!1,onError:C,onSelect:e=>w(e,l)},(0,n.createElement)(F,(0,o.Z)({},e,{label:"Drop file to upload",onSelect:e=>{let[t]=e;return w(t,l)}})))},{animation:D,captions:R,captionStyle:U,filter:Z,lightbox:P}=t,G=!l.includes("is-style-layered"),$=!l.includes("is-style-layered"),j=[];for(let e=0;e<(["is-style-tiled","is-style-layered"].includes(t.className)?4:5);e++){const t=f(e);j.push((0,n.createElement)("li",{className:a()("wp-block-coblocks-gallery-collage__item",`item-${e+1}`,{[`coblocks-animate ${D}`]:D,"is-selected":e===parseInt(u)}),key:`image-${e}`},t?N(e):S(e)))}return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(I,e),(0,n.createElement)(v,(0,o.Z)({},e,{enableCaptions:$,enableGutter:G})),s,(0,n.createElement)(A.Z,t,(0,n.createElement)("div",{className:a()(l,{[`has-filter-${Z}`]:"none"!==Z,[`has-caption-style-${U}`]:R&&void 0!==U,"has-lightbox":P})},(0,n.createElement)("ul",null,j))))}))}}]);