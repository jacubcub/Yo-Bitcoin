if (
       document.documentElement.innerText.toLowerCase().indexOf('bitcoin') > -1
) {
    var css = `/* width */
    ::-webkit-scrollbar {
        width: 15px;
      }
      
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
    }
      
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: orange;
    }
    
    /* ::-webkit-scrollbar-button {
        width: 10px;
    } */
    
    /* Buttons */
    ::-webkit-scrollbar-button:single-button {
        background-color: #bbbbbb;
        display: block;
        border-style: solid;
        height: 12px;
        width: 10px;
      }
      /* Up */
      ::-webkit-scrollbar-button:single-button:vertical:decrement {
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent #555555 transparent;
      }
      
      ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
        border-color: transparent transparent #777777 transparent;
      }
      /* Down */
      ::-webkit-scrollbar-button:single-button:vertical:increment {
        border-width: 8px 8px 0 8px;
        border-color: #555555 transparent transparent transparent;
      }
      
      ::-webkit-scrollbar-button:vertical:single-button:increment:hover {
        border-color: #777777 transparent transparent transparent;
      }`,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}