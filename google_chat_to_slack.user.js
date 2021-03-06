// ==UserScript==
// @name         GOOGLE CHAT TO SLACK
// @namespace
// @version      0.8
// @description  Long live slack; replaces google ugly chat logo with slack logo I know it's crazy stuff right (^_^)
// @author       @aminekun90
// @match        https://mail.google.com/chat/*
// @grant        none
// @source       https://github.com/aminekun90/google_chat_to_slack
// @downloadURL    https://github.com/aminekun90/google_chat_to_slack/raw/main/google_chat_to_slack.user.js
// @updateURL    https://github.com/aminekun90/google_chat_to_slack/raw/main/google_chat_to_slack.user.js
// ==/UserScript==
"use strict";

(function () {
  let enableDarkTheme = false;
  let update = () => {
    document.title = "Long live Slack";
    let coloredLogo = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="112.5 193 407.7 407.7" style="enable-background:new 112.5 193 407.7 407.7;" xml:space="preserve"><style type="text/css">.st0{fill:#E01E5A;}.st1{fill:#36C5F0;}.st2{fill:#2EB67D;}.st3{fill:#ECB22E;}</style><g><g><g> <path class="st0" d="M205.3,447.5c0,22.3-18,40.3-40.3,40.3s-40.3-18-40.3-40.3c0-22.3,18-40.3,40.3-40.3h40.3V447.5z"/> <path class="st0" d="M225.4,447.5c0-22.3,18-40.3,40.3-40.3c22.3,0,40.3,18,40.3,40.3v100.8c0,22.3-18,40.3-40.3,40.3 c-22.3,0-40.3-18-40.3-40.3V447.5z"/> </g> <g> <path class="st1" d="M265.8,285.6c-22.3,0-40.3-18-40.3-40.3c0-22.3,18-40.3,40.3-40.3c22.3,0,40.3,18,40.3,40.3v40.3H265.8z"/> <path class="st1" d="M265.8,306.1c22.3,0,40.3,18,40.3,40.3c0,22.3-18,40.3-40.3,40.3H164.6c-22.3,0-40.3-18-40.3-40.3 c0-22.3,18-40.3,40.3-40.3H265.8z"/> </g> <g> <path class="st2" d="M427.4,346.4c0-22.3,18-40.3,40.3-40.3s40.3,18,40.3,40.3s-18,40.3-40.3,40.3h-40.3V346.4z"/> <path class="st2" d="M407.2,346.4c0,22.3-18,40.3-40.3,40.3s-40.3-18-40.3-40.3V245.3c0-22.3,18-40.3,40.3-40.3 s40.3,18,40.3,40.3V346.4z"/> </g> <g> <path class="st3" d="M366.9,508c22.3,0,40.3,18,40.3,40.3c0,22.3-18,40.3-40.3,40.3s-40.3-18-40.3-40.3V508H366.9z"/> <path class="st3" d="M366.9,487.8c-22.3,0-40.3-18-40.3-40.3c0-22.3,18-40.3,40.3-40.3H468c22.3,0,40.3,18,40.3,40.3 c0,22.3-18,40.3-40.3,40.3H366.9z"/> </g> </g> </g> </svg>`;
    let blackLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-74.46 -31.4 645.32 188.4">
    <g fill="none">
        <path fill="#000"
            d="M158.8 98.9l6.2-14.4c6.7 5 15.6 7.6 24.4 7.6 6.5 0 10.6-2.5 10.6-6.3-.1-10.6-38.9-2.3-39.2-28.9-.1-13.5 11.9-23.9 28.9-23.9 10.1 0 20.2 2.5 27.4 8.2l-5.8 14.7c-6.6-4.2-14.8-7.2-22.6-7.2-5.3 0-8.8 2.5-8.8 5.7.1 10.4 39.2 4.7 39.6 30.1 0 13.8-11.7 23.5-28.5 23.5-12.3 0-23.6-2.9-32.2-9.1m237.9-19.6c-3.1 5.4-8.9 9.1-15.6 9.1-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 6.7 0 12.5 3.7 15.6 9.1l17.1-9.5C407.4 40.8 395.1 33 381.1 33c-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5c14.1 0 26.3-7.7 32.7-19.2zM228.1 1.9h21.4v104.7h-21.4zm194.1 0v104.7h21.4V75.2l25.4 31.4h27.4l-32.3-37.3L494 34.5h-26.2l-24.2 28.9V1.9zM313.1 79.5c-3.1 5.1-9.5 8.9-16.7 8.9-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 7.2 0 13.6 4 16.7 9.2zm0-45V43c-3.5-5.9-12.2-10-21.3-10-18.8 0-33.6 16.6-33.6 37.4 0 20.8 14.8 37.6 33.6 37.6 9.1 0 17.8-4.1 21.3-10v8.5h21.4v-72z" />
        <path fill="#E01E5A"
            d="M26.5 79.4c0 7.3-5.9 13.2-13.2 13.2C6 92.6.1 86.7.1 79.4c0-7.3 5.9-13.2 13.2-13.2h13.2zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2z" />
        <path fill="#36C5F0"
            d="M46.3 26.4c-7.3 0-13.2-5.9-13.2-13.2C33.1 5.9 39 0 46.3 0c7.3 0 13.2 5.9 13.2 13.2v13.2zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.2C5.9 59.5 0 53.6 0 46.3 0 39 5.9 33.1 13.2 33.1z" />
        <path fill="#2EB67D"
            d="M99.2 46.3c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.2zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.2C66.2 5.9 72.1 0 79.4 0c7.3 0 13.2 5.9 13.2 13.2z" />
        <path fill="#ECB22E"
            d="M79.4 99.2c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2z" />
    </g>
</svg>`;
    let whiteLogo = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 622.3 254.4" style="enable-background:new 0 0 622.3 254.4;" xml:space="preserve">
<style type="text/css">
.st0{fill:#FFFFFF;}
</style>
<g>
<g>
<path class="st0" d="M221.5,161.5l6.2-14.4c6.7,5,15.6,7.6,24.4,7.6c6.5,0,10.6-2.5,10.6-6.3c-0.1-10.6-38.9-2.3-39.2-28.9
c-0.1-13.5,11.9-23.9,28.9-23.9c10.1,0,20.2,2.5,27.4,8.2l-5.8,14.7c-6.6-4.2-14.8-7.2-22.6-7.2c-5.3,0-8.8,2.5-8.8,5.7
c0.1,10.4,39.2,4.7,39.6,30.1c0,13.8-11.7,23.5-28.5,23.5C241.4,170.6,230.1,167.7,221.5,161.5"/>
<path class="st0" d="M459.4,141.9c-3.1,5.4-8.9,9.1-15.6,9.1c-9.9,0-17.9-8-17.9-17.9s8-17.9,17.9-17.9c6.7,0,12.5,3.7,15.6,9.1
l17.1-9.5c-6.4-11.4-18.7-19.2-32.7-19.2c-20.7,0-37.5,16.8-37.5,37.5c0,20.7,16.8,37.5,37.5,37.5c14.1,0,26.3-7.7,32.7-19.2
L459.4,141.9z"/>
<rect x="290.8" y="64.5" class="st0" width="21.4" height="104.7"/>
<polygon class="st0" points="484.9,64.5 484.9,169.2 506.3,169.2 506.3,137.8 531.7,169.2 559.1,169.2 526.8,131.9 556.7,97.1
530.5,97.1 506.3,126 506.3,64.5 "/>
<path class="st0" d="M375.8,142.1c-3.1,5.1-9.5,8.9-16.7,8.9c-9.9,0-17.9-8-17.9-17.9s8-17.9,17.9-17.9c7.2,0,13.6,4,16.7,9.2
V142.1z M375.8,97.1v8.5c-3.5-5.9-12.2-10-21.3-10c-18.8,0-33.6,16.6-33.6,37.4c0,20.8,14.8,37.6,33.6,37.6
c9.1,0,17.8-4.1,21.3-10v8.5h21.4v-72H375.8z"/>
</g>
<g>
<g>
<path class="st0" d="M89.2,142c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2h13.2V142z"/>
<path class="st0" d="M95.8,142c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2V175c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2
V142z"/>
</g>
<g>
<path class="st0" d="M109,89c-7.3,0-13.2-5.9-13.2-13.2c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2V89H109z"/>
<path class="st0" d="M109,95.7c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2H75.9c-7.3,0-13.2-5.9-13.2-13.2
c0-7.3,5.9-13.2,13.2-13.2H109z"/>
</g>
<g>
<path class="st0" d="M161.9,108.9c0-7.3,5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2h-13.2V108.9z"/>
<path class="st0" d="M155.3,108.9c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2V75.8c0-7.3,5.9-13.2,13.2-13.2
s13.2,5.9,13.2,13.2V108.9z"/>
</g>
<g>
<path class="st0" d="M142.1,161.8c7.3,0,13.2,5.9,13.2,13.2c0,7.3-5.9,13.2-13.2,13.2s-13.2-5.9-13.2-13.2v-13.2H142.1z"/>
<path class="st0" d="M142.1,155.2c-7.3,0-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2h33.1c7.3,0,13.2,5.9,13.2,13.2
s-5.9,13.2-13.2,13.2H142.1z"/>
</g>
</g>
</g>
</svg>`;
    let data =
      "data:image/svg+xml;base64," +
      btoa(enableDarkTheme ? whiteLogo : blackLogo);
    let dataWhite = "data:image/svg+xml;base64," + btoa(whiteLogo);
    let logo = document.querySelector("img.gb_wc");

    let loading = document.querySelector("#loading");
    if (logo) {
      logo.srcset = dataWhite;
      logo.style = "height:60px;cursor:pointer";
    }
    if (loading) {
      Array.from(loading.children).forEach((e) => {
        e.remove();
      });
      let img = document.createElement("img");
      img.style = "margin: 200px auto;width: 97%;position:absolute;";
      img.src = data;
      loading.prepend(img);
    }
    let sideMenuLogoDiv = document.querySelector(
      ".bhZ .CL.su::before, .bhZ:not(.bym) .CL.su .Yh"
    );
    if (sideMenuLogoDiv) {
      let style = `background-image:url('data:image/svg+xml;base64,${btoa(
        coloredLogo
      )}')!important;`;
      console.log("DEBUG", style);
      sideMenuLogoDiv.style = style;
    }
  };
  update();
  let timeInterval = setInterval(update, 1000);
})();
