"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[47891],{77626:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(78e3),o=n(81395),r=n(19522);const s=(0,a.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,r.yj)(),n=(0,o.iH)();(0,a.YP)((()=>t.path),(()=>n.value.focus()));const s=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,a.h)("span",{ref:n,tabindex:"-1"}),(0,a.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:s},"Skip to content")]}})},47891:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(78e3),o=n(8392),r=n(89231),s=n(44288);const l=(0,a.aZ)({name:"FadeSlideY",setup(e,{slots:t}){const n=(0,s.P$)(),o=n.resolve,l=n.pending;return()=>(0,a.h)(r.uT,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o,onBeforeLeave:l},(()=>t.default?.()))}});var u=n(77626);const i=(0,a.aZ)({name:"Layout",setup(){const e=(0,s.BV)(),t=(0,s.X6)(),n=(0,o.Vi)(),r=(0,o.I2)(),i=(0,s.XA)(),p=(0,a.Fl)((()=>t.value.blog.sidebarDisplay||e.value.blog.sidebarDisplay||"mobile"));return()=>[(0,a.h)(u.Z),(0,a.h)((0,a.up)("CommonWrapper"),{},{default:()=>r.value.home?(0,a.h)((0,a.up)("HomePage")):(0,a.h)(l,(()=>(0,a.h)((0,a.up)("NormalPage"),{key:n.value.path}))),..."none"!==p.value?{navScreenBottom:()=>(0,a.h)((0,a.up)("BloggerInfo"))}:{},...i.value||"always"!==p.value?{}:{sidebar:()=>(0,a.h)((0,a.up)("BloggerInfo"))}})]}})}}]);