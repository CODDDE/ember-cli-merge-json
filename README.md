# ember-cli-merge-json

Add `broccoli-merge-json` to your ember-cli pipeline.

## Installation
```
ember install ember-cli-merge-json
```

## Usage

You can configure the source and destination path of your json files
from `ember-cli-build` file as the following:

```
ENV['ember-cli-merge-json'] = {
  srcDir: '/languages',
  destDir: '/assets/languages' 
}
```

Plugin can be disabled if desired with:

```
ENV['ember-cli-merge-json'] = {
  enable: false
}
```


Given the aforementioned configuration and `language` folder with the following content:
```
├─┬ languages
├── excluded_file.json
  └─┬ en
    ├── index.json
    ├── global.json
    ├── header.json
    ├── components.json
    └─┬ components
      ├── modal-dialog.json
      └── date-selector.json
```

this plugin will generate a `en.json` file inside the `dist/assets/languages` directory
with the following content:

```js
{
  // contents of index.json 
  "global": {
    //contents of global.json
  },
  "header": {
    //contents of header.json
  },
  "components": {
    //contents of components.json
    "modalDialog": {
      //contents of modal-dialog.json
    },
    "dateSelector": {
      //contents of date-select.json
    }
  }
}
```

**Note** that file stored at the first level of `srcDir` are ignored.


# Contribute
## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-merge-json`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
