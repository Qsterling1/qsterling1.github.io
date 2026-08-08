(function(){
  var d = document.documentElement;
  var t = document.getElementById('themeBtn');
  function isDark(){ return d.getAttribute('data-theme') === 'dark'; }
  function sync(){ if (t) t.textContent = isDark() ? '☀' : '☾'; }
  if (t) t.addEventListener('click', function(){
    if (isDark()){ d.removeAttribute('data-theme'); try{ localStorage.removeItem('qsTheme'); }catch(e){} }
    else { d.setAttribute('data-theme','dark'); try{ localStorage.qsTheme = 'dark'; }catch(e){} }
    sync();
  });
  sync();

  var pb = document.getElementById('playBtn');
  if (pb) {
    var audio = new Audio(pb.getAttribute('data-src'));
    var label = pb.textContent;
    function setLabel(playing){ pb.textContent = playing ? 'Pause' : label; }
    pb.addEventListener('click', function(){
      if (audio.paused){ audio.play(); setLabel(true); }
      else { audio.pause(); setLabel(false); }
    });
    audio.addEventListener('ended', function(){ setLabel(false); });
  }

  var u='Sterling_Q';var h='Outlook.com';var addr=u+'@'+h;
  ['','F'].forEach(function(s){
    var sp=document.getElementById('em'+s);
    var bt=document.getElementById('emBtn'+s);
    if(sp)sp.textContent=addr;
    if(bt)bt.addEventListener('click',function(e){e.preventDefault();window.location='mail'+'to:'+addr;});
  });
})();
