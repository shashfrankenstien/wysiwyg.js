(function(i,p,a,d){var c=function(z,y,w){var x;return function(){if(x){if(!w){return}clearTimeout(x)}var B=this,A=arguments;x=setTimeout(function(){x=null;z.apply(B,A)},y)}};var q=function(x,z,y,w){if(x.addEventListener){x.addEventListener(z,y,w?true:false)}else{if(x.attachEvent){x.attachEvent("on"+z,y)}else{if(x!=i){x["on"+z]=y}}}};var s=function(x,z,y,w){if(x.removeEventListener){x.removeEventListener(z,y,w?true:false)}else{if(x.detachEvent){x.detachEvent("on"+z,y)}else{if(x!=i){x["on"+z]=null}}}};var v=function(y,z,x,w){if(p.createEvent){var A=p.createEvent("Event");A.initEvent(z,x!==d?x:true,w!==d?w:false);y.dispatchEvent(A)}else{if(p.createEventObject){var A=p.createEventObject();y.fireEvent("on"+z,A)}else{if(typeof(y["on"+z])=="function"){y["on"+z]()}}}};var t=function(w){if(w.preventDefault){w.preventDefault()}else{w.returnValue=false}if(w.stopPropagation){w.stopPropagation()}else{w.cancelBubble=true}return false};var n=typeof(Node)!="undefined"?Node.ELEMENT_NODE:1;var f=typeof(Node)!="undefined"?Node.TEXT_NODE:3;var l=function(w,x){var y=x;while(y){if(y===w){return true}y=y.parentNode}return false};var b=function(x,w){if(x.firstChild){return x.firstChild}while(x){if(x==w){return null}if(x.nextSibling){return x.nextSibling}x=x.parentNode}return null};var o=function(w){if(i.getSelection){var x=i.getSelection();if(x.rangeCount>0){return x.getRangeAt(0)}}else{if(p.selection){var x=p.selection;return x.createRange()}}return null};var k=function(w,y){if(!y){return}if(i.getSelection){var x=i.getSelection();x.removeAllRanges();x.addRange(y)}else{if(p.selection){y.select()}}};var g=function(){if(i.getSelection){var y=i.getSelection();if(!y.rangeCount){return false}var w=y.getRangeAt(0).cloneRange();if(w.getBoundingClientRect){var x=w.getBoundingClientRect();if(!x||(x.left==0&&x.top==0&&x.right==0&&x.bottom==0)){return false}return{left:parseInt(x.left),top:parseInt(x.top),width:parseInt(x.right-x.left),height:parseInt(x.bottom-x.top)}}}else{if(p.selection){var y=p.selection;if(y.type!="Control"){var w=y.createRange();return{left:w.boundingLeft,top:w.boundingTop,width:w.boundingWidth,height:w.boundingHeight}}}}return false};var h=function(x){if(i.getSelection){var z=i.getSelection();if(z.isCollapsed){return true}return false}else{if(p.selection){var z=p.selection;if(z.type=="Text"){var y=p.selection.createRange();var w=p.body.createTextRange();w.moveToElementText(x);w.setEndPoint("EndToStart",y);return y.htmlText.length==0}if(z.type=="Control"){return false}}}return true};var j=function(A){if(i.getSelection){var y=i.getSelection();if(!y.rangeCount){return[]}var x=[];for(var E=0;E<y.rangeCount;++E){var G=y.getRangeAt(E),z=G.startContainer,H=G.endContainer;while(z){if(z!=A){var I=false;if(y.containsNode){I=y.containsNode(z,true)}else{var D=p.createRange();D.selectNodeContents(z);for(var E=0;E<y.rangeCount;++E){var G=y.getRangeAt(E);if(G.compareBoundaryPoints(G.END_TO_START,D)>=0&&G.compareBoundaryPoints(G.START_TO_END,D)<=0){I=true;break}}}if(I){x.push(z)}}z=b(z,z==H?H:A)}}if(x.length==0&&l(A,y.focusNode)&&y.focusNode!=A){x.push(y.focusNode)}return x}else{if(p.selection){var y=p.selection;if(y.type=="Text"){var x=[];var w=y.createRangeCollection();for(var E=0;E<w.length;++E){var G=w[E],F=G.parentElement(),z=F;while(z){var D=G.duplicate();D.moveToElementText(z.nodeType!=n?z.parentNode:z);if(D.compareEndPoints("EndToStart",G)>=0&&D.compareEndPoints("StartToEnd",G)<=0){var C=false;for(var B=0;B<x.length;++B){if(x[B]!==z){continue}C=true;break}if(!C){x.push(z)}}z=b(z,F)}}if(x.length==0&&l(A,p.activeElement)&&p.activeElement!=A){x.push(p.activeElement)}return x}if(y.type=="Control"){var x=[];var G=y.createRange();for(var E=0;E<G.length;++E){x.push(G(E))}return x}}}return[]};var e=function(){if(i.getSelection){var x=i.getSelection();if(!x.isCollapsed){x.collapseToEnd()}}else{if(p.selection){var x=p.selection;if(x.type!="Control"){var w=x.createRange();w.collapse(false);w.select()}}}};var r=function(x){if(h(x)){return null}if(i.getSelection){var C=i.getSelection();if(C.rangeCount){var y=p.createElement("div"),w=C.rangeCount;for(var A=0;
A<w;++A){var B=C.getRangeAt(A).cloneContents();y.appendChild(B)}return y.innerHTML}}else{if(p.selection){var C=p.selection;if(C.type=="Text"){var z=C.createRange();return z.htmlText}}}return null};var m=function(w,A){if(i.getSelection){var z=i.getSelection();if(l(w,z.anchorNode)&&l(w,z.focusNode)){return true}if(!A){return false}var x=p.createRange();x.selectNodeContents(w);x.collapse(false);z.removeAllRanges();z.addRange(x)}else{if(p.selection){var z=p.selection;if(z.type=="Control"){var x=z.createRange();if(x.length!=0&&l(w,x(0))){return true}}else{var y=p.body.createTextRange();y.moveToElementText(w);var x=z.createRange();if(y.inRange(x)){return true}}if(!A){return false}var x=p.body.createTextRange();x.moveToElementText(w);x.setEndPoint("StartToEnd",x);x.select()}}return true};var u=function(A,C){if(i.getSelection){var x=i.getSelection();if(x.getRangeAt&&x.rangeCount){var D=x.getRangeAt(0);var y=p.createElement("div");y.innerHTML=C;var E=p.createDocumentFragment(),z,w;while((z=y.firstChild)){w=E.appendChild(z)}if(l(A,D.commonAncestorContainer)){D.deleteContents();D.insertNode(E)}else{A.appendChild(E)}if(w){D=D.cloneRange();D.setStartAfter(w);D.collapse(true);x.removeAllRanges();x.addRange(D)}}}else{if(p.selection){var x=p.selection;if(x.type!="Control"){var B=x.createRange();B.collapse(true);var D=x.createRange();if(l(A,D.parentElement())){D.pasteHTML(C)}else{var F=p.body.createTextRange();F.moveToElementText(A);F.collapse(false);F.select();F.pasteHTML(C)}D=x.createRange();D.setEndPoint("StartToEnd",B);D.select()}}}};i.wysiwyg=function(L){L=L||{};var x=L.element||null;var ae=L.onkeypress||null;var ad=L.onselection||null;var y=L.onplaceholder||null;var A=L.hijackcontextmenu||false;var K=x.nodeName=="TEXTAREA"||x.nodeName=="INPUT";if(K){var S="contentEditable" in p.body;if(S){var w=a.userAgent.match(/(?:iPad|iPhone|Android).* AppleWebKit\/([^ ]+)/);if(w&&420<=parseInt(w[1])&&parseInt(w[1])<534){S=false}}if(!S){var Z=x;var E=function(af){return af.replace(/<br[ \/]*>\n?/gi,"<br>\n")};Z.value=E(Z.value);var C=function(){return this};var P=function(){return null};return{legacy:true,getElement:function(){return Z},getHTML:function(){return Z.value},setHTML:function(af){Z.value=E(af);return this},getSelectedHTML:P,sync:C,collapseSelection:C,openPopup:P,closePopup:C,removeFormat:C,bold:C,italic:C,underline:C,strikethrough:C,forecolor:C,highlight:C,fontName:C,fontSize:C,subscript:C,superscript:C,align:C,format:C,indent:C,insertLink:C,insertImage:C,insertHTML:C,insertList:C}}}var Z=null,T=null;if(K){Z=x;Z.style.display="none";T=p.createElement("DIV");T.innerHTML=Z.value;var H=Z.parentNode,O=Z.nextSibling;if(O){H.insertBefore(T,O)}else{H.appendChild(T)}}else{T=x}T.setAttribute("contentEditable","true");var B=(p.all&&!p.addEventListener)?p:i;var M=null;if(K){var U=T.innerHTML;M=function(){var af=T.innerHTML;if(af==U){return}Z.value=af;U=af;v(Z,"change",false)}}var ab;if(y){var G=false;ab=function(){var ah=true;var af=T;while(af){af=b(af,T);if(!af){}else{if(af.nodeType==n){if(af.nodeName=="IMG"){ah=false;break}}else{if(af.nodeType==f){var ag=af.nodeValue;if(ag&&ag.search(/[^\s]/)!=-1){ah=false;break}}}}}if(G!=ah){y(ah);G=ah}};ab()}var Y=null,R=null,z=null;if(ad){R=function(ai,ag,aq){var an=h(T);var ah=j(T);var ap=(ai===null||ag===null)?null:{left:ai,top:ag,width:0,height:0};var af=g();if(af){ap=af}if(ap){if(T.getBoundingClientRect){var ar=T.getBoundingClientRect();ap.left-=parseInt(ar.left);ap.top-=parseInt(ar.top)}else{var al=T,ak=0,aj=0,am=false;do{ak+=al.offsetLeft?parseInt(al.offsetLeft):0;aj+=al.offsetTop?parseInt(al.offsetTop):0;if(al.style.position=="fixed"){am=true}}while(al=al.offsetParent);ap.left-=ak-(am?0:i.pageXOffset);ap.top-=aj-(am?0:i.pageYOffset)}if(ap.left<0){ap.left=0}if(ap.top<0){ap.top=0}if(ap.width>T.offsetWidth){ap.width=T.offsetWidth}if(ap.height>T.offsetHeight){ap.height=T.offsetHeight}}else{if(ah.length){for(var ao=0;ao<ah.length;++ao){var al=ah[ao];if(al.nodeType!=n){continue}ap={left:al.offsetLeft,top:al.offsetTop,width:al.offsetWidth,height:al.offsetHeight};break}}}ad(an,ap,ah,aq)};z=c(R,1)}var I=null;
var ac=function(ag){if(!ag){var ag=i.event}var af=ag.target||ag.srcElement;if(af.nodeType==f){af=af.parentNode}if(l(I,af)){return}N()};var X=function(){if(I){return I}q(B,"mousedown",ac,true);I=p.createElement("DIV");var ag=T.parentNode,af=T.nextSibling;if(af){ag.insertBefore(I,af)}else{ag.appendChild(I)}return I};var N=function(){if(!I){return}I.parentNode.removeChild(I);I=null;s(B,"mousedown",ac,true)};q(T,"focus",function(){if(Z){v(Z,"focus",false)}});q(T,"blur",function(){if(M){M()}if(Z){v(Z,"blur",false)}});var J=null;if(ab||M){var D=M?c(M,250,true):null;var W=function(af){if(ab){ab()}if(D){D()}};J=c(W,1);q(T,"input",J);q(T,"DOMNodeInserted",J);q(T,"DOMNodeRemoved",J);q(T,"DOMSubtreeModified",J);q(T,"DOMCharacterDataModified",J);q(T,"propertychange",J);q(T,"textInput",J);q(T,"paste",J);q(T,"cut",J);q(T,"drop",J)}var aa=function(ai,af){if(!ai){var ai=i.event}var ag=0;if(ai.keyCode){ag=ai.keyCode}else{if(ai.which){ag=ai.which}}var ah=ai.charCode;if(af==1&&ae){var aj=ae(ag,ah?String(String):String.fromCharCode(ag),ai.shiftKey||false,ai.altKey||false,ai.ctrlKey||false,ai.metaKey||false);if(aj===false){return t(ai)}}if(af==2||af==3){Y=null;if(z){z(null,null,false)}}if(af==2&&J){switch(ag){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:break;default:J();break}}};q(T,"keydown",function(af){return aa(af,1)});q(T,"keypress",function(af){return aa(af,2)});q(T,"keyup",function(af){return aa(af,3)});var F=function(ai,af){if(!ai){var ai=i.event}var ah=null,ag=null;if(ai.clientX&&ai.clientY){ah=ai.clientX;ag=ai.clientY}else{if(ai.pageX&&ai.pageY){ah=ai.pageX-i.pageXOffset;ag=ai.pageY-i.pageYOffset}}if(ai.which&&ai.which==3){af=true}else{if(ai.button&&ai.button==2){af=true}}s(B,"mouseup",F);Y=null;if(!A&&af){return}if(z){z(ah,ag,af)}};q(T,"mousedown",function(af){s(B,"mouseup",F);q(B,"mouseup",F)});q(T,"mouseup",function(af){F(af);if(J){J()}});q(T,"dblclick",function(af){F(af)});q(T,"selectionchange",function(af){F(af)});if(A){q(T,"contextmenu",function(af){F(af,true);return t(af)})}var V=function(ak,aj,ah){k(T,Y);if(!m(T,ah)){return false}if(i.getSelection){try{if(p.queryCommandSupported&&!p.queryCommandSupported(ak)){return false}return p.execCommand(ak,false,aj)}catch(ai){}}else{if(p.selection){var ag=p.selection;if(ag.type!="None"){var af=ag.createRange();try{if(!af.queryCommandEnabled(ak)){return false}return af.execCommand(ak,false,aj)}catch(ai){}}}}return false};var Q=function(af){if(J){J()}if(af){e();Y=null}else{if(Y){Y=o(T)}}};return{getElement:function(){return T},getHTML:function(){return T.innerHTML},setHTML:function(af){T.innerHTML=af;Q(true);return this},getSelectedHTML:function(){k(T,Y);if(!m(T)){return null}return r(T)},sync:function(){if(M){M()}return this},collapseSelection:function(){e();Y=null;return this},openPopup:function(){if(!Y){Y=o(T)}return X()},closePopup:function(){N();return this},removeFormat:function(){V("removeFormat");V("unlink");Q();return this},bold:function(){V("bold");Q();return this},italic:function(){V("italic");Q();return this},underline:function(){V("underline");Q();return this},strikethrough:function(){V("strikeThrough");Q();return this},forecolor:function(af){V("foreColor",af);Q();return this},highlight:function(af){if(!V("hiliteColor",af)){V("backColor",af)}Q();return this},fontName:function(af){V("fontName",af);Q();return this},fontSize:function(af){V("fontSize",af);Q();return this},subscript:function(){V("subscript");Q();return this},superscript:function(){V("superscript");Q();return this},align:function(af){if(af=="left"){V("justifyLeft")}else{if(af=="center"){V("justifyCenter")}else{if(af=="right"){V("justifyRight")}else{if(af=="justify"){V("justifyFull")}}}}Q();return this},format:function(af){V("formatBlock",af);Q();return this},indent:function(af){V(af?"outdent":"indent");Q();return this},insertLink:function(af){V("createLink",af);Q(true);return this},insertImage:function(af){V("insertImage",af,true);Q(true);return this},insertHTML:function(af){if(!V("insertHTML",af,true)){k(T,Y);m(T,true);u(T,af)}Q(true);return this},insertList:function(af){V(af?"insertOrderedList":"insertUnorderedList");
Q();return this}}}})(window,document,navigator);
(function(d,a,e,f){var c=function(o,C,A){var j,u,y,n,x,l,k,B;n=Math.floor(o*6);x=o*6-n;l=A*(1-C);k=A*(1-x*C);B=A*(1-(1-x)*C);switch(n%6){case 0:j=A,u=B,y=l;break;case 1:j=k,u=A,y=l;break;case 2:j=l,u=A,y=B;break;case 3:j=l,u=k,y=A;break;case 4:j=B,u=l,y=A;break;case 5:j=A,u=l,y=k;break}var z=Math.floor(j*255).toString(16);var m=Math.floor(u*255).toString(16);var w=Math.floor(y*255).toString(16);return"#"+(z.length<2?"0":"")+z+(m.length<2?"0":"")+m+(w.length<2?"0":"")+w};var b=function(C,E,m,k,D,j,t,I,h,r,n,i,o,G){var A=function(L,M){if(!M){}else{if(L.getSelectedHTML()){L.insertLink(M)}else{L.insertHTML('<a href="'+M.replace(/"/,"&quot;")+'">'+M+"</a>")}}L.closePopup().collapseSelection()};var F=function(L,P){var O=z(j);var Q=e('<input type="text" value="'+(P?P.attr("href"):"")+'" />').addClass("wysiwyg-input").keypress(function(R){if(R.which!=10&&R.which!=13){return}if(P){P.attr("href",Q.val());L.closePopup().collapseSelection()}else{try{A(L,Q.val())}catch(S){L.closePopup()}}});if(I){Q.attr("placeholder",I)}var N=O.click(function(R){if(P){P.attr("href",Q.val());L.closePopup().collapseSelection()}else{A(L,Q.val())}R.stopPropagation();R.preventDefault();return false});var M=e("<div/>").addClass("wysiwyg-toolbar-form").attr("unselectable","on");M.append(Q).append(N);return M};var y=function(P){var N=function(W,V){var X='<img id="wysiwyg-insert-image" src="" alt=""'+(V?' title="'+V.replace(/"/,"&quot;")+'"':"")+" />";P.insertHTML(X).closePopup().collapseSelection();var Y=e("#wysiwyg-insert-image").removeAttr("id");if(r){Y.css({maxWidth:r[0]+"px",maxHeight:r[1]+"px"}).load(function(){Y.css({maxWidth:"",maxHeight:""});var aa=Y.width(),Z=Y.height();if(aa>r[0]||Z>r[1]){if((aa/Z)>(r[0]/r[1])){Z=parseInt(Z/aa*r[0]);aa=r[0]}else{aa=parseInt(aa/Z*r[1]);Z=r[1]}Y.attr("width",aa).attr("height",Z)}})}Y.attr("src",W)};var O=e("<div/>").addClass("wysiwyg-toolbar-form").attr("unselectable","on");var S=null,U=e('<input type="file" />').css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0,cursor:"pointer"});if(!i&&d.File&&d.FileReader&&d.FileList){var Q=function(W){if(!W.type.match("image.*")){return}var V=new FileReader();V.onload=function(Y){var X=Y.target.result;N(X,W.name)};V.readAsDataURL(W)};S=U.attr("draggable","true").change(function(X){var W=X.target.files;for(var V=0;V<W.length;++V){Q(W[V])}}).on("dragover",function(V){V.originalEvent.dataTransfer.dropEffect="copy";V.stopPropagation();V.preventDefault();return false}).on("drop",function(X){var W=X.originalEvent.dataTransfer.files;for(var V=0;V<W.length;++V){Q(W[V])}X.stopPropagation();X.preventDefault();return false})}else{if(n){var T=U.change(function(V){n.call(this,N)});S=e("<form/>").append(T)}}if(S){e("<div/>").addClass("wysiwyg-browse").html(t).append(S).appendTo(O)}var L=z(j);var R=e('<input type="text" value="" />').addClass("wysiwyg-input").keypress(function(V){if(V.which==10||V.which==13){N(R.val())}});if(I){R.attr("placeholder",I)}var M=L.click(function(V){N(R.val());V.stopPropagation();V.preventDefault();return false});O.append(e("<div/>").append(R).append(M));return O};var H=function(L){var O=function(S,T){S=e.trim(S||"");T=e.trim(T||"");var U=false;if(S.length&&!T.length){U=S}else{if(T.indexOf("<")==-1&&T.indexOf(">")==-1&&T.match(/^(?:https?:\/)?\/?(?:[^:\/\s]+)(?:(?:\/\w+)*\/)(?:[\w\-\.]+[^#?\s]+)(?:.*)?(?:#[\w\-]+)?$/)){U=T}}if(U&&o){T=o(U)||""}if(!T.length&&U){T='<video src="'+U.replace(/"/,"&quot;")+'" />'}L.insertHTML(T).closePopup().collapseSelection()};var M=e("<div/>").addClass("wysiwyg-toolbar-form").attr("unselectable","on");var N=e("<textarea>").addClass("wysiwyg-input wysiwyg-inputtextarea");if(h){N.attr("placeholder",h)}e("<div/>").addClass("wysiwyg-embedcode").append(N).appendTo(M);var Q=z(j);var R=e('<input type="text" value="" />').addClass("wysiwyg-input").keypress(function(S){if(S.which==10||S.which==13){O(R.val())}});if(I){R.attr("placeholder",I)}var P=Q.click(function(S){O(R.val(),N.val());S.stopPropagation();S.preventDefault();return false});M.append(e("<div/>").append(R).append(P));return M};var s=function(M,O){var L=e("<table/>").attr("cellpadding","0").attr("cellspacing","0").attr("unselectable","on");
for(var W=1;W<15;++W){var U=e("<tr/>");for(var N=0;N<25;++N){var P;if(N==24){var V=Math.floor(255/13*(14-W)).toString(16);var S=(V.length<2?"0":"")+V;P="#"+S+S+S}else{var R=N/24;var Q=W<=8?W/8:1;var T=W>8?(16-W)/8:1;P=c(R,Q,T)}e("<td/>").addClass("wysiwyg-toolbar-color").attr("title",P).attr("unselectable","on").css({backgroundColor:P}).click(function(){var X=this.title;if(O){M.forecolor(X).closePopup().collapseSelection()}else{M.highlight(X).closePopup().collapseSelection()}return false}).appendTo(U)}L.append(U)}return L};var v=function(L,M){switch(L){case"insertimage":if(!M){return null}return function(N){M(y(g),N)};case"insertvideo":if(!M){return null}return function(N){M(H(g),N)};case"insertlink":if(!M){return null}return function(N){M(F(g),N)};case"bold":return function(){g.bold()};case"italic":return function(){g.italic()};case"underline":return function(){g.underline()};case"strikethrough":return function(){g.strikethrough()};case"forecolor":if(!M){return null}return function(N){M(s(g,true),N)};case"highlight":if(!M){return null}return function(N){M(s(g,false),N)};case"alignleft":return function(){g.align("left")};case"aligncenter":return function(){g.align("center")};case"alignright":return function(){g.align("right")};case"alignjustify":return function(){g.align("justify")};case"subscript":return function(){g.subscript()};case"superscript":return function(){g.superscript()};case"indent":return function(){g.indent()};case"outdent":return function(){g.indent(true)};case"orderedList":return function(){g.insertList(true)};case"unorderedList":return function(){g.insertList()};case"removeformat":return function(){g.removeFormat().closePopup().collapseSelection()}}return null};var z=function(L){return e("<a/>").addClass("wysiwyg-toolbar-icon").attr("href","#").attr("title",L.title).attr("unselectable","on").append(L.image)};var B=function(L,M,N,O){e.each(D,function(P,S){if(!S){return}if(M===false&&"showstatic" in S&&!S.showstatic){return}if(M===true&&"showselection" in S&&!S.showselection){return}var R;if("click" in S){R=function(T){S.click(e(T))}}else{if("popup" in S){R=function(U){var V=N();var T=S.popup(V,e(U));O(V,U,T)}}else{R=v(P,function(T,U){var V=N();V.append(T);O(V,U);V.find("input[type=text]:first").focus()})}}var Q;if(R){Q=z(S).click(function(T){R(T.currentTarget);if(v(P)){g.getElement().focus()}T.stopPropagation();T.preventDefault();return false})}else{if(S.html){Q=e(S.html)}}if(Q){L.append(Q)}})};var K=function(L,Z,P,W){var Y=Z.get(0).offsetParent,R={left:0,top:0},U=false,M=false,X=L.width(),O=Y;while(O){R.left+=O.offsetLeft;R.top+=O.offsetTop;var N=e(O);if(N.css("position")=="fixed"){U=true}if(N.css("overflow")!="visible"){M=true}O=O.offsetParent}var V=e(Y||a.body);V.append(L);var Q=Z.position();P+=Q.left;W+=Q.top;if(U||M){if(P+X>V.width()-1){P=V.width()-X-1}if(P<1){P=1}}var T=e(d).width();if(R.left+P+X>T-1){P=T-R.left-X-1}var S=U?0:e(d).scrollLeft();if(R.left+P<S+1){P=S-R.left+1}L.css({left:parseInt(P)+"px",top:parseInt(W)+"px"})};var q={};var u=function(Q,P,O){var N={element:Q.get(0),onkeypress:function(T,V,S,U,X,W){if(G&&G(T,V,S,U,X,W)===false){return false}if(V&&!S&&!U&&X&&!W){var R=V.toLowerCase();if(!q[R]){return}q[R]();return false}},onselection:function(Y,V,S,T){var U=true,R=null;if(Y){e.each(S,function(Z,aa){if(e(aa).parents("a").length!=0){R=F(L,e(aa).parents("a:first"));return false}})}if(!V){U=false}else{if(R){}else{if(T){}else{if(k!="selection"&&k!="top-selection"&&k!="bottom-selection"){U=false}else{if(Y){U=false}else{if(S.length==1&&S[0].nodeName=="IMG"){U=false}}}}}}if(!U){L.closePopup();return}var X;var W=function(){var ad=X.outerWidth();var ac=P.offset(),Z=e(L.getElement()).offset();var ab=V.left+parseInt(V.width/2)-parseInt(ad/2)+Z.left-ac.left;var aa=V.top+V.height+Z.top-ac.top;K(X,P,ab,aa)};X=e(L.openPopup());if(X.hasClass("wysiwyg-popup")&&!X.hasClass("wysiwyg-popuphover")||X.data("special")!=(!!R)){X=e(L.closePopup().openPopup())}if(!X.hasClass("wysiwyg-popup")){X.addClass("wysiwyg-popup wysiwyg-popuphover");if(R){X.empty().append(R).data("special",true)}else{B(X,true,function(){return X.empty()
},W)}}W()},hijackcontextmenu:(k=="selection")};if(O){var M=e("<div/>").addClass("wysiwyg-placeholder").html(O).hide();P.prepend(M);N.onplaceholder=function(R){if(R){M.show()}else{M.hide()}}}var L=wysiwyg(N);return L};var w=e("<div/>").addClass("wysiwyg-container");if(E){w.addClass(E)}C.wrap(w);w=C.parent(".wysiwyg-container");var x=false;if(m){x=e("<div/>").addClass("wysiwyg-wrapper").click(function(){g.getElement().focus()});C.wrap(x);x=C.parent(".wysiwyg-wrapper")}var g=u(C,m?x:w,m);if(g.legacy){var C=e(g.getElement());C.addClass("wysiwyg-textarea");if(C.is(":visible")){C.width(w.width()-(C.outerWidth()-C.width()))}}else{e(g.getElement()).addClass("wysiwyg-editor")}var l={};e.each(D,function(L,N){if(!N||!N.hotkey){return}var M=v(L);if(!M){return}q[N.hotkey.toLowerCase()]=M;l[L]=M});if(k!="selection"){var p=k=="top"||k=="top-selection";var J=e("<div/>").addClass("wysiwyg-toolbar").addClass(p?"wysiwyg-toolbar-top":"wysiwyg-toolbar-bottom");B(J,false,function(){var L=e(g.openPopup());if(L.hasClass("wysiwyg-popup")&&L.hasClass("wysiwyg-popuphover")){L=e(g.closePopup().openPopup())}if(!L.hasClass("wysiwyg-popup")){L.addClass("wysiwyg-popup")}return L},function(Q,P,L){var M=e(P);var R=Q.outerWidth();var O=M.offset().left-w.offset().left+parseInt(M.width()/2)-parseInt(R/2);var N=M.offset().top-w.offset().top;if(p){N+=M.outerHeight()}else{N-=Q.outerHeight()}if(L){O=L.left;N=L.top}K(Q,w,O,N)});if(p){w.prepend(J)}else{w.append(J)}}return{wysiwygeditor:g,$container:w}};e.fn.wysiwyg=function(g,i){if(!g||typeof(g)==="object"){g=e.extend({},g);return this.each(function(){var p=e(this);if(p.data("wysiwyg")){return}var m=g.classes,v=g.placeholder||p.attr("placeholder"),k=(g.toolbar&&(g.toolbar=="top"||g.toolbar=="top-selection"||g.toolbar=="bottom"||g.toolbar=="bottom-selection"||g.toolbar=="selection"))?g.toolbar:"top-selection",n=g.buttons,u=g.submit,w=g.selectImage,x=g.placeholderUrl||null,t=g.placeholderEmbed||null,j=g.maxImageSize||null,r=g.onImageUpload||null,l=g.forceImageUpload&&r,s=g.videoFromUrl||null,q=g.onKeyPress;var o=b(p,m,v,k,n,u,w,x,t,j,r,l,s,q);p.data("wysiwyg",o)})}else{if(this.length==1){var h=this.data("wysiwyg");if(!h){return this}if(g=="container"){return h.$container}if(g=="shell"){return h.wysiwygeditor}}}return this}})(window,document,jQuery);