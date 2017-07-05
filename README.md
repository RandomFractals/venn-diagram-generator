# venn-diagram-generator

we do it for #dataSci tech lulz :)

# future home of Venn Diagrams Designer

https://venn-diagrams.herokuapp.com/

# basic Venn Diagram Designer UX Sketch Idea

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramsMemeGeneratorSketchIdea.jpg)

# Synopsis

The idea for this Venn diagram pics generator project came from sourcing a number of ineteresting posts from the data science community: new data scientist position posted, articles shared on medium, kdnuggets or elsewhere, and heavy use and abuse of Venn Diagrams pics for that purpose.

As a data viz specialist and practitioner, I've had it! A few other creative types decided if we can't beat them, we should join them, and create one stop shop app for you to gen those Venn Diagrams about what you fancy, and what unicorn intersection you are trying to find FTW.

Thus, the Venn Diagram generator idea was born: 

https://twitter.com/dataandme/status/848850426095120384

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramsInTheWild.png)

# Ultimate Project Goal

Ideally, we'd like to create an app for you to gen Venn Diagrams like this:

https://twitter.com/BourseetTrading/status/848192200789942272

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/epicDataSciVennDiagram.jpg)

or how to make your pancakes:

https://twitter.com/MrBenWard/status/836489614676353024

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/pancakesVennDiagram.jpg)

## How we got here:

Best bg story on how we ended up here is on kdnuggets:

http://www.kdnuggets.com/2016/10/battle-data-science-venn-diagrams.html

Also get to know 42 V's of data science. Fun read:

http://www.kdnuggets.com/2017/04/42-vs-big-data-data-science.html

# Side Project Goal

Demonstrate Angular 4, d3 v4, and custom Material UI CSS mini-app setup best practices from start to finish with micro commits in a few days or so.

# App Dev Status

## day 1: Angular 4 App Scaffolding  + basic Topic list UI prototype:

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramTopicList3.png)

Also, the boilerplate angular4 jasmine tests are still passing. It's a good sign. 
I'll double down on that part for the topic list view model type in day 2 of dev.
One must have tests! for good karma and all :)

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramsTestKarma2.png)

## day 2 of dev: Inline Topic editor UI prototype:

- &#10003; add delete topic option
- &#10003; add move topic up/down options for reordering diagram topics
- &#10003; add inline topic name editor
- &#10003; add diagram view model topic list updates tests

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramTopicListEditor2.png)

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramTopicListTests1.png)

## day 3 of dev: Custom Material UI app CSS setup

- &#10003; add custom responsive material UI CSS setup for the app title bar, view content/cards, footer, etc.
- &#10003; add inline diagram name/title editor functionality

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/vennDiagramTopicListPrettyV.PNG)

## day 4 of dev (6/27/2017):

- &#10003; split monolithic Angular 4 prototype app component into separate app header/footer, topic list, and actual venn diagram components
- &#10003; set up a half ass decent 2 cols layot for topic list and diagram view comp.

## day 5 of dev
- &#10003; deploy to https://venn-diagrams.herokuapp.com for topic list test on mobile and UI layout preview
- &#10003; switch to this 2 cols layout for mobile: https://codepen.io/mor10/pen/QvmLpd
- TODO: stub out the actual Venn diagram SVG view component to render diagram topics. 
  Use this code block: http://bl.ocks.org/bycoffe/3404776

Latest with Augury:

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/VennD2LayoutWithAugury.png)

Blank app canvas for that Venn D SVG render:)

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/VennDBlankCanvas.png)

Still lots todo :)

![alt tag](https://github.com/RandomFractals/venn-diagram-generator/blob/master/screens/VennDiagramsGenAppMVPTodo.jpg)

# App Build/Run Instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 

You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. 

Build artifacts will be stored in the `dist/` directory. 

Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` 

or see Angular CLI README
(https://github.com/angular/angular-cli/blob/master/README.md).

## Yarn Note

Run `ng set --global packageManager=yarn` to use Yarn package manager

## References

How to deploy Angular 4 web app with Express to heroku:

https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca

Decent no frills html5/css3 2 cols layout setup:

https://www.smashingmagazine.com/2017/06/building-production-ready-css-grid-layout/

Placing SVG elements around a circle d3 code block:

http://bl.ocks.org/bycoffe/3404776


