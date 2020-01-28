/**
 * Abstract class Animal.
 *
 * @class Animal
 */
class Animal {

    /**
     * Creates an instance of Animal
     *
     * @param {String} sound The animal sound, to be interspersed when the {@link speak} method is called.
     * @memberof Animal
     */
    constructor(sound) {
        if (this.constructor === Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.sound = sound;
    }

    /**
     * Make the {@link Animal} say something.
     *
     * @param {String} say
     * @memberof Animal
     */
    speak(say) {
        console.log(
            say.split(new RegExp('\\b[\\s]+\\b')).join(` ${this.sound} `).concat(` ${this.sound}`)
        );
    }
}

module.exports = Animal;