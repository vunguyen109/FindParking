<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<style lang="scss">

#app {
	font-family: 'ABeeZee';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale; 	
	color: #2c3e50;
}
.mapbox-directions-route-summary + .mapbox-directions-instructions {
    margin: 3px;
}
.mapbox-directions-component-keyline {
    display: none;
}
.mapbox-directions-profile {
    display: block;
}
.mapboxgl-canvas {
	position: unset !important;
	height: 80vh !important;
}
.marker {
	top: -25px !important;
  width: 40px;
    height: 54px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding-top: 10px;
	color: #1A6300;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
	margin: 0;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>
