import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {LayoutComponent, LayoutModule} from '@eniblock/ui/layout';

export default {
    title: 'Eniblock/Layout',
    component: LayoutComponent,
    decorators: [
        moduleMetadata({
            imports: [LayoutModule],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        controls: {
            include: []
        }
    }
} as Meta;

const Template: Story<LayoutComponent> = (args: LayoutComponent) => ({
    props: args,
    template: '<eni-layout><div sidebar>sidebar</div><div>content</div></eni-layout>'
});

export const Default = Template.bind({});
Default.args = {} as Partial<LayoutComponent>;
