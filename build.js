import StyleDictionary from "style-dictionary";
import Config from './config.json' assert { type: "json" };

const SD = StyleDictionary.extend(Config);

SD.registerFilter({
    name: 'isColor',
    matcher: function (token) {
        return token.attributes.category === 'color';
    }
});

SD.registerFilter({
    name: 'isFont',
    matcher: function (token) {
        return token.attributes.type === 'font';
    }
});

SD.buildAllPlatforms();
