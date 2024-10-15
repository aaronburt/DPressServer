# DPress

The `DPress` class is a simple web server framework inspired by Express.js. It allows defining routes for different HTTP methods and handling requests.

## Properties

### `routes`

- **Type:** `{ [method: string]: { [path: string]: (_req: Request) => Response } }`
- **Description:** A dictionary that stores the routes for different HTTP methods. Each method maps to an object where paths are keys and their corresponding request handler functions are values.

## Methods

### `assign(method: string, path: string, func: (_req: Request) => Response)`

- **Parameters:**
  - `method`: The HTTP method (e.g., GET, POST) to associate with the route.
  - `path`: The path of the route.
  - `func`: The function to handle requests to the specified path.
- **Description:** Assigns a request handler function to a specific HTTP method and path. This method is private and used internally.

### `get(path: string, func: (_req: Request) => Response)`

- **Parameters:**
  - `path`: The path for the GET request.
  - `func`: The function to handle GET requests to the specified path.
- **Description:** Defines a route for handling GET requests.

### `post(path: string, func: (_req: Request) => Response)`

- **Parameters:**
  - `path`: The path for the POST request.
  - `func`: The function to handle POST requests to the specified path.
- **Description:** Defines a route for handling POST requests.

### `delete(path: string, func: (_req: Request) => Response)`

- **Parameters:**
  - `path`: The path for the DELETE request.
  - `func`: The function to handle DELETE requests to the specified path.
- **Description:** Defines a route for handling DELETE requests.

### `options(path: string, func: (_req: Request) => Response)`

- **Parameters:**
  - `path`: The path for the OPTIONS request.
  - `func`: The function to handle OPTIONS requests to the specified path.
- **Description:** Defines a route for handling OPTIONS requests.

### `listen(port: number)`

- **Parameters:**
  - `port`: The port number on which the server should listen for incoming requests.
- **Description:** Starts a DENO server on the specified port and listens for incoming requests. It checks the request method and path against the defined routes and invokes the corresponding handler function. If no matching route is found, it returns a 404 Not Found response.

## Contributing

Pull requests are welcome and appreciated! If you have suggestions for improvements or new features, please feel free to submit a pull request to enhance the `DPress` class.
