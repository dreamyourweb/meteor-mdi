# meteor-mdi

Meteor package for Material Design Icons font from Templarian (http://materialdesignicons.com/).

## Installation

```bash
meteor add cedla:mdi
```

## Usage

First, add the following line to the top of your main scss file:

```scss
@import '{cedla:mdi}/materialdesignicons.scss';
```

Then, use the syntax below in your HTML files:
```html
<i class="mdi mdi-bell"></i>  <!-- bell -->
```

## Learn More

http://materialdesignicons.com/

## Licence

See: http://github.com/Templarian/MaterialDesign/blob/master/license.txt

## Changelog

### 1.2.66

- Serving stylesheets from SCSS files to fix font paths (see #1)
- _NB: Webfont still at v1.2.65_

### 1.2.65

- Webfont updated to v1.2.65
- Changing version naming to match the webfont versions

### 1.0.0

- Initial release