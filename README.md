# Deno Presentation Project

This project is a demonstration of Deno, the secure runtime for JavaScript and TypeScript.

## About Deno

Deno is a modern runtime for JavaScript and TypeScript that uses V8 and is built in Rust. It was created by Ryan Dahl, who also created Node.js. Deno aims to provide a productive and secure scripting environment for the modern programmer.

Key features of Deno:

- Secure by default - no file, network, or environment access unless explicitly enabled
- Supports TypeScript out of the box
- Ships a single executable (`deno`)
- Has built-in development tools
- Has a standard library reviewed by the Deno team

## Prerequisites

To run this project, you need to have Deno installed on your system.

### Installing Deno

#### Windows (PowerShell)

```powershell
irm https://deno.land/install.ps1 | iex
```

#### macOS/Linux (Shell)

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

## Getting Started

1. Clone this repository
2. Navigate to the project directory
3. Run the project using:

```bash
deno run --allow-net --allow-read server.ts
deno run --allow-net --allow-read api.ts
```

4. The application will be available at:
   - Main application: http://localhost:8081
   - API endpoints: http://localhost:8000

## Project Structure

- `server.ts` - Main server file that handles the HTTP server setup
- `api.ts` - API endpoints and route handlers
- `index.html` - Main presentation page
- `todo.html` - Todo application demonstration
- `static/` - Directory containing static assets
- `deno.lock` - Lock file for dependencies

## Features

- TypeScript support
- Modern JavaScript features
- Secure runtime environment
- Built-in testing capabilities
- Standard library support

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Committing your changes
4. Opening a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Resources

- [Official Deno Documentation](https://deno.land/manual)
- [Deno Standard Library](https://deno.land/std)
- [Deno Third Party Modules](https://deno.land/x)
