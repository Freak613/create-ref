# create-ref

Atomic entity for managing local variables in immutable style

## Install

```bash
npm install create-ref-value
```

## createRef

```javascript
import createRef from "create-ref";

const val = createRef(0);
val.get(); // 0

val.set(prev => prev + 1);
val.get(); // 1
```
