(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n\nheader {\n\tdisplay: none;\n}\n\nfooter {\n\tdisplay: none;\n}\n\nbody {\n  margin:0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Below delays the clue pop-up for 2seconds  */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.cluePopUp {\n    -webkit-animation: fadeIn ease-in 1;\n    animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 0.5;\n    animation-duration: 0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: white;\n    opacity: 0.9;\n    border-radius: 20px;\n    height: 500px;\n    width: 400px;\n    display: flex !important;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n   \n}\n\n.clueOneScreen {\n    width: 100vw;\n    height: -webkit-fill-available;\n    height: -moz-available;\n    height: stretch;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n}\n\n.clueDiv {\n    background-color: white;\n    opacity: 0.9;\n    border-radius: 20px;\n    height: 500px;\n    width: 400px;\n    display: flex !important;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n}\n\n.buttons {\ndisplay: flex !important;\nflex-direction: row;\njustify-content: space-evenly;\nwidth: 100%;\n}\n\nbutton {\nborder-radius: 10px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n.thetime {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 10%;\n  /* bottom: 50%; */\n}\n\n.clock, .date {\n  color: white;\n  margin: 0;\n  text-align: center;\n}\n\n.clock {\n  font-size: 70px;\n}\n\n.date {\n  font-size: 45px;\n}\n\n.icons {\ndisplay: flex;\njustify-content: space-around;\nborder-radius: 10px;\nwidth: 90%;\nheight: 70px;\nmargin-top: 125px;\nmargin-bottom: 20px;\nalign-items: center;\nbackground-color: white;\nopacity: 0.75;\n}\n\n@media only screen and (min-width: 1024px) {\n  .thetime {\n    position: absolute;\n    display: flex;\n    flex-direction: row-reverse;\n    top: 0%;\n    right: 8%;\n  }\n  \n  .clock, .date {\n    color: black;\n    margin: 0;\n    text-align: center;\n    margin-right: 10px;\n  }\n  .clock {\n    font-size: 1em;\n    font-family: 'Times New Roman', Times, serif;\n  }\n  \n  .date {\n    font-size: 1em;\n    font-family: 'Times New Roman', Times, serif;\n  }\n  \n  .clueOneScreen {\n    width: 100%;\n    height: 100%;\n    display: flex !important;\n    flex-direction: column;    \n  }\n\n    /* desktop styling------------------------------------ */\n  \n    section {\n        width: 100%;\n        height: 100%;\n    }\n    .background-image {\n        height: 100vh;\n        width: 100vw;\n        background-repeat: no-repeat;\n        background-size: cover;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .clueDiv, .flyOut {\n        background-color: white;\n        opacity: 0.8;\n        border-radius: 20px;\n        height: 600px;\n        width: 800px;\n        display: flex !important;\n        justify-content: space-evenly;\n        align-items: center;\n        flex-direction: column;\n        font-family: 'Roboto', sans-serif;\n        margin-top: 200px;\n    }\n\n.material-icons {\nwidth: 10%;\nheight: 75%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 10px;\n}\n.wrong {\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  width: 65vw;\n  background-color:black;\n  color: white;\n\n}\n\n\n\nbody {\n  /* background: url(https://www.hdwallpapers.in/download/macos_sierra_stock_mountains_4k-3840x2400.jpg);\n  background-repeat: no-repeat;\n  background-size: 100%;\nfont-family: 'Helvetica', sans-serif; */\nmargin: 0;\noverflow: hidden;\npadding: 0;\nperspective-origin: 0 0;\n}\n\n/*--Header--*/\nheader {\nbackground: linear-gradient(to bottom, rgba(230,230,230,1) 0%, rgba(163,163,163,1) 100%);\ndisplay: block;\nfont-size: 1em;\nheight: 3%;\nposition: fixed;\ntop: 0%;\nwidth: 100%;\n\n}\nheader ul {\nmargin: 0 5px;\npadding: 0 3px;\n}\nheader li {\ndisplay: inline-block;\nline-height: 1.3em;\npadding: 0 0.5em;\nposition: relative;\n/* cursor: default; */\n}\nheader .left {\nfloat: left;\n}\nheader .right {\nfloat: right;\n}\na {\ncolor: #000;\ntext-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n\n\n/*--Desktop--*/\n#Desktop {\ndisplay: flex;\nalign-content:right;\nflex-direction:column;\nalign-items:flex-end;\nheight: 85vh;\npadding: 25px;\nposition: absolute;\nright: 0!important;\ntext-align: right;\nz-index: -1;\nwidth:100%;\n}\n\n/*--Dock--*/\nfooter {\nbottom: 0;\ndisplay: inline-block;\nheight: 4.4em;\nleft: 50%;\nmin-width: 35em;\npadding: 0 10px;\nperspective: 1000px;\nposition: absolute;\ntext-align: center;\n  transform: translatex(-50%);\n}\nfooter:before {\nbackground: linear-gradient(to top, rgba(230,230,230,1) 0%, rgba(163,163,163,1) 100%);\nbottom: 0;\ncontent: '';\nheight: 4em;\nleft: 0;\nmargin-top: 15px;\nposition: absolute;\nright: 0;\ntop: 0;\ntransform: rotatex(45deg);\nwidth: 100%;\nz-index: -1;\n}\n\nfooter ul {\ndisplay: inline-block;\nmargin: 0 0.1em;\npadding: 0;\ntransform-origin: bottom center!important;\n}\nfooter li {\ndisplay: inline-block;\nvertical-align: top;\nposition: relative;\ntransform: scale(1.0);\ntransform-origin: bottom center;\n  transition: transform 2s;\n}\nfooter li:before {\nbackground: rgba(0,0,0,0.3);\nborder-radius: 12px;\ncolor: #fff;\ncontent: attr(data-title);\ndisplay: block;\nfloat: left;\nfont-size: 0.9em;\nleft: 50%;\nmargin: 2px auto;\nopacity: 0;\npadding: 0 10px;\nposition: absolute;\ntext-align: center;\ntop: -35px;\ntransform: translatex(-50%);\ntransform-origin: bottom center!important;\nvisibility: hidden;\nwidth: auto;\n}\nfooter li:hover:before {\nopacity: 1;\ntop: -45px;\nvisibility: visible;\n}\n\n\nfooter img {\n-webkit-box-reflect: below -5px -webkit-gradient(linear, left bottom, left top, color-stop(0%,rgba(230,230,230,0.2)), color-stop(100%,rgba(255,255,255,0)));\nalign-items: center;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nmargin: 0 5px;\nposition: relative;\ntransform: scale(1);\ntransform-origin: bottom center!important;\ntransition: all 0.2s;\n  width: 4em;\n}\n\nfooter img:hover {\nmargin: 0 10px;\ntransform: scale(1.2);\n}\n\n\n@-webkit-keyframes JUMP {\n0% {\n  bottom: 0;\n}\n50% {\n  bottom: 20px;\n  padding-bottom:20px;\n}\n100% {\n  bottom: 0;\n};}\n\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFDWDs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsVUFBVTtBQUNWLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLCtCQUErQjtFQUM3Qix3QkFBd0I7QUFDMUI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2QsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUN6QyxrQkFBa0I7QUFDbEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQjs7O0FBR0E7QUFDQSwySkFBMko7QUFDM0osbUJBQW1CO0FBQ25CLFNBQVM7QUFDVCxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHlDQUF5QztBQUN6QyxvQkFBb0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0FBQ0EsY0FBYztBQUNkLHFCQUFxQjtBQUNyQjs7O0FBR0E7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYLENBQUEsQ0FBRTs7QUFFRiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5oZWFkZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5mb290ZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuYm9keSB7XG4gIG1hcmdpbjowO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCZWxvdyBkZWxheXMgdGhlIGNsdWUgcG9wLXVwIGZvciAyc2Vjb25kcyAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5cblxuLmNsdWVQb3BVcCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41O1xuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgXG59XG5cbi5jbHVlT25lU2NyZWVuIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5jbHVlRGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9ucyB7XG5kaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG53aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGhldGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAxMCU7XG4gIC8qIGJvdHRvbTogNTAlOyAqL1xufVxuXG4uY2xvY2ssIC5kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jbG9jayB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi5pY29ucyB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xud2lkdGg6IDkwJTtcbmhlaWdodDogNzBweDtcbm1hcmdpbi10b3A6IDEyNXB4O1xubWFyZ2luLWJvdHRvbTogMjBweDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbm9wYWNpdHk6IDAuNzU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC50aGV0aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgdG9wOiAwJTtcbiAgICByaWdodDogOCU7XG4gIH1cbiAgXG4gIC5jbG9jaywgLmRhdGUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuY2xvY2sge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gIFxuICAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIH1cbiAgXG4gIC5jbHVlT25lU2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxuICB9XG5cbiAgICAvKiBkZXNrdG9wIHN0eWxpbmctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2x1ZURpdiwgLmZseU91dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICB9XG5cbi5tYXRlcmlhbC1pY29ucyB7XG53aWR0aDogMTAlO1xuaGVpZ2h0OiA3NSU7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53cm9uZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA2NXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG5cbn1cblxuXG5cbmJvZHkge1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuaGR3YWxscGFwZXJzLmluL2Rvd25sb2FkL21hY29zX3NpZXJyYV9zdG9ja19tb3VudGFpbnNfNGstMzg0MHgyNDAwLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbmZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjsgKi9cbm1hcmdpbjogMDtcbm92ZXJmbG93OiBoaWRkZW47XG5wYWRkaW5nOiAwO1xucGVyc3BlY3RpdmUtb3JpZ2luOiAwIDA7XG59XG5cbi8qLS1IZWFkZXItLSovXG5oZWFkZXIge1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMzAsMjMwLDIzMCwxKSAwJSwgcmdiYSgxNjMsMTYzLDE2MywxKSAxMDAlKTtcbmRpc3BsYXk6IGJsb2NrO1xuZm9udC1zaXplOiAxZW07XG5oZWlnaHQ6IDMlO1xucG9zaXRpb246IGZpeGVkO1xudG9wOiAwJTtcbndpZHRoOiAxMDAlO1xuXG59XG5oZWFkZXIgdWwge1xubWFyZ2luOiAwIDVweDtcbnBhZGRpbmc6IDAgM3B4O1xufVxuaGVhZGVyIGxpIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmxpbmUtaGVpZ2h0OiAxLjNlbTtcbnBhZGRpbmc6IDAgMC41ZW07XG5wb3NpdGlvbjogcmVsYXRpdmU7XG4vKiBjdXJzb3I6IGRlZmF1bHQ7ICovXG59XG5oZWFkZXIgLmxlZnQge1xuZmxvYXQ6IGxlZnQ7XG59XG5oZWFkZXIgLnJpZ2h0IHtcbmZsb2F0OiByaWdodDtcbn1cbmEge1xuY29sb3I6ICMwMDA7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLyotLURlc2t0b3AtLSovXG4jRGVza3RvcCB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24tY29udGVudDpyaWdodDtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuaGVpZ2h0OiA4NXZoO1xucGFkZGluZzogMjVweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnJpZ2h0OiAwIWltcG9ydGFudDtcbnRleHQtYWxpZ246IHJpZ2h0O1xuei1pbmRleDogLTE7XG53aWR0aDoxMDAlO1xufVxuXG4vKi0tRG9jay0tKi9cbmZvb3RlciB7XG5ib3R0b206IDA7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5oZWlnaHQ6IDQuNGVtO1xubGVmdDogNTAlO1xubWluLXdpZHRoOiAzNWVtO1xucGFkZGluZzogMCAxMHB4O1xucGVyc3BlY3RpdmU6IDEwMDBweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xufVxuZm9vdGVyOmJlZm9yZSB7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDIzMCwyMzAsMjMwLDEpIDAlLCByZ2JhKDE2MywxNjMsMTYzLDEpIDEwMCUpO1xuYm90dG9tOiAwO1xuY29udGVudDogJyc7XG5oZWlnaHQ6IDRlbTtcbmxlZnQ6IDA7XG5tYXJnaW4tdG9wOiAxNXB4O1xucG9zaXRpb246IGFic29sdXRlO1xucmlnaHQ6IDA7XG50b3A6IDA7XG50cmFuc2Zvcm06IHJvdGF0ZXgoNDVkZWcpO1xud2lkdGg6IDEwMCU7XG56LWluZGV4OiAtMTtcbn1cblxuZm9vdGVyIHVsIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbm1hcmdpbjogMCAwLjFlbTtcbnBhZGRpbmc6IDA7XG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyIWltcG9ydGFudDtcbn1cbmZvb3RlciBsaSB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xucG9zaXRpb246IHJlbGF0aXZlO1xudHJhbnNmb3JtOiBzY2FsZSgxLjApO1xudHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xufVxuZm9vdGVyIGxpOmJlZm9yZSB7XG5iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG5ib3JkZXItcmFkaXVzOiAxMnB4O1xuY29sb3I6ICNmZmY7XG5jb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuZGlzcGxheTogYmxvY2s7XG5mbG9hdDogbGVmdDtcbmZvbnQtc2l6ZTogMC45ZW07XG5sZWZ0OiA1MCU7XG5tYXJnaW46IDJweCBhdXRvO1xub3BhY2l0eTogMDtcbnBhZGRpbmc6IDAgMTBweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRvcDogLTM1cHg7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyIWltcG9ydGFudDtcbnZpc2liaWxpdHk6IGhpZGRlbjtcbndpZHRoOiBhdXRvO1xufVxuZm9vdGVyIGxpOmhvdmVyOmJlZm9yZSB7XG5vcGFjaXR5OiAxO1xudG9wOiAtNDVweDtcbnZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuZm9vdGVyIGltZyB7XG4td2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAtNXB4IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCUscmdiYSgyMzAsMjMwLDIzMCwwLjIpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5ib3R0b206IDA7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5tYXJnaW46IDAgNXB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xudHJhbnNmb3JtOiBzY2FsZSgxKTtcbnRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXIhaW1wb3J0YW50O1xudHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHdpZHRoOiA0ZW07XG59XG5cbmZvb3RlciBpbWc6aG92ZXIge1xubWFyZ2luOiAwIDEwcHg7XG50cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cblxuQC13ZWJraXQta2V5ZnJhbWVzIEpVTVAge1xuMCUge1xuICBib3R0b206IDA7XG59XG41MCUge1xuICBib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOjIwcHg7XG59XG4xMDAlIHtcbiAgYm90dG9tOiAwO1xufTt9XG5cbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mymac/Carmen_Sandiego/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map