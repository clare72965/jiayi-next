const withPlugins = require('next-compose-plugins');
const path = require('path');
const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withPlugins(
    [
        [withImages, {}],
        [withVideos, {}],
    ],
    {
        // Target must be serverless
        target: 'serverless',
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        }
    }
);




