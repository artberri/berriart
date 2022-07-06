---
slug: sidr
layout: documentation
title: Sidr
description: Berriart contact page
download: https://github.com/artberri/sidr/archive/v2.2.1.zip
repo: https://github.com/artberri/sidr
subtitle: The best jQuery plugin for creating side menus and the easiest way for doing your menu responsive
menu:
- text: Download
  url: download
- text: Get started
  url: get-started
- text: Demos &amp; Usage
  url: demos--usage
- text: Documentation
  url: documentation
- text: Themes
  url: themes
- text: Development
  url: development
custom_css:
- //cdn.jsdelivr.net/jquery.sidr/2.2.1/stylesheets/jquery.sidr.dark.min.css
custom_scripts:
- //cdn.jsdelivr.net/jquery/2.2.0/jquery.min.js
- //cdn.jsdelivr.net/jquery.sidr/2.2.1/jquery.sidr.min.js
- /js/sidr.js

---

![Sidr effect preview image](images/screenshots.png)

You will be able to create multiple _sidrs_ on both sides of your web to make responsives menus (or not, it works perfectly on desktop too).
It uses CSS3 transitions (and fallbacks to `$.animate` with older browsers) and it supports multiple source types.

## Get started

Like any other plugin, you must include it after the jQuery script. For a better performance load them at the bottom of your page or in an asynchronous way.

You have to include a Sidr Theme stylesheet too, choose between the dark or the light one, or if you prefer create one by your own.

