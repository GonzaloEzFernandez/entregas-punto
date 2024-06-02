import { app } from "./src/app.js";
import { PORT } from "./src/config.js";
import route from "./src/routes/data.routes.js";

// midleware
app.use(route);

app.listen(PORT);

console.log(`Server on port ${PORT}`);
