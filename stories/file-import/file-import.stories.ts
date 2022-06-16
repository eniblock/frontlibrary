import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {FileImportComponent, FileImportModule} from '@eniblock/ui/file-import';

export default {
    title: 'Eniblock/FileImport',
    component: FileImportComponent,
    decorators: [
        moduleMetadata({
            imports: [FileImportModule],
        }),
    ],
    parameters: {
        controls: {
            include: []
        }
    }
} as Meta;

const Template: Story<FileImportComponent> = (args: FileImportComponent) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {} as Partial<FileImportComponent>;
