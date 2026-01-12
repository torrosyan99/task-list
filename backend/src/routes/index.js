import {Router} from 'express';
import {userRoutes} from "#src/modules/user/user.routes.js";
import {listRoutes} from "#src/modules/list/list.routes.js";
const router = new Router();

router.use(userRoutes.prefix, userRoutes.router);
router.use(listRoutes.prefix, listRoutes.router);

export default router;
