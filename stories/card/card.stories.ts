import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CardComponent, CardModule} from '@eniblock/ui/card';

export default {
    title: 'Eniblock/Card',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            imports: [CardModule],
        }),
    ],
    parameters: {
        controls: {
            include: []
        }
    }
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    props: args,
    template: `<div style="padding:10px; background:lightgrey;"><eni-card><h1>Title</h1><p>Some content</p></eni-card></div>`
});

export const Default = Template.bind({});
Default.args = {} as Partial<CardComponent>;
