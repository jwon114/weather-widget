(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),o=(a(14),a(4)),l=a(5),s=a(8),m=a(7),d=function(e,t){return fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("6c8ca7a74ad9d3301728396fc82b6227","&units=metric"))},u=function(e){var t=new Date(1e3*e.datetime),a=t.toLocaleDateString("en",{weekday:"long"}),n=t.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"});return i.a.createElement("div",{className:"header__container"},i.a.createElement("div",{className:"header__location"},e.location),i.a.createElement("div",{className:"header__time"},a," ",n),i.a.createElement("div",{className:"header__summary"},e.summary))},h=a(1),_=function(e){var t=Object(n.useState)("C"),a=Object(h.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(e.temperature),l=Object(h.a)(o,2),s=l[0],m=l[1],d=function(){"C"===c?(m(1.8*s+32),r("F")):"F"===c&&(m((s-32)/1.8),r("C"))};return i.a.createElement("div",{className:"weatherDetails__main"},i.a.createElement("div",{className:"weatherDetails__left_container"},i.a.createElement("div",{className:"weatherDetails__icon"},i.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),alt:"weather forecast icon"})),i.a.createElement("div",{className:"weatherDetails__temperature_container"},i.a.createElement("span",{className:"weatherDetails__temperature"},Math.floor(s)),i.a.createElement("div",{className:"weatherDetails__unit_click ".concat("C"===c?"active":"")},i.a.createElement("span",{className:"weatherDetails__unit",onClick:d},"\xb0C")),i.a.createElement("span",{className:"weatherDetails__vert_separator"},"|"),i.a.createElement("div",{className:"weatherDetails__unit_click ".concat("F"===c?"active":"")},i.a.createElement("span",{className:"weatherDetails__unit",onClick:d},"\xb0F")))),i.a.createElement("div",{className:"weatherDetails__right_container"},i.a.createElement("div",{className:"weatherDetails__precipitation"},"Precipitation: ",e.precipitation,"mm"),i.a.createElement("div",{className:"weatherDetails__humidity"},"Humidity: ",e.humidity,"%"),i.a.createElement("div",{className:"weatherDetails__wind"},"Wind: ",Math.floor(3.6*e.windSpeed)," km/h"),i.a.createElement("div",{className:"weatherDetails__conditions"},i.a.createElement("button",{className:"weatherDetails__conditions_button"},"Temperature"),i.a.createElement("button",{className:"weatherDetails__conditions_button"},"Precipitation"),i.a.createElement("button",{className:"weatherDetails__conditions_button"},"Wind"))))},w=a(6),p=a.n(w),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currently:{},dataLoad:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;d(a,n).then((function(e){return e.json()})).then((function(t){e.setState({currently:t,dataLoad:!0})})).catch((function(){console.log("Something went wrong with fetch")}))})):console.log("Geolocation is not available in this browser!")}},{key:"render",value:function(){var e=this.state.currently;return i.a.createElement("div",{className:"weatherApp__container"},this.state.dataLoad?i.a.createElement("div",null,i.a.createElement(u,{location:e.name,datetime:e.dt,summary:e.weather[0].description}),i.a.createElement(_,{icon:e.weather[0].icon,temperature:e.main.temp,precipitation:e.rain||0,humidity:e.main.humidity,windSpeed:e.wind.speed})):i.a.createElement("div",{className:"weatherApp__loading"},i.a.createElement("img",{src:p.a,alt:"loading_spinner"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/loading.f5c44a27.gif"},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4253871.chunk.js.map