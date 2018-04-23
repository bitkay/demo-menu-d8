# demo-menu-d8
An off-canvas multi-level menu demonstration for Drupal 8

## Usage
Copy demo_menu to Drupal 8 directory at /modules/ and install using preferred method.

## Features
### Installation
* Creates demo menu and prepopulates with 30 links
* Places demo menu inside 'page_top' region (must have this in your theme)

### Non-JS fallback
* Full functionality on screens over 1024px wide
* On screens under 1024px wide, user is able to open the first level of the mobile menu and navigate to a page

### Accessibility
* Proper tabbing on screens under 1024px wide
* Proper focus state for menu open/close link

### Javascript
* Click anywhere outside the menu on screens under 1024px wide to close the menu
* Closing the menu also closes any open second-level navigation submenu
* "Back" link on second-level navigation for off-canvas navigation

### CSS
* Mobile-first responsive design
* Proper focus, hover, and active states to never lose context
* Scrollable menu on small screens while preventing full-page scrolling
* CSS-only "hamburger" icon with animation to close "X" icon
* Cross-browser compatible lightweight SVGs
