import { Component, ViewChild,  } from '@angular/core';
import * as Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
    @ViewChild('ckEditor') CKEditorComponent: CKEditorComponent;
    title = 'customEditor';
    public Editor = Editor;

    public model = {
        editorData: '<p>Hello, world!</p>'
    };

    updateSource() {
        console.log("UPDATE SOURCE");
        // @ts-ignore
        this.CKEditorComponent.editorInstance.plugins.get('SourceEditing').updateEditorData();
    }
}
