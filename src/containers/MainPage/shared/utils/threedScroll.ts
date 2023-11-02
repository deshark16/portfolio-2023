type ThreedScrollProps = {
  frameElements: string;
};

export class ThreedScroll {
  private _zSpacing: number;
  private _lastPosition: number;
  private _framesArray: HTMLCollectionOf<Element>;
  private _frames: Element[];
  private _zVals: number[];

  constructor({ frameElements }: ThreedScrollProps) {
    this._zSpacing = -1000;
    this._lastPosition = this._zSpacing / 5;
    this._framesArray = document.getElementsByClassName(
      `${frameElements}`
    );
    this._frames = Array.from(this._framesArray);
    this._zVals = [];
  }

  public _handleScroll() {
    let top = document.documentElement.scrollTop;
    let delta = this._lastPosition - top;
    this._lastPosition = top;

    this._frames.forEach((_frame, index) => {
      this._zVals.push(index * this._zSpacing + this._zSpacing);
      this._zVals[index] += delta * -5.5;
      let frameEl = this._frames[index];
      let transform = `translateZ(${this._zVals[index]}px)`;
      let opacity =
        this._zVals[index] < Math.abs(this._zSpacing) / 1.8 ? 1 : 0;
      frameEl.setAttribute(
        "style",
        `transform: ${transform}; opacity: ${opacity}`
      );
    });

  }
}
