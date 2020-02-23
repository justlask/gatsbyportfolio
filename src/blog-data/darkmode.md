---
type: 'blog'
path: "/blog/darkmode"
slug: "darkmode"
title: "Simple Dark Mode Toggle using Gatsby"
description: "Most solutions for toggling darkmode in Gatsby involve using a Wrapper and Redux, I wanted to come up with a simple solution without the use of a Wrapper and Redux - and I have found one!"
---

# About
> I rebuild my portfolio... a lot. Which is fun because I get to try new things and use new technologies. <br><br>
> Recently (especially with the new settings on phones to set light/dark mode preference) I've seen many people implementing this into websites. So I thought, I've already designed a new graphic and am thinking about rebuilding my portfolio, why not add dark mode/light mode?
><br><br>
> When I wanted to implement this, I thought initially I wanted to use a react hook or two and a button to trigger a change in stylesheet.
> I did a little bit of research and saw that most people were using a plugin, or using a Wrapper with Redux to achieve this effect.
> Sometimes I like to live on the wildside and see if something is possible in another way, so I stuck with my initial idea.<br><br>
> However, I ran into some trouble, the first was being able to set a default, or check for the existence of a preference in localStorage, but I ran into some clashes where localStorage is not available server side, no problem. We can just use a ternary to determine if we are serverside or clientside and only trigger once we are on the client.<br><br>
> But then, there was a bug where if i default to 'light' as the initial mode in useState, it would reset whenever a 'new page' was visited, this was alleviated by changing initial state to 'undefined,' however, that caused a double click to be needed to go from light to dark.<br><br>
> The answer was found by setting a class on the body initially using gatsby-ssr.js to add a class onto the body during initial render instead of checking once the page was loaded for the first time. This got rid of the double click needed to trigger a change between light/dark styling.<br><br>
> All in all this was fun, also I really like that there is an @media query to detect user preference now, it's really nice to see that finally as a solution. I'm a darkmode fan myself.<br><br>
> Anyway here's a breif rundown, with code:<br><br>



# 1. layout.scss
> I used SCSS to define the styling for each mode, in my case I use .dark and .light on the body to handle the different styles.<br><br>
> I used variables to set my color pallate, thought about using a @mixin to handle the change in colors, which is a possibility if you want to try that, I didn't.<br><br>
```css
body.dark {
  transition: all 1s;
  background-color: $dark-background;
  color: $dark-text;
}
body.light {
  transition: all 1s;
  background-color: $light-background;
  color: $light-text;
}
```
<br><br>



# 2. gatsby-ssr.js
> Set a default class on the body using gatsby-ssr.js to load one of the modes on render, in my case I default to .light color scheme
> Add this to your gatsby-ssr.js file, if you do not have one it goes inside the root directory.<br><br>


```javascript
  exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
      className: 'light'
    });
  };
```
<br><br>




# 3. layout.js
> Here we have the logic for the modes using React hook useState and useEffect in layout.js<br><br>
> We set the mode to localStorage in order to persist the prefered mode, as well as remove the old styling choice and add the new styling choice<br>
> By adding 'mode' as a dependency of useEffect, each time mode changes useEffect will also be triggered which changes the styling.<br>
> We also pass down mode and setMode to the header, so that way we can use and update it with the button!
<br><br>

```javascript
  import React, { useState, useEffect } from "react"
    ...
    lines skipped
    ...

    const Layout = ({ children }) => {
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

      ...
      lines skipped
      ...

      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} mode={mode} setMode={setMode} />
          <main>{children}</main>
          <Footer />
        </>
      )
    }
    ...
    lines skipped
    ...

  export default Layout
```
<br><br>



# 4. header.js
> Finally we create a button in the header to serve as the mode toggle, the button has a function which is triggered onClick to determine if the mode should be set to .dark or .light, and then uses the prop 'setMode' which we passed from layout.js to the header.js to lift the state up and trigger the change in styling.   
<br><br>


```javascript
  import React from 'react';
    ...
    lines skipped
    ...
    const header = (props) => {

      const handleMode = () => {
        return (props.mode === 'light') ? props.setMode('dark') : props.setMode('light')
      }

      return (
        <header>
          <Link to="/"><img src={namemark} alt="Logo" /></Link>
          <nav>
            <button className="modebtn" onClick={handleMode}><FontAwesomeIcon icon={faSun}/></button>
          </nav>
          </header>
        )
      }

  export default header
```
<br><br>

## And that's all folks. My stubborn solution to a light/dark mode toggle without using a wrapper or Redux in Gatsby.