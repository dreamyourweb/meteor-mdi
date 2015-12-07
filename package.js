Package.describe({
    name: 'cedla:mdi',
    version: '1.2.67',
    summary: 'Material Design Icons font from Templarian (http://materialdesignicons.com/)',
    git: 'https://github.com/cedla/meteor-mdi.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.use("fourseven:scss@3.3.3");
    api.imply("fourseven:scss");

    api.addFiles([
        'MaterialDesign-WebFont/scss/_core.scss',
        'MaterialDesign-WebFont/scss/_extras.scss',
        'MaterialDesign-WebFont/scss/_icons.scss',
        'MaterialDesign-WebFont/scss/_path.scss',
        'MaterialDesign-WebFont/scss/_variables.scss',
        'materialdesignicons.scss'
    ], 'client');

    api.addAssets([
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.eot',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.svg',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.ttf',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.woff',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.woff2'
    ], 'client');

});
