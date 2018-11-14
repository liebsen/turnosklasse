# jetsbooking-web

### Jetsbooking web app.
* Lightweight
* Only Vue dependencies
* Bundled!
* An Overlemon project

![image](https://jetsbooking.herokuapp.com/static/img/isologo_jetsbooking.png)
> Changing the way you fly

## Demo
[https://jetsbooking.herokuapp.com](https://jetsbooking.herokuapp.com)

## Usage
### Components

| Route          | Description                                      | Component   |
|:---------------|:-------------------------------------------------|:------------|
| /              | Displays & handles basic search                  | JetsBooking |
| /flights       | Display & handles search results with filters    | Flights     |
| /terms         | Display JetsBooking's Terms & Conditions         | Terms       |
| /privacy       | Display JetsBooking's Privacy Policy             | Privacy     |
| /offers        | Displays JetsBooking's offers					| Offers      |
| /contact       | Displays & handles JetsBooking's contact form    | Contact     |
| /account 		 | Todo. Hanldes user flights and preferences       | Account     |
| * 			 | Displays 404 Not Found page                      | NotFound    |

### Custom Components

| Component       | Description                                |  Parameters           |
|:----------------|:-----------------------------------------|:------------------------|
| Helper          | Handles api calls & settings             | key                     |
| Words           | Translates into different languages      | language                |
| Passengerpicker | Handles passengers selection             | adults,children,infants |
| Snackbar        | Shows toast notification                 | text                    |

### Events

| Name             | Description                                   | Component       |  Parameters              |
|:-----------------|:----------------------------------------------|:----------------|:-------------------------|
| languagechanged  | triggers when the user change language        | Words           | language                 |
| storagechanged   | triggers when storage updates                 | Vue create      | language                 |
| passengerchanged | triggers when user selects passengers flight  | Passengerpicker | adults,children, infants |

## Build Setup
### install dependencies
```bash
$ npm install
```

### serve with hot reload at localhost:8080
```bash
npm run dev
```

### build for production with minification
```bash
npm run build
```

### build for production and view the bundle analyzer report
```bash
npm run build --report
```

### start serving static pages, for builing static html pages with hot reload
```bash
npm run static
```

### start serving static pages for production
```bash
node server
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License
vue-datepicker-local is licensed under [The MIT License](LICENSE).