
var MOPINION_SCRIPT_VERSION = '2.0';
(function(d, e) {
var f = d.createElement(e),vars = {
key:'9a4ef2f30860583c4959e8b0b4bc7e94a7e9e526',
domain:'app.mopinion.com',
divName:'surveyContent',
testMode: false        },
c = false;
f.src = 'https://app.mopinion.com/assets/surveys/2.0/js/survey.min.js?v=1.34';
f.onload=f.onreadystatechange=function(){var r=this.readyState;if(!c&&(!r||r==='loaded'||r==='complete')){c=true;try{
    
        vars.trigger_method = 'passive';
        srv.open(vars);                    
                }catch(x){}}};var s=d.getElementsByTagName(e)[0],p=s.parentNode;p.insertBefore(f,s)})(document, 'script');

var lang = {
pleaseselect:'Please select a trigger type',
preview:'The survey opens in: ',
passive:{
    modal:'Your survey will open as a modal. It will be triggered when the user clicks on the feedbackbutton on the side of your screen.',
    slider:'Your survey will open as a slide-in form. It will slide in when the user clicks on the feedbackbutton on the side of your screen',
    embedded:'Your survey will be embedded on your website. Determine the location of this survey by placing the mopinion content div in your HTML.',
    support:'For more information, visit '
},
exit:{
    modal:'Your survey will open as a modal. It will show the moment a user leaves your website',
    slider:'Your survey will open as a slide-in form. It will show the moment a user leaves your website'
},
proactive:{
    modal:'Your survey will open as a modal. It will trigger after a specific amount of time, set in your deployment. On this previewpage the timer is fixed to 5 seconds',
    slider:'Your form will open as a slide-in form, and triggers after a specific amount of time, set in your deployment. On this previewpage the timer is fixed to 5 seconds'
}
}