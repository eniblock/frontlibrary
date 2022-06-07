import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BackTitleComponent, BackTitleModule} from '@eniblock/ui/back-title';

export default {
    title: 'Eniblock/BackTitle',
    component: BackTitleComponent,
    decorators: [
        moduleMetadata({
            imports: [BackTitleModule, RouterTestingModule],
        }),
    ],
    parameters: {
        controls: {
            include: []
        }
    }
} as Meta;

const Template: Story<BackTitleComponent> = (args: BackTitleComponent) => ({
    props: args,
    template: `<eni-back-title><h1>Title</h1></eni-back-title>`
});

export const Default = Template.bind({});
Default.args = {} as Partial<BackTitleComponent>;
