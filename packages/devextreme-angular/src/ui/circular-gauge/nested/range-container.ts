/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input,
    ContentChildren,
    forwardRef,
    QueryList
} from '@angular/core';




import { ChartsColor, Palette, PaletteExtensionMode } from 'devextreme/common/charts';
import { CircularGaugeElementOrientation } from 'devextreme/viz/circular_gauge';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiCircularGaugeRangeComponent } from './range-dxi';


@Component({
    selector: 'dxo-circular-gauge-range-container',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoCircularGaugeRangeContainerComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get backgroundColor(): ChartsColor | string {
        return this._getOption('backgroundColor');
    }
    set backgroundColor(value: ChartsColor | string) {
        this._setOption('backgroundColor', value);
    }

    @Input()
    get offset(): number {
        return this._getOption('offset');
    }
    set offset(value: number) {
        this._setOption('offset', value);
    }

    @Input()
    get orientation(): CircularGaugeElementOrientation {
        return this._getOption('orientation');
    }
    set orientation(value: CircularGaugeElementOrientation) {
        this._setOption('orientation', value);
    }

    @Input()
    get palette(): Palette | string | Array<string> {
        return this._getOption('palette');
    }
    set palette(value: Palette | string | Array<string>) {
        this._setOption('palette', value);
    }

    @Input()
    get paletteExtensionMode(): PaletteExtensionMode {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value: PaletteExtensionMode) {
        this._setOption('paletteExtensionMode', value);
    }

    @Input()
    get ranges(): Array<any | { color?: ChartsColor | string, endValue?: number, startValue?: number }> {
        return this._getOption('ranges');
    }
    set ranges(value: Array<any | { color?: ChartsColor | string, endValue?: number, startValue?: number }>) {
        this._setOption('ranges', value);
    }

    @Input()
    get width(): number {
        return this._getOption('width');
    }
    set width(value: number) {
        this._setOption('width', value);
    }


    protected get _optionPath() {
        return 'rangeContainer';
    }


    @ContentChildren(forwardRef(() => DxiCircularGaugeRangeComponent))
    get rangesChildren(): QueryList<DxiCircularGaugeRangeComponent> {
        return this._getOption('ranges');
    }
    set rangesChildren(value) {
        this.setChildren('ranges', value);
    }

    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }


    ngOnInit() {
        this._addRecreatedComponent();
    }

    ngOnDestroy() {
        this._addRemovedOption(this._getOptionPath());
    }


}

@NgModule({
  declarations: [
    DxoCircularGaugeRangeContainerComponent
  ],
  exports: [
    DxoCircularGaugeRangeContainerComponent
  ],
})
export class DxoCircularGaugeRangeContainerModule { }
