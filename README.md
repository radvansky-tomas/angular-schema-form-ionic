Angular Ionic Decorator (WIP)
=============================

Ionic 1 frontend decorator for the [Angular Schema Form (ASF)](https://github.com/json-schema-form/angular-schema-form) project.

This project is based heavily off the [Bootstrap](https://github.com/json-schema-form/angular-schema-form-bootstrap) and [Material](https://github.com/json-schema-form/angular-schema-form-material) decorator. More information on how these decorators work can be found in the ASF documentation https://github.com/json-schema-form/angular-schema-form/blob/development/docs/extending.md

## Work In Progress

This project is still a work in progress and has not reached the stable `v1.0.0`. It does not yet have full support of all the default ASF form types and options.

## Additional form types

The following list documents additional form types that are added by this project and not in the default ASF list.

 - `toggle` - behaves the same as `checkbox` and also represented by a `boolean`

## Installation

You can install through npm

```
npm install angular-schema-form-ionic
```

or through bower

```
bower install angular-schema-form-ionic
```

then load the `ionic-decorator.min.js` file in your html. Make sure this is the only ASF decorator (i.e remember to remove the default `bootstrap-decorator.min.js`).

## Usage

If you have included the file properly, the decorator should automatically work.

### Range component
{
 "key": "hygiene",
 "type": "range",
 "min": '0',
 "max": '2',
 "htmlClass": "range range-positive",
 "titleMap": [
  {value: "1", name: "first"},
  {value: "3", name: "middle"},
  {value: "5", name: "last"}
 ]
}

### GridSelect component
"location": {
          "title": "Selected Locations",
          type: "array",
          items: {
            title: "Name",
            type: "string"
          }
        }
        
{
        "key": "location",
        "type": "gridSelect",
        "template": "<p>{{item.Name}}</p>",
        "layoutHtmlClass":"",
        "selfHtmlClass":"size-1of4 md-half sm-full",
        "titleMap": [
          {
            value: {
              locationId: 123,
              locationLevel: "ward1"
            },
            Name: "Location123"
          },
          {
            value: {
              locationId: 321,
              locationLevel: "ward1"
            },
            Name: "Location321"
          },
          {
            value: {
              locationId: 555,
              locationLevel: "ward2"
            },
            Name: "Location555"
          }
        ]
      }
      
## Known issues

 - Ionic by default styles `fieldset` with a border and padding, which looks weird when used to wrap Ionic `item`s. We would suggest adding your own css class to all `fieldset` types to fix the styling.

## Contributing

We will be much grateful if you help us making this project to grow up. Feel free to contribute by forking, opening issues, pull requests etc.
