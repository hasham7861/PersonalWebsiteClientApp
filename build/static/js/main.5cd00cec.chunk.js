(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/HomeIcon.e18c3252.svg"},function(e,t,a){e.exports=a.p+"static/media/AboutIcon.944ba56a.svg"},function(e,t,a){e.exports=a.p+"static/media/ContactIcon.6ca72c05.svg"},,function(e,t,a){e.exports=a.p+"static/media/NavbarSeprator.a8db1499.svg"},,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/GithubIcon.b74ac31b.svg"},function(e,t,a){e.exports=a.p+"static/media/LinkedinIcon.09a40be4.svg"},function(e,t,a){e.exports=a.p+"static/media/MyFace.dddc4114.jpg"},function(e,t,a){e.exports=a.p+"static/media/JSIcon.674e0518.svg"},function(e,t,a){e.exports=a.p+"static/media/ReactIcon.1b1db9ad.svg"},function(e,t,a){e.exports=a.p+"static/media/ReduxIcon.d95c6de6.svg"},function(e,t,a){e.exports=a.p+"static/media/MySqlIcon.1a39116d.svg"},function(e,t,a){e.exports=a.p+"static/media/NodeIcon.dbe6544d.svg"},function(e,t,a){e.exports=a.p+"static/media/AdobeXDIcon.3070679a.svg"},function(e,t,a){e.exports=a.p+"static/media/Hasham_Alam_Resume.621bcffb.pdf"},function(e,t,a){e.exports=a.p+"static/media/PortfolioIcon.6fe362ec.svg"},function(e,t,a){e.exports=a(99)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(24),c=a.n(r),s=a(14),l=a(17),i={email:"",subject:"",message:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_EMAIL":return Object.assign({},e,{email:t.email,subject:e.subject,message:e.message});case"SAVE_SUBJECT":return Object.assign({},e,{email:e.email,subject:t.subject,message:e.message});case"SAVE_MESSAGE":return Object.assign({},e,{email:e.email,subject:e.subject,message:t.message});case"CLEAR_EMAIL_FORM":return i;default:return e}},m=a(26),u={portfolioHeaderStyle:{lineHeight:"0.2em",cursor:"grab",position:"absolute",bottom:"2em",left:"0",right:"0"},portfolioHeaderState:"Close",contactButtonStyleClasses:"Contact",swipeArrow:"\u25b2",swipeText:"Swipe Up To Expand Portfolio"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PORTFOLIO_STATE":return Object.assign({},e,{portfolioHeaderStyle:Object(m.a)({},u.portfolioHeaderStyle,{bottom:t.portfolioState.portfolioHeaderStyle.bottom,position:t.portfolioState.portfolioHeaderStyle.position}),portfolioHeaderState:t.portfolioState.portfolioHeaderState,contactButtonStyleClasses:t.portfolioState.contactButtonStyleClasses,swipeArrow:t.portfolioState.swipeArrow,swipeText:t.portfolioState.swipeText});case"CLOSE_PORTFOLIO":return u;default:return e}},h={headerStyle:{paddingTop:"100px"},headerState:"BIG",classNames:"heading"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_HEADING_SIZE":return Object.assign({},e,{headerStyle:{paddingTop:t.headingState.headerStyle.paddingTop},headerState:t.headingState.headerState,classNames:t.headingState.classNames});case"RESET_HEADING_SIZE":return h;default:return e}},g={style:{height:"70px"}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EXPAND_PORTFOLIO_DIV":return Object.assign({},e,{style:{height:t.portfolioState.style.height}});default:return e}},b=Object(l.b)({portfolioMove:f,emailMessage:p,headerStateChange:d,projects:E}),v=Object(l.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=(a(61),a(3)),S=a(4),O=a(6),N=a(5),y=a(7),w=a(2),A=a(16),C=a(11),H=(a(62),a(63),a(39)),D=a.n(H),x=(a(83),a(18)),I=a.n(x),M=a(19),T=a.n(M),k=a(20),P=a.n(k),L=a(22),_=a.n(L),R=function(){return n.a.createElement("div",{className:"PagesNavbar"},n.a.createElement(w.c,{to:"/"},n.a.createElement("img",{src:I.a,alt:"Home Icon"})),n.a.createElement("img",{src:_.a,alt:"alt seprator"}),n.a.createElement(w.c,{to:"/about",activeClassName:"NavLinkActive"},n.a.createElement("img",{src:T.a,alt:"About Icon"})),n.a.createElement("img",{src:_.a,alt:"alt seprator"}),n.a.createElement(w.c,{to:"/contact",activeClassName:"NavLinkActive"},n.a.createElement("img",{src:P.a,alt:"Contact Icon"})))},F=a(41),B=a.n(F),G=a(42),V=a.n(G),W=function(e){function t(){var e,a;Object(j.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(n)))).sendMessage=function(e){e.preventDefault();var t=a.props.emailMessage,o=t.email,n=t.subject,r=t.message,c=new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");""!==o&&""!==n&&""!==r?c.test(o)?D.a.post("https://api.hashamalam.dev/routes/email",{email:o,subject:n,message:r}).then(function(e){alert("Email is sent"),a.props.clearEmailForm()}).catch(function(e){console.log(e),alert("Email not sent")}):alert("Enter in a valid email"):alert("Email form is not completed")},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,C.isMobile?n.a.createElement(R,null):"",n.a.createElement("div",{className:"ContactScreen"},n.a.createElement("h3",null,"Email"),n.a.createElement("form",{onSubmit:this.sendMessage.bind(this)},n.a.createElement("input",{onChange:this.props.emailOnChange,type:"text",name:"email",placeholder:"Enter in your Email..",value:this.props.emailMessage.email}),n.a.createElement("input",{onChange:this.props.subjectOnChange,type:"text",name:"subject",placeholder:"Enter in the Subject..",value:this.props.emailMessage.subject}),n.a.createElement("textarea",{onChange:this.props.messageOnChange,name:"message",placeholder:"Enter in your Message.. ",value:this.props.emailMessage.message}),n.a.createElement("button",{type:"submit"},"Send Message")),n.a.createElement("h3",null,"Follow me Here"),n.a.createElement("div",{className:"contactBar"},n.a.createElement("a",{href:"https://github.com/hasham7861",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:B.a,alt:"Github Icon"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/hasham7861/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:V.a,alt:"Linkedin Icon"})))))}}]),t}(o.Component),J=Object(s.b)(function(e){return{emailMessage:e.emailMessage}},function(e){return{emailOnChange:function(t){return e({type:"SAVE_EMAIL",email:t.target.value})},subjectOnChange:function(t){return e({type:"SAVE_SUBJECT",subject:t.target.value})},messageOnChange:function(t){return e({type:"SAVE_MESSAGE",message:t.target.value})},clearEmailForm:function(){return e({type:"CLEAR_EMAIL_FORM"})}}})(W),U=(a(89),a(90),function(e){return n.a.createElement("div",{ref:e.reference,className:e.classNames},n.a.createElement("h1",null,"Hasham"),n.a.createElement("h1",null,"Alam"),n.a.createElement("h3",null,"< Aspiring Web Developer />"))}),X=(a(91),a(92),function(e){return n.a.createElement("div",{className:"Project"},n.a.createElement("h4",null,e.name," "),n.a.createElement("p",null,e.about))}),Z=function(e){function t(){var e,a;Object(j.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(n)))).state={projects:[],projectsData:[{projectName:"PersonalWebsiteV2",projectDesc:"Redesigning Personal Website and Automating Portfolio (Prototype)",numOfFavorites:"1",languages:"Javascript",srcLink:"https://github.com/hasham7861/PersonalWebsiteV2"},{projectName:"LandingPage",projectDesc:"Created a Landing Page using Sass",numOfFavorites:"0",languages:"CSS",srcLink:"https://github.com/hasham7861/LandingPage"},{projectName:"Asteroid-Game",projectDesc:"Asteroid Game made on canvas using the zim.js framework",numOfFavorites:"0",languages:"HTML",srcLink:"https://github.com/hasham7861/AsteroidGame"}]},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=[],a=function(a){var o=e.state.projectsData[a],r="/project/".concat(o.projectName),c={projectName:o.projectName,projectDesc:o.projectDesc,numOfFavorites:o.numOfFavorites,languages:o.languages,srcLink:o.srcLink},s=n.a.createElement(w.c,{className:"ProjectLink",to:r,onClick:function(){return function(e){localStorage.setItem("projectData",JSON.stringify(e))}(c)}},n.a.createElement(X,{name:o.projectName,about:o.projectDesc}));t.push(s)},o=0;o<this.state.projectsData.length;o++)a(o);this.setState({projects:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"ProjectsBackDrop",style:this.props.style},n.a.createElement("div",{className:"ProjectsContainer"},n.a.createElement("ul",null,this.state.projects.map(function(e,t){return n.a.createElement("li",{key:t},e)}))))}}]),t}(o.Component),z=Object(s.b)(function(e){return{style:e.projects.style}},function(e){return{}})(Z),Y=function(e){function t(){var e,a;Object(j.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).portfolioHeader=n.a.createRef(),a.portfolioHeaderMoveDistance=0,a.portfolioHeaderMaxMoveDistance=1,a.swipeDownAllowed=!1,a.swipeUpAllowed=!0,a.handleTouchStart=function(){a.portfolioHeaderMaxMoveDistance=Math.floor((a.portfolioHeader.current.offsetTop-a.props.contactButtonRef.current.offsetTop)/2),"Expand"===a.props.portfolioHeaderState?(a.swipeDownAllowed=!0,a.swipeUpAllowed=!1):(a.swipeDownAllowed=!1,a.swipeUpAllowed=!0)},a.handleTouchEnd=function(){"MidExpand"===a.props.portfolioHeaderState&&(a.props.portfolioClose(),a.props.projects({style:{height:"40px"}}))},a.runDebug=function(){console.log("---/Debug/---"),console.log("PortfolioTextOffsetTop: ".concat(a.portfolioHeader.current.offsetTop)),console.log("PortfolioTextOffsetBottom: ".concat(a.portfolioHeader.current.offsetTop-a.portfolioHeader.current.clientHeight)),console.log("PortfolioHeaderState: ".concat(a.props.portfolioHeaderState))},a.getNewPortfolioState=function(){return{portfolioHeaderStyle:{bottom:"".concat(a.portfolioHeaderMoveDistance,"px"),position:"absolute"},portfolioHeaderState:"MidExpand",contactButtonStyleClasses:"Contact",swipeArrow:"\u25b2",swipeText:"Swipe Up To Expand Portfolio"}},a.getNewPortfolioStateAfterExpand=function(e){return{portfolioHeaderStyle:Object(m.a)({},e.portfolioHeaderStyle,{position:"absolute",bottom:0}),portfolioHeaderState:"Expand",contactButtonStyleClasses:e.contactButtonStyleClasses+=" expandPortfolioContactButton",swipeArrow:"\u25bc",swipeText:"Swipe Down To Collapse Portfolio"}},a.getNewHeaderState=function(){return{headerStyle:{paddingTop:"".concat(0,"px")},headerState:"BIG"}},a.handleTouchMove=function(e){if(a.swipeUpAllowed&&"Expand"!==a.props.portfolioHeaderState&&a.portfolioHeaderMoveDistance>=0&&a.portfolioHeader.current.offsetTop>=e.changedTouches[0].clientY){a.portfolioHeaderMoveDistance=Math.floor(a.portfolioHeader.current.offsetTop-e.changedTouches[0].clientY);var t=a.getNewPortfolioState(),o=a.getNewHeaderState(),n={style:{height:a.props.projectsDivHeight}};if(a.portfolioHeaderMoveDistance>=a.portfolioHeaderMaxMoveDistance){o.classNames+=" expandPortfolio",a.props.headerStateChange(o),t=a.getNewPortfolioStateAfterExpand(t);var r=a.portfolioHeader.current.offsetTop-a.portfolioHeader.current.clientHeight,c=a.props.projectsDivHeight.split("px")[0];n.style.height="".concat(parseInt(r-c),"px")}a.props.projects(n),a.props.portfolioMove(t)}else a.swipeDownAllowed&&e.changedTouches[0].clientY-a.portfolioHeader.current.offsetTop>=0&&(a.props.portfolioClose(),a.props.headerStateReset(),a.props.projects({style:{height:"40px"}}))},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{ref:this.portfolioHeader,className:"portfolio",style:this.props.portfolioHeaderStyle},n.a.createElement("div",{onTouchStart:function(){return e.handleTouchStart()},onTouchMove:function(t){return e.handleTouchMove(t)},onTouchEnd:function(){return e.handleTouchEnd()}},n.a.createElement("h2",{className:"upArrow"},this.props.swipeArrow),n.a.createElement("h4",null,this.props.swipeText)),"Expand"===this.props.portfolioHeaderState?n.a.createElement(z,null):"")}}]),t}(o.Component),q=Object(s.b)(function(e){return{portfolioHeaderStyle:e.portfolioMove.portfolioHeaderStyle,portfolioHeaderState:e.portfolioMove.portfolioHeaderState,headerStyle:e.headerStateChange.headerStyle,headerState:e.headerStateChange.headerState,swipeArrow:e.portfolioMove.swipeArrow,swipeText:e.portfolioMove.swipeText,projectsDivHeight:e.projects.style.height}},function(e){return{portfolioMove:function(t){return e({type:"CHANGE_PORTFOLIO_STATE",portfolioState:t})},portfolioClose:function(){return e({type:"CLOSE_PORTFOLIO"})},headerStateChange:function(t){return e({type:"CHANGE_HEADING_SIZE",headingState:t})},headerStateReset:function(){return e({type:"RESET_HEADING_SIZE"})},projects:function(t){return e({type:"EXPAND_PORTFOLIO_DIV",portfolioState:t})}}})(Y),$=(a(93),function(){return n.a.createElement("div",{className:"HomeNavbar"},n.a.createElement(w.b,{to:"/About"},n.a.createElement("img",{src:T.a,alt:"About Icon"})),n.a.createElement("img",{src:_.a,alt:"Navbar Seprator"}),n.a.createElement(w.b,{to:"/Contact"},n.a.createElement("img",{src:P.a,alt:"Contact Icon"})))}),K=function(e){function t(){var e,a;Object(j.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).headingRef=n.a.createRef(),a.contactButtonRef=n.a.createRef(),a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Home"},n.a.createElement(U,{classNames:this.props.headerClassNames}),n.a.createElement(C.MobileView,null,n.a.createElement("div",{ref:this.contactButtonRef},n.a.createElement($,null)),n.a.createElement(q,{headingRef:this.headingRef,contactButtonRef:this.contactButtonRef})))}}]),t}(o.Component),Q=Object(s.b)(function(e){return{headerStyle:e.headerStateChange.headerStyle,headerClassNames:e.headerStateChange.classNames}})(K),ee=function(){return n.a.createElement("div",null,n.a.createElement("h1",{style:{color:"white",marginTop:0,paddingTop:"20px",height:"100vh"}},n.a.createElement(A.a,{push:!0,to:"/"})))},te=(a(94),function(e){return n.a.createElement("div",{className:"ProjectNavbar"},n.a.createElement(w.c,{to:"/",activeClassName:"NavLinkActive"},n.a.createElement("img",{src:I.a,alt:"HomeIconImage"})))}),ae=(a(95),function(e){function t(e){var a,o=e.props,n=e.match;return Object(j.a)(this,t),(a=Object(O.a)(this,Object(N.a)(t).call(this,o))).projectName="",a.projectContributors="Hasham Alam",a.projectName=n.params.name,a.state={projectData:{}},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("projectData"));this.setState({projectData:{projectName:e.projectName,projectDesc:e.projectDesc,numOfFavorites:e.numOfFavorites,languages:e.languages,srcLink:e.srcLink}})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,C.isMobile?n.a.createElement(te,{projectRoute:this.projectName}):"",n.a.createElement("div",{className:"ProjectScreen"},n.a.createElement("h1",null,this.projectName),n.a.createElement("section",{className:"Description"},n.a.createElement("h3",null,"Description"),n.a.createElement("p",null,this.state.projectData.projectDesc)),n.a.createElement("section",{className:"Languages"},n.a.createElement("h3",null,"Languages(s)"),n.a.createElement("p",null,this.state.projectData.languages)),n.a.createElement("section",{className:"Contributors"},n.a.createElement("h3",null,"Contributor(s)"),n.a.createElement("p",null,"Hasham Alam")),n.a.createElement("section",null,n.a.createElement("a",{href:this.state.projectData.srcLink},"Click here for more details"))))}}]),t}(o.Component)),oe=(a(96),a(43)),ne=a.n(oe),re=a(44),ce=a.n(re),se=a(45),le=a.n(se),ie=a(46),pe=a.n(ie),me=a(47),ue=a.n(me),fe=a(48),he=a.n(fe),de=a(49),ge=a.n(de),Ee=a(50),be=a.n(Ee),ve=function(e){function t(){return Object(j.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,C.isMobile?n.a.createElement(R,null):"",n.a.createElement("div",{className:"AboutScreen"},n.a.createElement("div",{className:"MyFace"},n.a.createElement("img",{src:ne.a,alt:"My Face"})),n.a.createElement("section",null,n.a.createElement("h3",null,"Area of Expertise"),n.a.createElement("p",null,"Full Stack Web Developer")),n.a.createElement("section",null,n.a.createElement("h3",null,"What I have to Offer"),n.a.createElement("p",null,"Design and Create Full Web Apps for your buisness")),n.a.createElement("section",null,n.a.createElement("h3",null,"My Skills"),n.a.createElement("div",{className:"SkillsIconBar"},n.a.createElement("img",{src:ce.a,alt:"JavaScript Icon"}),n.a.createElement("img",{src:le.a,alt:"React Icon"}),n.a.createElement("img",{src:pe.a,alt:"Redux Icon"}),n.a.createElement("img",{src:ue.a,alt:"MySql Icon"}),n.a.createElement("img",{src:he.a,alt:"Node Icon"}),n.a.createElement("img",{src:ge.a,alt:"AdobeXd Icon"}))),n.a.createElement("section",null,n.a.createElement("a",{href:be.a,target:"_blank",rel:"noopener noreferrer"},"View Resume"))))}}]),t}(o.Component),je=(a(97),a(51)),Se=a.n(je),Oe=function(){return n.a.createElement("div",{className:"SideNavbar"},n.a.createElement(w.c,{to:"/",activeClassName:"navlinkSelected",exact:!0},n.a.createElement("img",{src:I.a,alt:"Home Icon"}),n.a.createElement("p",null,"Home")),n.a.createElement(w.c,{to:"/about",activeClassName:"navlinkSelected",exact:!0},n.a.createElement("img",{src:T.a,alt:"About Icon"}),n.a.createElement("p",null,"About")),n.a.createElement(w.c,{to:"/portfolio",activeClassName:"navlinkSelected",exact:!0},n.a.createElement("img",{src:Se.a,alt:"Portfolio Icon"}),n.a.createElement("p",null,"Portfolio")),n.a.createElement(w.c,{to:"/contact",activeClassName:"navlinkSelected",exact:!0},n.a.createElement("img",{src:P.a,alt:"Contact Icon"})," ",n.a.createElement("p",null,"Contact")))},Ne=(a(98),function(e){function t(){var e,a;Object(j.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(n)))).state={projects:[],projectsData:[{projectName:"PersonalWebsiteV2",projectDesc:"Redesigning Personal Website and Automating Portfolio (Prototype)",numOfFavorites:"1",languages:"Javascript",srcLink:"https://github.com/hasham7861/PersonalWebsiteV2"},{projectName:"LandingPage",projectDesc:"Created a Landing Page using Sass",numOfFavorites:"0",languages:"CSS",srcLink:"https://github.com/hasham7861/LandingPage"},{projectName:"Asteroid-Game",projectDesc:"Asteroid Game made on canvas using the zim.js framework",numOfFavorites:"0",languages:"HTML",srcLink:"https://github.com/hasham7861/AsteroidGame"}]},a}return Object(y.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=[],a=function(a){var o=e.state.projectsData[a],r="/project/".concat(o.projectName),c={projectName:o.projectName,projectDesc:o.projectDesc,numOfFavorites:o.numOfFavorites,languages:o.languages,srcLink:o.srcLink},s=n.a.createElement(w.c,{className:"ProjectLink",to:r,onClick:function(){return function(e){localStorage.setItem("projectData",JSON.stringify(e))}(c)}},n.a.createElement(X,{name:o.projectName,about:o.projectDesc}));t.push(s)},o=0;o<this.state.projectsData.length;o++)a(o);this.setState({projects:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"PortfolioScreen"},n.a.createElement("h1",null,"My Pinned Github Portfolio"),n.a.createElement("div",{className:"PortfolioContainer"},n.a.createElement("ul",null,this.state.projects.map(function(e,t){return n.a.createElement("li",{key:t},e)}))))}}]),t}(o.Component)),ye=function(e){function t(){return Object(j.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w.a,null,n.a.createElement("div",{className:C.isBrowser?"DesktopScreen":""},n.a.createElement(C.BrowserView,{className:"SideBar"},n.a.createElement(Oe,null)),n.a.createElement(A.d,{className:C.isBrowser?"Content":""},n.a.createElement(A.b,{path:"/",exact:!0,component:Q}),n.a.createElement(A.b,{path:"/about",exact:!0,component:ve}),n.a.createElement(A.b,{path:"/contact",exact:!0,component:J}),n.a.createElement(A.b,{path:"/portfolio",exact:!0,component:Ne}),n.a.createElement(A.b,{path:"/project/:name/",exact:!0,component:ae}),n.a.createElement(A.b,{component:ee})))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=document.getElementById("root");c.a.render(n.a.createElement(s.a,{store:v},n.a.createElement(ye,null)),we),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[52,1,2]]]);
//# sourceMappingURL=main.5cd00cec.chunk.js.map