{{< highlight html >}}
<!DOCTYPE html>
<html>
  <head>
    <!-- Your other stuff  (you can have problems if you don't add minimum scale in the viewport) -->
    <meta name="viewport" content="width=device-width,minimum-scale=1">
    <!-- Include a Sidr bundled CSS theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.sidr/2.2.1/stylesheets/jquery.sidr.dark.min.css">
  </head>
  <body>
    <!-- More stuff -->
    <!-- Include jQuery -->
    <script src="//cdn.jsdelivr.net/jquery/2.2.0/jquery.min.js"></script>
    <!-- Include the Sidr JS -->
    <script src="//cdn.jsdelivr.net/jquery.sidr/2.2.1/jquery.sidr.min.js"></script>
  </body>
</html>
{{< / highlight >}}

### Using bower or NPM

Instead of downloading the plugin, you can install it with [bower](https://bower.io/) or with [npm](https://www.npmjs.com/):

{{< highlight bash >}}
bower install sidr --save
{{< / highlight >}}

{{< highlight bash >}}
npm install sidr --save
{{< / highlight >}}

### From a CDN

If you want to load the scripts from a CDN to save bandwith or improve the performance you can use [jsDelivr](https://www.jsdelivr.com/projects/jquery.sidr).

## Demos & Usage

Here are described differents ways of usage for this plugin, you can read and adapt them to your website's requeriments. Below are described all options with details.

### The Simplest Usage

{{< rawhtml >}}
<a id="simple-menu" class="demo button" href="#sidr">Simple menu</a>
{{< /rawhtml >}}

Create a div called sidr and place your menu there. Then activate the plugin binding it to a link. By default, the menu wont't be visible and it will be displayed or hidden by clicking on the link.

{{< highlight html >}}
<a id="simple-menu" href="#sidr">Toggle menu</a>

<div id="sidr">
  <!-- Your content -->
  <ul>
    <li><a href="#">List 1</a></li>
    <li class="active"><a href="#">List 2</a></li>
    <li><a href="#">List 3</a></li>
  </ul>
</div>

<script>
$(document).ready(function() {
  $('#simple-menu').sidr();
});
</script>
{{< / highlight >}}

### Create Multiple Menus

{{< rawhtml >}}
<a id="left-menu" class="demo button" href="#left-menu">Left Menu</a> <a id="right-menu" class="demo button" href="#right-menu">Right Menu</a>
{{< /rawhtml >}}

You can create as many menus as you want in the same page, and you can place them at the right or left side. When creating more than one menu, you need to name them. As it is shown in the example, if you don't create the menu div container, the plugin will create it for you.

{{< highlight html >}}
<a id="left-menu" href="#left-menu">Left Menu</a>
<a id="right-menu" href="#right-menu">Right Menu</a>

<script>
$(document).ready(function() {
    $('#left-menu').sidr({
      name: 'sidr-left',
      side: 'left' // By default
    });
    $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
    });
});
</script>
{{< / highlight >}}

### The Menu Content

{{< rawhtml >}}
<a id="existing-content-menu" class="demo button" href="#existing-content-menu">Existing content</a> <a id="remote-content-menu" class="demo button" href="#remote-content-menu">Load remotelly</a> <a id="callback-menu" class="demo button" href="#callback-menu">Callback loaded</a>
{{< /rawhtml >}}

There are four ways to load content in the menus, choose yours with the source option.

* We have shown the first way at the 'Simplest Usage' demo, no more than placing the content into the div menu.
* The most common way is to load existing html into the menu, you can add as many selectors as you want and they will be loaded in order.
* There is the possibility to load remote content easily via AJAX.
* If you need a more complex way to load content into the menu you can just create a callback function.

{{< highlight html >}}
<a id="existing-content-menu" href="#existing-content-menu">Existing content</a>
<a id="remote-content-menu" href="#remote-content-menu">Load remotelly</a>
<a id="callback-menu" href="#callback-menu">Callback loaded</a>

<header id="demoheader">
    <h1>Demos &amp; Usage</h1>
</header>

<div id="demo-content">
    <p>Here are described differents ways of usage for this plugin, you can
    read and adapt them to your website's requeriments. Below are described
    all options with details.</p>
</div>

<script>
$(document).ready(function() {
    $('#existing-content-menu').sidr({
      name: 'sidr-existing-content',
      source: '#demoheader, #demo-content'
    });
    $('#remote-content-menu').sidr({
      name: 'sidr-remote-content',
      source: 'https://www.example.com/remote-menu.html'
    });
    $('#callback-menu').sidr({
      name: 'sidr-callback',
      source: function(name) {
        return '<h1>' + name + ' menu</h1><p>Yes! You can use a callback too ;)</p>';
      }
    });
});
</script>
{{< / highlight >}}

### Responsive Menus

{{< rawhtml >}}
<a data-proofer-ignore id="responsive-menu-button" class="demo button" href="#sidr-main">Responsive Menu</a>
{{< / rawhtml >}}

The major reason for creating this plugin was just being able to easily add existing content (like a menu, a search box, social icons,...) to a menu in small screens. Simply load existing html into a sidr, and then, hide this html and show the menu button with media queries.

{{< highlight html >}}
<style>
#mobile-header {
    display: none;
}
@media only screen and (max-width: 767px){
    #mobile-header {
        display: block;
    }
}
</style>

<div id="mobile-header">
    <a id="responsive-menu-button" href="#sidr-main">Menu</a>
</div>

<div id="navigation">
    <nav class="nav">
        <ul>
            <li><a href="#download">Download</a></li>
            <li><a href="#getstarted">Get started</a></li>
            <li><a href="#usage">Demos &amp; Usage</a></li>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#themes">Themes</a></li>
            <li><a href="#support">Support</a></li>
        </ul>
    </nav>
</div>

<script>
    $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '#navigation'
    });
</script>
{{< / highlight >}}

### Open/Close Programatically

There are some methods you can use to open or close menus as you want, or to bind them to any event. For example, in this page the right/left swipe touch event opens or closes the responsive menu (Note: this plugin doesn't implement touch events, in this case I'm using an external library).

{{< highlight html >}}
<!-- For this example I include an external library to handle touch events -->
<script src="//cdn.jsdelivr.net/jquery.touchswipe/1.6.15/jquery.touchSwipe.min.js"></script>

