/**
 * This site is light-only by design (no dark mode toggle). This script still
 * strips any stray `dark` class an old visit might have left in localStorage,
 * so the light theme in app/globals.css always wins.
 */
export function ThemeScript() {
  const code = `(function(){try{document.documentElement.classList.remove('dark');}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
