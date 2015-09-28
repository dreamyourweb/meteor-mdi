Package.describe({
    name: 'cedla:mdi',
    version: '1.2.65.1',
    summary: 'Material Design Icons font from Templarian (http://materialdesignicons.com/)',
    git: 'https://github.com/cedla/meteor-mdi.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');

    api.use("fourseven:scss", ["server"]);
    api.imply("fourseven:scss");

    api.addAssets([
        'MaterialDesign-Webfont/scss/_core.scss',
        'MaterialDesign-Webfont/scss/_extras.scss',
        'MaterialDesign-Webfont/scss/_icons.scss',
        'MaterialDesign-Webfont/scss/_path.scss',
        'MaterialDesign-Webfont/scss/_variables.scss',
        'materialdesignicons.scss'
    ], 'server');

    api.addAssets([
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.eot',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.svg',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.ttf',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff2'
    ], 'client');

});
