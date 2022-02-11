# API

Note:

> The API stores all data in memory, restarting the API server will wipe all changes.

## Trackers API

A tracker model looks like this:

```ts
type Tracker = {
  id: number
  name: string 
  speaker: 'agent' | 'customer' | 'both'
  phrases: string[]
}
```

### Listing all trackers

```
GET /trackers
```

#### Query parameters:
- `limit`: number of trackers to fetch.
- `page`: paginated page to fetch.

Example:

```
GET /trackers?limit=10&page=2
```
This will get the second page with up to 10 trackers.

---

### Fetch a single tracker

```
GET /trackers/:id
```

---

### Create tracker
```
POST /trackers
```

---

### Update a tracker
```
PUT /trackers/:id
```

---

### Delete a tracker
```
DELETE /trackers/:id
```

---
## Dictionary API

### Check if 1-or-more words exist in dictionary

> This api is implemented with a fake dictionary and will always return `true` if a word consists of only  ASCII characters in the range `[a-zA-Z]`. If any other character is present in the word it will return `false`

```
GET /dictionary/has-words?word=hello&word=world!
```
__Response__
```json
{
  "hello": true,
  "world!": false // "!" is not in the range [a-zA-Z]
}
```