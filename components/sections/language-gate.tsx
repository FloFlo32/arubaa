const STORAGE_KEY = "flagship-aruba-language";

/**
 * LanguageGate — no visible UI (the language-selection splash page has been
 * removed). Purely a silent auto-detector: on a visitor's first visit it
 * reads the browser's own language (navigator.languages) and, if it's one we
 * support, redirects straight to that locale and remembers the choice so it
 * never runs again. If the browser's language isn't one we support, it does
 * nothing and the visitor just sees the English site, no popup.
 */
export function LanguageGate() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `try{
var k='${STORAGE_KEY}';
if(!localStorage.getItem(k)){
var supported=['es','nl','de','it','br','se'];
var langs=navigator.languages||[navigator.language||''];
var code=null,locale=null;
for(var i=0;i<langs.length;i++){
var p=(langs[i]||'').toLowerCase().split('-')[0];
if(p==='en'){code='us';locale='en';break;}
if(p==='pt'){code='br';locale='br';break;}
if(supported.indexOf(p)!==-1){code=p;locale=p;break;}
}
if(locale){
localStorage.setItem(k,code);
if(locale!=='en'&&location.pathname==='/'){location.replace('/'+locale);}
}
}
}catch(e){}`,
      }}
    />
  );
}
