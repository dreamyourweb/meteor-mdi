# meteor-mdi

Meteor package for Material Design Icons font from Templarian (http://materialdesignicons.com/).

## Installation

```bash
meteor add cedla:mdi
```

## Usage

First, add the following line to the top of your main scss file:

```scss
@import '.meteor/local/build/programs/server/assets/packages/cedla_mdi/materialdesignicons';
```

Then, use the syntax below in your HTML files:
```html
<i class="mdi mdi-bell"></i>  <!-- bell -->
```

Note: Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run `meteor reset`. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info.

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