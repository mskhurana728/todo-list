(()=>{"use strict";function e(e,t,n){this.tittle=e,this.description=t,this.dueDate=n}function t(e){const n=document.querySelector(".taskArea");let l=1;n.textContent="",o[e].forEach((c=>{if(c.tittle){const s=document.createElement("div");s.classList.add("task"),s.id=l;const d=document.createElement("p");d.textContent=c.tittle+"  "+c.description+"  "+c.dueDate;const i=document.createElement("button");i.classList.add("removeTaskBtn"),i.textContent="X",i.id=l,console.log(i),s.appendChild(d),s.appendChild(i),n.appendChild(s),l++,i.addEventListener("click",(()=>{const n=i.getAttribute("id");console.log(n),o[e].splice(n,1),t(e)}))}}))}const n=document.querySelector(".projects");let o=[];function l(){n.textContent="";let e=0;o.forEach((c=>{console.log(c);const s=document.createElement("div"),d=document.createElement("button"),i=document.createElement("p"),r=document.querySelector(".submitBtn"),a=document.querySelector(".addTaskBtn"),u=document.querySelector(".taskArea");s.classList.add("projectDiv"),s.id=e,i.classList.add("projectPara"),i.textContent=c[0],i.id=e,d.classList.add("removeBtn"),d.id=e,d.textContent="X",s.appendChild(i),s.appendChild(d),console.log(s),n.appendChild(s),i.addEventListener("click",(()=>{let e=document.querySelectorAll(".projectPara");console.log(e+"paras here"),e.forEach((e=>{e.classList.remove("active")})),i.classList.add("active"),console.log(i);let n=i.getAttribute("id");console.log(n),r.id=n,console.log(r),t(n),a.style.display="inline"})),d.addEventListener("click",(()=>{let e=d.getAttribute("id"),t=i.getAttribute("id");console.log(e),console.log(t),o.splice(e,1),r.id=t,a.style.display="none",u.innerHTML="SELECT A PROJECT <br>IF THERE IS NO PROJECT PLEASE CREATE ONE",l()})),e++}))}const c=document.querySelector(".addTaskBtn"),s=document.querySelector(".form"),d=document.querySelector(".submitBtn"),i=document.querySelector(".addProjectBtn"),r=document.querySelector(".submitProjectBtn"),a=document.querySelector(".cancelProjectBtn"),u=document.querySelector(".projectForm");console.log(c),c.addEventListener("click",(()=>{s.style.display="flex",c.style.display="none",s.reset()})),d.addEventListener("click",(n=>{const l=document.querySelector(".submitBtn");let d=document.querySelector("#title").value,i=document.querySelector("#description").value,r=document.querySelector("#dueDate").value,a=l.id;console.log(a),function(t,n,l,c){let s=new e(t,n,l);console.log("in add new task "+s),console.log(o[c]),o[c].push(s),console.log(o[c])}(d,i,r,a),t(a),console.log("It works fine now theres problem in addTask"),s.style.display="none",c.style.display="inline",s.reset(),n.preventDefault()})),i.addEventListener("click",(()=>{u.style.display="flex",i.style.display="none",u.reset()})),r.addEventListener("click",(e=>{let t=document.querySelector("#projectName").value;var n;console.log(t),n=t,o.push([n]),console.log(o),l(),u.style.display="none",i.style.display="inline",e.preventDefault(),u.reset()})),a.addEventListener("click",(e=>{u.style.display="none",i.style.display="inline",u.reset(),e.preventDefault()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFVdUIsSUFFeEMsSUFBSU0sRUFBYzVDLFNBQVNDLGNBQWMsZ0JBQWdCc0MsTUQzQ2pFLElBQXVCTSxFQzRDZmpDLFFBQVFDLElBQUkrQixHRDVDR0MsRUM2Q0RELEVEMUNwQnhDLEVBQVNxQyxLQUFLLENBQUNJLElBRWZqQyxRQUFRQyxJQUFJVCxHQ3lDTmdCLElBR0FnQixFQUFZTixNQUFNQyxRQUFVLE9BQzVCRSxFQUFjSCxNQUFNQyxRQUFVLFNBQzlCTyxFQUFFSyxpQkFDRlAsRUFBWUMsV0FJaEJGLEVBQWlCcEIsaUJBQWlCLFNBQVV1QixJQUN4Q0YsRUFBWU4sTUFBTUMsUUFBVSxPQUM1QkUsRUFBY0gsTUFBTUMsUUFBVSxTQUM5QkssRUFBWUMsUUFDWkMsRUFBRUsscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYnV0dG9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuXG5mdW5jdGlvbiB0YXNrKHRpdHRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRpdHRsZSA9IHRpdHRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvLyByZXR1cm4odGl0dGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUpO1xuXG59XG5mdW5jdGlvbiBhZGROZXdUYXNrKHRpdHRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlkKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFzayh0aXR0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcbiAgICBjb25zb2xlLmxvZyhcImluIGFkZCBuZXcgdGFzayBcIiArIG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2lkXSk7XG4gICAgcHJvamVjdHNbaWRdLnB1c2gobmV3VGFzayk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpZF0pO1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFza3MoaWQpIHtcbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0FyZWFcIik7XG4gICAgbGV0IGkgPSAxO1xuICAgIHRhc2tBcmVhLnRleHRDb250ZW50ID0gXCJcIjtcbiAgXG4gICAgICAgIHByb2plY3RzW2lkXS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QudGl0dGxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgICAgICAgICB0YXNrLmlkID0gaTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgdGFza0luZm8udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdHRsZSArIFwiICBcIiArIHByb2plY3QuZGVzY3JpcHRpb24gKyBcIiAgXCIgKyBwcm9qZWN0LmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlVGFza0J0blwiKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza0J0bi5pZCA9IGk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlVGFza0J0bik7XG5cblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgICAgICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xuICAgICAgICAgICAgICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHRhc2spO1xuXG5cbiAgICAgICAgICAgICAgICAvLyB0YXNrQXJlYS50ZXh0Q29udGVudCArPSBwcm9qZWN0LnRpdHRsZStcIiAgXCI7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlbW92ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92ZVRhc2tCdG5cIik7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHJlbW92ZVRhc2tCdG4uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoaWQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuXG5cbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgfVxuXG5cblxuXG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0VGFza3MsIHRhc2ssIGFkZE5ld1Rhc2sgfTsiLCJpbXBvcnQgeyBhZGROZXdUYXNrLCBkaXNwbGF5UHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuLy8gZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4vLyAgICAgcmV0dXJuIHsgbmFtZSB9O1xuLy8gfVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUpIHtcbiAgLy8gbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuXG4gIHByb2plY3RzLnB1c2goW25hbWVdKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xuICBwcm9qZWN0c0FyZWEudGV4dENvbnRlbnQgPSBcIlwiO1xuICBsZXQgaSA9IDA7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdEJ0blwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnRuXCIpO1xuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQXJlYVwiKTtcblxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XG4gICAgbmV3UHJvamVjdERpdi5pZCA9IGk7XG5cbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0UGFyYVwiKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gcHJvamVjdFswXTtcbiAgICBwYXJhLmlkID0gaTtcblxuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQnRuXCIpO1xuICAgIHJlbW92ZUJ0bi5pZCA9IGk7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0c0FyZWEuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgcGFyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RQYXJhXCIpO1xuICAgICAgY29uc29sZS5sb2cocGFyYXMgKyBcInBhcmFzIGhlcmVcIik7XG4gICAgICBwYXJhcy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIHguY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgY29uc29sZS5sb2cocGFyYSk7XG5cbiAgICAgIGxldCBpZCA9IHBhcmEuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICBzdWJtaXRUYXNrQnRuLmlkID0gaWQ7XG4gICAgICBjb25zb2xlLmxvZyhzdWJtaXRUYXNrQnRuKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3MoaWQpO1xuXG4gICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgLy8gdGFza0FyZWEudGV4dENvbnRlbnQ9XCJcIlxuICAgICAgLy8gbmV3UHJvamVjdERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgfSk7XG5cbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHJlbW92ZUJ0bi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGxldCBpZCA9IHBhcmEuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc3VibWl0VGFza0J0bi5pZCA9IGlkO1xuICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB0YXNrQXJlYS5pbm5lckhUTUwgPVxuICAgICAgICBcIlNFTEVDVCBBIFBST0pFQ1QgPGJyPklGIFRIRVJFIElTIE5PIFBST0pFQ1QgUExFQVNFIENSRUFURSBPTkVcIjtcblxuICAgICAgZGlzcGxheVByb2plY3QoKTtcbiAgICB9KTtcblxuICAgIGkrKztcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZE5ld1Byb2plY3QsIGRpc3BsYXlQcm9qZWN0LCBwcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgYWRkTmV3UHJvamVjdCwgZGlzcGxheVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBhZGROZXdUYXNrLCBkaXNwbGF5UHJvamVjdFRhc2tzLCB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0J0blwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdG5cIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0UHJvamVjdEJ0blwiKTtcbmNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFByb2plY3RCdG5cIik7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgY29uc29sZS5sb2coYWRkVGFza0J0bik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIH0pXG59XG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnRuXCIpO1xuICAgICAgICBsZXQgdGl0dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBpZCA9IHN1Ym1pdFRhc2tCdG4uaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcblxuXG4gICAgICAgIC8vIHRhc2sodGl0dGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUpO1xuICAgICAgICBhZGROZXdUYXNrKHRpdHRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlkKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyhpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXQgd29ya3MgZmluZSBub3cgdGhlcmVzIHByb2JsZW0gaW4gYWRkVGFza1wiKVxuXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxufVxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG5cblxuICAgIH0pXG59XG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICAgIHN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgICAgICBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcblxuXG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIH0pXG59XG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0KCkge1xuICAgIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG59XG5cblxuXG5leHBvcnQgeyBhZGRUYXNrLCBzdWJtaXRUYXNrLCBhZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBjYW5jZWxQcm9qZWN0IH07Il0sIm5hbWVzIjpbInRhc2siLCJ0aXR0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJ0aGlzIiwiZGlzcGxheVByb2plY3RUYXNrcyIsImlkIiwidGFza0FyZWEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0cyIsImZvckVhY2giLCJwcm9qZWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRhc2tJbmZvIiwicmVtb3ZlVGFza0J0biIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImdldEF0dHJpYnV0ZSIsInNwbGljZSIsInByb2plY3RzQXJlYSIsImRpc3BsYXlQcm9qZWN0IiwibmV3UHJvamVjdERpdiIsInJlbW92ZUJ0biIsInBhcmEiLCJzdWJtaXRUYXNrQnRuIiwiYWRkVGFza0J0biIsInBhcmFzIiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJyZW1vdmUiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJhZGRQcm9qZWN0QnRuIiwic3VibWl0UHJvamVjdEJ0biIsImNhbmNlbFByb2plY3RCdG4iLCJwcm9qZWN0Rm9ybSIsInJlc2V0IiwiZSIsInZhbHVlIiwibmV3VGFzayIsInB1c2giLCJhZGROZXdUYXNrIiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0TmFtZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9