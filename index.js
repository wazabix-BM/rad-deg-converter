/**
 * @function
 * @name Conversion
 * @constructs
 * @param {string} angle
 * @param {function} callback
 */

function Conversion (angle, callback) {
    this.angle = angle;

    let type;

    if (typeof this.angle === 'function')
        throw new Error ('Missed parameter [angle]');

    if (typeof this.angle !== 'string')
        throw new Error ('Invalid parameter type [angle]');

    if (!this.angle.includes ('deg') && !this.angle.includes ('rad'))
        throw new Error ('[angle] is undefined');

    if (this.angle.includes ('deg'))
        type = 'deg';

    if (this.angle.includes ('rad'))
        type = 'rad';

    if (isNaN (parseInt (this.angle.replace ('deg', ''))) || isNaN (parseInt (this.angle.replace ('rad', ''))))
        throw new Error ('[angle] doesn\'t contain an angle');

    const functions = {};

    functions.this = {
        /**
         * @function
         * @name toDeg
         * @return [angle] to degrees
         */

        toDeg: () => {
            if (type === 'rad') {
                const calcul = (360 * parseInt (this.angle.replace ('rad', ''))) / (Math.PI * 2);
                
                return calcul;

            } else
                throw new Error ('[angle] is already in degrees');
        },
        /**
         * @function
         * @name toRad
         * @return [angle] to radians
         */
        
        toRad: () => {
            if(type === 'deg') {
                const calcul = ((Math.PI * 2) * parseInt (this.angle.replace ('deg', ''))) / 360;

                return calcul;

            } else
                throw new Error ('[angle] is already in radians');
        }
    }

    return callback (functions);
}

module.exports.Conversion = Conversion;