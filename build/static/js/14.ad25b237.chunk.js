(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[14,18],{678:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function n(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,a);null!=t&&(r=t)}})),r}return(0,l.default)(n)};var n,r=a(683),l=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},681:function(e,t,a){e.exports=function(){"use strict";var e='.custom-file input[type="file"]',t=".custom-file-label",a="form",n="input",r=function(e){var a="",n=e.parentNode.querySelector(t);return n&&(a=n.textContent),a},l=function(e){if(e.childNodes.length>0)for(var t=[].slice.call(e.childNodes),a=0;a<t.length;a++){var n=t[a];if(3!==n.nodeType)return n}return e},s=function(e){var a=e.bsCustomFileInput.defaultText,n=e.parentNode.querySelector(t);n&&(l(n).textContent=a)},i=!!window.File;function c(){var e=this.parentNode.querySelector(t);if(e){var a=l(e),n=function(e){if(e.hasAttribute("multiple")&&i)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value}(this);n.length?a.textContent=n:s(this)}}function o(){for(var e=[].slice.call(this.querySelectorAll(n)).filter((function(e){return!!e.bsCustomFileInput})),t=0,a=e.length;t<a;t++)s(e[t])}var u="reset",m="change";return{init:function(t,n){void 0===t&&(t=e),void 0===n&&(n=a);for(var l=[].slice.call(document.querySelectorAll(t)),s=[].slice.call(document.querySelectorAll(n)),i=0,d=l.length;i<d;i++){var b=l[i];Object.defineProperty(b,"bsCustomFileInput",{value:{defaultText:r(b)},writable:!0}),c.call(b),b.addEventListener(m,c)}for(var f=0,p=s.length;f<p;f++)s[f].addEventListener(u,o),Object.defineProperty(s[f],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(a)).filter((function(e){return!!e.bsCustomFileInput})),t=[].slice.call(document.querySelectorAll(n)).filter((function(e){return!!e.bsCustomFileInput})),r=0,l=t.length;r<l;r++){var i=t[r];s(i),i.bsCustomFileInput=void 0,i.removeEventListener(m,c)}for(var d=0,b=e.length;d<b;d++)e[d].removeEventListener(u,o),e[d].bsCustomFileInput=void 0}}}()},683:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,n,r,l,s){var i=r||"<<anonymous>>",c=s||n;if(null==a[n])return t?new Error("Required "+l+" `"+c+"` was not specified in `"+i+"`."):null;for(var o=arguments.length,u=Array(o>6?o-6:0),m=6;m<o;m++)u[m-6]=arguments[m];return e.apply(void 0,[a,n,i,l,c].concat(u))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},689:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQrSURBVHgB7Zv/dZswEMfPffm/3iB0gtIJQjZwJ4g7Qb1B6ATxBnYmSDoB3sDpBLABzgRXqUjNId8hYZvEYD7v8QDpKyGdfoMAGBkJAhGn6rhXR4kVW33foE/UkRltaa4jT9y50evzg3YX9LGJz6ZFX99BV5gE2sS5ZIx+hjIzRp8J2q1rBG1EknGXBXSBKR0kpZNi3SALR0/9ntSxJvclzZS6njt+SxPGkjbEnZm0lCR8BKfGeWhi3GhJ5EKGqHvKGQzrpX9n3KZOpqbGPaFxE/e5ZLBTZD4mkZeOX0b8YuO24hJjDGbJSEYptGYsiXvCGHFFtNRgObTgU4AmItcvjt8fch0z+o29mEwmhTrtHG1MtIXS7IRnJeb8lXu2CVfY56PQeXK0NUDh+L0wughkbAZ1iWndtCFuen9twwXqIwjkqsnTJPKaONmEWz7Ta2Q6IMetgLqhmuKeNvhJbhbdbP/XJlP7wlGBf6I81PSRHIV5woTJ/FydbAdTQFUStjR28FaNJSJyXXi0NO4QfUSufWmJGLfvqjY8QxNYTT40qbmnQ8wWPGB9DJ95tHSE8fbeWJ9PLDzaBVMTMt8zwCrJPR2+yoDwdPhKPVpxGAzI1Ar8acldC0BAoD2hE5HtG1ZcgrE+WaGTmXvheRnukyPfocbI8wAdGyAVHvzEhKeTEpc7Rj8XtGyTQHndkEKHBpAyVQpxLIRErgT9VtDHjDYRtNkhBgiZCNmZ1obxKoQga+B76FdB/yi475i0bMA/Eh2OZCms2p9bC2YN8bi1IMfm9wG5o1+2iJtdBYbUAG4e8E+kLM35Repkh59nUxoixkAJVCW2dOb6XNxae6OO377xGqvmMTe3S262h1U/ElE3Ll9uINZSfeRkfcCQGQ0AF85oAJ8A5ZnaOeJdH7Q2wNC5CtDQ923nzisci61LMABwnAf4GQ0AF844CvgEWH2W6u7T82nZqMXeY5sAIcNgBG/Lzj7QygBjEwjQbNRxC/2ggGMZJ0IXxsUbYI+hNAEUlvGuzvtWGKvPXzH0g51K9gtWb5j1h5LIFbR+K4w9eyGCzVv6Bt8J6trKlrxEyDyggOpT17kTqWMGxyJVlXMF97fwUkpfE+Ai7IUBPBm3/UHuM0Crb4MfBVYjkR2Nbsw58QT7Akx/0Ktvg3j4CLQy4XNfDRjqTPBXqDBkFOgEU0qRR+bz51i33hhJea8mgA2TlSPIkWyUwAtsAj+OKn2NZKmPANvVkjQkfMhDz8IAWN+g6WMpxJH7DHDOTSAJ1D2qar+AUyFZ6r1BeUMkZe2JI/fVAC5QmLBDAqt/GhBPfrABsMVvJ6cG6/8dueRo/iEKiOegxVBmtOKPi12C8lZYnZk0JE34tlBy2dtOyy2GEqgWEUPkm35lRh32RgGz+1OvpDYwHDbquHUzPzIC8BcIjGn9SFzm5AAAAABJRU5ErkJggg=="},701:function(e,t,a){"use strict";var n=a(7),r=a(11),l=a(38),s=a.n(l),i=a(0),c=a.n(i),o=(a(678),a(18)),u=a.n(o),m=["as","className","type","tooltip"],d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},b=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,i=e.className,o=e.type,u=void 0===o?"valid":o,d=e.tooltip,b=void 0!==d&&d,f=Object(r.a)(e,m);return c.a.createElement(l,Object(n.a)({},f,{ref:t,className:s()(i,u+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=d;var f=b,p=c.a.createContext({controlId:void 0}),v=a(39),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],O=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,m=e.type,d=void 0===m?"checkbox":m,b=e.isValid,f=void 0!==b&&b,O=e.isInvalid,j=void 0!==O&&O,E=e.isStatic,y=e.as,g=void 0===y?"input":y,N=Object(r.a)(e,h),x=Object(i.useContext)(p),w=x.controlId,k=x.custom?[o,"custom-control-input"]:[l,"form-check-input"],A=k[0],C=k[1];return l=Object(v.a)(A,C),c.a.createElement(g,Object(n.a)({},N,{ref:t,type:d,id:a||w,className:s()(u,l,f&&"is-valid",j&&"is-invalid",E&&"position-static")}))}));O.displayName="FormCheckInput";var j=O,E=["bsPrefix","bsCustomPrefix","className","htmlFor"],y=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,u=e.htmlFor,m=Object(r.a)(e,E),d=Object(i.useContext)(p),b=d.controlId,f=d.custom?[l,"custom-control-label"]:[a,"form-check-label"],h=f[0],O=f[1];return a=Object(v.a)(h,O),c.a.createElement("label",Object(n.a)({},m,{ref:t,htmlFor:u||b,className:s()(o,a)}))}));y.displayName="FormCheckLabel";var g=y,N=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],x=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.inline,m=void 0!==u&&u,d=e.disabled,b=void 0!==d&&d,h=e.isValid,O=void 0!==h&&h,E=e.isInvalid,y=void 0!==E&&E,x=e.feedbackTooltip,w=void 0!==x&&x,k=e.feedback,A=e.className,C=e.style,P=e.title,S=void 0===P?"":P,I=e.type,L=void 0===I?"checkbox":I,F=e.label,R=e.children,T=e.custom,D=e.as,G=void 0===D?"input":D,B=Object(r.a)(e,N),M="switch"===L||T,Y=M?[o,"custom-control"]:[l,"form-check"],J=Y[0],z=Y[1];l=Object(v.a)(J,z);var q=Object(i.useContext)(p).controlId,V=Object(i.useMemo)((function(){return{controlId:a||q,custom:M}}),[q,M,a]),W=M||null!=F&&!1!==F&&!R,X=c.a.createElement(j,Object(n.a)({},B,{type:"switch"===L?"checkbox":L,ref:t,isValid:O,isInvalid:y,isStatic:!W,disabled:b,as:G}));return c.a.createElement(p.Provider,{value:V},c.a.createElement("div",{style:C,className:s()(A,l,M&&"custom-"+L,m&&l+"-inline")},R||c.a.createElement(c.a.Fragment,null,X,W&&c.a.createElement(g,{title:S},F),(O||y)&&c.a.createElement(f,{type:O?"valid":"invalid",tooltip:w},k))))}));x.displayName="FormCheck",x.Input=j,x.Label=g;var w=x,k=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],A=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,m=e.isValid,d=e.isInvalid,b=e.lang,f=e.as,h=void 0===f?"input":f,O=Object(r.a)(e,k),j=Object(i.useContext)(p),E=j.controlId,y=j.custom?[o,"custom-file-input"]:[l,"form-control-file"],g=y[0],N=y[1];return l=Object(v.a)(g,N),c.a.createElement(h,Object(n.a)({},O,{ref:t,id:a||E,type:"file",lang:b,className:s()(u,l,m&&"is-valid",d&&"is-invalid")}))}));A.displayName="FormFileInput";var C=A,P=["bsPrefix","bsCustomPrefix","className","htmlFor"],S=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,u=e.htmlFor,m=Object(r.a)(e,P),d=Object(i.useContext)(p),b=d.controlId,f=d.custom?[l,"custom-file-label"]:[a,"form-file-label"],h=f[0],O=f[1];return a=Object(v.a)(h,O),c.a.createElement("label",Object(n.a)({},m,{ref:t,htmlFor:u||b,className:s()(o,a),"data-browse":m["data-browse"]}))}));S.displayName="FormFileLabel";var I=S,L=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],F=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.disabled,m=void 0!==u&&u,d=e.isValid,b=void 0!==d&&d,h=e.isInvalid,O=void 0!==h&&h,j=e.feedbackTooltip,E=void 0!==j&&j,y=e.feedback,g=e.className,N=e.style,x=e.label,w=e.children,k=e.custom,A=e.lang,P=e["data-browse"],S=e.as,F=void 0===S?"div":S,R=e.inputAs,T=void 0===R?"input":R,D=Object(r.a)(e,L),G=k?[o,"custom"]:[l,"form-file"],B=G[0],M=G[1];l=Object(v.a)(B,M);var Y=Object(i.useContext)(p).controlId,J=Object(i.useMemo)((function(){return{controlId:a||Y,custom:k}}),[Y,k,a]),z=null!=x&&!1!==x&&!w,q=c.a.createElement(C,Object(n.a)({},D,{ref:t,isValid:b,isInvalid:O,disabled:m,as:T,lang:A}));return c.a.createElement(p.Provider,{value:J},c.a.createElement(F,{style:N,className:s()(g,l,k&&"custom-file")},w||c.a.createElement(c.a.Fragment,null,k?c.a.createElement(c.a.Fragment,null,q,z&&c.a.createElement(I,{"data-browse":P},x)):c.a.createElement(c.a.Fragment,null,z&&c.a.createElement(I,null,x),q),(b||O)&&c.a.createElement(f,{type:b?"valid":"invalid",tooltip:E},y))))}));F.displayName="FormFile",F.Input=C,F.Label=I;var R=F,T=(a(149),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),D=c.a.forwardRef((function(e,t){var a,l,o=e.bsPrefix,u=e.bsCustomPrefix,m=e.type,d=e.size,b=e.htmlSize,f=e.id,h=e.className,O=e.isValid,j=void 0!==O&&O,E=e.isInvalid,y=void 0!==E&&E,g=e.plaintext,N=e.readOnly,x=e.custom,w=e.as,k=void 0===w?"input":w,A=Object(r.a)(e,T),C=Object(i.useContext)(p).controlId,P=x?[u,"custom"]:[o,"form-control"],S=P[0],I=P[1];if(o=Object(v.a)(S,I),g)(l={})[o+"-plaintext"]=!0,a=l;else if("file"===m){var L;(L={})[o+"-file"]=!0,a=L}else if("range"===m){var F;(F={})[o+"-range"]=!0,a=F}else if("select"===k&&x){var R;(R={})[o+"-select"]=!0,R[o+"-select-"+d]=d,a=R}else{var D;(D={})[o]=!0,D[o+"-"+d]=d,a=D}return c.a.createElement(k,Object(n.a)({},A,{type:m,size:b,ref:t,readOnly:N,id:f||C,className:s()(h,a,j&&"is-valid",y&&"is-invalid")}))}));D.displayName="FormControl";var G=Object.assign(D,{Feedback:f}),B=["bsPrefix","className","children","controlId","as"],M=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.children,u=e.controlId,m=e.as,d=void 0===m?"div":m,b=Object(r.a)(e,B);a=Object(v.a)(a,"form-group");var f=Object(i.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(p.Provider,{value:f},c.a.createElement(d,Object(n.a)({},b,{ref:t,className:s()(l,a)}),o))}));M.displayName="FormGroup";var Y=M,J=["bsPrefix","className","as"],z=["xl","lg","md","sm","xs"],q=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.as,o=void 0===i?"div":i,u=Object(r.a)(e,J),m=Object(v.a)(a,"col"),d=[],b=[];return z.forEach((function(e){var t,a,n,r=u[e];if(delete u[e],"object"===typeof r&&null!=r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+m+s:""+m+s+"-"+t),null!=n&&b.push("order"+s+"-"+n),null!=a&&b.push("offset"+s+"-"+a)})),d.length||d.push(m),c.a.createElement(o,Object(n.a)({},u,{ref:t,className:s.a.apply(void 0,[l].concat(d,b))}))}));q.displayName="Col";var V=q,W=["as","bsPrefix","column","srOnly","className","htmlFor"],X=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,o=e.bsPrefix,u=e.column,m=e.srOnly,d=e.className,b=e.htmlFor,f=Object(r.a)(e,W),h=Object(i.useContext)(p).controlId;o=Object(v.a)(o,"form-label");var O="col-form-label";"string"===typeof u&&(O=O+" "+O+"-"+u);var j=s()(d,o,m&&"sr-only",u&&O);return b=b||h,u?c.a.createElement(V,Object(n.a)({ref:t,as:"label",className:j,htmlFor:b},f)):c.a.createElement(l,Object(n.a)({ref:t,className:j,htmlFor:b},f))}));X.displayName="FormLabel",X.defaultProps={column:!1,srOnly:!1};var Q=X,U=["bsPrefix","className","as","muted"],Z=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.as,o=void 0===i?"small":i,u=e.muted,m=Object(r.a)(e,U);return a=Object(v.a)(a,"form-text"),c.a.createElement(o,Object(n.a)({},m,{ref:t,className:s()(l,a,u&&"text-muted")}))}));Z.displayName="FormText";var K=Z,H=c.a.forwardRef((function(e,t){return c.a.createElement(w,Object(n.a)({},e,{ref:t,type:"switch"}))}));H.displayName="Switch",H.Input=w.Input,H.Label=w.Label;var _=H,$=a(121),ee=["bsPrefix","inline","className","validated","as"],te=Object($.a)("form-row"),ae=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,i=e.className,o=e.validated,u=e.as,m=void 0===u?"form":u,d=Object(r.a)(e,ee);return a=Object(v.a)(a,"form"),c.a.createElement(m,Object(n.a)({},d,{ref:t,className:s()(i,o&&"was-validated",l&&a+"-inline")}))}));ae.displayName="Form",ae.defaultProps={inline:!1},ae.Row=te,ae.Group=Y,ae.Control=G,ae.Check=w,ae.File=R,ae.Switch=_,ae.Label=Q,ae.Text=K;t.a=ae},755:function(e,t,a){"use strict";var n=a(7),r=a(11),l=a(38),s=a.n(l),i=a(0),c=a.n(i),o=a(39);var u=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],m=["isChild"],d=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function b(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(1e3*n)/1e3}function f(e,t){var a,l=e.min,i=e.now,o=e.max,m=e.label,d=e.srOnly,f=e.striped,p=e.animated,v=e.className,h=e.style,O=e.variant,j=e.bsPrefix,E=Object(r.a)(e,u);return c.a.createElement("div",Object(n.a)({ref:t},E,{role:"progressbar",className:s()(v,j+"-bar",(a={},a["bg-"+O]=O,a[j+"-bar-animated"]=p,a[j+"-bar-striped"]=p||f,a)),style:Object(n.a)({width:b(i,l,o)+"%"},h),"aria-valuenow":i,"aria-valuemin":l,"aria-valuemax":o}),d?c.a.createElement("span",{className:"sr-only"},m):m)}var p=c.a.forwardRef((function(e,t){var a=e.isChild,l=Object(r.a)(e,m);if(l.bsPrefix=Object(o.a)(l.bsPrefix,"progress"),a)return f(l,t);var u=l.min,b=l.now,p=l.max,v=l.label,h=l.srOnly,O=l.striped,j=l.animated,E=l.bsPrefix,y=l.variant,g=l.className,N=l.children,x=Object(r.a)(l,d);return c.a.createElement("div",Object(n.a)({ref:t},x,{className:s()(g,E)}),N?function(e,t){var a=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,a++):e}))}(N,(function(e){return Object(i.cloneElement)(e,{isChild:!0})})):f({min:u,now:b,max:p,label:v,srOnly:h,striped:O,animated:j,bsPrefix:E,variant:y},t))}));p.displayName="ProgressBar",p.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};t.a=p},829:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),l=a(25),s=a(20),i=a(0),c=a.n(i),o=a(701),u=a(681),m=a.n(u),d=a(120),b=a.n(d),f=a(755),p=a(311),v=a.n(p),h=a(101),O=a(102);t.default=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],u=t[1],d=Object(i.useState)("first"),p=Object(s.a)(d,2),j=p[0],E=p[1],y=Object(i.useState)("No connection to the network."),g=Object(s.a)(y,2),N=(g[0],g[1],Object(i.useState)("")),x=Object(s.a)(N,2),w=(x[0],x[1],Object(i.useState)("0xff90962f83810f1d4fbf4ba970a6b443b41267a5")),k=Object(s.a)(w,2),A=k[0],C=k[1],P=Object(i.useState)("0xff90962f83810f1d4fbf4ba970a6b443b41267a5"),S=Object(s.a)(P,2),I=S[0],L=S[1],F=Object(i.useState)("Sphynx"),R=Object(s.a)(F,2),T=R[0],D=R[1],G=Object(i.useState)("Sphynx"),B=Object(s.a)(G,2),M=B[0],Y=B[1],J=Object(i.useState)(18),z=Object(s.a)(J,2),q=(z[0],z[1]),V=Object(i.useState)("500"),W=Object(s.a)(V,2),X=(W[0],W[1]),Q=Object(i.useState)("50"),U=Object(s.a)(Q,2),Z=(U[0],U[1]),K=Object(i.useState)("100"),H=Object(s.a)(K,2),_=H[0],$=H[1],ee=Object(i.useState)("0.01"),te=Object(s.a)(ee,2),ae=(te[0],te[1]),ne=Object(i.useState)("10"),re=Object(s.a)(ne,2),le=(re[0],re[1]),se=Object(i.useState)("70"),ie=Object(s.a)(se,2),ce=(ie[0],ie[1]),oe=Object(i.useState)("400"),ue=Object(s.a)(oe,2),me=(ue[0],ue[1]),de=Object(i.useState)(b()(new Date).format("MM/DD/YYYY, hh:mm A")),be=Object(s.a)(de,2),fe=(be[0],be[1]),pe=Object(i.useState)(b()(new Date).format("MM/DD/YYYY, hh:mm A")),ve=Object(s.a)(pe,2),he=(ve[0],ve[1]),Oe=Object(i.useState)(b()(new Date).format("MM/DD/YYYY, hh:mm A")),je=Object(s.a)(Oe,2),Ee=(je[0],je[1]),ye=Object(i.useState)("https://cryptologos.cc/logos/thumbs/basic-attention-token.png?v=014"),ge=Object(s.a)(ye,2),Ne=ge[0],xe=ge[1],we=Object(i.useState)("websiteLink"),ke=Object(s.a)(we,2),Ae=ke[0],Ce=ke[1],Pe=Object(i.useState)("githubLink"),Se=Object(s.a)(Pe,2),Ie=Se[0],Le=Se[1],Fe=Object(i.useState)("twitterLink"),Re=Object(s.a)(Fe,2),Te=Re[0],De=Re[1],Ge=Object(i.useState)("redditLink"),Be=Object(s.a)(Ge,2),Me=Be[0],Ye=Be[1],Je=Object(i.useState)("telegramLink"),ze=Object(s.a)(Je,2),qe=ze[0],Ve=ze[1],We=Object(i.useState)("projectDescription"),Xe=Object(s.a)(We,2),Qe=Xe[0],Ue=Xe[1],Ze=Object(i.useState)("provideParticipants"),Ke=Object(s.a)(Ze,2),He=Ke[0],_e=Ke[1],$e=Object(i.useState)("0"),et=Object(s.a)($e,2),tt=et[0],at=et[1],nt=Object(i.useState)("0"),rt=Object(s.a)(nt,2),lt=rt[0],st=rt[1],it=Object(i.useState)(0),ct=Object(s.a)(it,2),ot=ct[0],ut=ct[1],mt=Object(i.useState)(0),dt=Object(s.a)(mt,2),bt=dt[0],ft=dt[1],pt=Object(i.useState)(0),vt=Object(s.a)(pt,2),ht=(vt[0],vt[1]),Ot=Object(i.useState)(0),jt=Object(s.a)(Ot,2),Et=(jt[0],jt[1]),yt=Object(i.useState)(""),gt=Object(s.a)(yt,2),Nt=gt[0],xt=gt[1],wt=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.r)(bt,n,Ne,Ae,Ie,Te,Me,qe,Qe,He);case 2:t=e.sent,a=t.status,E(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),kt=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=Nt.trim()){e.next=2;break}return e.abrupt("return");case 2:t=Object(h.a)(n,bt,Nt),a=t.status,E(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),At=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=Nt.trim()){e.next=2;break}return e.abrupt("return");case 2:t=Nt.split(","),a=Object(h.a)(n,bt,t),l=a.status,E(l);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Ct=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.l)();case 2:return t=e.sent,ut(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pt=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,n,l,s,i,o,m,d,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.g)();case 2:return t=e.sent,a=t.address,n=t.status,u(a),E(n),window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(u(e[0]),E("\ud83d\udc46\ud83c\udffd Write a message in the text-field above.")):(u(""),E("\ud83e\udd8a Connect to Metamask using the top right button."))})):E(c.a.createElement("p",null," ","\ud83e\udd8a"," ",c.a.createElement("a",{target:"_blank",href:"https://metamask.io/download.html"},"You must install Metamask, a virtual Ethereum wallet, in your browser."))),e.next=10,Object(h.j)(a);case 10:return l=e.sent,console.log("CGI currentPresaleId",l),l>=ot&&l--,ft(l),e.next=16,Object(h.p)(l);case 16:return s=e.sent,D(s.name),Y(s.symbol),q(s.decimals),xe(s.logoLink),Ce(s.websiteLink),Le(s.githubLink),De(s.twitterLink),Ye(s.redditLink),Ve(s.redditLink),Ue(s.projectDescription),_e(s.provideParticipants),e.next=30,Object(h.k)(l);case 30:return i=e.sent,X(i.presaleRate),$(Object(O.d)(i.hardCap)),Z(Object(O.d)(i.softCap)),le(Object(O.d)(i.maxBuy)),ae(Object(O.d)(i.minBuy)),ce(i.swapLiquidity),me(i.swapListingRate),fe(b()(new Date(parseInt(i.presaleStartTime))).format("MM/DD/YYYY, hh:mm A")),he(b()(new Date(parseInt(i.presaleEndTime))).format("MM/DD/YYYY, hh:mm A")),Ee(b()(new Date(parseInt(i.liquidityLockedTime))).format("MM/DD/YYYY, hh:mm A")),e.next=43,Object(h.m)(l);case 43:return o=e.sent,m=Object(O.a)(o,i.hardCap),at(o),st(m),e.next=49,Object(h.o)(l);case 49:return d=e.sent,e.next=52,Object(h.n)(l);case 52:f=e.sent,ht(f.remainStartTime),Et(f.remainEndTime),C(d.tokenAddress),L(d.presaleAddress);case 57:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){m.a.init(),"first"==j&&(Ct(),Pt())})),c.a.createElement("div",{className:"manage-presale"},c.a.createElement("div",{className:"page-header"},c.a.createElement("h1",null,"Manage Presale"),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("button",{className:"btn btn-info bscnetwork-button"},c.a.createElement("img",{src:v.a}),"BSC Network")),c.a.createElement("p",{className:"mobile-heading"},"Manage Presale")),c.a.createElement("div",{className:""},c.a.createElement("div",{className:"col-12 grid-margin stretch-card not-flex"},c.a.createElement("div",{className:"card create-sale-card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,c.a.createElement("img",{src:a(689),alt:"logo"}),c.a.createElement("a",null,"Manage Presale")),c.a.createElement("p",null,c.a.createElement("br",null),"Congratulations your presale is created successfully.",c.a.createElement("br",null)),c.a.createElement("p",{className:"para-warning"},"If your token contains special transfers such as burn, rebase or something else you must ensure the Presale LP Router Address and the Presale Address are excluded from these features! Or you must set fees, burns or whatever else to be 0 or disabled for the duration of the presale and until the finalize button is clicked!"),c.a.createElement("p",{className:"router-address"},"Presale LP Router Address: ",I),c.a.createElement("p",{className:"preslae-address"},"Presale Address: ",A),c.a.createElement("p",{className:"detail-content"},"- You must deposit the required number of tokens to the presale address to start the sale (Click the Deposit Tokens button below) ",c.a.createElement("br",null),"- The finalize button will become available once you hit your hard cap or presale time ends.",c.a.createElement("br",null),"- Clicking the finalize button will list your token on SphynxSwap immediately. Listing will be done at the set SphynxSwap rate with liquidity locked by DxLock.",c.a.createElement("br",null),"- Once finalized your BNB will be released to the creation wallet."))),c.a.createElement("div",{className:"second-blcok"},c.a.createElement("p",{className:""},"Here is a summary of your presale (more details on the presale page):"),c.a.createElement("div",{className:"raised-progress"},c.a.createElement("p",{className:"progress-status"},tt,"/",_," BNB Raised"),c.a.createElement(f.a,{variant:"success",className:"my-progress-bar",now:lt})),c.a.createElement("div",{className:"token-address-container"},c.a.createElement("div",{className:"token-infos"},c.a.createElement("p",{className:"token-name"},"Name: ",T),c.a.createElement("p",{className:"token-name"},"Symbol: ",M),c.a.createElement("p",{className:"token-name"},"Token Address: ",A),c.a.createElement("p",{className:"token-name"},"Shareable Presale Link: ",Ae),c.a.createElement("p",{className:"token-name"},"Status:",j))),c.a.createElement("div",{className:""},"You need to deposit 71318400 FLOCK to complete your presale! (Total Tokens for Presale + SphynxSwap + Platform Fee)"),c.a.createElement("div",{className:"btn btn-rounded btn-info btn-lg deposit-token"},"DEPOSIT TOKENS"),c.a.createElement("div",{className:"warning-text"},"Make sure you disable fees before depositing or whitelist the presale address first!"),c.a.createElement("div",{className:"current-token-balance"},"Current Token Balance of Presale Address: 0"),c.a.createElement("button",{className:"btn btn-primary btn-rounded call-finalize disabled",disabled:!0},"CALL FINALIZE"),c.a.createElement("br",null),c.a.createElement("div",{className:"btn btn-primary btn-rounded cancel-sale"},"CANCEL SALE"),c.a.createElement("div",{className:"finalize-text"},"If you have trouble with finalizing please ensure the required address are whitelisted or your special transfer functions are disabled!"),c.a.createElement("div",null,"If you still cannot finalize then please cancel your sale and test your contract throughly on our supported test nets!")))),c.a.createElement("div",{className:"presale-whitelist"},c.a.createElement("div",{className:"title-label"},c.a.createElement("img",{src:a(689),alt:"logo"}),c.a.createElement("div",null,c.a.createElement("a",null,"Presale Whitelist"),c.a.createElement("p",{className:""},"Whitelist specific users that can contribute to the sale"))),c.a.createElement("div",{className:"whitelist-status"},"Whitelist: ",c.a.createElement("span",null,"Active")),c.a.createElement("button",{className:"btn btn-danger btn-rounded btn-lg btn-disable-whitelist"},"Disable Whitelist"),c.a.createElement("div",{className:"red"},"If you disable whiltelists any users will be able to contribute! Once disabled a fee will need to be paid to re-enable again!"),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"addRemoveAddress"},"Add/Remove Wallet Address from Whitelist (Comma seperated)"),c.a.createElement(o.a.Control,{type:"text",id:"addRemoveAddress",name:"walletAddress",value:Nt,onChange:function(e){return xt(e.target.value)}})),c.a.createElement("div",{className:"action-buttons"},c.a.createElement("button",{className:"btn btn-info btn-rounded",onClick:kt},"ADD"),c.a.createElement("button",{className:"btn btn-info btn-rounded",onClick:At},"REMOVE"),c.a.createElement("button",{className:"btn btn-info btn-rounded"},"SHOW WHITELIST"))),c.a.createElement("div",{className:"additional-presale-details"},c.a.createElement("div",{className:"title-label"},c.a.createElement("img",{src:a(689),alt:"logo"}),c.a.createElement("div",null,c.a.createElement("a",null,"Additional Presale Details"),c.a.createElement("p",{className:""},"Modify any additional information for your presale below:"))),c.a.createElement("form",{className:"forms-sample forms-of-input"},c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputLogoLink"},"Logo Link: (URL must end with a supported image extension png, jpg, jpeg or gif)"),c.a.createElement(o.a.Control,{type:"text",id:"inputLogoLink",name:"logoLink",value:Ne,onChange:function(e){return xe(e.target.value)}}),c.a.createElement("p",{className:"hint"},"You can use a website like ",c.a.createElement("span",null,c.a.createElement("a",{href:""},"PostImages"))," to upload your image then copy the direct link here in the above field")),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputWebsiteLink"},"Website Link"),c.a.createElement(o.a.Control,{type:"text",id:"inputWebsiteLink",name:"websiteLink",value:Ae,onChange:function(e){return Ce(e.target.value)}})),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputGithubLink"},"Github Link"),c.a.createElement(o.a.Control,{type:"text",id:"inputGithubLink",name:"githubLink",value:Ie,onChange:function(e){return Le(e.target.value)}})),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputTwitterLink"},"Twitter Link"),c.a.createElement(o.a.Control,{type:"text",id:"inputTwitterLink",name:"twitterLink",value:Te,onChange:function(e){return De(e.target.value)}})),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputRedditLink"},"Reddit Link"),c.a.createElement(o.a.Control,{type:"text",id:"inputRedditLink",name:"redditLink",value:Me,onChange:function(e){return Ye(e.target.value)}})),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputTelegramLink"},"Telegram Link"),c.a.createElement(o.a.Control,{type:"text",id:"inputTelegramLink",name:"telegramLink",value:qe,onChange:function(e){return Ve(e.target.value)}})),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputProjectDescription"},"Project Description"),c.a.createElement(o.a.Control,{type:"text",id:"inputProjectDescription",name:"projectDescription",value:Qe,onChange:function(e){return Ue(e.target.value)}})),c.a.createElement(o.a.Group,null,c.a.createElement("label",{htmlFor:"inputProvideParticipants"},"Any update you want to provide to participants"),c.a.createElement(o.a.Control,{type:"text",id:"inputProvideParticipants",name:"provideParticipants",value:He,onChange:function(e){return _e(e.target.value)}}))),c.a.createElement("button",{className:"btn btn-primary btn-lg btn-rounded btn-update",onClick:wt},"UPDATE DATA")))}}}]);
//# sourceMappingURL=14.ad25b237.chunk.js.map