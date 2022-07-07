import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: "app-progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})

export class ProgessBarComponent implements OnInit {

  @Input() set progress(value: number) {
    //validation for value
      if (typeof value !== "number") {
        const progress = Number(value);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    this._progress = value;
  };
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato'

  constructor() {
   }

  ngOnInit() {
    // console.log('OnInit', {
    //   progress: this.progress,
    //   progressColor: this.progressColor,
    //   backgroundColor: this.backgroundColor
    // })
  }

  ngOnChanges (changes: SimpleChanges) {
    // console.log('changes', {
    //   progress: this.progress,
    //   progressColor: this.progressColor,
    //   backgroundColor: this.backgroundColor
    // })
  }
}
