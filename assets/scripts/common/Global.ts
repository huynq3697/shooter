var Global = {
    randomMinMax: function (min, max, isInt) {
        if (isInt) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return Math.random() * (max - min) + min;
    },
}
cc.Global = Global;
