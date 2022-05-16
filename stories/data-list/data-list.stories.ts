import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DataListComponent, DataListModule} from '@eniblock/ui/data-list';

export default {
    title: 'Eniblock/DataList',
    component: DataListComponent,
    decorators: [
        moduleMetadata({
            imports: [DataListModule],
        }),
    ],
    parameters: {
        controls: {
            include: []
        }
    }
} as Meta;

const Template: Story<DataListComponent> = (args: DataListComponent) => ({
    props: args,
    template: `
    <eni-data-list>
        <eni-data-block>
            <div eni-data>
                <span eni-data-key>TEST</span>
                <span eni-data-value>value</span>
            </div>
            <div eni-data>
                <span eni-data-key>TEST 2</span>
                <span eni-data-value>value 2</span>
            </div>
        </eni-data-block>
        <eni-data-block>
            <div eni-data>
                <span eni-data-key>TEST 3</span>
                <span eni-data-value>value 3</span>
            </div>
        </eni-data-block>
    </eni-data-list>`
});

export const Default = Template.bind({});
Default.args = {} as Partial<DataListComponent>;
