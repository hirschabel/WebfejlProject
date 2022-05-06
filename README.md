# WebfejlProject

- Adatmodellek: (shared/models/)
  - Category
  - Item
  - Post
  - User

- Attribútúm direktíva:
  - ngClass (pages/forum/forum.component.html)
  - ngStyle (pages/main/main.component.html)

- Strukturális direktíva:
  - ngFor (pages/main/main.component.html)
  - ngIf (shared/menu/menu.component.html)

- CRUD:
  - user (shared/services/user.service.ts)

- 2 komplex Firestore lekérdezés:
  - rendezés (shared/services/main.service.ts 19 | 23 .sor)

- Pipe:
  - írás (shared/pipes/date.pipe.ts)
  - használat (pages/forum/forum.component.html)

- Input / Output:
  - @Input (pages/main/image-viewer/image-viewer.component.ts)
  - @Output NINCS

- Lifecycle hook:
  - ngOnInit() (pages/forum/forum.component.tx)
  - ngOnChanges() (pages/forum/forum.component.tx)

- Adatbevitel
  - (pages/forum/forum.component.html)
  - (pages/signup/signup.component.html)
