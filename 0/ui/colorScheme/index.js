// © 2021 Gavin Morrow
// EasyJS UI

const lightColors = {
	bg: "#ffffff",
	navBg: "#fefffe",
	cardBg: "#efeeef",
	buttonBg: "#e0e1e0",
	divideBg: "#2c2c2c",

	text: "#131012",
	subText: "#333032",
}
const darkColors = {
	bg: "#111111",
	navBg: "#181818",
	cardBg: "#303130",
	buttonBg: "#383938",
	divideBg: "#d3d3d3",

	text: "#ecefed",
	subText: "#cccfcd",
}

const exports = {
	set: light => localStorage.colorScheme = light ? "1" : "",
	reset: () => localStorage.colorScheme = matchMedia("prefers-color-scheme: light") ? "1" : "",
	setColors: (light = lightColors, dark = darkColors) => {
		const colors = ["bg", "navBg", "cardBg", "buttonBg", "divideBg", "text", "subText"];
		const setVar = (name, value) => document.documentElement.style.setProperty(`--easyjs-${name}`, value);
		for (const color of colors) {
			lightColors[color] = light[color] || lightColors[color];
			darkColors[color] = light[color] || darkColors[color];

			switch (localStorage.colorScheme) {
				case "1":
					setVar(color, lightColors[color]);
					break;
				case "":
					setVar(color, darkColors[color]);
					break;
				default:
					throw new Error(`EasyJS UI Color Scheme colorScheme property is invalid. \n\nValue: "${localStorage.colorScheme}"`);
			}
		}
		
		return exports.colors;
	},
	get colors () {
		return {
			light: lightColors,
			dark: darkColors,
		};
	},
};

exports.reset();

export default exports;