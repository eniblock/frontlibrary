import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {NavigationComponent, NavigationModule} from '@eniblock/ui/navigation';

export default {
    title: 'Eniblock/Navigation',
    component: NavigationComponent,
    decorators: [
        moduleMetadata({
            imports: [NavigationModule, TranslateModule.forRoot(), RouterTestingModule]
        }),
    ]
} as Meta;


const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {
    navigation: [{
        id: 'group',
        title: 'Group',
        type: 'group',
        translate: 'group',
        children: [
            {
                id: 'item1',
                title: 'item1',
                translate: 'item 1',
                type: 'item',
                icon: 'home',
                url: 'item'
            },
            {
                id: 'collapse',
                title: 'Collapse',
                translate: 'Collapse',
                type: 'collapsable',
                icon: 'menu',
                children: [
                    {
                        id: 'item2',
                        title: 'item2',
                        translate: 'item 2',
                        type: 'item',
                        icon: 'people',
                        url: 'item'
                    }
                ]
            }
        ]
    }]
} as Partial<NavigationComponent>;
