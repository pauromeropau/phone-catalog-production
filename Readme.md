### 📱 ✨ The smartphone's boutique (Phone Catalogue) ✨ 📱

### WHAT IS IT?

"The smartphone's boutique" is an online and sofisticated technology shop. Sofisticated because they just sell 8 smartphones.
<br>
This is part of the idea of creating a website with meaning, or some UX. It's provided a JSON file for doing this test.
Itself, it's meaningless. I mean, just info. So I had the idea of creating a small boutique and not simply develope a website that renders a JSON file.

### AÑADIR AQUI GIFs

### TECH STACK

React/Redux, Hooks, Node, Express, Axios, Docker and Jest

### UX/UI

As I mentioned before, this website has been given the appearance of an online store. It is easy to use and intuitive. For this, a simple and clean interface has been developed. We do not want customers to run away from our website!

### HOW TO RUN

```
docker-compose up
```

#### Server side

Run without Docker:

```
cd server/
npm i
npm start
```

#### Client side

Run without Docker:

```
cd client/
npm i
npm start
```

... and go to

```
http://localhost:3000/
```

Run tests:

```
npm test
```

#### Global .env

```
REACT_APP_PORT=3000
APP_SERVER_PORT=5000
API_HOST=http://localhost:3000
```

#### ./server .env

```
ENV=development
PORT=5000
```

### DONE

- Public repo
- REST API: 1 endpoint, returns 'phones.json'
- Fetch data with Redux and Axios (or similar)
- Display initial list with all phones
- Render phone details when clicked
- Responsive design
- Display spinner while request
- Add readme that explains how to run
- Dockerize

### TO DO

- Write realistic unit/end-to-end tests

#### Author

👩🏼‍💻 Paula Romero Armas<br>
👤 [LinkedIn](https://www.linkedin.com/in/pauromeropau/)<br>
📩 pauromeropau@gmail.com<br>
📍 Madrid, Spain.
