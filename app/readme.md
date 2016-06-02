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
- It's a bad practice to put DOM manipulative expressions inside a controller due to the fact that those processes typically require an entire search of the DOM. This can be shortened easily by isolating the search the by placing this functionality inside a directive. Step in "Link"!. Link can take the parameters "element, scope, attrs".  "Element" refers to the outtermost element defined in the directive template. "Attrs" refers to the attributes within that outtermost element, and can be references as "attrs.header" for example.
- "Strict Contextual Escaping" Service ~
