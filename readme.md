# Staying Sharp with Angular from CodeSchool.  

[Code School] (http://codeschool.com) course on [Angular.js](https://angularjs.org/).

## Description

- This is my second practice app from Code School.  The goal is to document lessons learned along the way, annoted here in the readme for later reference.

- This App explores the utilization of ngRouting instead of using ui-router.  Due to the diversity in application of ui-router, I won't be using ngRouting after this app, but having the ability to using native routing is obviously necessary to have a proper understanding of Angular's vanilla capabilities.  

### Lessons learned
#### Isolate Scope & $scope
- "Isolate Scope" : By instantiating "scope : {}" within a directive or controller, you are separating that scope from it's parent. This can be useful for whenever you want unique identifier declared inside an ng-repeat.

- "scope" : Allows you to create an isolate scope private to this directive.

- "$scope" : Allows you to set values as properties on our $scope object.

#### Link
- "Link" is a function that runs after the directive has been compiled by Angular and synched up with the module.  It's a great place to do DOM manipulation needed for elements attached to your controller.

- It's a bad practice to put DOM manipulative expressions inside a controller due to the fact that those processes typically require an entire search of the DOM. This can be shortened easily by isolating the search by placing this functionality inside a directive. Step in "Link"!. Link can take the parameters "element, scope, attrs".  "Element" refers to the outter most element defined in the directive template. "Attrs" refers to the attributes within that outter most element, and can be references as "attrs.header" for example.

- Angular does not have the capability to render HTML that's passed into {{}}.  To accomplish this, we can use "markdown.js" from a vendor, include it in our script tags, then instantiate it inside our directive as such inside our Link(): "scope.body = markdown.toHTML(scope.body)".  This will parse the HTML correctly, however this still won't allow the html elements to render as we expect.  To accomplish this, we must tell angular it's safe to render the elements using ngBindHTML & $sce...

- ngBindHTML is an attribute insertion: ng-bind-html='body'.  This replaces something like '<attribute>{{body}}</attribute>'.  Now we use $sce...

- $sce = "Strict Contextual Escaping" Service.  Tells angular that it's ok to trust this HTML and that it does not need to "escape" the job of rendering this HTML.  So, angular renders it.  invoked as : '$sce.trustAsHtml(markdown.toHTML(scope.body))';
