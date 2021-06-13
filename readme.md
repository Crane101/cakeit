# <ins>Cake It Demo Project</ins>

## Outstanding ToDos:

### Features
- Cakes list pagination / infinite scroll
- Sort cakes by creation date
- sticky shrinking header on scroll
- Handle long cake names better
- Image preview on submit cake, block submission if not an image
- PWA
  - Service worker setup
  - Cakes list / items caching
  - Background sync for submit cake
  - Push notifications on new cake
  - Image upload / capture

### Non Functional
- Unit tests
- Automation tests
- Request Logging
- [WEB] Consider splitting the .NET api integration code into a services layer/folder
- Neaten up the SVGs
- Refactor palette, lose the horrible green
- Implement a proper client side validation framework
- [Web] automate content type header injection & response handling based on method?
- Type verificastion in api routes for ICake objects

### Bugs
- Delete on non existant cake ID returns ok
- max results on get cakes does not appear to work

### Infra
- BE authentication
- Response caching in CF
- VPC
