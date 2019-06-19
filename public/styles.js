(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\nbody {\n  margin:0;\n  height: 100vh;\n  width: 100vw;\n  background-image: url(https://cdn4.vectorstock.com/i/1000x1000/51/38/wood-table-top-on-golden-bokeh-abstract-background-vector-11645138.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.device,\n.device::before,\n.device::after,\n.device *,\n.device ::before,\n.device ::after {\n box-sizing: border-box;\n /* display: block; */\n}\n\n\n​\n.device {\n position: relative;\n transform: scale(1);\n z-index: 1;\n}\n\n\n​\n.device .device-frame {\n z-index: 1;\n}\n\n\n​\n.device .device-content {\n background-color: #fff;\n background-position: center center;\n background-size: cover;\n -o-object-fit: cover;\n    object-fit: cover;\n position: relative;\n \n}\n\n\n​\n\n  .device-macbook-pro {\n  height: 444px;\n  width: 740px;\n  }\n\n\n.device-macbook-pro .device-frame {\n  background: #0d0d0d;\n  border-radius: 20px;\n  box-shadow: inset 0 0 0 2px #c8cacb;\n  height: 650px;\n  margin: 0 auto;\n  padding: 29px 19px 39px 19px;\n  position: relative;\n  width: 1000px;\n }\n\n\n.device-macbook-pro .device-frame::after {\n  background: #272626;\n  border-radius: 0 0 20px 20px;\n  bottom: 2px;\n  content: \"\";\n  height: 26px;\n  left: 2px;\n  position: absolute;\n  width: 996px;\n }\n\n\n.device-macbook-pro .device-frame::before {\n  bottom: 10px;\n  color: #c8cacb;\n  content: \"MacBook Pro\";\n  font-size: 12px;\n  height: 16px;\n  left: 50%;\n  line-height: 16px;\n  margin-left: -100px;\n  position: absolute;\n  text-align: center;\n  width: 200px;\n  z-index: 1;\n  font-family: 'Roboto', sans-serif;\n }\n\n\n.device-macbook-pro .device-content {\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n }\n\n\n.device-macbook-pro .device-power {\n  background: #e2e3e4;\n  border: solid #d5d6d8;\n  border-radius: 2px 2px 0 0;\n  border-width: 2px 4px 0 4px;\n  height: 20px;\n  margin-top: -10px;\n  position: relative;\n  width: 1050px;\n  z-index: 9;\n }\n\n\n.device-macbook-pro .device-power::after,\n .device-macbook-pro .device-power::before {\n  content: \"\";\n  position: absolute;\n }\n\n\n.device-macbook-pro .device-power::after {\n  background: #d5d6d8;\n  border-radius: 0 0 10px 10px;\n  box-shadow: inset 0 0 4px 2px #babdbf;\n  height: 10px;\n  left: 50%;\n  margin-left: -60px;\n  top: -2px;\n  width: 120px;\n }\n\n\n.device-macbook-pro .device-power::before {\n  background: #a0a3a7;\n  border-radius: 0 0 180px 180px/ 0 0 12px 12px;\n  box-shadow: inset 0 -2px 6px 0 #474a4d;\n  height: 18px;\n  left: -4px;\n  margin: 0 auto;\n  top: 15px;\n  width: 1050px;;\n }\n\n\n.device-macbook-pro.device-spacegray .device-frame {\n  box-shadow: inset 0 0 0 2px #767a7d;\n }\n\n\n.device-macbook-pro.device-spacegray .device-power {\n  background: #909496;\n  border-color: #767a7d;\n }\n\n\n.device-macbook-pro.device-spacegray .device-power::after {\n  background: #83878a;\n  box-shadow: inset 0 0 4px 2px #6a6d70;\n }\n\n\n.device-macbook-pro.device-spacegray .device-power::before {\n  background: #515456;\n  box-shadow: inset 0 -2px 6px 0 black;\n }\n\n\n/* Below delays the clue pop-up for 2seconds  */\n\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n\n.cluePopUp {\nborder-radius: 10px;\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:0.5;\n  animation-duration:0.5;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  background-color: rgba(247, 241, 233, 0.801);\n  width: 300px;\n  height: 100px;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  \n}\n\n\n.messageIcon {\ncolor: green;\n}\n\n\n.clueTop {\ndisplay: flex;\njustify-content: space-between;\n\n}\n\n\nform{\nbackground-color: rgba(247, 241, 233, 0.719);\n}\n\n\n.clueOneScreen {\nwidth: 50%;\nheight: 100%;\ndisplay: flex !important;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nfont-family: 'Roboto', sans-serif;\n}\n\n\n.background-image {\nheight: 100%;\nwidth: 100%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n\n.time, .clueDiv {\ndisplay: flex;\njustify-content: center;\n}\n\n\n.time {\nfont-size: 75px;\nmargin: 30px;\nmargin-bottom: 0px;\ncolor: white;\n}\n\n\n.date {\ncolor: white;\nmargin-top: 0px;\n}\n\n\n.clueDiv {\nbackground-color: white;\n/* opacity: 0.75; */\nborder-radius: 20px;\nheight: 300px;\nwidth: 300px;\ndisplay: flex !important;\njustify-content: space-evenly;\nalign-items: center;\nflex-direction: column;\n}\n\n\n.buttons {\ndisplay: flex !important;\nflex-direction: row;\njustify-content: space-evenly;\nwidth: 100%;\n}\n\n\nbutton {\nborder-radius: 10px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n\n.clueText {\nfont-size: 25px;\n}\n\n\n.icons {\ndisplay: flex;\njustify-content: space-around;\nborder-radius: 10px;\nwidth: 90%;\nheight: 70px;\nmargin-top: 125px;\nmargin-bottom: 20px;\nalign-items: center;\nbackground-color: white;\nopacity: 0.75;\n}\n\n\n.material-icons {\nwidth: 10%;\nheight: 75%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0FBQ0EsNENBQTRDO0FBQzVDOzs7QUFFQTtBQUNBLFVBQVU7QUFDVixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQzs7O0FBRUE7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25COzs7QUFFQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkI7OztBQUVBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaOzs7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7OztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7OztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsV0FBVztBQUNYOzs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjs7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7OztBQUVBO0FBQ0EsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsVUFBVTtBQUNWLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsYUFBYTtBQUNiOzs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXO0FBQ1gsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgbWFyZ2luOjA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuNC52ZWN0b3JzdG9jay5jb20vaS8xMDAweDEwMDAvNTEvMzgvd29vZC10YWJsZS10b3Atb24tZ29sZGVuLWJva2VoLWFic3RyYWN0LWJhY2tncm91bmQtdmVjdG9yLTExNjQ1MTM4LmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5kZXZpY2UsXG4uZGV2aWNlOjpiZWZvcmUsXG4uZGV2aWNlOjphZnRlcixcbi5kZXZpY2UgKixcbi5kZXZpY2UgOjpiZWZvcmUsXG4uZGV2aWNlIDo6YWZ0ZXIge1xuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gLyogZGlzcGxheTogYmxvY2s7ICovXG59XG7igItcbi5kZXZpY2Uge1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuIHotaW5kZXg6IDE7XG59XG7igItcbi5kZXZpY2UgLmRldmljZS1mcmFtZSB7XG4gei1pbmRleDogMTtcbn1cbuKAi1xuLmRldmljZSAuZGV2aWNlLWNvbnRlbnQge1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuIG9iamVjdC1maXQ6IGNvdmVyO1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbn1cbuKAi1xuXG4gIC5kZXZpY2UtbWFjYm9vay1wcm8ge1xuICBoZWlnaHQ6IDQ0NHB4O1xuICB3aWR0aDogNzQwcHg7XG4gIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtZnJhbWUge1xuICBiYWNrZ3JvdW5kOiAjMGQwZDBkO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2M4Y2FjYjtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI5cHggMTlweCAzOXB4IDE5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMDBweDtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXBybyAuZGV2aWNlLWZyYW1lOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMyNzI2MjY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gIGJvdHRvbTogMnB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxlZnQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTk2cHg7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1mcmFtZTo6YmVmb3JlIHtcbiAgYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2M4Y2FjYjtcbiAgY29udGVudDogXCJNYWNCb29rIFByb1wiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMTZweDtcbiAgbGVmdDogNTAlO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlciB7XG4gIGJhY2tncm91bmQ6ICNlMmUzZTQ7XG4gIGJvcmRlcjogc29saWQgI2Q1ZDZkODtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XG4gIGJvcmRlci13aWR0aDogMnB4IDRweCAwIDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTA1MHB4O1xuICB6LWluZGV4OiA5O1xuIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyLFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuIH1cbiBcbiAuZGV2aWNlLW1hY2Jvb2stcHJvIC5kZXZpY2UtcG93ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2Q1ZDZkODtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAycHggI2JhYmRiZjtcbiAgaGVpZ2h0OiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgdG9wOiAtMnB4O1xuICB3aWR0aDogMTIwcHg7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8gLmRldmljZS1wb3dlcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2EwYTNhNztcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE4MHB4IDE4MHB4LyAwIDAgMTJweCAxMnB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgIzQ3NGE0ZDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsZWZ0OiAtNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAxNXB4O1xuICB3aWR0aDogMTA1MHB4OztcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtZnJhbWUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzc2N2E3ZDtcbiB9XG4gXG4gLmRldmljZS1tYWNib29rLXByby5kZXZpY2Utc3BhY2VncmF5IC5kZXZpY2UtcG93ZXIge1xuICBiYWNrZ3JvdW5kOiAjOTA5NDk2O1xuICBib3JkZXItY29sb3I6ICM3NjdhN2Q7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICM4Mzg3OGE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggMnB4ICM2YTZkNzA7XG4gfVxuIFxuIC5kZXZpY2UtbWFjYm9vay1wcm8uZGV2aWNlLXNwYWNlZ3JheSAuZGV2aWNlLXBvd2VyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNTE1NDU2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggNnB4IDAgYmxhY2s7XG4gfVxuXG4vKiBCZWxvdyBkZWxheXMgdGhlIGNsdWUgcG9wLXVwIGZvciAyc2Vjb25kcyAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG4uY2x1ZVBvcFVwIHtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6MDtcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOyBcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjAuNTtcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MC41O1xuICBhbmltYXRpb24tZHVyYXRpb246MC41O1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuODAxKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbn1cbi5tZXNzYWdlSWNvbiB7XG5jb2xvcjogZ3JlZW47XG59XG4uY2x1ZVRvcCB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbmZvcm17XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQxLCAyMzMsIDAuNzE5KTtcbn1cblxuLmNsdWVPbmVTY3JlZW4ge1xud2lkdGg6IDUwJTtcbmhlaWdodDogMTAwJTtcbmRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbmhlaWdodDogMTAwJTtcbndpZHRoOiAxMDAlO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpbWUsIC5jbHVlRGl2IHtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpbWUge1xuZm9udC1zaXplOiA3NXB4O1xubWFyZ2luOiAzMHB4O1xubWFyZ2luLWJvdHRvbTogMHB4O1xuY29sb3I6IHdoaXRlO1xufVxuXG4uZGF0ZSB7XG5jb2xvcjogd2hpdGU7XG5tYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jbHVlRGl2IHtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLyogb3BhY2l0eTogMC43NTsgKi9cbmJvcmRlci1yYWRpdXM6IDIwcHg7XG5oZWlnaHQ6IDMwMHB4O1xud2lkdGg6IDMwMHB4O1xuZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbnMge1xuZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xud2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsdWVUZXh0IHtcbmZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmljb25zIHtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG53aWR0aDogOTAlO1xuaGVpZ2h0OiA3MHB4O1xubWFyZ2luLXRvcDogMTI1cHg7XG5tYXJnaW4tYm90dG9tOiAyMHB4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xub3BhY2l0eTogMC43NTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbndpZHRoOiAxMCU7XG5oZWlnaHQ6IDc1JTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIl19 */", '', '']]

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