(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".contact {\n  width: 40px;\n  height: 40px;\n  margin-left: 10px;\n}\n\n.clueText {\n  margin-left: 10px;\n}\n\nheader {\n\tdisplay: none;\n}\n\nfooter {\n\tdisplay: none;\n}\n\nbody {\n  margin:0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n/* Below delays the clue pop-up for 2seconds  */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.cluePopUp {\n    -webkit-animation: fadeIn ease-in 1;\n    animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 0.5;\n    animation-duration: 0.5;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    background-color: lightgrey;\n    opacity: 0.9;\n    border-radius: 5px;\n    height: 70px;\n    width: 400px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: row;\n    margin-top: 6px;\n    margin-right: 12px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.clueOneScreen {\n    width: 100vw;\n    height: -webkit-fill-available;\n    height: -moz-available;\n    height: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n}\n\n.clueDiv {\n    background-color: lightgrey;\n    opacity: 0.8;\n    border-radius: 5px;\n    height: 300px;\n    width: 400px;\n    display: flex ;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n}\n\n.flyOut {\n  background-color: white;\n  border-radius: 5px;\n  height: 500px;\n  width: 400px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  margin-top: 200px;\n}\n\n.city {\n  font-size: 20px;\n  margin-bottom: 0px;\n}\n\nbutton {\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  }\n\n.buttons  {\ndisplay: flex;\nflex-direction: row;\njustify-content: space-evenly;\nwidth: 100%;\n}\n\n.finger, .plane {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n}\n\n.thetime {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 10%;\n  /* bottom: 50%; */\n}\n\n.clock, .date {\n  color: white;\n  margin: 0;\n  text-align: center;\n}\n\n.clock {\n  font-size: 70px;\n}\n\n.date {\n  font-size: 45px;\n}\n\n.icons {\ndisplay: flex;\njustify-content: space-around;\nborder-radius: 10px;\nwidth: 90%;\nheight: 70px;\nmargin-top: 125px;\nmargin-bottom: 20px;\nalign-items: center;\nbackground-color: white;\nopacity: 0.75;\n}\n\n.background-image {\n  height: 100vh;\n  width: 100vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (min-width: 1024px) {\n  \n  .cluePopUp {\n    /* height: 70px;\n    width:400px; */\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: row;\n    margin-top: 6px;\n    margin-right: 12px;\n}\n\n  .thetime {\n    position: absolute;\n    display: flex;\n    flex-direction: row-reverse;\n    top: 0%;\n    right: 8%;\n  }\n  \n  .clock, .date {\n    color: black;\n    margin: 0;\n    text-align: center;\n    margin-right: 10px;\n  }\n\n  .clock {\n    font-size: 1em;\n    font-family: 'Times New Roman', Times, serif;\n  }\n  \n  .date {\n    font-size: 1em;\n    font-family: 'Times New Roman', Times, serif;\n  }\n  \n  .clueOneScreen {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin-top: 50px;    \n  }\n\n  .flag {\n    width: 200%;\n  }\n\n  .city {\n    font-size: 30px;\n    margin-bottom: 0px;\n  }\n\n    /* desktop styling------------------------------------ */\n  \n  section {\n    height: 200%;\n  }\n  \n  .background-image {\n    height: 100vh;\n    width: 100vw;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n    .clueDiv, .flyOut {\n        background-color: white;\n        border-radius: 5px;\n        height: 600px;\n        width: 800px;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        flex-direction: column;\n        font-family: 'Roboto', sans-serif;\n        margin-top: 200px;\n    }\n\n.material-icons {\nwidth: 10%;\nheight: 75%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 10px;\n}\n.wrong {\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  width: 65vw;\n  background-color:black;\n  color: white;\n\n}\n\n\n\nbody {\nmargin: 0;\noverflow: hidden;\npadding: 0;\nperspective-origin: 0 0;\n}\n\n/*--Header--*/\nheader {\nbackground: linear-gradient(to bottom, rgba(230,230,230,1) 0%, rgba(163,163,163,1) 100%);\ndisplay: block;\nfont-size: 1em;\nheight: 3%;\nposition: fixed;\ntop: 0%;\nwidth: 100%;\n\n}\nheader ul {\nmargin: 0 5px;\npadding: 0 3px;\n}\nheader li {\ndisplay: inline-block;\nline-height: 1.3em;\npadding: 0 0.5em;\nposition: relative;\n/* cursor: default; */\n}\nheader .left {\nfloat: left;\n}\nheader .right {\nfloat: right;\n}\na {\ncolor: #000;\ntext-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n\n\n/*--Desktop--*/\n#Desktop {\ndisplay: flex;\nalign-content:right;\nflex-direction:column;\nalign-items:flex-end;\nheight: 85vh;\npadding: 25px;\nposition: absolute;\nright: ;\ntext-align: right;\nz-index: -1;\nwidth:100%;\n}\n\n/*--Dock--*/\nfooter {\nbottom: 0;\ndisplay: inline-block;\nheight: 4.4em;\nleft: 50%;\nmin-width: 30em;\npadding: 0 10px;\nperspective: 1000px;\nposition: absolute;\ntext-align: center;\n  transform: translatex(-50%);\n}\nfooter:before {\nbackground: linear-gradient(to top, rgba(230,230,230,1) 0%, rgba(163,163,163,1) 100%);\nbottom: 0;\ncontent: '';\nheight: 4em;\nleft: 0;\nmargin-top: 15px;\nposition: absolute;\nright: 0;\ntop: 0;\ntransform: rotatex(45deg);\nwidth: 100%;\nz-index: -1;\n}\n\nfooter ul {\ndisplay: inline-block;\nmargin: 0 0.1em;\npadding: 0;\ntransform-origin: bottom cente;\n}\n\n\n\n\n\n/*-------TRANSITION------*/\nfooter li {\ndisplay: inline-block;\nvertical-align: top;\nposition: relative;\ntransform: scale(1.0);\ntransform-origin: bottom center;\ntransition: transform 2s;\n}\n\n\n\n\n\n\n\n\n\nfooter li:before {\nbackground: rgba(0,0,0,0.3);\nborder-radius: 12px;\ncolor: #fff;\ncontent: attr(data-title);\ndisplay: block;\nfloat: left;\nfont-size: 0.9em;\nleft: 50%;\nmargin: 2px auto;\nopacity: 0;\npadding: 0 10px;\nposition: absolute;\ntext-align: center;\ntop: -35px;\ntransform: translatex(-50%);\ntransform-origin: bottom cente;\nvisibility: hidden;\nwidth: auto;\n}\nfooter li:hover:before {\nopacity: 1;\ntop: -45px;\nvisibility: visible;\n}\n\n\nfooter img {\n-webkit-box-reflect: below -5px -webkit-gradient(linear, left bottom, left top, color-stop(0%,rgba(230,230,230,0.2)), color-stop(100%,rgba(255,255,255,0)));\nalign-items: center;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nmargin: 0 5px;\nposition: relative;\ntransform: scale(1);\ntransform-origin: bottom cente;\ntransition: all 0.2s;\n  width: 3em;\n}\n\nfooter img:hover {\nmargin: 0 10px;\ntransform: scale(1.2);\n}\n\n\n@-webkit-keyframes JUMP {\n0% {\n  bottom: 0;\n}\n50% {\n  bottom: 20px;\n  padding-bottom:20px;\n}\n100% {\n  bottom: 0;\n};}\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,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a0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsMkJBQTJCO0FBQzNCLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQjs7O0FBR0E7QUFDQSwySkFBMko7QUFDM0osbUJBQW1CO0FBQ25CLFNBQVM7QUFDVCxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLDhCQUE4QjtBQUM5QixvQkFBb0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0FBQ0EsY0FBYztBQUNkLHFCQUFxQjtBQUNyQjs7O0FBR0E7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYLENBQUEsQ0FBRTs7O0FBR0YiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2x1ZVRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaGVhZGVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbmJvZHkge1xuICBtYXJnaW46MDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQmVsb3cgZGVsYXlzIHRoZSBjbHVlIHBvcC11cCBmb3IgMnNlY29uZHMgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG5cbi5jbHVlUG9wVXAge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNTtcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC41O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY2x1ZU9uZVNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cblxuLmNsdWVEaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXggO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZseU91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbi5jaXR5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuXG4uYnV0dG9ucyAge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiByb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbndpZHRoOiAxMDAlO1xufVxuXG4uZmluZ2VyLCAucGxhbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4udGhldGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAxMCU7XG4gIC8qIGJvdHRvbTogNTAlOyAqL1xufVxuXG4uY2xvY2ssIC5kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jbG9jayB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi5pY29ucyB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xud2lkdGg6IDkwJTtcbmhlaWdodDogNzBweDtcbm1hcmdpbi10b3A6IDEyNXB4O1xubWFyZ2luLWJvdHRvbTogMjBweDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbm9wYWNpdHk6IDAuNzU7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgXG4gIC5jbHVlUG9wVXAge1xuICAgIC8qIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDo0MDBweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuICAudGhldGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIHRvcDogMCU7XG4gICAgcmlnaHQ6IDglO1xuICB9XG4gIFxuICAuY2xvY2ssIC5kYXRlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAuY2xvY2sge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gIFxuICAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIH1cbiAgXG4gIC5jbHVlT25lU2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogNTBweDsgICAgXG4gIH1cblxuICAuZmxhZyB7XG4gICAgd2lkdGg6IDIwMCU7XG4gIH1cblxuICAuY2l0eSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gICAgLyogZGVza3RvcCBzdHlsaW5nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICBzZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gIH1cbiAgXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgICAuY2x1ZURpdiwgLmZseU91dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgfVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xud2lkdGg6IDEwJTtcbmhlaWdodDogNzUlO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ud3Jvbmcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNjV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuXG59XG5cblxuXG5ib2R5IHtcbm1hcmdpbjogMDtcbm92ZXJmbG93OiBoaWRkZW47XG5wYWRkaW5nOiAwO1xucGVyc3BlY3RpdmUtb3JpZ2luOiAwIDA7XG59XG5cbi8qLS1IZWFkZXItLSovXG5oZWFkZXIge1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMzAsMjMwLDIzMCwxKSAwJSwgcmdiYSgxNjMsMTYzLDE2MywxKSAxMDAlKTtcbmRpc3BsYXk6IGJsb2NrO1xuZm9udC1zaXplOiAxZW07XG5oZWlnaHQ6IDMlO1xucG9zaXRpb246IGZpeGVkO1xudG9wOiAwJTtcbndpZHRoOiAxMDAlO1xuXG59XG5oZWFkZXIgdWwge1xubWFyZ2luOiAwIDVweDtcbnBhZGRpbmc6IDAgM3B4O1xufVxuaGVhZGVyIGxpIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmxpbmUtaGVpZ2h0OiAxLjNlbTtcbnBhZGRpbmc6IDAgMC41ZW07XG5wb3NpdGlvbjogcmVsYXRpdmU7XG4vKiBjdXJzb3I6IGRlZmF1bHQ7ICovXG59XG5oZWFkZXIgLmxlZnQge1xuZmxvYXQ6IGxlZnQ7XG59XG5oZWFkZXIgLnJpZ2h0IHtcbmZsb2F0OiByaWdodDtcbn1cbmEge1xuY29sb3I6ICMwMDA7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLyotLURlc2t0b3AtLSovXG4jRGVza3RvcCB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24tY29udGVudDpyaWdodDtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuaGVpZ2h0OiA4NXZoO1xucGFkZGluZzogMjVweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnJpZ2h0OiA7XG50ZXh0LWFsaWduOiByaWdodDtcbnotaW5kZXg6IC0xO1xud2lkdGg6MTAwJTtcbn1cblxuLyotLURvY2stLSovXG5mb290ZXIge1xuYm90dG9tOiAwO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuaGVpZ2h0OiA0LjRlbTtcbmxlZnQ6IDUwJTtcbm1pbi13aWR0aDogMzBlbTtcbnBhZGRpbmc6IDAgMTBweDtcbnBlcnNwZWN0aXZlOiAxMDAwcHg7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcbn1cbmZvb3RlcjpiZWZvcmUge1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyMzAsMjMwLDIzMCwxKSAwJSwgcmdiYSgxNjMsMTYzLDE2MywxKSAxMDAlKTtcbmJvdHRvbTogMDtcbmNvbnRlbnQ6ICcnO1xuaGVpZ2h0OiA0ZW07XG5sZWZ0OiAwO1xubWFyZ2luLXRvcDogMTVweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnJpZ2h0OiAwO1xudG9wOiAwO1xudHJhbnNmb3JtOiByb3RhdGV4KDQ1ZGVnKTtcbndpZHRoOiAxMDAlO1xuei1pbmRleDogLTE7XG59XG5cbmZvb3RlciB1bCB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5tYXJnaW46IDAgMC4xZW07XG5wYWRkaW5nOiAwO1xudHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlO1xufVxuXG5cblxuXG5cbi8qLS0tLS0tLVRSQU5TSVRJT04tLS0tLS0qL1xuZm9vdGVyIGxpIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbnZlcnRpY2FsLWFsaWduOiB0b3A7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xudHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xufVxuXG5cblxuXG5cblxuXG5cblxuZm9vdGVyIGxpOmJlZm9yZSB7XG5iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG5ib3JkZXItcmFkaXVzOiAxMnB4O1xuY29sb3I6ICNmZmY7XG5jb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuZGlzcGxheTogYmxvY2s7XG5mbG9hdDogbGVmdDtcbmZvbnQtc2l6ZTogMC45ZW07XG5sZWZ0OiA1MCU7XG5tYXJnaW46IDJweCBhdXRvO1xub3BhY2l0eTogMDtcbnBhZGRpbmc6IDAgMTBweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRvcDogLTM1cHg7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGU7XG52aXNpYmlsaXR5OiBoaWRkZW47XG53aWR0aDogYXV0bztcbn1cbmZvb3RlciBsaTpob3ZlcjpiZWZvcmUge1xub3BhY2l0eTogMTtcbnRvcDogLTQ1cHg7XG52aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5cbmZvb3RlciBpbWcge1xuLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgLTVweCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAlLHJnYmEoMjMwLDIzMCwyMzAsMC4yKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYm90dG9tOiAwO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xubWFyZ2luOiAwIDVweDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbnRyYW5zZm9ybTogc2NhbGUoMSk7XG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGU7XG50cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgd2lkdGg6IDNlbTtcbn1cblxuZm9vdGVyIGltZzpob3ZlciB7XG5tYXJnaW46IDAgMTBweDtcbnRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgSlVNUCB7XG4wJSB7XG4gIGJvdHRvbTogMDtcbn1cbjUwJSB7XG4gIGJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206MjBweDtcbn1cbjEwMCUge1xuICBib3R0b206IDA7XG59O31cblxuXG59Il19 */", '', '']]

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

module.exports = __webpack_require__(/*! /Users/josiekwheeler/Documents/Carmen_Sandiego/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map