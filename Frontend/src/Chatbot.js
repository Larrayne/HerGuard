// import React, { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     const loadBotpressScript = () => {
//       const script = document.createElement('script');
//       script.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
//       script.async = true;
//       script.onload = () => {
//         console.log('Botpress WebChat script loaded');
//         if (window.botpressWebChat) {
//           window.botpressWebChat.init({
//             botId: 'ecfe9b84-8b1e-4d1b-a7f5-0ce0bd198ab2',
//             hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
//             messagingUrl: 'https://messaging.botpress.cloud',
//             clientId: 'e73351b3-ecde-44ef-9ab4-11801a13499b',
//           });
//         } else {
//           console.error('Botpress WebChat not initialized');
//         }
//       };
//       script.onerror = () => {
//         console.error('Failed to load Botpress WebChat script');
//       }; 
//       document.body.appendChild(script);
//     };

//     loadBotpressScript();

//     return () => {
//       const script = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"]');
//       if (script) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   return <div id="webchat" className="webchat-container" />;
// };

// export default Chatbot;
