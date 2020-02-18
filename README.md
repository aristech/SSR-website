# SSR Website

Simple Server Side Rendered website using React, Next.js, Material UI

## Getting Started

Deploy project file on the server.
ssh in the project DIR

```
npm install
npm run build
npm run start
```

### Prerequisites

```
NODE
```

### Installing on localhost

cd into Project DIR

```
npm install
npm run dev
```
### Running on IIS 
```
https://dev.to/petereysermans/hosting-a-node-js-application-on-windows-with-iis-as-reverse-proxy-397b
```
Entry point is server.js

### Break down Project Files

```
├── next.config.js
├── package.json
├── package-lock.json
├── public
│   ├── apple-icon.png
│   ├── assets
│   │   ├── css
│   │   │   └── nprogress.css
│   │   ├── img
│   │   │   ├── faces/
│   │   │   ├── favicon.png
│   │   │   ├── flags/
│   │   ├── jss
│   │   │   ├── material-dashboard-pro-react
│   │   │   │   ├── buttonGroupStyle.js
│   │   │   │   ├── cardImagesStyles.js
│   │   │   │   ├── components
│   │   │   │   │   ├── accordionStyle.js
│   │   │   │   │   ├── adminNavbarLinksStyle.js
│   │   │   │   │   ├── adminNavbarStyle.js
│   │   │   │   │   ├── authNavbarStyle.js
│   │   │   │   │   ├── badgeStyle.js
│   │   │   │   │   ├── buttonStyle.js
│   │   │   │   │   ├── cardAvatarStyle.js
│   │   │   │   │   ├── cardBodyStyle.js
│   │   │   │   │   ├── cardFooterStyle.js
│   │   │   │   │   ├── cardHeaderStyle.js
│   │   │   │   │   ├── cardIconStyle.js
│   │   │   │   │   ├── cardStyle.js
│   │   │   │   │   ├── cardTextStyle.js
│   │   │   │   │   ├── customDropdownStyle.js
│   │   │   │   │   ├── customInputStyle.js
│   │   │   │   │   ├── customLinearProgressStyle.js
│   │   │   │   │   ├── customTabsStyle.js
│   │   │   │   │   ├── footerStyle.js
│   │   │   │   │   ├── headingStyle.js
│   │   │   │   │   ├── infoStyle.js
│   │   │   │   │   ├── instructionStyle.js
│   │   │   │   │   ├── navPillsStyle.js
│   │   │   │   │   ├── paginationStyle.js
│   │   │   │   │   ├── sidebarStyle.js
│   │   │   │   │   ├── snackbarContentStyle.js
│   │   │   │   │   ├── tasksStyle.js
│   │   │   │   │   ├── timelineStyle.js
│   │   │   │   │   └── wizardStyle.js
│   │   │   │   ├── customCheckboxRadioSwitch.js
│   │   │   │   ├── customSelectStyle.js
│   │   │   │   ├── hoverCardStyle.js
│   │   │   │   ├── layouts
│   │   │   │   │   ├── adminStyle.js
│   │   │   │   │   ├── authStyle.js
│   │   │   │   │   └── rtlStyle.js
│   │   │   │   ├── modalStyle.js
│   │   │   │   └── views
│   │   │   │       ├── buttonsStyle.js
│   │   │   │       ├── chartsStyle.js
│   │   │   │       ├── dashboardStyle.js
│   │   │   │       ├── errorPageStyles.js
│   │   │   │       ├── extendedFormsStyle.js
│   │   │   │       ├── extendedTablesStyle.js
│   │   │   │       ├── gridSystemStyle.js
│   │   │   │       ├── iconsStyle.js
│   │   │   │       ├── lockScreenPageStyle.js
│   │   │   │       ├── loginPageStyle.js
│   │   │   │       ├── notificationsStyle.js
│   │   │   │       ├── pricingPageStyle.js
│   │   │   │       ├── registerPageStyle.js
│   │   │   │       ├── regularFormsStyle.js
│   │   │   │       ├── sweetAlertStyle.js
│   │   │   │       ├── userProfileStyles.js
│   │   │   │       └── validationFormsStyle.js
│   │   │   └── material-dashboard-pro-react.js
│   │   └── scss
│   │       ├── material-dashboard-pro-react
│   │       │   ├── _colors.scss
│   │       │   ├── _fileupload.scss
│   │       │   ├── _fixed-plugin.scss
│   │       │   ├── _misc.scss
│   │       │   ├── mixins
│   │       │   │   ├── _chartist.scss
│   │       │   │   ├── _sidebar-color.scss
│   │       │   │   ├── _transparency.scss
│   │       │   │   └── _vendor-prefixes.scss
│   │       │   ├── _mixins.scss
│   │       │   ├── plugins
│   │       │   │   ├── _plugin-nouislider.scss
│   │       │   │   ├── _plugin-perfect-scrollbar.scss
│   │       │   │   ├── _plugin-react-big-calendar.scss
│   │       │   │   ├── _plugin-react-bootstrap-sweetalert.scss
│   │       │   │   ├── _plugin-react-chartist.scss
│   │       │   │   ├── _plugin-react-datetime.scss
│   │       │   │   ├── _plugin-react-jvectormap.scss
│   │       │   │   ├── _plugin-react-table.scss
│   │       │   │   └── _plugin-react-tagsinput.scss
│   │       │   ├── _shadows.scss
│   │       │   └── _variables.scss
│   │       └── material-dashboard-pro-react.scss
│   ├── favicon.ico
│   ├── manifest.json
│   └── static
│       └── img
├── README.md
├── server.js
└── src
    ├── AppProvider.js
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.js
    │   ├── AppHead.js
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── CardAvatar.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   ├── CardHeader.js
    │   │   ├── CardIcon.js
    │   │   ├── Card.js
    │   │   └── CardText.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── CustomUpload
    │   │   ├── ImageUpload.js
    │   │   └── PictureUpload.js
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Heading
    │   │   └── Heading.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── Instruction
    │   │   └── Instruction.js
    │   ├── modals
    │   │   ├── Delete.js
    │   │   └── VcfExport.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   ├── AdminNavbarLinks.js
    │   │   └── AuthNavbar.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Sidebar
    │   │   └── Sidebar.js
    │   ├── Snackbar
    │   │   ├── SnackbarContent.js
    │   │   ├── Snackbar.js
    │   │   └── Snack.js
    │   ├── Snack.js
    │   ├── Tasks
    │   │   └── Tasks.js
    │   ├── Timeline
    │   │   └── Timeline.js
    │   ├── Typography
    │   │   ├── Info.js
    │   │   ├── Muted.js
    │   │   ├── Primary.js
    │   │   ├── Quote.js
    │   │   ├── Success.js
    │   │   └── Warning.js
    │   └── Wizard
    │       └── Wizard.js
    ├── config.js
    ├── getPageContext.js
    ├── layouts
    │   ├── Admin.js
    │   ├── Auth.js
    │   └── RTL.js
    ├── pages
    │   ├── _app.js
    │   ├── auth.js
    │   ├── _document.js
    │   ├── _error.js
    │   └── index.js
    ├── PageWrapper.js
    ├── variables
    │   ├── charts.js
    │   └── general.js
    └── views
        ├── Components
        │   ├── Buttons.js
        │   ├── GridSystem.js
        │   ├── Icons.js
        │   ├── Notifications.js
        │   ├── Panels.js
        │   ├── SweetAlert.js
        │   └── Typography.js
        ├── Forms
        │   ├── ExtendedForms.js
        │   ├── RegularForms.js
        │   ├── ValidationForms.js
        │   ├── Wizard.js
        │   └── WizardSteps
        │       ├── Step1.js
        │       ├── Step2.js
        │       └── Step3.js
        ├── Pages
        │   ├── ErrorPage.js
        │   ├── LockScreenPage.js
        │   ├── LoginPage.js
        │   ├── PricingPage.js
        │   └── RegisterPage.js
        └── Widgets
            └── Widgets.js

```

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - The javascript framework used
- [Nextjs](https://nextjs.org/docs/getting-started) - SSR framework used
- [Material UI](https://material-ui.com/getting-started/installation/) - Used to generate Styles
