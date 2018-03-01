import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `

    <p style="color:purple; font-size:120%; font-family:" align="center"><b>
    Team T17 Haga Laziza welcomes you to our project. The team consists of  <br/>
    24 students in MET CS major taking Software Engineering course in 6th <br/>
    semester. The course is mainly about self-learning new techniques. <br/>
    So we started the road by getting introduced to GitHub. This is to help us  <br/>
    integrate our work and work together efficiently through assigned tasks.<br/>
    After that we had a hard time learning MEAN stack to implemenet to you this project. <br/>
    Which is a full stack environment. Moreover, we were introduced to SLACK<br/>
    to help us communicate together not only with team members but with<br/>
    our TAs and our doctor as well to help us and for announcements too.<br/>
    We hope you like the website and find it useful. <br/>
    Have nice time shopping ;) </b></p>

    <div class="tp-wrapper">
      <div class="tp-box" (click)="toggleFlip()" [@flipState]="flip">
        <div class="tp-box__side tp-box__front">
            <img src="https://www.w3schools.com/images/w3schools_green.jpg" style="margin:auto; width:200px;height: 200px;display:block" />
        </div>
        <div class="tp-box__side tp-box__back">Hi
        </div>

      </div>
    </div>
    <div class="tp-wrapper1">
        <div class="tp-box1" (click)="toggleFlip1()" [@flipState]="flip1">
            <div class="tp-box__side1 tp-box__front1">
                <img src="https://www.w3schools.com/images/w3schools_green.jpg" style="margin:auto; width:200px;height: 200px;display:block" />
            </div>
            <div class="tp-box__side1 tp-box__back1">Bye
            </div>

        </div>
    </div>
  `,
    styles: [
        `
    .tp-wrapper {
      perspective: 800px;
    }

    .tp-box {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 3rem auto;
      transform-style: preserve-3d;
      transition: transform 1s;
    }
    .tp-box__side {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      color: #fff;
      text-align: center;
      line-height: 100px;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }
    .tp-box__front {
      background: #f30d36;
    }
    .tp-box__back {
      background: #23262d;
      transform: rotateY(179.9deg);
    }


    .tp-wrapper1 {
        perspective: 800px;
    }

    .tp-box1 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side1 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 100px;
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front1 {
        background: #f30d36;
    }
    .tp-box__back1 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    `
    ],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179.9deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})
export class AboutComponent {

    flip: string = 'inactive';
    flip1: string = 'inactive';
    constructor() {}

    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip1() {
        this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
    }

}
