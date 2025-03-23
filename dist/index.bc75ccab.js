!function(){let e;let t=document.querySelector(".app"),n=io();function c(e,n){let c=t.querySelector(".chat-screen .messages");if("my"==e){let e=document.createElement("div");e.setAttribute("class","message my-message"),e.innerHTML=`
          <div>
            <div class="name">You</div>
            <div class="text">${n.text}</div>
          </div>
        `,c.appendChild(e)}else if("other"==e){let e=document.createElement("div");e.setAttribute("class","message other-message"),e.innerHTML=`
          <div>
            <div class="name">${n.username}</div>
            <div class="text">${n.text}</div>
          </div>
        `,c.appendChild(e)}else if("update"==e){let e=document.createElement("div");e.setAttribute("class","update"),e.innerText=n,c.appendChild(e)}c.scrollTop=c.scrollHeight}t.querySelector("#join-user").addEventListener("click",function(){let c=document.querySelector("#username").value;0!==c.length&&(n.emit("newuser",c),e=c,t.querySelector(".join-screen").classList.remove("active"),t.querySelector(".chat-screen").classList.add("active"))}),t.querySelector(".chat-screen #send-message").addEventListener("click",function(){let s=t.querySelector(".chat-screen #message-input").value;0!=s.length&&(c("my",{username:e,text:s}),n.emit("chat",{username:e,text:s}),t.querySelector(".chat-screen #message-input").value="")}),t.querySelector(".chat-screen #exit-chat").addEventListener("click",function(){n.emit("exituser",e),window.location.href=window.location.href}),n.on("update",function(e){c("update",e)}),n.on("chat",function(e){c("other",e)})}();
//# sourceMappingURL=index.bc75ccab.js.map
