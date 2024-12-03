import { Hono } from "hono";
import quotes from "./other/quotes";

const routes = new Hono()

routes.route('/quotes', quotes)

export default routes