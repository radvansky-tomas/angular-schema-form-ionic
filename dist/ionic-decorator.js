angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/ionic/checkbox.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-checkbox schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div class=\"checkbox checkbox-input-hidden disable-pointer-events\"><input sf-field-model=\"\" type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title}}\"> <i class=\"checkbox-icon\"></i></div><div class=\"item-content disable-pointer-events {{form.labelHtmlClass}}\">{{form.title}}</div><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/default.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" ng-class=\"{\'has-input\': $$value$$}\">{{form.title}}</span><div ng-if=\"form.accessory\" layout=\"row\"><input sf-field-model=\"\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"> <span class=\"{{form.accessoryClass}}\">{{form.accessory}}</span></div><input ng-if=\"form.accessory == undefined\" sf-field-model=\"\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><div ng-show=\"showTitle()\" class=\"item item-divider\">{{ form.title }}</div><p class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></p></fieldset>");
$templateCache.put("decorators/ionic/radios.html","<div class=\"list schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"item item-radio\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"><div class=\"radio-content\"><div class=\"item-content disable-pointer-events {{form.labelHtmlClass}}\" ng-bind-html=\"item.name\"></div><i class=\"radio-icon disable-pointer-events icon ion-checkmark\"></i></div><p class=\"help-block\" sf-message=\"form.description\"></p></label></div>");
$templateCache.put("decorators/ionic/range.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input range range-positive schema-form-range {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</div><input sf-field-model=\"\" sf-changed=\"form\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" name=\"{{form.key.slice(-1)[0]}}\" type=\"range\"> <input style=\"max-width: 50px; text-align: center; background-position: bottom\" type=\"text\" maxlength=\"3\" ng-disabled=\"form.readonly\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\"><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/section.html","<div layout=\"{{form.fieldHtmlClass}}\" self=\"{{form.labelHtmlClass}}\" class=\"schema-form-section {{::form.htmlClass + \' \' + idClass}}\" sf-key-controller=\"\" sf-parent-key=\"[{{form.key.join(\'][\')}}]\" sf-index=\"{{$index}}\"></div>");
$templateCache.put("decorators/ionic/select.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input item-select schema-form-select {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</div><select sf-field-model=\"\" sf-changed=\"form\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\"></select><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/submit.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\"><button class=\"button {{form.style}} {{form.fieldHtmlClass}}\" type=\"{{form.type}}\" ng-disabled=\"form.readonly\" aria-label=\"{{form.title}}\">{{form.title}}</button></div>");
$templateCache.put("decorators/ionic/textarea.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</span> <textarea sf-field-model=\"\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\">\n  </textarea><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/toggle.html","<div class=\"item item-toggle schema-form-toggle {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div class=\"{{form.labelHtmlClass}}\">{{form.title}}</div><label for=\"{{form.key.slice(-1)[0]}}\" class=\"toggle\"><input sf-field-model=\"\" type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title}}\"><div class=\"track\"><div class=\"handle\"></div></div></label><p class=\"help-block\" sf-message=\"form.description\"></p></div>");}]);
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