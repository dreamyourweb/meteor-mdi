Package.describe({
    name: 'cedla:mdi',
    version: '1.0.0',
    summary: 'Meteor package for Material Design icons from Templarian (http://materialdesignicons.com/)',
    git: 'https://github.com/cedla/mdi.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'MaterialDesign-Webfont/css/materialdesignicons.css',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.eot',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.svg',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.ttf',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff',
        'MaterialDesign-Webfont/fonts/materialdesignicons-webfont.woff2'
    ], 'client');
});
