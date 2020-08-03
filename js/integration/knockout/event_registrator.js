import $ from '../../core/renderer';
import eventsEngine from '../../events/core/events_engine';
// eslint-disable-next-line no-restricted-imports
import ko from 'knockout';
import { isPlainObject } from '../../core/utils/type';
import eventRegistratorCallbacks from '../../events/core/event_registrator_callbacks';
import * as eventUtils from '../../events/utils';

eventRegistratorCallbacks.add(function(name) {
    const koBindingEventName = eventUtils.addNamespace(name, name + 'Binding');

    ko.bindingHandlers[name] = {
        update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
            const $element = $(element);
            const unwrappedValue = ko.utils.unwrapObservable(valueAccessor());
            const eventSource = unwrappedValue.execute ? unwrappedValue.execute : unwrappedValue;

            eventsEngine.off($element, koBindingEventName);
            eventsEngine.on($element, koBindingEventName, isPlainObject(unwrappedValue) ? unwrappedValue : {}, function(e) {
                eventSource.call(viewModel, viewModel, e);
            });
        }
    };
});
