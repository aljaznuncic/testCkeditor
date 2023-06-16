# CKEDITOR SOURCE UPDATE DEMO

## Run the application

### Prerequisites

Use node version 18

### Steps

#### If you want to rebuild custom ckeditor

Go to folder ckeditor5 (testCkeditor/ckeditor5)
```console
cd ckeditor5
```

Install dependencies
```console
npm install
```

Build ckeditor
```console
npm run build
```
#### Run app

Inside root of project (testCkeditor)

Install dependencies
```console
npm install
```

Start angular app
```console
npm run start
```

## Extra info

ckeditor5 is used inside home component [src/app/components/home](src/app/components/home)

If I don't use `// @ts-ignore` above `this.CKEditorComponent.editorInstance.plugins.get('SourceEditing').updateEditorData();`
I got error: `error TS2339: Property 'updateEditorData' does not exist on type 'PluginInterface'.`

When you are in SourceEditing mode, ngModel should be updated with click on button `UPDATE SOURCE`, but it isn't (Browser freeze)
