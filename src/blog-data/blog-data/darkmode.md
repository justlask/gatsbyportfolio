---
type: 'blog'
path: "/blog/darkmode"
slug: "darkmode"
title: "Simple Dark Mode Toggle using Gatsby"
description: "Most solutions for toggling darkmode in Gatsby involve using a Wrapper and Redux, I wanted to come up with a simple solution without the use of a Wrapper and Redux - and I have found one!"
---

# Abstrat on how it works
1. Use SCSS to define the modes (in my case .dark and .light)
2. Set a class on body that loads one of the modes
4. layout.js has logic using useState to
3. Have a button which will serve as a toggle and a function to check if current mode is .dark or .light and pass that info back to layout.js
4. 




Start by adding a class on body like .light (or .dark depending on which is your default prefered color scheme) on render of the body. This will avoid a "flash," as the page styling will take effect on render of the page.

### This is done using the gatsby-ssr.js
exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'light'
    });
};

### layout.js
  const initialMode = (typeof window !== 'undefined') ? (localStorage === undefined) ? 'light' : localStorage.getItem('jlmode') : 'light';
  const [ mode, setMode ] = useState(initialMode)

  useEffect(() => {
    if (mode === 'dark' && typeof window !== 'undefined') {
      localStorage.setItem('jlmode', 'dark')
      document.body.classList.remove('light');
      document.body.classList.add(mode);
    }
    else if (mode === 'light' && typeof window !== "undefined") {
      localStorage.setItem('jlmode', 'light')
      document.body.classList.remove('dark');
      document.body.classList.add(mode);
    }
  }, [mode])

  .....
  lines skipped
  ......

        <Header siteTitle={data.site.siteMetadata.title} mode={mode} setMode={setMode} />



### header.js
const header = (props) => {

  const handleMode = () => {
    return (props.mode === 'light') ? props.setMode('dark') : props.setMode('light')
  }

  return (
    <header>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <nav>
        <button className="modebtn" onClick={handleMode}><FontAwesomeIcon icon={faSun}/></button>
        ......... 
        lines skipped
        .........
      </nav>
    </header>
  )
}

export default header



# CSS
###  I used SCSS to associate different styling between .dark and .light, 