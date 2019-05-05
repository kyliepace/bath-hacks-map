[react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl)

[react-mapbox-examples](https://github.com/mapbox/mapbox-react-examples)


map with Bath greenspaces loaded over mapbox tileset

click on a park and see 10 nearest crimes
(note this is no different user experience than if behind the scenes I had just pre-built separate crime tilesets and toggled them on click events)

move mouse and see 10 nearest crimes


to do:

divide map into ~16 squares and generate a crime index per square based on crime reports, pass to client on load and use that data to change greenparks' fill color accordingly.