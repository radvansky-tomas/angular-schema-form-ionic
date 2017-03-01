angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
    function (decoratorsProvider, sfBuilderProvider, sfPathProvider) {
        var base = 'decorators/ionic/';

        var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
        var ngModelOptions = sfBuilderProvider.builders.ngModelOptions;
        var ngModel = sfBuilderProvider.builders.ngModel;
        var sfField = sfBuilderProvider.builders.sfField;
        var condition = sfBuilderProvider.builders.condition;

        var selectPlaceholder = function (args) {
            if (args.form.placeholder) {
                var selectBox = args.fieldFrag.querySelector('select');
                var option = document.createElement('option');
                option.setAttribute('value', '');

                /* We only want the placeholder to show when we do not have a value on the model.
                 * We make ngModel builder replace all so we can use $$value$$.
                 */
                option.setAttribute('sf-field-model', 'replaceAll');

                /* https://github.com/angular/angular.js/issues/12190#issuecomment-115277040
                 * angular > 1.4 does a emptyOption.attr('selected', true)
                 * which does not like the ng-if comment.
                 */
                if (angular.version.major === 1 && angular.version.minor < 4) {
                    option.setAttribute('ng-if', '$$value$$ === undefined');
                } else {
                    option.setAttribute('ng-show', '$$value$$ === undefined');
                }

                option.textContent = args.form.placeholder;

                selectBox.appendChild(option);
            }
        };

        var defaults = [sfField, ngModel, ngModelOptions, condition];
        decoratorsProvider.defineDecorator('ionicDecorator', {
            'textarea': {template: base + 'textarea.html', builder: defaults},
            'fieldset': {template: base + 'fieldset.html', builder: [sfField, simpleTransclusion, condition]},
            'checkbox': {template: base + 'checkbox.html', builder: defaults},
            'select': {
                template: base + 'select.html',
                builder: [selectPlaceholder, sfField, ngModel, ngModelOptions, condition]
            },
            'submit': {template: base + 'submit.html', builder: defaults},
            'button': {template: base + 'submit.html', builder: defaults},
            'radios': {template: base + 'radios.html', builder: defaults},
            'toggle': {template: base + 'toggle.html', builder: defaults},
            'default': {template: base + 'default.html', builder: defaults},
            'section': {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
            'range': {template: base + 'range.html', builder: defaults}
        }, []);

    }]);

angular.module('schemaForm').directive('stringToNumber', function() {
    return {
        scope: false,
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            var once = scope.$watch(attrs.stringToNumber, function(schema) {
                if (!schema) {
                    return;
                }

                var isNumber  = schema.type.indexOf('number') !== -1;
                var isInteger = schema.type.indexOf('integer') !== -1;
                var numberRE  = /^[0-9]*$/;
                // Use index of since type can be either an array with two values or a string.
                if (isNumber || isInteger) {
                    // The timing here seems to work. i.e. we get in before schema-validate
                    ngModel.$parsers.push(function(viewValue) {
                        var value;
                        if (isNumber) {
                            value = parseFloat(viewValue);
                        } else if (numberRE.test(viewValue)) {
                            // We test the value to check that it's a valid integer, otherwise we can easily
                            // get float -> integer parsing behind the scenes.
                            value = parseInt(viewValue, 10);
                        }
                        console.log('parser', numberRE.test(viewValue), viewValue, value)
                        if (value === undefined || isNaN(value)) {
                            //Let the validation fail. @FIXME: it fails with "required" for some reason.
                            return viewValue;
                        }
                        return value;
                    });
                }

                once();
            });
        }
    };
});