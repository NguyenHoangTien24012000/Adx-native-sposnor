function renderBox(){this.css="* {\n  margin: 0;\n  padding: 0;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: Roboto;\n  src: url(/src/fonts/Roboto-Regular.ttf);\n}\nbody {\n  font-family: Roboto;\n  box-sizing: border-box;\n  background-color: aqua;\n}\n\n#boxid {\n  left: 50%;\n  transform: translate(-50%);\n  width: 700px;\n  height: 189px;\n  background-color: #fff;\n  position: relative;\n}\n#boxid .content {\n  display: flex;\n  justify-content: space-between;\n}\n#boxid .content .content-left {\n  width: 260px;\n  height: 146px;\n  margin: 20px 20px 23px 1px;\n}\n#boxid .content .content-left img {\n  width: 100%;\n  height: 100%;\n}\n#boxid .content .content-right {\n  width: 439px;\n  margin-top: 20px;\n  margin-right: 10px;\n}\n#boxid .content .content-right .text-title {\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 700;\n  color: #454545;\n}\n#boxid .content .content-right .text-link a {\n  margin-top: 1px;\n  text-decoration: none;\n  font-style: italic;\n  color: #A5A5A5;\n  font-size: 12px;\n  line-height: 18px;\n}\n#boxid .content .content-right .text-detail {\n  margin: 8px 0;\n  height: 55px;\n}\n#boxid .content .content-right .text-detail p {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #868686;\n}\n#boxid .content .content-right .text-brand {\n  display: flex;\n  justify-content: space-between;\n  margin: 22px 0;\n}\n#boxid .content .content-right .text-brand .text-brand-left h4 {\n  font-size: 18px;\n  line-height: 18px;\n  color: #1C8DDC;\n  font-weight: 700;\n}\n#boxid .content .content-right .text-brand .text-brand-left h4 span {\n  font-weight: 400;\n  color: #A5A5A5;\n}\n#boxid .content .content-right .text-brand .text-brand-right {\n  width: 30px;\n  height: 30px;\n  background-color: #1C8DDC;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#boxid .content .content-right .text-brand .text-brand-right i {\n  color: #fff;\n}\n#boxid .logo-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 35px;\n  height: 17px;\n}\n/*# sourceMappingURL=style.css.map */",this.html='<div class="content">\n    <div class="content-left">\n        <img src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2021/10/7/photo1633591043285-1633591043530912626565.jpg">\n    </div>\n    <div class="content-right">\n        <div class="text-title">\n            <h4>Tiêu đề2</h4>\n        </div>\n        <div class="text-link">\n            <a href="#">example.com</a>\n        </div>\n        <div class="text-detail">\n            <p>nội dung mô tả</p>\n        </div>\n        <div class="text-brand">\n            <div class="text-brand-left">\n                <h4>test <span>tài trợ</span></h4>\n            </div>\n            <div class="text-brand-right">\n                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <circle cx="15" cy="15" r="15" fill="#1C8DDC" />\n                    <path\n                        d="M23.2071 15.7071C23.5976 15.3166 23.5976 14.6834 23.2071 14.2929L16.8431 7.92893C16.4526 7.53841 15.8194 7.53841 15.4289 7.92893C15.0384 8.31946 15.0384 8.95262 15.4289 9.34315L21.0858 15L15.4289 20.6569C15.0384 21.0474 15.0384 21.6805 15.4289 22.0711C15.8194 22.4616 16.4526 22.4616 16.8431 22.0711L23.2071 15.7071ZM5.83331 16H22.5V14H5.83331V16Z"\n                        fill="white" />\n                </svg>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div class="logo-close">\n    <svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink">\n        <rect width="35" height="17" fill="url(#pattern0)" />\n        <defs>\n            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\n                <use xlink:href="#image0" transform="scale(0.0285714 0.0588235)" />\n            </pattern>\n            <image id="image0" width="35" height="17"\n                xlink:href="data:image/png;base64,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" />\n        </defs>\n    </svg>\n\n</div>',document.getElementById("boxid").innerHTML=`<style>${this.css}</style>${this.html}`}renderBox();