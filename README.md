# Dynamic DB Forms

Sample app for dynamic forms driven by a MySQL database

## Models

### Field

```
id - integer (pk)
label - string
type - string
order - integer
required - boolean
active - boolean
```

### Value

```
id - integer (pk)
fieldId - integer (fk)
label - string
value - string
```

### Response

```
id - integer (pk)
fieldId - integer (fk)
username - string
value - string
```
