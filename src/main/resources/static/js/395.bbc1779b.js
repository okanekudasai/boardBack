"use strict";(self["webpackChunkboardgo"]=self["webpackChunkboardgo"]||[]).push([[395],{7395:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("메인페이지")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),e("br"),e("button",{on:{click:t.sub}},[t._v("전송")]),e("hr"),e("table",t._l(t.articleList,(function(n,i){return e("tr",{key:i},[e("td",[t._v(t._s(n.num))]),e("td",[e("router-link",{attrs:{to:`/article/${n.num}`}},[t._v(t._s(n.title))])],1)])})),0)])},o=[],r=(n(7658),n(4311)),l={data(){return{title:"",content:"",articleList:[]}},created(){this.loadArticle()},methods:{loadArticle(){r.Z.get("http://localhost:9999/board/getList").then((({data:t})=>{for(var e of(this.articleList=[],t))this.articleList.push(e)}))},async sub(){await r.Z.post("http://localhost:9999/board/write",{title:this.title,content:this.content}),this.loadArticle()}}},a=l,s=n(1001),c=(0,s.Z)(a,i,o,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=395.bbc1779b.js.map