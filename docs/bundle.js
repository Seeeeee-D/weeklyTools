(()=>{"use strict";const t=function(){function t(t,e,n,i){this.minuteInput=t,this.secondInput=e,this.doBeforeTimerStart=n,this.doAfterTimeout=i,this.defaultMinute=parseInt(t.value),this.defaultSecond=parseInt(e.value),this.remainSecond=60*this.defaultMinute+this.defaultSecond}return t.prototype.isTimerValid=function(){return this.remainSecond>0},t.prototype.startTimer=function(e){var n=this;void 0===e&&(e=1e3);for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];this.doBeforeTimerStart(i),t.intervalObj=setInterval((function(){n.handlerTimer()}),e)},t.prototype.stopTimer=function(){for(var e=this,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];clearInterval(t.intervalObj),this.minuteInput.value="0",this.secondInput.value="0",setTimeout((function(){e.doAfterTimeout(n),e.restoreDefaultTime()}),100)},t.prototype.rewriteTimerElements=function(){this.minuteInput.value=Math.floor(this.remainSecond/60).toString(),this.secondInput.value=(this.remainSecond%60).toString()},t.prototype.restoreDefaultTime=function(){this.minuteInput.value=this.defaultMinute.toString(),this.secondInput.value=this.defaultSecond.toString()},t.prototype.handlerTimer=function(){this.remainSecond-=1,this.rewriteTimerElements(),this.remainSecond<=0&&this.stopTimer()},t}();let e=["Katsuya Suzuki","Ishibashi Ryo","mei","Kaihotsu Kotaro","ryogo_niwa","nanaka"];const n=()=>{const t=document.getElementById("members-form");t.innerHTML="",e.forEach(((e,n)=>{const r=document.createElement("div");r.id=n,t.appendChild(r);const d=document.createElement("input");d.value=e,d.id="input-"+n,d.addEventListener("change",i),r.appendChild(d);const a=document.createElement("button");a.innerText="削除",a.id="button-"+n,a.type="button",a.addEventListener("click",o),r.appendChild(a)}))},i=t=>{const n=t.target.value,i=t.target.id.replace("input-","");e[i]=n},o=t=>{const n=t.target.id.replace("button-",""),i=document.getElementById(`input-${n}`).value;e=e.filter((t=>t!=i)),document.getElementById(n).remove()},r=()=>{const t=document.getElementById("result");u(t);const n=a(e);d(t,n)},d=(t,e)=>{e.forEach((e=>{const n=document.createElement("li");n.innerText=e,t.appendChild(n)}))},a=t=>{const e=[];t.forEach((t=>{e.push(t)}));const n=[];for(;e.length>0;){var i=e.length,o=Math.floor(Math.random()*i);n.push(e[o]),e.splice(o,1)}return n},u=t=>{t.innerHTML=""};let s;const m=([t=!0])=>{t&&confirm("時間だよ〜"),document.getElementById("start-button").disabled=!1,document.getElementById("reset-button").disabled=!0},l=()=>{document.getElementById("start-button").disabled=!0,document.getElementById("reset-button").disabled=!1};window.onload=()=>{n()},window.addMember=()=>{const t=document.getElementById("new-member").value;document.getElementById("new-member").value="",e.push(t),n(),r()},window.resultHandler=r,window.timerStart=async()=>{const e=document.getElementById("min"),n=document.getElementById("sec");s=new t(e,n,l,m),s.isTimerValid()?s.startTimer(1e3):window.alert("時間にミスあるよ")},window.timerReset=()=>{s.stopTimer(!1),window.alert("タイマーを止めたよ"),s=void 0}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWVrbHktdG9vbHMvLi9zcmMvVGltZXIudHMiLCJ3ZWJwYWNrOi8vd2Vla2x5LXRvb2xzLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVGltZXIiLCJtaW51dGVJbnB1dCIsInNlY29uZElucHV0IiwiZG9CZWZvcmVUaW1lclN0YXJ0IiwiZG9BZnRlclRpbWVvdXQiLCJ0aGlzIiwiZGVmYXVsdE1pbnV0ZSIsInBhcnNlSW50IiwidmFsdWUiLCJkZWZhdWx0U2Vjb25kIiwicmVtYWluU2Vjb25kIiwicHJvdG90eXBlIiwiaXNUaW1lclZhbGlkIiwic3RhcnRUaW1lciIsImludGVydmFsIiwiX3RoaXMiLCJjYWxsYmFja1ZhbHMiLCJfaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImludGVydmFsT2JqIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVyVGltZXIiLCJzdG9wVGltZXIiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsInJlc3RvcmVEZWZhdWx0VGltZSIsInJld3JpdGVUaW1lckVsZW1lbnRzIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJtZW1iZXJzIiwic2V0TmFtZXNJbnB1dCIsImZvcm1FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImZvckVhY2giLCJtZW1iZXIiLCJpIiwiaW5wdXRHcm91cCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFwcGVuZENoaWxkIiwiaW5wdXRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlSGFuZGxlciIsImRlbGV0ZUJ1dHRvbkVsZW1lbnQiLCJpbm5lclRleHQiLCJ0eXBlIiwiZGVsZXRlQnV0dG9uSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwiaWR4IiwicmVwbGFjZSIsImZpbHRlciIsIm0iLCJyZW1vdmUiLCJyZXN1bHRIYW5kbGVyIiwicmVzdWx0Qm94IiwicmVmcmVzaFJlc3VsdEJveCIsInNodWZmbGVkTWVtYmVyIiwic2h1ZmZsZSIsInNldFJlc3VsdCIsInJlc3VsdEJveEVsZW1lbnQiLCJzaHVmZmxlZE1lbWJlcnMiLCJsaXN0RWxlbWVudCIsImVsZW1lbnRzIiwiY29waWVkRWxlbWVudHMiLCJlbGVtIiwicHVzaCIsInNodWZmbGVkRWxlbWVudHMiLCJudW0iLCJrIiwicmFuZG9tIiwic3BsaWNlIiwidGltZXIiLCJpc1RpbWVPdXQiLCJjb25maXJtIiwiZGlzYWJsZWQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJhZGRNZW1iZXIiLCJuZXdNZW1iZXIiLCJ0aW1lclN0YXJ0IiwiYXN5bmMiLCJhbGVydCIsInRpbWVyUmVzZXQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJtQkF3REEsUUF4RDJCLFdBQ3ZCLFNBQVNBLEVBQU1DLEVBQWFDLEVBQWFDLEVBQW9CQyxHQUN6REMsS0FBS0osWUFBY0EsRUFDbkJJLEtBQUtILFlBQWNBLEVBQ25CRyxLQUFLRixtQkFBcUJBLEVBQzFCRSxLQUFLRCxlQUFpQkEsRUFDdEJDLEtBQUtDLGNBQWdCQyxTQUFTTixFQUFZTyxPQUMxQ0gsS0FBS0ksY0FBZ0JGLFNBQVNMLEVBQVlNLE9BQzFDSCxLQUFLSyxhQUFvQyxHQUFyQkwsS0FBS0MsY0FBcUJELEtBQUtJLGNBOEN2RCxPQTVDQVQsRUFBTVcsVUFBVUMsYUFBZSxXQUMzQixPQUFPUCxLQUFLSyxhQUFlLEdBRS9CVixFQUFNVyxVQUFVRSxXQUFhLFNBQVVDLEdBQ25DLElBQUlDLEVBQVFWLFVBQ0ssSUFBYlMsSUFBdUJBLEVBQVcsS0FFdEMsSUFEQSxJQUFJRSxFQUFlLEdBQ1ZDLEVBQUssRUFBR0EsRUFBS0MsVUFBVUMsT0FBUUYsSUFDcENELEVBQWFDLEVBQUssR0FBS0MsVUFBVUQsR0FFckNaLEtBQUtGLG1CQUFtQmEsR0FDeEJoQixFQUFNb0IsWUFBY0MsYUFBWSxXQUM1Qk4sRUFBTU8saUJBQ1BSLElBRVBkLEVBQU1XLFVBQVVZLFVBQVksV0FHeEIsSUFGQSxJQUFJUixFQUFRVixLQUNSVyxFQUFlLEdBQ1ZDLEVBQUssRUFB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QkEsR0FFRkMsUUFBUSxTQUVWNUMsU0FBU0MsZUFBZSxnQkFBZ0I0QyxVQUFXLEVBQ25EN0MsU0FBU0MsZUFBZSxnQkFBZ0I0QyxVQUFXLEdBRy9DNUUsRUFBcUIsS0FDekIrQixTQUFTQyxlQUFlLGdCQUFnQjRDLFVBQVcsRUFDbkQ3QyxTQUFTQyxlQUFlLGdCQUFnQjRDLFVBQVcsR0EyQnJEQyxPQUFPQyxPQUFTLEtBQ2RqRCxLQUVGZ0QsT0FBT0UsVUFuRFcsS0FDaEIsTUFBTUMsRUFBWWpELFNBQVNDLGVBQWUsY0FBYzNCLE1BQ3hEMEIsU0FBU0MsZUFBZSxjQUFjM0IsTUFBUSxHQUM5Q3VCLEVBQVF1QyxLQUFLYSxHQUNibkQsSUFDQTBCLEtBK0NGc0IsT0FBT3RCLGNBQWdCQSxFQUN2QnNCLE9BQU9JLFdBN0JZQyxVQUNqQixNQUFNcEYsRUFBY2lDLFNBQVNDLGVBQWUsT0FDdENqQyxFQUFjZ0MsU0FBU0MsZUFBZSxPQUU1Q3lDLEVBQVEsSUFBSSxFQUNWM0UsRUFDQUMsRUFDQUMsRUFDQUMsR0FHRXdFLEVBQU1oRSxlQUNSZ0UsRUFBTS9ELFdBQVcsS0FFakJtRSxPQUFPTSxNQUFNLGFBZ0JqQk4sT0FBT08sV0FaWSxLQUNqQlgsRUFBTXJELFdBQVUsR0FDaEJ5RCxPQUFPTSxNQUFNLGFBQ2JWLE9BQVFZLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRpbWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVyKG1pbnV0ZUlucHV0LCBzZWNvbmRJbnB1dCwgZG9CZWZvcmVUaW1lclN0YXJ0LCBkb0FmdGVyVGltZW91dCkge1xuICAgICAgICB0aGlzLm1pbnV0ZUlucHV0ID0gbWludXRlSW5wdXQ7XG4gICAgICAgIHRoaXMuc2Vjb25kSW5wdXQgPSBzZWNvbmRJbnB1dDtcbiAgICAgICAgdGhpcy5kb0JlZm9yZVRpbWVyU3RhcnQgPSBkb0JlZm9yZVRpbWVyU3RhcnQ7XG4gICAgICAgIHRoaXMuZG9BZnRlclRpbWVvdXQgPSBkb0FmdGVyVGltZW91dDtcbiAgICAgICAgdGhpcy5kZWZhdWx0TWludXRlID0gcGFyc2VJbnQobWludXRlSW5wdXQudmFsdWUpO1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWNvbmQgPSBwYXJzZUludChzZWNvbmRJbnB1dC52YWx1ZSk7XG4gICAgICAgIHRoaXMucmVtYWluU2Vjb25kID0gdGhpcy5kZWZhdWx0TWludXRlICogNjAgKyB0aGlzLmRlZmF1bHRTZWNvbmQ7XG4gICAgfVxuICAgIFRpbWVyLnByb3RvdHlwZS5pc1RpbWVyVmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpblNlY29uZCA+IDA7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUuc3RhcnRUaW1lciA9IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW50ZXJ2YWwgPT09IHZvaWQgMCkgeyBpbnRlcnZhbCA9IDEwMDA7IH1cbiAgICAgICAgdmFyIGNhbGxiYWNrVmFscyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY2FsbGJhY2tWYWxzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9CZWZvcmVUaW1lclN0YXJ0KGNhbGxiYWNrVmFscyk7XG4gICAgICAgIFRpbWVyLmludGVydmFsT2JqID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlclRpbWVyKCk7XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICB9O1xuICAgIFRpbWVyLnByb3RvdHlwZS5zdG9wVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYWxsYmFja1ZhbHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrVmFsc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoVGltZXIuaW50ZXJ2YWxPYmopO1xuICAgICAgICB0aGlzLm1pbnV0ZUlucHV0LnZhbHVlID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc2Vjb25kSW5wdXQudmFsdWUgPSBcIjBcIjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kb0FmdGVyVGltZW91dChjYWxsYmFja1ZhbHMpO1xuICAgICAgICAgICAgX3RoaXMucmVzdG9yZURlZmF1bHRUaW1lKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUucmV3cml0ZVRpbWVyRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWludXRlSW5wdXQudmFsdWUgPSBNYXRoLmZsb29yKHRoaXMucmVtYWluU2Vjb25kIC8gNjApLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc2Vjb25kSW5wdXQudmFsdWUgPSAodGhpcy5yZW1haW5TZWNvbmQgJSA2MCkudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIFRpbWVyLnByb3RvdHlwZS5yZXN0b3JlRGVmYXVsdFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWludXRlSW5wdXQudmFsdWUgPSB0aGlzLmRlZmF1bHRNaW51dGUudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zZWNvbmRJbnB1dC52YWx1ZSA9IHRoaXMuZGVmYXVsdFNlY29uZC50b1N0cmluZygpO1xuICAgIH07XG4gICAgVGltZXIucHJvdG90eXBlLmhhbmRsZXJUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW1haW5TZWNvbmQgLT0gMTtcbiAgICAgICAgdGhpcy5yZXdyaXRlVGltZXJFbGVtZW50cygpO1xuICAgICAgICBpZiAodGhpcy5yZW1haW5TZWNvbmQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFRpbWVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xuIiwiaW1wb3J0IFRpbWVyIGZyb20gXCIuL1RpbWVyXCI7XG4vLyDliJ3mnJ/jga7jg6Hjg7Pjg5Djg7zjg6rjgrnjg4hcbmxldCBtZW1iZXJzID0gW1xuICBcIkthdHN1eWEgU3V6dWtpXCIsXG4gIFwiSXNoaWJhc2hpIFJ5b1wiLFxuICBcIm1laVwiLFxuICBcIkthaWhvdHN1IEtvdGFyb1wiLFxuICBcInJ5b2dvX25pd2FcIixcbiAgXCJuYW5ha2FcIixcbl07XG5cbmNvbnN0IHNldE5hbWVzSW5wdXQgPSAoKSA9PiB7XG4gIC8vIOODleOCqeODvOODoOOBruimgee0oOOCkuWPluW+l1xuICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtYmVycy1mb3JtXCIpO1xuICBmb3JtRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyDjg6Hjg7Pjg5Djg7zjga7mlbDjgaDjgZHku6XkuIvjga7lh6bnkIZcbiAgbWVtYmVycy5mb3JFYWNoKChtZW1iZXIsIGkpID0+IHtcbiAgICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dEdyb3VwLmlkID0gaTtcbiAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEdyb3VwKTtcbiAgICAvLyDjg6Hjg7Pjg5Djg7zlkI3lhaXlipvjg5Xjgqnjg7zjg6BcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRFbGVtZW50LnZhbHVlID0gbWVtYmVyO1xuICAgIC8vIGlk44KS5LuY5LiO44GX44Gm5b6M44Gn57eo6ZuG44GX44KE44GZ44GP44GZ44KLXG4gICAgaW5wdXRFbGVtZW50LmlkID0gXCJpbnB1dC1cIiArIGk7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb25DaGFuZ2VIYW5kbGVyKTtcbiAgICBpbnB1dEdyb3VwLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG5cbiAgICAvLyDjg6Hjg7Pjg5Djg7zjga7liYrpmaTjg5zjgr/jg7NcbiAgICBjb25zdCBkZWxldGVCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwi5YmK6ZmkXCI7XG4gICAgZGVsZXRlQnV0dG9uRWxlbWVudC5pZCA9IFwiYnV0dG9uLVwiICsgaTtcbiAgICBkZWxldGVCdXR0b25FbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGRlbGV0ZUJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUJ1dHRvbkhhbmRsZXIpO1xuICAgIGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uRWxlbWVudCk7XG4gIH0pO1xufTtcblxuLy8g5YWl5Yqb44GV44KM44Gf44Go44GN44Gr5ZG844Gw44KM44KL6Zai5pWwXG5jb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbWVtYmVyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAvLyBldmVudOOBjOWRvOOBsOOCjOOBn2lucHV044K/44Kw44GuaWTjgpLmpJzntKLjgZfjgabopoHntKDjgpLkuIrmm7jjgY3jgZnjgotcbiAgY29uc3QgZWxlbUlkID0gZXZlbnQudGFyZ2V0LmlkO1xuICBjb25zdCBpZHggPSBlbGVtSWQucmVwbGFjZShcImlucHV0LVwiLCBcIlwiKTtcbiAgbWVtYmVyc1tpZHhdID0gbWVtYmVyO1xufTtcblxuLy8g5YmK6Zmk44Oc44K/44Oz44GM5oq844GV44KM44Gf44Go44GN44Gr5ZG844Gw44KM44KL6Zai5pWwXG5jb25zdCBkZWxldGVCdXR0b25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1JZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgLy8gZWxlbUlk55Wq55uu44Gu6KaB57Sg44KSMeOBpOWJiumZpOOBmeOCi1xuICBjb25zdCBpZHggPSBlbGVtSWQucmVwbGFjZShcImJ1dHRvbi1cIiwgXCJcIik7XG4gIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0LSR7aWR4fWApLnZhbHVlO1xuICBtZW1iZXJzID0gbWVtYmVycy5maWx0ZXIoKG0pID0+IG0gIT0gdmFsdWUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZHgpLnJlbW92ZSgpO1xufTtcblxuLy8g57WQ5p6c44KS6KaL44KL44Oc44K/44Oz44GM5oq844GV44KM44Gf44Go44GN44Gr5ZG844Gw44KM44KL6Zai5pWwXG5jb25zdCByZXN1bHRIYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCByZXN1bHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKTtcbiAgLy8g57WQ5p6c44KS56m644Gr44GZ44KLXG4gIHJlZnJlc2hSZXN1bHRCb3gocmVzdWx0Qm94KTtcbiAgLy8g44Oh44Oz44OQ44O844KS44Op44Oz44OA44Og44Gr5YWl44KM5pu/44GI44KLXG4gIGNvbnN0IHNodWZmbGVkTWVtYmVyID0gc2h1ZmZsZShtZW1iZXJzKTtcbiAgLy8g57WQ5p6c44Gr5Luj5YWl44GZ44KLXG4gIHNldFJlc3VsdChyZXN1bHRCb3gsIHNodWZmbGVkTWVtYmVyKTtcbn07XG5cbmNvbnN0IHNldFJlc3VsdCA9IChyZXN1bHRCb3hFbGVtZW50LCBzaHVmZmxlZE1lbWJlcnMpID0+IHtcbiAgLy8g44Oh44Oz44OQ44O844Gu5ZCN5YmN44KSbGnopoHntKDjgavlhaXjgozjgotcbiAgc2h1ZmZsZWRNZW1iZXJzLmZvckVhY2goKG1lbWJlcikgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IG1lbWJlcjtcbiAgICByZXN1bHRCb3hFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgfSk7XG59O1xuXG4vLyDjg6Hjg7Pjg5Djg7zjgpLjg6njg7Pjg4Djg6DjgavlhaXjgozmm7/jgYjjgotcbmNvbnN0IHNodWZmbGUgPSAoZWxlbWVudHMpID0+IHtcbiAgLy8g44Oh44Oz44OQ44O844KS44Kz44OU44O844GZ44KLXG4gIGNvbnN0IGNvcGllZEVsZW1lbnRzID0gW107XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBjb3BpZWRFbGVtZW50cy5wdXNoKGVsZW0pO1xuICB9KTtcbiAgY29uc3Qgc2h1ZmZsZWRFbGVtZW50cyA9IFtdO1xuICAvLyDjg6njg7Pjg4Djg6Djgavlj5bjgorlh7rjgZfjgabku6PlhaXjgZfjgabjgYTjgY9cbiAgd2hpbGUgKGNvcGllZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgbnVtID0gY29waWVkRWxlbWVudHMubGVuZ3RoO1xuICAgIHZhciBrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtKTtcbiAgICBzaHVmZmxlZEVsZW1lbnRzLnB1c2goY29waWVkRWxlbWVudHNba10pO1xuICAgIGNvcGllZEVsZW1lbnRzLnNwbGljZShrLCAxKTtcbiAgfVxuICByZXR1cm4gc2h1ZmZsZWRFbGVtZW50cztcbn07XG5cbi8vIOe1kOaenOOCkuepuuOBq+OBmeOCi1xuY29uc3QgcmVmcmVzaFJlc3VsdEJveCA9IChyZXN1bHRCb3hFbGVtZW50KSA9PiB7XG4gIHJlc3VsdEJveEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IGFkZE1lbWJlciA9ICgpID0+IHtcbiAgY29uc3QgbmV3TWVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctbWVtYmVyXCIpLnZhbHVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1tZW1iZXJcIikudmFsdWUgPSBcIlwiO1xuICBtZW1iZXJzLnB1c2gobmV3TWVtYmVyKTtcbiAgc2V0TmFtZXNJbnB1dCgpO1xuICByZXN1bHRIYW5kbGVyKCk7XG59O1xuXG5sZXQgdGltZXI7XG5cbmNvbnN0IGRvQWZ0ZXJUaW1lb3V0ID0gKFtpc1RpbWVPdXQgPSB0cnVlXSkgPT4ge1xuICBpZiAoaXNUaW1lT3V0KSB7XG4gICAgLy8g5b6F44Gf44Gq44GE44GocmV3cml0ZeOCiOOCiuWFiOOBq2FsZXJ044GM5a6f6KGM44GV44KM44Gm44GX44G+44GG44CCXG4gICAgY29uZmlybShcIuaZgumWk+OBoOOCiOOAnFwiKTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XG59O1xuXG5jb25zdCBkb0JlZm9yZVRpbWVyU3RhcnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5cbmNvbnN0IHRpbWVyU3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1pbnV0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW5cIik7XG4gIGNvbnN0IHNlY29uZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNcIik7XG5cbiAgdGltZXIgPSBuZXcgVGltZXIoXG4gICAgbWludXRlSW5wdXQsXG4gICAgc2Vjb25kSW5wdXQsXG4gICAgZG9CZWZvcmVUaW1lclN0YXJ0LFxuICAgIGRvQWZ0ZXJUaW1lb3V0XG4gICk7XG5cbiAgaWYgKHRpbWVyLmlzVGltZXJWYWxpZCgpKSB7XG4gICAgdGltZXIuc3RhcnRUaW1lcigxMDAwKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWxlcnQoXCLmmYLplpPjgavjg5/jgrnjgYLjgovjgohcIik7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVyUmVzZXQgPSAoKSA9PiB7XG4gIHRpbWVyLnN0b3BUaW1lcihmYWxzZSk7XG4gIHdpbmRvdy5hbGVydChcIuOCv+OCpOODnuODvOOCkuatouOCgeOBn+OCiFwiKTtcbiAgdGltZXIgPSB1bmRlZmluZWQ7XG59O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBzZXROYW1lc0lucHV0KCk7XG59O1xud2luZG93LmFkZE1lbWJlciA9IGFkZE1lbWJlcjtcbndpbmRvdy5yZXN1bHRIYW5kbGVyID0gcmVzdWx0SGFuZGxlcjtcbndpbmRvdy50aW1lclN0YXJ0ID0gdGltZXJTdGFydDtcbndpbmRvdy50aW1lclJlc2V0ID0gdGltZXJSZXNldDtcbiJdLCJzb3VyY2VSb290IjoiIn0=