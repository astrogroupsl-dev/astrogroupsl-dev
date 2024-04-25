//Limit user experience
document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

//Navigation function
function deployContent(src_path, target) {
  var main_iframe = parent.document.getElementById('main-iframe');
  var loading_bar = document.getElementById('loading-bar');
  
  switch(target) {
    case '_main-iframe':
      loading_bar.style.opacity = '100%';
      loading_bar.style.width = '100%';
      main_iframe.src = src_path;
      main_iframe.onload = function() {
        loading_bar.style.opacity = '0%';
        loading_bar.style.width = '0';
      };
      break;
    case '_blank':
      window.open(src_path, target);
      break;
    case '_parent':
      parent.location.href = src_path;
      break;
    case '_self':
      window.location.href = src_path;
      break;
    case '_top':
      top.location.href = src_path;
      break;
    default:
      console.log('Invalid target specified.');
  }
}

//Alerting function
function showAlert(title, message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'custom-alert';
  alertBox.innerHTML = `
    <h2>${title}</h2>
    <h4>${message}</h4>
    <button onclick="document.body.removeChild(this.parentElement)">OK</button>
  `;
  document.body.appendChild(alertBox);
}
