/**
 * Auxiliary object that keeps track of the number of hits in the span of a defined duration.
 *
 * @class Ticker
 */
class Ticker {

    /**
     * Creates an instance of Ticker.
     * @param {Number} triggeringHits The amount of hits before the defined function triggers.
     * @param {Number} resetAfterMs The amount of time it must pass before the hit-counter is reset.
     * @param {Function} fn The triggering function, to be executed once after the defined amount of hits is reached.
     * @memberof Ticker
     */
    constructor(triggeringHits, resetAfterMs, fn) {
        this.hits = 0;
        this.triggeringHits = triggeringHits;
        this.resetAfterMs = resetAfterMs;
        this.fn = fn;
    }

    /**
     * Records a hit.
     *
     * @memberof Ticker
     */
    hit() {
        console.debug(`Hit #${this.hits+1}`);
        if(!this.hits){
            setTimeout(() => {
                this.hits = 0;
            }, this.resetAfterMs)
        }

        this.hits+=1;

        if(this.hits === this.triggeringHits){
            console.debug(`Allowable hits reached. Triggering function now...`);
            this.fn();
        }
    }
}

module.exports = Ticker;