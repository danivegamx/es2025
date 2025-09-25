# es2025
### es2025 demos para j4Guanatos Septiembre 2025

##### Demos incluidas (carpetas dentro del ZIP)

- json_modules

   - feature-flags.json
   - app.mjs
   - ui-beta.mjs
   - ui-estable.mjs

	**Idea**: feature flags con JSON modules y carga condicional por atributo with `{ type: 'json' }`.

- iterator_helpers/

    - app.mjs

   **Idea**: procesar un flujo de líneas (logs) con `Iterator.from(...).filter().drop().take().map().toArray()`.

- set_methods/

  - app
  - app2.mjs

  **Idea**: operaciones y relaciones de `Set` (_union, intersection, difference, symmetricDifference, subset/superset/disjoint_).

- regex/

  - app

  **Idea**: búsquedas seguras con `RegExp.escape()`.

- promise_try/

  - app.mjs

  **Idea**: unificar orígenes _sync/async_ con `Promise.try` para pipelines.

- float16/

  - app.mjs
 
	**Idea**: uso de float16 y mejoras avanzadas de `RegExp`.

##### Cómo ejecutar las demos

> Requisito sugerido: Node.js 24+ (o Deno/Bun recientes).

En cada carpeta, corre el archivo principal, por ejemplo:

```shell
$ cd json_modules && node app.mjs

$ cd iterator_helpers && node app.mjs

$ cd set_methods && node app.mjs

$ cd regex && node app.mjs "producto.(premium)?"

$ cd promise_try && node app.mjs # (o node app.mjs fail)
```
