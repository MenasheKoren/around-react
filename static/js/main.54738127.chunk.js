(this.webpackJsonpweb_project_10=this.webpackJsonpweb_project_10||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(7),i=a.n(c),r=(a(6),a(2)),o=a.p+"static/media/logo.229667a1.svg",l=a(0);function d(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,alt:"Around the U.S. logo",className:"header__logo"})})}var u=a(10),p=a.p+"static/media/cousteau.87e72696.jpg",j=a.p+"static/media/edit.ff0fcb31.svg",b=a(8),m=a(9),h=function(){function e(t){var a=t.baseUrl,s=t.headers;Object(b.a)(this,e),this._baseUrl=a,this._headers=s}return Object(m.a)(e,[{key:"getInitialCards",value:function(){return _("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"getUserInfo",value:function(){return _("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editUserInfo",value:function(e){return _("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"editAvatar",value:function(e){return _("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})})}},{key:"createCard",value:function(e){return _("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return _("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"})}},{key:"addLikes",value:function(e){return _("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"})}},{key:"removeLikes",value:function(e){return _("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"})}}]),e}(),_=function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)}))},O=new h({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"a422b90c-eef7-4772-9177-7c895e07d221","Content-Type":"application/json"}}),f=function(e){return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("button",{className:"card__remove button button_hover_dark"}),Object(l.jsx)("img",{className:"card__image",src:e.link,alt:e.title,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"card__caption",children:[Object(l.jsx)("h3",{className:"card__location ellipses",children:e.title}),Object(l.jsxs)("div",{className:"likes-container",children:[Object(l.jsx)("button",{className:"card__like button button_empty button_hover_light",type:"button"}),Object(l.jsx)("span",{className:"card__likes-count",children:e.likes})]})]})]})};function x(e){var t=n.a.useState("Jacques Cousteau"),a=Object(r.a)(t,2),c=a[0],i=a[1],o=n.a.useState("Explorer"),d=Object(r.a)(o,2),b=d[0],m=d[1],h=n.a.useState(p),_=Object(r.a)(h,2),x=_[0],v=_[1],g=n.a.useState([]),k=Object(r.a)(g,2),N=k[0],y=k[1];return Object(s.useEffect)((function(){Promise.all([O.getInitialCards(),O.getUserInfo()]).then((function(e){var t=Object(r.a)(e,2),a=t[0],s=t[1];i(s.name),m(s.about),v(s.avatar),y(Object(u.a)(a))})).catch((function(e){return console.log("Error.....: ".concat(e))}))}),[]),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"avatar",children:[Object(l.jsx)("img",{className:"avatar__image",src:x,alt:"Jacques Cousteau smiling on the sea"}),Object(l.jsx)("img",{onClick:e.onEditAvatarClick,className:"avatar__edit-icon",src:j,alt:"Edit icon"})]}),Object(l.jsxs)("div",{className:" profile-info",children:[Object(l.jsxs)("div",{className:" profile-info__name",children:[Object(l.jsxs)("div",{className:" profile-info__edit",children:[Object(l.jsx)("h1",{className:" edit-name ellipses",children:c}),Object(l.jsx)("button",{onClick:e.onEditProfileClick,className:" edit-button button button_hover_dark",type:" button"})]}),Object(l.jsx)("p",{className:" profile-info__profession ellipses",children:b})]}),Object(l.jsx)("button",{onClick:e.onAddPlaceClick,className:" add-button button button_hover_dark",type:" button"})]})]}),Object(l.jsx)("section",{className:"cards",children:Object(l.jsx)("ul",{className:"card-list",children:N.map((function(t,a){return Object(l.jsx)(f,{card:t,title:t.name,link:t.link,likes:t.likes.length,onCardClick:e.handleCardClick},a)}))})})]})}function v(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})}var g=function(e){var t=e.name,a=e.title,s=e.children,n=e.isOpen,c=e.closeAllPopups;return Object(l.jsx)("section",{className:["popup popup_type_".concat(t),n?"popup_opened":""].join(" "),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"popup__close button button_hover_dark",type:"button",onClick:c}),Object(l.jsx)("h2",{className:"popup__title",children:a}),Object(l.jsx)("form",{className:"popup__form",children:s})]})})},k=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:["popup popup_type_image",e.isSelectedCard?"popup_opened":""].join(" "),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(l.jsx)("button",{className:"popup__close popup__close_type_image button button_hover_dark",type:"button",onClick:e.closeAllPopups}),Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{className:"popup__image",src:e.isSelectedCard.link,alt:e.isSelectedCard.title}),Object(l.jsx)("figcaption",{className:"popup__caption",children:e.isSelectedCard.title})]})]})})})};var N=function(){var e=n.a.useState(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=n.a.useState(!1),i=Object(r.a)(c,2),o=i[0],u=i[1],p=n.a.useState(!1),j=Object(r.a)(p,2),b=j[0],m=j[1],h=n.a.useState(!1),_=Object(r.a)(h,2),O=_[0],f=_[1],N=n.a.useState(!1),y=Object(r.a)(N,2),C=y[0],S=y[1];function P(){s(!1),u(!1),m(!1),f(!1),S(!1)}return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)(d,{}),Object(l.jsx)(x,{onEditAvatarClick:function(){s(!0)},onEditProfileClick:function(){u(!0)},onAddPlaceClick:function(){m(!0)},handleCardClick:function(e){var t=e.link,a=e.name;S({title:a,link:t})},onDeletePlaceClick:function(){f(!0)}}),Object(l.jsx)(v,{}),Object(l.jsxs)(g,{name:"edit-avatar",title:"Update profile picture",message:"Save",isOpen:a,closeAllPopups:P,children:[Object(l.jsx)("input",{id:"image-link-input",className:"field-input field-input_type_image-link",name:"image-link",type:"url",placeholder:"Image URL",required:!0}),Object(l.jsx)("span",{className:"error-message",id:"image-link-input-error"}),Object(l.jsx)("button",{className:"popup__save button button_hover_darker",type:"submit",children:"Save"})]}),Object(l.jsxs)(g,{name:"edit-profile",title:"Edit profile",message:"Save",isOpen:o,closeAllPopups:P,children:[Object(l.jsx)("input",{id:"name-input",className:"field-input field-input_type_name",name:"name",type:"text",placeholder:"Name",required:!0,minLength:"2",maxLength:"40",pattern:".*\\S.*"}),Object(l.jsx)("span",{className:"error-message",id:"name-input-error"}),Object(l.jsx)("input",{id:"profession-input",className:"field-input field-input_type_profession",name:"profession",type:"text",placeholder:"Profession",required:!0,minLength:"2",maxLength:"200",pattern:".*\\S.*"}),Object(l.jsx)("span",{className:"error-message",id:"profession-input-error"}),Object(l.jsx)("button",{className:"popup__save button button_hover_darker",type:"submit",children:"Save"})]}),Object(l.jsxs)(g,{name:"add-card",title:"New place",message:"Create",isOpen:b,closeAllPopups:P,children:[Object(l.jsx)("input",{id:"card-title-input",className:"field-input field-input_type_card-title",name:"card-title",type:"text",placeholder:"Title",required:!0,minLength:"1",maxLength:"30",pattern:".*\\S.*"}),Object(l.jsx)("span",{className:"error-message",id:"card-title-input-error"}),Object(l.jsx)("input",{id:"card-link-input",className:"field-input field-input_type_card-link",name:"card-link",type:"url",placeholder:"Image URL",required:!0}),Object(l.jsx)("span",{className:"error-message",id:"card-link-input-error"}),Object(l.jsx)("button",{className:"popup__save button button_hover_darker",type:"submit",children:"Create"})]}),Object(l.jsx)(g,{name:"remove-card",title:"Are you sure?",message:"Yes",isOpen:O,closeAllPopups:P,children:Object(l.jsx)("button",{className:"popup__save popup__save_type_remove-card button button_hover_darker",type:"submit",children:"Yes"})}),Object(l.jsx)(k,{closeAllPopups:P,isSelectedCard:C})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()},6:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.54738127.chunk.js.map