# useful-selectors

Atomic entity for managing local variables in immutable style

## createRef

```javascript
import createRef from "create-ref";

const val = createRef(0);
val.get(); // 0

val.set(prev => prev + 1);
val.get(); // 1
```
