This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## This is a project for EasyKnock internship
Note: 
- I use OpenStreetMap through [react-leaflet](https://www.npmjs.com/package/react-leaflet) to load the location because the GoogleMaps API had a watermark over their maps.
- [rc-slider](https://www.npmjs.com/package/rc-slider) npm package to implement slider(WIP).
- [react-geocode](https://www.npmjs.com/package/react-geocode) to look up Longitude and Latitude.
- [react-number-format](https://www.npmjs.com/package/react-number-format) in order to format form inputs.

## Issues/WIP 
- form error handling for value form(WIP)
- map does not rerender when store changes, might be an issue with the react-leaflet
- need to implement and hook up the forward and back buttons
- need to implement error/completed screen

## Refactor
- styling needs work in order to line up elements
- might need to refactor store if more than one address is required to be saved
- powered by Zillow Icon?
