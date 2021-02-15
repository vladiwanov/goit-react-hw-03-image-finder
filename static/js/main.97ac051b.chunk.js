(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(7),s=a.n(c),i=(a(16),a(17),a(3)),l=a(4),u=a(6),h=a(5),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.handleInputSearchName=function(t){e.setState({name:t.currentTarget.value})},e.handleChangeName=function(t){t.preventDefault(),e.props.onChangeName(e.state.name.trim()),e.setState({name:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.name;return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleChangeName,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:e,placeholder:"Search images and photos",onChange:this.handleInputSearchName})]})})}}]),a}(r.Component),d=a(9);function p(e){var t=e.props,a=t.tags,r=t.webformatURL;return Object(n.jsx)("img",{src:r,alt:a,className:"ImageGalleryItem-image"})}function g(e,t,a,n){var r="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("19172915-1886b55ac07c270b02db4da6f","&image_type=photo&orientation=horizontal&per_page=").concat(12);fetch(r).then((function(e){if(e.ok)return e.json();Promise.reject(n("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430",new o.a("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430"+e.status)))})).then((function(e){return a(e.hits)})).catch((function(e){return n("ERROR"+e.status)}))}var j=a(10),b=a.n(j);function f(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(b.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,className:"Loader"})})}function v(e){var t=e.status,a=(e.showModal,e.onLoadMore);return"pending"===t?Object(n.jsx)(f,{}):Object(n.jsx)("button",{className:"Button",type:"button",onClick:function(e){e.preventDefault(),!1,a()},children:"Load more"})}var O=document.querySelector("#modal-root"),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleBackdropOnClick=function(t){t.currentTarget!==t.target||e.props.onClose()},e.closeModalWithESC=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalWithESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalWithESC)}},{key:"render",value:function(){var e=this.props.imageContent;return Object(c.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:this.handleBackdropOnClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:e.largeImageURL,alt:e.tags})})}),O)}}]),a}(r.Component),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:"idle",error:null,page:1,showModal:!1,activeEl:0},e.getImageGallery=function(t){e.setState({page:1,status:"pending",images:[]}),g(t,e.state.page,e.changeState,e.getError)},e.loadMoreGallery=function(){e.setState((function(e){return{page:e.page+1,status:"pending"}})),g(e.props.params.searchName,e.state.page+1,e.changeState,e.getError)},e.changeState=function(t){0!==t.length?e.setState((function(e){return{images:[].concat(Object(d.a)(e.images),Object(d.a)(t)),status:"resolved"}}),e.scroll):e.setState({status:"rejected"})},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.getError=function(t){console.log(t),e.setState({error:"error",status:"rejected"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){"IMG"===t.target.nodeName&&e.setState({showModal:!0})},e.setActiveId=function(t){e.setState({activeEl:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.openModal)}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.params.searchName;e.params.page!==this.props.params.page&&this.loadMoreGallery(),e.params.searchName!==this.props.params.searchName&&this.getImageGallery(a)}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.status,o=t.showModal,c=t.activeEl;return"idle"===r?Object(n.jsx)(n.Fragment,{}):"rejected"===r?Object(n.jsx)("p",{className:"Button",children:"\u0423\u0432\u044b , \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):"pending"===r||"resolved"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:"ImageGallery",children:a.map((function(t,a){var r=t.id,o=t.tags,c=t.webformatURL;return Object(n.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return e.setActiveId(a)},children:Object(n.jsx)(p,{props:{tags:o,webformatURL:c}})},r+a*a)}))}),a.length&&Object(n.jsx)(v,{onLoadMore:this.loadMoreGallery,status:r,showModal:o}),o&&Object(n.jsx)(y,{onClose:this.toggleModal,imageContent:a[c]})]}):void 0}}]),a}(r.Component),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchName:"",page:1},e.getSearchName=function(t){""!==t?e.setState({searchName:t}):alert("\u043f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchName,a=e.page;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{onChangeName:this.getSearchName}),Object(n.jsx)(S,{params:{searchName:t,page:a},onToggleModal:this.toggleModal,onGetParametersForLoadButton:this.getParametersForLoadButton})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.97ac051b.chunk.js.map