<script>
    $('body').swipe( {
        //Single swipe handler for left swipes
        swipeLeft: function () {
            $.sidr('close', 'sidr-main');
        },
        swipeRight: function () {
            $.sidr('open', 'sidr-main');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 45
    });
</script>
{{< / highlight >}}

### Cookbook

You can see other recipes in the code repository:

[https://github.com/artberri/sidr/tree/master/examples](https://github.com/artberri/sidr/tree/master/examples)

## Documentation

{{< rawhtml >}}
<div class="function">
  <h3>.sidr()</h3>
  <div class="usage">
    <p><strong>Description:</strong> It creates a <em>sidr</em> menu and binds the toggle function to the <em>selector</em>.</p>
    <h4>jQuery(selector).sidr( [options] )</h4>
    <div class="parameter">
      <p><strong>options</strong> (Object)</p>
      <p>A map of options to pass to the method.</p>
      <div class="option">
        <p><strong>name</strong> (String) Default: 'sidr'</p>
        <p>Name for the <em>sidr</em>.</p>
      </div>
      <div class="option">
        <p><strong>side</strong> (String) Default: 'left'</p>
        <p>Left or right, the location for the sidebar.</p>
      </div>
      <div class="option">
        <p><strong>source</strong> (String|Function) Default: null</p>
        <p>A jQuery selector, an url or a callback function.</p>
      </div>
      <div class="option">
        <p><strong>renaming</strong> (Boolean) Default: true</p>
        <p>When filling the <em>sidr</em> with existing content, choose to rename or not the classes and ids.</p>
      </div>
      <div class="option">
        <p><strong>body</strong> (String) Default: 'body' <small>[ Version 1.1.0 an above ]</small></p>
        <p>For displacing the page the 'body' element is animated by default, you can select another element to animate with this option.</p>
      </div>
      <div class="option">
        <p><strong>displace</strong> (Boolean) Default: true <small>[ Version 1.2.0 an above ]</small></p>
        <p>Displace the body content or not.</p>
      </div>
      <div class="option">
        <p><strong>timing</strong> (String) Default: 'ease' <small>[ Version 2.1.0 an above ]</small></p>
        <p>Timing function for CSS transitions.</p>
      </div>
      <div class="option">
        <p><strong>method</strong> (String) Default: 'toggle' <small>[ Version 2.1.0 an above ]</small></p>
        <p>The action to execute when clicking the button. 'toggle', 'open' and 'close' are allowed.</p>
      </div>
      <div class="option">
        <p><strong>bind</strong> (String) Default: 'touchstart click' <small>[ Version 2.2.0 an above ]</small></p>
        <p>The event(s) to trigger the menu. Only 1 event will be triggered each 100ms, so only the first one will be triggered if there are 2 at the same time.</p>
      </div>
      <div class="option">
        <p><strong>onOpen</strong> (function) Default: function() {} <small>[ Version 1.2.0 an above ]</small></p>
        <p>Callback that will be executed when the menu starts opening.</p>
      </div>
      <div class="option">
        <p><strong>onOpenEnd</strong> (function) Default: function() {} <small>[ Version 2.1.0 an above ]</small></p>
        <p>Callback that will be executed when the menu ends opening.</p>
      </div>
      <div class="option">
        <p><strong>onClose</strong> (function) Default: function() {} <small>[ Version 1.2.0 an above ]</small></p>
        <p>Callback that will be executed when the menu starts closing.</p>
      </div>
      <div class="option">
        <p><strong>onCloseEnd</strong> (function) Default: function() {} <small>[ Version 2.1.0 an above ]</small></p>
        <p>Callback that will be executed when the menu ends closing.</p>
      </div>
    </div>
  </div>
</div>

<div class="function">
  <h3>jQuery.sidr()</h3>
  <div class="usage">
    <p><strong>Description:</strong> A generic <em>sidr</em> controller. Can be used to access the <em>sidr</em> methods: <em>open</em>, <em>close</em>, <em>toggle</em> or <em>status</em></p>
    <h4>jQuery.sidr( [method] [, name] [, complete] )</h4>
    <div class="parameter">
      <p><strong>method</strong> (String) Default: 'toggle'</p>
      <p>Choose between 'toggle', 'open', 'close' or 'status'. <small>[ Status is only available in version 2.1.0 an above ]</small></p>
    </div>
    <div class="parameter">
      <p><strong>name</strong> (String) Default: 'sidr'</p>
      <p>Name of the target <em>sidr</em>.</p>
    </div>
    <div class="parameter">
      <p><strong>complete</strong> (Function) Default: none</p>
      <p>A function to call once the animation is complete.</p>
    </div>
    <div class="parameter return">
      <p><strong>return</strong> null || Object <small>[ Version 2.2.0 an above ]</small></p>
      <p>It returns null when methods 'toggle', 'open' or 'close' are called, or an object when status is called:</p>
<pre>{
    moving: (boolean), // A boolean indicating if the menu is currently being moved
    opened: (string || false) // Name of the opened menu or false if all are closed
}</pre>
    </div>
  </div>
</div>
{{< /rawhtml >}}

## Themes

There are two themes (two stylesheets) included with the plugin, a dark one and a light one. You can use them, create a new one or override them with your own styles.

{{< rawhtml >}}
<div class="grid">
  <div>
    <h3><a data-proofer-ignore data-toggle="dark-reveal">Dark Theme</a></h3>
    <a data-proofer-ignore data-toggle="dark-reveal"><img src="images/dark.theme.thumb.png" alt="Dark Theme" /></a>
  </div>
  <div>
    <h3><a data-proofer-ignore data-toggle="light-reveal">Light Theme</a></h3>
    <a data-proofer-ignore data-toggle="light-reveal"><img src="images/light.theme.thumb.png" alt="Light Theme" /></a>
  </div>
</div>
{{< /rawhtml >}}

### Showcase

The following responsive sites are using Sidr in an original way to implement their menu:

{{< rawhtml >}}
<div style="display: grid;grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 2rem;">
  <div>
    <img src="images/showcase-fox.png" alt="Sidr Menu on FOX Broadcasting Company website">
    <div style="font-size: 1rem">
      <p style="margin: 0">FOX Broadcasting Company</p>
      <p><a href="https://www.fox.com" target="_blank" rel="noopener noreferrer">www.fox.com</a></p>
    </div>
  </div>
  <div>
    <img src="images/showcase-uscourts.png" alt="Sidr Menu on United States Courts website">
    <div style="font-size: 1rem">
      <p style="margin: 0">United States Courts</p>
      <p><a href="https://www.uscourts.gov" target="_blank" rel="noopener noreferrer">www.uscourts.gov</a></p>
    </div>
  </div>
  <div>
    <img src="images/showcase-sdsu.png" alt="Sidr Menu on San Diego State University website">
    <div style="font-size: 1rem">
      <p style="margin: 0">San Diego State University</p>
      <p><a href="https://www.sdsu.edu/" target="_blank" rel="noopener noreferrer">www.sdsu.edu</a></p>
    </div>
  </div>
</div>
{{< /rawhtml >}}

If you've created a website or an application using this plugin and you want to show it in this section, send me an email with the url to [hello@albertovarela.net](mailto:hello@albertovarela.net).

## Development

* Source hosted at [GitHub](https://github.com/artberri/sidr)
* If you have problems implenting this, ask about it in [StackOverflow](https://stackoverflow.com/search?q=sidr)
* Report issues and feature requests in [GitHub Issues](https://github.com/artberri/sidr/issues)
* Contributing: [CONTRIBUTING.md](https://github.com/artberri/sidr/blob/master/CONTRIBUTING.md)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

{{< rawhtml >}}
<div id="sidr">
  <!-- Your content -->
  <ul>
    <li><a href="#development">List 1</a></li>
    <li class="active"><a href="#development">List 2</a></li>
    <li><a href="#development">List 3</a></li>
  </ul>
</div>
{{< /rawhtml >}}
