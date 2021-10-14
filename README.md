
# json-spot

Create a sample API for your projects due to your need easily.

## Usage/Examples

First install the package globally:
```bash
npm i -g json-spot
```

Next, create `db.json` in the root of your project containing API sample data:
```json
{
    "posts": [
        {
            "id": 1,
            "title": "Title 1"
        },
        {
            "id": 2,
            "title": "Title 2"
        },
        .
        .
        .
    ]
}
```
*A sample file is witihin `samples/` folder.*


Then, use `json-spot` command for running the API:
```bash
json-spot --db <FILENAME> --port <PORT_NUMBER>
```
The default of `<FILENAME>` and `<PORT_NUMBER>` options are `db.json` and `4000`. So if these values satisfy you, you can leave them blank.

Now, open your browser and enter the address below:
```bash
localhost:4000
```

Congratulation! Your API is ready!

## License

[MIT](https://choosealicense.com/licenses/mit/)
